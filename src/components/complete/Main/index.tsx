import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';
import { RewardModalAtom } from '../../../states';
import RewardModal from '../../reward/Modal';
import CompleteContent, { Candy } from '../Content';
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

const Container = styled.div``;
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
      <CompleteContent candyList={candyList} username={username} candynum={candynum} date={date} />
      {isOpen && <RewardModal />}
    </Container>
  );
}
