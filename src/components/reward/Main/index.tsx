import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import Body, { BodyProps } from '../Body';
import RewardBanner, { RewardBannerProps } from '../Banner';
import Emoticon, { EmoticonProps } from '../Body/Emoticon';
import Diary from '../Body/Diary';

const BannerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export interface RewardMainProps extends BodyProps, EmoticonProps, RewardBannerProps {}

export default function RewardMain({ candy, date, desc, info, link, bannerTitle, bannerDesc }: RewardMainProps) {
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
        <RewardBanner bannerTitle={bannerTitle} bannerDesc={bannerDesc} />
      </BannerWrapper>
    </>
  );
}
