import { useAtom } from 'jotai';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CandyEditModalAtom } from '../../../states';
import checkByte from '../../../utils/checkBytes';
import Button from '../../common/Button';

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

const EmotionWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  border: 1px solid var(--gray-3);
  border-radius: 17px;
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
  height: 50px;
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

export default function EditModal() {
  const { register, setValue } = useForm<InputForm>();
  const textLimitRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useAtom(CandyEditModalAtom);
  const handleClickToClose = () => {
    setIsOpen(false);
  };
  const onClickToComplete = () => {
    // TODO: update complete candy
    setIsOpen(false);
  };

  return (
    <>
      <Background isOpen={isOpen} onClick={handleClickToClose} />
      <Container isOpen={isOpen}>
        <Title>완료 캔디수정</Title>
        <SubTitle margin={35}>캔디 이름</SubTitle>
        <NameInput {...register('name')} defaultValue='필보이드 핸드크림' />
        <SubTitle margin={48}>감정 이모티콘</SubTitle>
        {/* TODO: 정현이 코드 머지되면 옮겨오기: EmotionWrapper */}
        <EmotionWrapper />
        <SubTitle margin={48}>캔디 히스토리</SubTitle>
        <HistoryTextArea
          {...register(HISTORY)}
          rows={4}
          onChange={(e) => checkByte(e, textLimitRef, HISTORY, setValue)}
        />
        <TextLimitNumber>
          <TextCurrentNumber ref={textLimitRef}>0</TextCurrentNumber>/200Byte
        </TextLimitNumber>
        <Divider />
        <DeleteText>캔디 삭제</DeleteText>
        <DeleteSubText>캔디가 영구적으로 삭제됩니다.</DeleteSubText>
        <ButtonWrapper onClick={onClickToComplete}>
          <Button text='완료' buttonColor='peach' size='ls' />
        </ButtonWrapper>
      </Container>
    </>
  );
}
