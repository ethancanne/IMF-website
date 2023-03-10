import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Header from '../layout/header/Header.layout';
import Intro from '../views/aboutUs/intro/Intro.view';
import History from '../views/aboutUs/history/History.view';
import MapCampus from '../views/aboutUs/mapCampus/MapCampus.view';
import Missionaries from '../views/aboutUs/missionaries/Missionaries.view';
import BoardOfDirectors from '../views/aboutUs/boardOfDirectors/BoardOfDirectors.view';
import EnabledToDo from '../views/aboutUs/enabledToDo/EnabledToDo.view';
import aboutUs from '../cms/data/content/aboutUs.json';
type Props = {};

const AboutUs = ({}: Props) => {
  return (
    <Page isSubPage={true} title="About Us" image={aboutUs.bannerImage}>
      <Intro />
      <History />
      <MapCampus />
      <Missionaries />
      <BoardOfDirectors />
      <EnabledToDo />
    </Page>
  );
};

export default AboutUs;
