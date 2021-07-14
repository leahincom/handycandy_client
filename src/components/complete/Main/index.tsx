import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { RewardModalAtom } from '../../../states';
import RewardModal from '../../reward/Modal';
import CompleteContent, { Candy } from '../Content';
import { CompleteBackground } from '../../../../public/assets/images/';

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
  position: relative;
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
  const [isOpen] = useAtom(RewardModalAtom);
  return (
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
      </Body>
      <CompleteContent candyList={candyList} username={username} candynum={candynum} date={date} />
      {isOpen && <RewardModal />}
    </Container>
  );
}
