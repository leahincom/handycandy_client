import { useAtom } from 'jotai';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { CheckedEmoticon, RewardModalAtom } from '../../../states';
import Button from '../../common/Button';
import { postRewardCandy, RewardBodyProps } from '../../../pages/api/usePosts/postRewardCandy';
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

interface InputForm {
  message: string;
}

export default function Diary() {
  const router = useRouter();
  const { register, getValues } = useForm<InputForm>();
  const [, setIsCompleteModalOpen] = useAtom(RewardModalAtom);
  const [checkedEmoId] = useAtom(CheckedEmoticon);

  const Emoticon = EmoticonList.find((e) => e.id === checkedEmoId)?.emo;
  const postRewardMutation = useMutation((body: RewardBodyProps) => postRewardCandy(body));

  const handleClickComplete = () => {
    const { message } = getValues();
    if (!checkedEmoId) {
      throw new Error('선택된 이모지가 없습니다!');
    }
    const body = {
      candy_id: router.query.id as string,
      feeling: checkedEmoId,
      message,
    };
    postRewardMutation.mutate(body);
    router.push('/complete');
    setIsCompleteModalOpen(true);
  };

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
      <DiaryArea {...register('message')} placeholder='오늘의 기록을 더 상세히 남겨요!' />
      <ButtonWrapper onClick={handleClickComplete}>
        <Button buttonColor='peach' size='md' text='완료하기' />
      </ButtonWrapper>
    </Container>
  );
}
