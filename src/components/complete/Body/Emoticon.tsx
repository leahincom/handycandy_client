import React from 'react';
import styled from 'styled-components';
import { fullpageApi } from '@fullpage/react-fullpage';

import DownArrowButton from './DownArrowButton';

const Container = styled.div`
  position: relative;
  padding: 368px 241px 0px 241px; ;
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

export interface EmoticonProps {
  candy: string;
  fullpageApi: fullpageApi;
}

export default function Emoticon({ candy = '필보이드 핸드크림', fullpageApi }: EmoticonProps) {
  return (
    <Container className='section'>
      <CandyTitle>
        오늘 <Underlined style={{ fontWeight: '700' }}>{candy}</Underlined>을 주며
        <br />
        기분이 전환됐나요?
      </CandyTitle>
      <Desc>오늘의 감정을 이모티콘으로 남겨보세요.</Desc>
      <EmoticonArea />
      <DownArrowButton onClick={fullpageApi?.moveSectionDown} />
    </Container>
  );
}
