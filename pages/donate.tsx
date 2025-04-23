import Page from '../layout/page/Page.layout';
import donate from '../cms/data/content/donate.json';
import DonateView from '../views/donate/donateView.view';
type Props = {};

const Donate = ({}: Props) => {
  return (
    <Page isSubPage={true} title="Donate">
      <DonateView />
    </Page>
  );
};

export default Donate;
