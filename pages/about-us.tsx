import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Header from '../layout/header/Header.layout';
type Props = {};

const AboutUs = ({}: Props) => {
  return (
    <Page isSubPage={true} title="About Us" image="/img/about-us-header.jpeg">
      <div></div>
    </Page>
  );
};

export default AboutUs;
