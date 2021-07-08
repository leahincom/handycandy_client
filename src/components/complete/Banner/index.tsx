import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 10;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--peach);
  width: 100vw;
  height: 286px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 98px 240px 104px;
`;

const Title = styled.h1`
  line-height: 135%;
  color: var(--black);
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 44px;
  font-weight: 800;
`;

const Desc = styled.h2`
  margin-top: 6px;
  line-height: 28px;
  color: #919191;
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
`;

export default function Banner() {
  return (
    <Container>
      <Contents>
        <Title>캔디로 보상완료하기</Title>
        <Desc>나에게 캔디를 주며 일상의 달콤한 순간을 되찾으세요</Desc>
      </Contents>
    </Container>
  );
}
