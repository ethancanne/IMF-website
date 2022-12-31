import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import CausesView from '../views/causes/Causes.view';
type Props = {};

const Causes = ({}: Props) => {
  return (
    <Page isSubPage={true} title="Causes" image="/img/causes-header.jpeg">
      <CausesView />
    </Page>
  );
};

export default Causes;
