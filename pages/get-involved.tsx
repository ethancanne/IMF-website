import { useEffect, useRef, useState } from 'react';
import Page from '../layout/page/Page.layout';
type Props = {};

const GetInvolved = ({}: Props) => {
  return (
    <Page
      isSubPage={true}
      title="Get Involved"
      image="/img/get-involved-header.jpeg"
    >
      <div></div>
    </Page>
  );
};

export default GetInvolved;
