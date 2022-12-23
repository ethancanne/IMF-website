import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Header from '../layout/header/Header.layout';
type Props = {};

const AboutUs = ({}: Props) => {
  return (
    <Page>
      <Header title="About Us" isSubPage={true} />
    </Page>
  );
};

export default AboutUs;
