import { useAtom } from 'jotai';
import Image from 'next/image';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { PlusIcon } from '../../../../public/assets/icons';
import { ImageEditModalAtom } from '../../../states';
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
  padding: 43px 0px 32px 0px;
  width: 726px;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 23px;
  font-family: var(--nanum);
  font-size: 20px;
  font-weight: 800;
  font-style: normal;
`;

const CandyWrapper = styled.div`
  position: relative;
  margin-top: 27px;
  cursor: pointer;
`;

interface CandyImageProps {
  onMouseOver: React.MouseEventHandler<HTMLImageElement>;
  onMouseLeave: React.MouseEventHandler<HTMLImageElement>;
}

const CandyImage = styled(Image)<CandyImageProps>`
  border-radius: 30px;
  cursor: pointer;
`;

const CandyHover = styled.div<{ isHover: boolean }>`
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  z-index: 3;
  border-radius: 30px;
  background: var(--gray-7);
  width: 221px;
  height: 221px;

  ${({ isHover }) =>
    isHover
      ? css`
          display: flex;
          opacity: 0.5;
        `
      : css`
          display: none;
        `};
`;

const SubTitle = styled.h2`
  margin: 10px 0px 18px 0px;
  line-height: 27px;
  color: var(--gray-6);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
`;

export interface ImageEditModalProps {
  candy: string;
}

export default function ImageEditModal({ candy = 'https://dummyimage.com/221x221/000/fff' }: ImageEditModalProps) {
  const [isOpen, setIsOpen] = useAtom(ImageEditModalAtom);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [image, setImage] = useState();

  const handleImage = () => {};

  const handleClickToClose = () => {
    setIsOpen(false);
  };
  const onClickToSave = () => {
    // TODO: put Image
    console.log('[클릭 이벤트]');
    setIsOpen(false);
  };

  return (
    <>
      <Background isOpen={isOpen} onClick={handleClickToClose} />
      <Container isOpen={isOpen}>
        <Title>캔디 사진 수정하기</Title>
        <CandyWrapper>
          <CandyImage
            src={candy}
            width='221px'
            height='221px'
            alt='candy'
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          />
          <CandyHover isHover={isHover}>
            <Image src={PlusIcon} width='40px' height='40px' alt='plus' />
          </CandyHover>
        </CandyWrapper>
        <SubTitle>최대 5MB의 이미지만 업로드 가능해요!</SubTitle>
        <Button buttonColor='peach' size='sm' text='저장하기' onClick={onClickToSave} />
      </Container>
    </>
  );
}
