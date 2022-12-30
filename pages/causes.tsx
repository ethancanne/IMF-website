import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Header from '../layout/header/Header.layout';
type Props = {};

const Causes = ({}: Props) => {
  return (
    <Page isSubPage={true} title="Causes" image="/img/causes-header.jpeg">
      <div></div>
    </Page>
  );
};

export default Causes;
