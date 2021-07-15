import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { RewardModalAtom } from '../../../states';
import Button from '../../common/Button';
import { Ball } from '../../../../public/assets/completeCandy';

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
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 3;
  border-radius: 25px;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
  background-color: var(--white);
  padding-top: 51px;
  padding-bottom: 49px;
  width: 832px;
  height: 476px;
`;

const Title = styled.h1`
  margin-top: 9px;
  text-align: center;
  line-height: 45px;
  color: var(--black);
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 30px;
  font-weight: 800;
  font-style: normal;
`;

const Desc = styled.p`
  margin-top: 8px;
  text-align: center;
  line-height: 36px;
  color: var(--gray-6);
  font-family: Roboto;
  font-size: 23px;
  font-weight: normal;
  font-style: normal;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 29px;
`;

export default function RewardModal() {
  const [isOpen, setIsOpen] = useAtom(RewardModalAtom);
  const handleClickToClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Background isOpen={isOpen} onClick={handleClickToClose} />
      <Container isOpen={isOpen}>
        <Image src={Ball} width={173} height={159} alt='candy' />
        <Title>오늘도 캔디를 주었군요!</Title>
        <Desc>
          보다 자신을 아끼고 사랑할 수 있는 사람이 되고 있어요 <br />
          핸디캔디는 항상 곁에 있어요
        </Desc>
        <ButtonWrap onClick={handleClickToClose}>
          <Button buttonColor='peach' text='확인' size='md' />
        </ButtonWrap>
      </Container>
    </>
  );
}
