import Image from 'next/image';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import Body, { BodyProps } from '../../components/complete/Body';
import Banner from '../../components/complete/Banner';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export interface CompleteProps extends BodyProps {}

export default function Complete({ candy, date, desc, location }: CompleteProps) {
  return (
    <Wrapper>
      <Banner />
      <Body candy={candy} date={date} desc={desc} location={location} />
      {/* <ReactFullpage
        render={() => {
          return <ReactFullpage.Wrapper></ReactFullpage.Wrapper>;
        }}
      /> */}
    </Wrapper>
  );
}
