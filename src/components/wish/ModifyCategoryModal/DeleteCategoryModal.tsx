import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

interface BackgroundProps {
  isOpen: boolean;
}

const Background = styled.div<BackgroundProps>`
  display: ${({ isOpen }) => (isOpen ? 'box' : 'none')};
  position: fixed;
  top: 0%;
  left: 0%;
  opacity: 0.4;
  z-index: 2;
  background: var(--black);
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: var(--white);
  padding: 49px 0px 42px 0px;
  width: 727px;
  height: 398px;
`;

const Candy = styled(Image)`
  width: 110px;
  height: 110px;
`;

const Title = styled.h1`
  margin-top: 26px;
  text-align: center;
  line-height: 25px;
  font-family: var(--nanum);
  font-size: 22px;
  font-weight: 800;
  font-style: normal;
`;

const SubTitle = styled.h2`
  margin-top: 9px;
  text-align: center;
  line-height: 150%;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const Empty = styled.div`
  width: 13px;
`;

export interface DeleteModalProps {
  candy: string;
}

export default function DeleteModal({ candy }: DeleteModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClickToClose = () => {
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Background isOpen={isOpen} onClick={handleClickToClose} />
      <Container isOpen={isOpen}>
        <Candy src={candy} />
        <Title>캔디 카테고리 삭제</Title>
        <SubTitle>
          분류별 캔디와 그 안의 캔디들 모두 삭제한 후에는 <br />이 작업을 실행 취소할 수 없습니다!
        </SubTitle>
        <ButtonWrapper>
          <Button buttonColor='gray' size='sm' text='취소하기' onClick={handleClose} />
          <Empty />
          <Button buttonColor='peach' size='sm' text='삭제 완료' onClick={handleClose} />
        </ButtonWrapper>
      </Container>
    </>
  );
}