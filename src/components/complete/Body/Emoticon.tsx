import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { BottomArrow } from '../../../../public/assets/icons';

const Container = styled.div`
  padding-top: 77px;
  padding-left: 240px;
`;

const CandyTitle = styled.h1`
  padding-left: 5px;
  line-height: 135%;
  font-family: Roboto;
  font-size: 44px;
  font-weight: 400;
  font-style: normal;
`;

const Underlined = styled.span<{ style?: any }>`
  border-bottom: 1px solid var(--gray-7);
  padding-bottom: 1px;
  width: fit-content;
`;

const Desc = styled.p`
  margin-top: 21px;
  line-height: 36.4px;
  color: var(--gray-6);
  font-family: Roboto;
  font-size: 26px;
  font-weight: 400;
`;

const EmoticonArea = styled.div`
  margin-top: 25px;
  border-radius: 20px;
  background-color: var(--bg);
  max-width: 1439px;
  height: 246px;
`;

// const SlideButton = styled(Image)`
//   position: absolute;
//   bottom: 45px;
//   left: 50%;
//   cursor: pointer;
//   translate: (-50%);
// `;

export interface EmoticonProps {
  candy: string;
}

export default function Emoticon({ candy }: EmoticonProps) {
  return (
    <Container>
      <CandyTitle>
        오늘 <Underlined style={{ fontWeight: '700' }}>{candy}</Underlined>을 주며
        <br />
        기분이 전환됐나요?
      </CandyTitle>
      <Desc>오늘의 감정을 이모티콘으로 남겨보세요.</Desc>
      <EmoticonArea></EmoticonArea>
      {/* <SlideButton src={BottomArrow} /> */}
    </Container>
  );
}
