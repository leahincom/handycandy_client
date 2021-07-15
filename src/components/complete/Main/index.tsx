import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { RewardModalAtom } from '../../../states';
import RewardModal from '../../reward/Modal';
import CompleteContent, { Candy } from '../Content';
import { CompleteBackground } from '../../../../public/assets/images/';
import { Bubble } from '../../../../public/assets/icons';
import CompleteSlider, { bottleList } from '../Slider';

const candyArr: Candy[] = new Array(10).fill(1).map((_, index) => ({
  category: '일이삼사오육칠팔구십일이' + index,
  title: '일이삼사오육칠팔구십일이',
  date: new Date(),
  candy: '',
}));

const Container = styled.div`
  z-index: 1;
  padding-bottom: 88px;
  width: 100%;
  height: 100%;

  .background {
    z-index: -1;
  }
`;

const Body = styled.div`
  z-index: 1;
`;

const BodyTitle = styled.h1`
  line-height: 135%;
  font-family: var(--nanum);
  font-size: 44px;
  font-weight: 800;
  font-style: normal;
`;
const BodyDesc = styled.h2`
  margin-top: 30px;
  line-height: 28px;
  color: #919191;
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
`;

const BubbleWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 54px;
`;

const BubbleText = styled.h1`
  position: absolute;
  top: 35px;
  line-height: 32px;
  font-family: var(--nanum);
  font-size: 28px;
  font-weight: 800;
  font-style: normal;
`;

const BubbleUnderline = styled.div`
  position: absolute;
  bottom: 0;
  opacity: 0.5;
  background-color: var(--peach);
  width: 137px;
  height: 15px;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  padding-bottom: 60px;
  width: 100%;
`;

export interface CompleteMainProps {
  candyList: Candy[];
  username: string;
  candynum: number;
  date: Date;
}

export default function CompleteMain({
  candyList = candyArr,
  username = '오주영',
  candynum = 13,
  date = new Date(),
}: CompleteMainProps) {
  const [isOpenRewardModal] = useAtom(RewardModalAtom);

  return (
    <>
      <Container>
        <Image
          className='background'
          src={CompleteBackground}
          alt='background'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
        <Body>
          <div style={{ margin: 'auto', maxWidth: '1440px' }}>
            <BodyTitle>완료한 캔디</BodyTitle>
            <BodyDesc>내가 선물했던 캔디들이 모인 병들을 모아보세요</BodyDesc>
          </div>
          <BubbleWrapper>
            <Image src={Bubble} width={460} height={120} alt='bubble' />
            <BubbleText>
              {candynum}개의 캔디
              <BubbleUnderline />를 주었어요!
            </BubbleText>
          </BubbleWrapper>
          <SliderWrapper>
            <CompleteSlider bottles={bottleList} />
          </SliderWrapper>
        </Body>
        <CompleteContent candyList={candyList} username={username} candynum={candynum} date={date} />
        {isOpenRewardModal && <RewardModal />}
      </Container>
    </>
  );
}
