import styled from 'styled-components';
import React from 'react';
import Banner from '../Banner';
import CompleteCard from '../Card';

const Container = styled.div`
  background-color: var(--peach);
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 36px;
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 32px;
  font-weight: 800;
  font-style: normal;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--black);
  padding-bottom: 14px;
  width: 588px;
`;

const CandyArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px 50px 0px 0px;
  background-color: var(--white);
  padding: 76px 240px 184px 240px;
  width: auto;
`;

const CandyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 73px;
  grid-column-gap: 40px;
  margin-top: 83px;
`;
export interface Candy {
  candy: string;
  category: string;
  title: string;
  date: Date;
}

export interface RewardProps {
  candyList: Candy[];
  candynum: number;
  date: Date;
  username: string;
}

export default function Contents({ candyList, username, candynum, date }: RewardProps) {
  const month = date.getMonth() + 1;

  return (
    <Container>
      <Banner bannerDesc='나에게 캔디를 주며 일상의 달콤한 순간을 남겨보세요' bannerTitle='캔디로 보상완료하기' />
      <CandyArea>
        <TitleWrapper>
          <Title>
            {username}님은 {month}월에 {candynum}개의 캔디를 주었어요
          </Title>
        </TitleWrapper>
        <CandyGrid>
          {candyList.map((candy, index) => (
            <CompleteCard
              candy={candy.candy}
              category={candy.category}
              title={candy.title}
              date={candy.date}
              key={index}
            />
          ))}
        </CandyGrid>
      </CandyArea>
    </Container>
  );
}
