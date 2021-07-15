import { useAtom } from 'jotai';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { CheckedEmoticon, RewardModalAtom } from '../../../states';
import Button from '../../common/Button';
import { EmoticonList } from './Emoticon';

const Container = styled.div`
  padding: 368px 241px 0px 241px;
`;

const CandyTitle = styled.h1`
  padding-left: 5px;
  line-height: 135%;
  font-family: Roboto;
  font-size: 44px;
  font-weight: 400;
  font-style: normal;
`;

const Highlight = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 700;
`;

const Underlined = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray-7);
  padding-bottom: 8px;
  width: 173px;
`;

const DiaryArea = styled.textarea`
  margin-top: 24px;
  outline: none;
  border-radius: 20px;
  background-color: var(--bg);
  padding: 36px 34px;
  width: 100%;
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
  const router = useRouter();
  const [, setIsCompleteModalOpen] = useAtom(RewardModalAtom);
  const onClickToComplete = () => {
    router.push('/complete');
    setIsCompleteModalOpen(true);
  };
  const [checkedEmo] = useAtom(CheckedEmoticon);
  const Emoticon = EmoticonList.find((e) => e.id === checkedEmo)?.emo;

  return (
    <Container className='section'>
      <CandyTitle>
        <Highlight>
          오늘 전 <Underlined>{Emoticon && <Image src={Emoticon} alt='emoticon' width={65} height={65} />}</Underlined>{' '}
          했어요.
        </Highlight>
        <br />
        선택한 나의 기분을 자세히 이야기해주세요.
      </CandyTitle>
      <DiaryArea placeholder='오늘의 기록을 더 상세히 남겨요!' />
      <ButtonWrapper onClick={onClickToComplete}>
        <Button buttonColor='peach' size='md' text='완료하기' />
      </ButtonWrapper>
    </Container>
  );
}
