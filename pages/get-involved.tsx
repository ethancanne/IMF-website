import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
import Ministries from '../views/getInvolved/ministries/Ministries.view';
import HelpAreas from '../views/getInvolved/helpAreas/HelpAreas.view';
import MissionTeamVisits from '../views/getInvolved/missionTeamVisits/MissionTeamVisits.view';
import getInvolved from '../cms/data/content/getInvolved.json';
import MissionTrips from '../views/getInvolved/missionTrips/MissionTrips.view';
type Props = {};

const GetInvolved = ({}: Props) => {
  return (
    <Page isSubPage={true} title="Get Involved" image={getInvolved.bannerImage}>
      <Ministries />
      <HelpAreas />
      <MissionTeamVisits />
      <MissionTrips />
    </Page>
  );
};

export default GetInvolved;
