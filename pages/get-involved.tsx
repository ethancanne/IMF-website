import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Ministries from '../views/getInvolved/ministries/Ministries.view';
import HelpAreas from '../views/getInvolved/helpAreas/HelpAreas.view';
import MissionTeamVisits from '../views/getInvolved/missionTeamVisits/MissionTeamVisits.view';
import getInvolved from '../cms/data/content/getInvolved.json';
type Props = {};

const GetInvolved = ({}: Props) => {
  return (
    <Page isSubPage={true} title="Get Involved" image={getInvolved.bannerImage}>
      <Ministries />
      <HelpAreas />
      <MissionTeamVisits />
    </Page>
  );
};

export default GetInvolved;
