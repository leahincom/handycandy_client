import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { CompleteModalCategory, RewardModalAtom } from '../../../states';
import Button from '../../common/Button';
import {
  Ball,
  Clover,
  Donut,
  Double,
  Flower,
  Fork,
  Leaf,
  Magnet,
  WaterDrop,
  X,
} from '../../../../public/assets/completeCandy';
import { CategoryImageUrl } from '../../../pages/api/useGets/getCompletedCandy';

interface CompleteCandyList {
  name: CategoryImageUrl;
  src: any;
}

const completeCandyList: CompleteCandyList[] = [
  { name: CategoryImageUrl.Ball, src: Ball },
  { name: CategoryImageUrl.Donut, src: Donut },
  { name: CategoryImageUrl.Clover, src: Clover },
  { name: CategoryImageUrl.Double, src: Double },
  { name: CategoryImageUrl.Flower, src: Flower },
  { name: CategoryImageUrl.Fork, src: Fork },
  { name: CategoryImageUrl.Magnet, src: Magnet },
  { name: CategoryImageUrl.WaterDrop, src: WaterDrop },
  { name: CategoryImageUrl.Leaf, src: Leaf },
  { name: CategoryImageUrl.X, src: X },
];

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
  const [completeModalCategory] = useAtom(CompleteModalCategory);
  const categoryImage = completeCandyList.find((c) => c.name === completeModalCategory)?.src.src;
  const handleClickClose = () => {
    setIsOpen(false);
  };
  console.log('[category ?????????]', categoryImage);

  return (
    <>
      <Background isOpen={isOpen} onClick={handleClickClose} />
      <Container isOpen={isOpen}>
        <Image src={categoryImage} width={173} height={159} alt='candy' />
        <Title>????????? ????????? ????????????!</Title>
        <Desc>
          ?????? ????????? ????????? ????????? ??? ?????? ????????? ?????? ????????? <br />
          ??????????????? ?????? ?????? ?????????
        </Desc>
        <ButtonWrap onClick={handleClickClose}>
          <Button buttonColor='peach' text='??????' size='md' />
        </ButtonWrap>
      </Container>
    </>
  );
}
