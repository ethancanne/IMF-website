import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCheck, FaHeart } from 'react-icons/fa';
import styles from './DonationSuccessModal.module.scss';

type ParticleShape = 'rect' | 'circle' | 'ribbon';

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  tiltAngle: number;
  tiltSpeed: number;
  shape: ParticleShape;
  opacity: number;
  decay: number;
  gravity: number;
  drag: number;
}

const CONFETTI_COLORS = [
  '#bc4e4e', // IMF Red
  '#5e6dbc', // IMF Blue
  '#f4b942', // Warm Gold
  '#2da46e', // Emerald
  '#ff7b7b', // Coral
  '#7c8ce8', // Periwinkle
  '#f78fb3', // Rose
];

const SHAPES: ParticleShape[] = ['rect', 'ribbon', 'circle'];

const DonationSuccessModal = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dismissedForCurrentQueryRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<ConfettiParticle[]>([]);
  const rafIdRef = useRef<number | null>(null);

  const startAnimationLoop = useCallback(() => {
    if (rafIdRef.current !== null) return;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        rafIdRef.current = null;
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        rafIdRef.current = null;
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vx *= p.drag;
        p.vy = p.vy * p.drag + p.gravity;
        p.x += p.vx + Math.sin(p.tiltAngle) * 0.7;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.tiltAngle += p.tiltSpeed;

        if (p.y > height * 0.72) {
          p.opacity -= p.decay * 1.8;
        } else {
          p.opacity -= p.decay * 0.35;
        }

        if (p.opacity <= 0 || p.y > height + 40) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;

        const flipScale = Math.cos(p.tiltAngle);
        if (p.shape === 'circle') {
          ctx.scale(1, Math.max(0.25, Math.abs(flipScale)));
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'ribbon') {
          ctx.scale(flipScale, 1);
          ctx.fillRect(-p.size * 0.3, -p.size * 0.9, p.size * 0.6, p.size * 1.8);
        } else {
          ctx.scale(flipScale, 1);
          ctx.fillRect(-p.size * 0.5, -p.size * 0.35, p.size, p.size * 0.7);
        }

        ctx.restore();
      }

      if (particles.length > 0) {
        rafIdRef.current = window.requestAnimationFrame(render);
      } else {
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = window.requestAnimationFrame(render);
  }, []);

  const launchConfetti = useCallback(
    (mini = false) => {
      if (typeof window === 'undefined') return;
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;

      const createBurst = (
        originX: number,
        originY: number,
        baseAngle: number,
        spread: number,
        count: number,
        minSpeed: number,
        maxSpeed: number
      ) => {
        for (let i = 0; i < count; i++) {
          const angle = baseAngle + (Math.random() - 0.5) * spread;
          const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
          particlesRef.current.push({
            x: originX,
            y: originY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 7 + Math.random() * 6,
            color:
              CONFETTI_COLORS[
                Math.floor(Math.random() * CONFETTI_COLORS.length)
              ],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.18,
            tiltAngle: Math.random() * Math.PI * 2,
            tiltSpeed: 0.08 + Math.random() * 0.14,
            shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
            opacity: 1,
            decay: 0.006 + Math.random() * 0.006,
            gravity: 0.28 + Math.random() * 0.12,
            drag: 0.982,
          });
        }
      };

      if (mini) {
        createBurst(
          width * 0.5,
          height * 0.38,
          -Math.PI / 2,
          Math.PI * 1.4,
          55,
          6,
          15
        );
      } else {
        // Left cannon
        createBurst(
          width * 0.12,
          height * 0.65,
          -Math.PI * 0.36,
          Math.PI * 0.38,
          65,
          13,
          25
        );
        // Right cannon
        createBurst(
          width * 0.88,
          height * 0.65,
          -Math.PI * 0.64,
          Math.PI * 0.38,
          65,
          13,
          25
        );
        // Center celebratory pop
        createBurst(
          width * 0.5,
          height * 0.35,
          -Math.PI * 0.5,
          Math.PI * 1.5,
          55,
          7,
          17
        );
      }

      startAnimationLoop();
    },
    [startAnimationLoop]
  );

  // Detect ?donated=true across any page
  useEffect(() => {
    if (!router.isReady) return;

    const donatedParam = Array.isArray(router.query.donated)
      ? router.query.donated[0]
      : router.query.donated;
    const isDonated = String(donatedParam || '').toLowerCase() === 'true';

    if (isDonated && !dismissedForCurrentQueryRef.current) {
      setIsOpen(true);
    } else if (!isDonated) {
      dismissedForCurrentQueryRef.current = false;
    }
  }, [router.isReady, router.query.donated]);

  const handleClose = useCallback(() => {
    dismissedForCurrentQueryRef.current = true;
    setIsOpen(false);

    if (router.query.donated !== undefined) {
      const nextQuery = { ...router.query };
      delete nextQuery.donated;
      router.replace(
        { pathname: router.pathname, query: nextQuery },
        undefined,
        { shallow: true, scroll: false }
      );
    }
  }, [router]);

  // Manage canvas sizing, confetti bursts, Escape key, and scroll lock while open
  useEffect(() => {
    if (!isOpen) {
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      particlesRef.current = [];
      return;
    }

    const syncCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    syncCanvasSize();
    window.addEventListener('resize', syncCanvasSize);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    // Initial burst + follow-up wave
    launchConfetti(false);
    const secondWaveTimer = window.setTimeout(() => {
      launchConfetti(true);
    }, 420);

    return () => {
      window.removeEventListener('resize', syncCanvasSize);
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(secondWaveTimer);
      document.body.style.overflow = previousOverflow;
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      particlesRef.current = [];
    };
  }, [isOpen, launchConfetti, handleClose]);

  return (
    <>
      {isOpen && (
        <canvas
          ref={canvasRef}
          className={styles.confettiCanvas}
          aria-hidden="true"
        />
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="donation-success-modal"
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="donation-success-title"
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{
                type: 'spring',
                stiffness: 340,
                damping: 26,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Close thank you message"
              >
                <AiOutlineClose />
              </button>

              <motion.div
                className={styles.iconBadge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 18,
                  delay: 0.08,
                }}
                whileTap={{ scale: 0.92 }}
                onClick={() => launchConfetti(true)}
                title="Celebrate!"
              >
                <FaHeart className={styles.heartIcon} />
                <span className={styles.checkBadge}>
                  <FaCheck />
                </span>
              </motion.div>

              <div className={styles.statusPill}>
                <FaCheck size={11} />
                <span>Donation Successful</span>
              </div>

              <h2 id="donation-success-title" className={styles.title}>
                Thank You for Your Generosity!
              </h2>

              <p className={styles.message}>
                Your gift has been received! Thank you so much for partnering
                with International Missionary Fellowship to bring healthcare,
                hope, and the love of God to the people of Northwest Haiti.
              </p>

              <p className={styles.receiptNote}>
                A confirmation receipt for your donation will be sent to your
                email shortly.
              </p>

              <button
                type="button"
                className={styles.primaryButton}
                onClick={handleClose}
              >
                Continue to Website
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DonationSuccessModal;
