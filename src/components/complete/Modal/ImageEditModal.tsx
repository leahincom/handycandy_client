import { useAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import styled, { css } from 'styled-components';
import { PlusIcon } from '../../../../public/assets/icons';
import { putCandyImage } from '../../../pages/api/usePuts/putCandyImage';
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

const TempImageLink = styled.input`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  border-radius: 30px;
  background-color: var(--gray-1);
  padding: 12.5px 33px;
  width: 400px;
  outline: none;
  font-size: 18px;
  text-align: center;
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

const TempCandyImage = styled.img`
  border-radius: 30px;
  width: 221px;
  height: 221px;
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

export default function ImageEditModal({ candy }: ImageEditModalProps) {
  const [isOpen, setIsOpen] = useAtom(ImageEditModalAtom);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const router = useRouter();
  const candyId = router.query.id as string;
  const queryClient = useQueryClient();

  const putCandyImageMutation = useMutation(() => putCandyImage(candyId, imageUrl), {
    onSuccess: () => {
      queryClient.invalidateQueries('complete');
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleClickToClose = () => {
    setIsOpen(false);
  };
  const handleClickSave = () => {
    console.log('[req에 넣어서 보낼 정보]: ', candyId, '  ', imageUrl);
    putCandyImageMutation.mutate();
    setIsOpen(false);
  };

  return (
    <>
      <Background isOpen={isOpen} onClick={handleClickToClose} />
      <Container isOpen={isOpen}>
        <Title>캔디 사진 수정하기</Title>
        <CandyWrapper>
          {/* <CandyImage
            src={candy}
            width='221px'
            height='221px'
            alt='candy'
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          /> */}
          <TempCandyImage src={candy} />
          <CandyHover isHover={isHover}>
            <Image src={PlusIcon} width='40px' height='40px' alt='plus' />
          </CandyHover>
        </CandyWrapper>
        <TempImageLink type='text' value={imageUrl} onChange={handleChange} />
        <SubTitle>외부에서 가져온 이미지 링크를 붙여넣어 주세요!</SubTitle>
        <Button buttonColor='peach' size='sm' text='저장하기' onClick={handleClickSave} />
      </Container>
    </>
  );
}
