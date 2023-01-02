import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import CausesView from '../views/causes/Causes.view';
import causes from '../cms/data/content/causes.json';
type Props = {};

const Causes = ({}: Props) => {
  return (
    <Page isSubPage={true} title="Causes" image={causes.bannerImage}>
      <CausesView />
    </Page>
  );
};

export default Causes;
