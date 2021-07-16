import { useAtom } from 'jotai';
import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CandyEditModalAtom, DeleteModalAtom } from '../../../states';
import checkByte from '../../../utils/checkBytes';
import Button from '../../common/Button';
import { EmoticonList } from '../../reward/Body/Emoticon';
import { Check } from '../../../../public/assets/icons';
import { getComletedCandyDetail } from '../../../pages/api/useGets/getCompletedCandyDetail';
import { putCompletedCandy } from '../../../pages/api/usePuts/putCompletedCandy';

interface BackgroundProps {
  isOpen: boolean;
}

const Background = styled.div<BackgroundProps>`
  display: ${({ isOpen }) => (isOpen ? 'box' : 'none')};
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div<BackgroundProps>`
  display: ${({ isOpen }) => (isOpen ? 'box' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 3;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: var(--white);
  padding: 54px 120px 37px 120px;
  width: 727px;
  /* height: 805px; 높이가 피그마랑 달라서 일단 auto로 놔둠*/
`;

const Title = styled.h1`
  text-align: center;
  line-height: 25px;
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 22px;
  font-weight: 800;
  font-style: normal;
`;

const SubTitle = styled.h2<{ margin: number }>`
  margin-top: ${({ margin }) => margin}px;
  line-height: 21px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
`;

const NameInput = styled.input`
  box-sizing: border-box;
  margin-top: 16px;
  outline: none;
  border: 1px solid var(--gray-3);
  border-radius: 17px;
  padding: 11px 20px;
  width: 100%;
  line-height: 26px;
  color: var(--black);
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
`;

const EmoticonArea = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  border: 1px solid var(--gray-3);
  border-radius: 17px;
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
  height: 50px;
`;

const EmoticonWrapper = styled.div<{ isChecked: boolean }>`
  position: relative;
  width: 35px;
  height: 35px;
  opacity: ${({ isChecked }) => (isChecked ? 1 : 0.5)};
  cursor: pointer;
`;

const CheckWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const HistoryTextArea = styled.textarea`
  margin-top: 16px;
  outline: none;
  border: 1px solid var(--gray-3);
  border-radius: 17px;
  padding: 13px 25px;
  width: 100%;
  resize: none;
  line-height: 21px;
  font-family: var(--roboto);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;

const TextLimitNumber = styled.h3`
  margin-top: 4px;
  text-align: end;
  line-height: 21px;
  color: var(--gray-5);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;

const TextCurrentNumber = styled.span``;

const Divider = styled.div`
  margin-top: 52px;
  border-bottom: 1px solid var(--gray-3);
`;

const DeleteText = styled.h1`
  margin-top: 28px;
  line-height: 28px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  cursor: pointer;
`;

const DeleteSubText = styled.h2`
  margin-top: 9px;
  line-height: 27px;
  color: var(--gray-7);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 51px;
`;

interface InputForm {
  name?: string;
  history?: string;
}

const HISTORY = 'history';
const NAME = 'name';

export default function EditModal() {
  const { register, getValues, setValue } = useForm<InputForm>();
  const textLimitRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useAtom(CandyEditModalAtom);
  const [, setIsOpenDeleteModal] = useAtom(DeleteModalAtom);
  const [checkedEmoId, setCheckedEmoId] = useState<string>('');
  const router = useRouter();
  const candyId = router.query.id as string;
  const { data } = useQuery(['complete', candyId], () => getComletedCandyDetail(candyId));
  const emoticonId = EmoticonList.find((emo) => emo.name === data?.feeling_image_url)?.id as string;
  const queryClient = useQueryClient();

  const handleClickToClose = () => {
    setIsOpen(false);
  };
  const handleClickEmoticon = (id: string) => {
    setCheckedEmoId(id);
  };
  const putCompleteCandyMutation = useMutation(putCompletedCandy, {
    onSuccess: () => {
      queryClient.invalidateQueries('complete');
    },
  });
  const handleClickToComplete = () => {
    const { history, name } = getValues();
    try {
      if (!name) {
        throw new Error('캔디 이름이 입력되지 않았습니다.');
      }
      if (!data) {
        return;
      }
      putCompleteCandyMutation.mutate({
        review_id: data?.review_id,
        candy_name: name,
        feeling: checkedEmoId,
        message: history,
      });
    } catch (error) {
      console.error(error);
    }
    setIsOpen(false);
  };
  const handleClickToDeleteCandy = () => {
    setIsOpen(false);
    setIsOpenDeleteModal(true);
  };

  useEffect(() => {
    if (emoticonId) {
      setCheckedEmoId(emoticonId);
    }
  }, []);

  return (
    <>
      <Background isOpen={isOpen} onClick={handleClickToClose} />
      <Container isOpen={isOpen}>
        <Title>완료 캔디수정</Title>
        <SubTitle margin={35}>캔디 이름</SubTitle>
        <NameInput {...register(NAME)} defaultValue={data?.candy_name} />
        <SubTitle margin={48}>감정 이모티콘</SubTitle>
        <EmoticonArea>
          {EmoticonList.map((emo, index) => (
            <EmoticonWrapper
              key={index}
              onClick={() => handleClickEmoticon(emo.id)}
              isChecked={emo.id === checkedEmoId}
            >
              {emo.id === checkedEmoId && (
                <CheckWrapper>
                  <Image src={Check} width={27} height={17} alt='check' />
                </CheckWrapper>
              )}
              <Image src={emo.emo} alt='emoticon' layout='fill' objectFit='cover' objectPosition='center' />
            </EmoticonWrapper>
          ))}
        </EmoticonArea>
        <SubTitle margin={48}>캔디 히스토리</SubTitle>
        <HistoryTextArea
          {...register(HISTORY)}
          defaultValue={data?.candy_history}
          rows={4}
          onChange={(e) => checkByte(e, textLimitRef, HISTORY, setValue)}
        />
        <TextLimitNumber>
          <TextCurrentNumber ref={textLimitRef}>0</TextCurrentNumber>/200Byte
        </TextLimitNumber>
        <Divider />
        <DeleteText onClick={handleClickToDeleteCandy}>캔디 삭제</DeleteText>
        <DeleteSubText>캔디가 영구적으로 삭제됩니다.</DeleteSubText>
        <ButtonWrapper onClick={handleClickToComplete}>
          <Button text='완료' buttonColor='peach' size='ls' />
        </ButtonWrapper>
      </Container>
    </>
  );
}
