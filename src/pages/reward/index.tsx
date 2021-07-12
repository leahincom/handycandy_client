import React from 'react';
import Reward, { Candy } from '../../components/reward/Contents';
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
export interface RewardPageProps {
  candyList: Candy[];
  username: string;
  candynum: number;
  date: Date;
}

export default function RewardPage({
  candyList = candyArr,
  username = '오주영',
  candynum = 13,
  date = new Date(),
}: RewardPageProps) {
  return <Reward candyList={candyList} username={username} candynum={candynum} date={date} />;
}
