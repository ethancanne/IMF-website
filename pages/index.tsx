import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Intro from '../views/home/intro/Intro.view';
import Scripture from '../views/home/scripture/Scripture.view';
import Stat from '../views/home/stat/Stat.view';
import Feed from '../views/home/feed/Feed.view';
import home from '../cms/data/content/home.json';
type Props = {};

const index = ({}: Props) => {
  return (
    <Page
      isSubPage={false}
      title="Together We Can Change The Lives Of The People Of Northwest Haiti"
      subTitle="We are challenged to show the love of God in tangible ways, not in word only. God can use you to change the lives of the Haitian people through His love."
      image={home.bannerImage}
    >
      <Intro />
      <Stat />
      <Scripture />
      <Feed />
    </Page>
  );
};

export default index;
