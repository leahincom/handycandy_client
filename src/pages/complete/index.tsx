import Image from 'next/image';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import Body, { BodyProps } from '../../components/complete/Body';
import Banner from '../../components/complete/Banner';
import Emoticon, { EmoticonProps } from '../../components/complete/Body/Emoticon';
import Diary from '../../components/complete/Body/Diary';

const Wrapper = styled.div`
  /* position: relative; */
  /* width: 100vw; */
  /* height: 100vh; */
`;

const BannerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

export interface CompleteProps extends BodyProps, EmoticonProps {}

export default function Complete({ candy, date, desc, info, link }: CompleteProps) {
  return (
    <Wrapper>
      <ReactFullpage
        verticalCentered={false}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {/* 위의 fullpagewrapper가 100vh 영역을 차지해서, 아래 화살표를 넣어도 다음 슬라이드에 위치하게 됨. 그렇다고 calc로 사이즈 조절도 되지 않음 ㅠㅠ */}
              <Body candy={candy} date={date} desc={desc} info={info} link={link} fullpageApi={fullpageApi} />

              <Emoticon candy={candy} fullpageApi={fullpageApi} />

              <Diary />
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <BannerWrapper>
        <Banner />
      </BannerWrapper>
    </Wrapper>
  );
}
