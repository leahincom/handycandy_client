import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Donut } from '../../../../public/assets/candy';

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);
  background-color: var(--white);
  padding: 18px 24px 27px 24px;
  width: 330px;
  height: 224px;
`;

const CandyEmoticon = styled(Image)`
  position: absolute;
  top: -27.06px;
  right: 19.71px;
  width: 80.35px;
  height: 80.35px;
`;

const CandyImage = styled(Image)`
  border-radius: 80px;
`;

const Category = styled.div`
  margin-top: 8px;
  max-width: 208px;
  overflow: hidden;
  /* line-height: 30px; */
  white-space: nowrap;
  color: var(--gray-7);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
`;

const Title = styled.div`
  margin-top: 4px;
  max-width: 267px;
  overflow: hidden;
  /* line-height: 33px; */
  white-space: nowrap;
  color: var(--black);
  font-family: Roboto;
  font-size: 28px;
  font-weight: 700;
  font-style: normal;
`;

const Date = styled.div`
  margin-top: 16px;
  /* line-height: 21px; */
  color: var(--gray-6);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
`;

export interface CompleteCardProps {
  candy: string;
  category: string;
  title: string;
  date: Date;
}

export default function CompleteCard({ candy, category, title, date }: CompleteCardProps) {
  const getDateFormat = (date: Date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDay()}일`;
  };

  return (
    <Container>
      <CandyEmoticon src={Donut} />
      <CandyImage src={candy} />
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Date>{getDateFormat(date)}</Date>
    </Container>
  );
}
