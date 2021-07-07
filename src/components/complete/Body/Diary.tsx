import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

const Container = styled.div`
  padding-top: 77px;
  padding-left: 241px;
  height: 100%;
`;

const CandyTitle = styled.h1`
  padding-left: 5px;
  line-height: 135%;
  font-family: Roboto;
  font-size: 44px;
  font-weight: 400;
  font-style: normal;
`;

const Highlight = styled.span`
  font-weight: 700;
`;

const Underlined = styled.span<{ style?: any }>`
  border-bottom: 1px solid var(--gray-7);
  padding-bottom: 1px;
  width: fit-content;
`;

const DiaryArea = styled.textarea`
  margin-top: 24px;
  outline: none;
  border-radius: 20px;
  background-color: var(--bg);
  padding: 36px 34px;
  width: 1439px;
  height: 278px;
  resize: none;
  line-height: 36.4px;
  color: var(--black);
  font-family: Roboto;
  font-size: 26px;
  font-weight: 400;
  ::placeholder {
    color: var(--gray-5);
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 42px;
  width: 100%;
`;

export default function Diary() {
  return (
    <Container>
      <CandyTitle>
        <Highlight>
          오늘 전 <Underlined>귀여운 캔디 이모티콘</Underlined> 했어요.
        </Highlight>
        <br />
        행복해진 나의 기록을 더 남겨보세요
      </CandyTitle>
      <DiaryArea placeholder='오늘의 기록을 더 상세히 남겨요!' />
      <ButtonWrapper>
        <Button buttonColor='peach' size='md' text='완료하기' />
      </ButtonWrapper>
    </Container>
  );
}
