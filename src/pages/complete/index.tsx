import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import Body, { BodyProps } from '../../components/complete/Body';
import Banner, { BannerProps } from '../../components/complete/Banner';
import Emoticon, { EmoticonProps } from '../../components/complete/Body/Emoticon';
import Diary from '../../components/complete/Body/Diary';

const BannerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export interface CompleteProps extends BodyProps, EmoticonProps, BannerProps {}

export default function Complete({ candy, date, desc, info, link, bannerTitle, bannerDesc }: CompleteProps) {
  return (
    <>
      <ReactFullpage
        verticalCentered={false}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Body candy={candy} date={date} desc={desc} info={info} link={link} fullpageApi={fullpageApi} />
              <Emoticon candy={candy} fullpageApi={fullpageApi} />
              <Diary />
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <BannerWrapper>
        <Banner bannerTitle={bannerTitle} bannerDesc={bannerDesc} />
      </BannerWrapper>
    </>
  );
}
