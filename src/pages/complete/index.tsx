import Image from 'next/image';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import Body, { BodyProps } from '../../components/complete/Body';
import Banner from '../../components/complete/Banner';
import Emoticon, { EmoticonProps } from '../../components/complete/Body/Emoticon';
import Diary from '../../components/complete/Body/Diary';
import { BottomArrow } from '../../../public/assets/icons';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const SlideButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 45px;
  justify-content: center;
  width: 100%;
`;

const SlideButton = styled(Image)`
  cursor: pointer;
`;

export interface CompleteProps extends BodyProps, EmoticonProps {}

export default function Complete({ candy, date, desc, info, link }: CompleteProps) {
  return (
    <Wrapper>
      <Banner />
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
      {/* 여기 버튼 넣으면 위치는 잘 오는데, fullpageApi.moveDown() 어쩌구 메소드를 쓰지 못함 */}
    </Wrapper>
  );
}
