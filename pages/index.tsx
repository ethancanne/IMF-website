import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Header from '../layout/header/Header.layout';
type Props = {};

const index = ({}: Props) => {
  return (
    <Page>
      <Header
        title="Together We Can Change The Lives Of The People Of Northwest Haiti"
        subTitle="We are challenged to show the love of God in tangible ways, not in word only. God can use you to change the lives of the Haitian people through His love."
        donate={true}
        image="/img/home-header.jpeg"
      />
    </Page>
  );
};

export default index;
