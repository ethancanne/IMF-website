import Page from '../layout/page/Page.layout';
import donate from '../cms/data/content/donate.json';
import DonateView from '../views/donate/DonateView.view';
type Props = {};

const Donate = ({}: Props) => {
  return (
    <Page isSubPage={true} title="Donate" image={donate.bannerImage}>
      <DonateView />
    </Page>
  );
};

export default Donate;
