import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { CurrentMonthAtom, RewardModalAtom } from '../../../states';
import RewardModal from '../../reward/Modal';
import CompleteContent from '../Content';
import { CompleteBackground } from '../../../../public/assets/images/';
import { Bubble } from '../../../../public/assets/icons';
import CompleteSlider from '../Slider';
import { getCompletedCandy } from '../../../pages/api/useGets/getCompletedCandy';

const candyArr = [
  {
    candy: 'https://dummyimage.com/80x80/000/fff',
    category: '일이삼사오육칠팔구십일이',
    title: '일이삼사오육칠팔구십일이',
    date: new Date(),
  },
  {
    candy: 'https://dummyimage.com/80x80/000/fff',
    category: '일이삼사오육칠팔구십일이',
    title: '일이삼사오육칠팔구십일이',
    date: new Date(),
  },
  {
    candy: 'https://dummyimage.com/80x80/000/fff',
    category: '일이삼사오육칠팔구십일이',
    title: '일이삼사오육칠팔구십일이',
    date: new Date(),
  },
  {
    candy: 'https://dummyimage.com/80x80/000/fff',
    category: '일이삼사오육칠팔구십일이',
    title: '일이삼사오육칠팔구십일이',
    date: new Date(),
  },
  {
    candy: 'https://dummyimage.com/80x80/000/fff',
    category: '일이삼사오육칠팔구십일이',
    title: '일이삼사오육칠팔구십일이',
    date: new Date(),
  },
  {
    candy: 'https://dummyimage.com/80x80/000/fff',
    category: '일이삼사오육칠팔구십일이',
    title: '일이삼사오육칠팔구십일이',
    date: new Date(),
  },
  {
    candy: 'https://dummyimage.com/80x80/000/fff',
    category: '일이삼사오육칠팔구십일이',
    title: '일이삼사오육칠팔구십일이',
    date: new Date(),
  },
  {
    candy: 'https://dummyimage.com/80x80/000/fff',
    category: '일이삼사오육칠팔구십일이',
    title: '일이삼사오육칠팔구십일이',
    date: new Date(),
  },
];

const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  .background {
    z-index: -1;
  }
`;

const Body = styled.div`
  z-index: 1;
  padding: 88px;
  height: 800px 240px 0px 240px;
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
  width: 100%;
`;

export default function CompleteMain() {
  const router = useRouter();
  const [isOpenRewardModal] = useAtom(RewardModalAtom);
  const [curMonth] = useAtom(CurrentMonthAtom);
  const { isLoading, isError, data, error } = useQuery('complete', () => getCompletedCandy(curMonth));
  const curDirectory = new Set(data?.result.cur_categories).size;
  const beforeDirectory = new Set(data?.result.before_categoris).size;
  const afterDirectory = new Set(data?.result.after_categoris).size;
  // TODO: 슬라이더 12개 받아오도록 api 바뀌는 대로 구현 새로하기

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
          <BodyTitle>완료한 캔디</BodyTitle>
          <BodyDesc>내가 선물했던 캔디들이 모인 병들을 모아보세요</BodyDesc>
          <BubbleWrapper>
            <Image src={Bubble} width={460} height={120} alt='bubble' />
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error!{console.log(error)}</p>}
            <BubbleText>
              {data?.result.candy_count}개의 캔디
              <BubbleUnderline />를 주었어요!
            </BubbleText>
          </BubbleWrapper>
          <SliderWrapper>
            <CompleteSlider before={beforeDirectory} current={curDirectory} after={afterDirectory} />
          </SliderWrapper>
        </Body>
        <CompleteContent />
        {isOpenRewardModal && <RewardModal />}
      </Container>
    </>
  );
}
