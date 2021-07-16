import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { ComingCandyNull } from '../../../../public/assets/images';
import CandyIcon from '../../common/CandyIcon';

const Container = styled.div`
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);
  background-color: var(--white);
  padding: 18px 24px 27px 24px;
  width: 330px;
  height: 224px;
`;

const CandyEmoticonWrapper = styled.div`
  position: absolute;
  top: -27.06px;
  right: 19.71px;
  width: 80px;
  height: 80px;
`;

const CandyEmoticon = styled.div``;

const CandyImage = styled.div`
  border-radius: 80px;
  width: 80px;
  height: 80px;
`;

const Category = styled.div`
  margin-top: 8px;
  max-width: 208px;
  overflow: hidden;
  line-height: 30px;
  white-space: nowrap;
  color: var(--gray-7);
  font-family: var(--roboto);
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
`;

const Title = styled.div`
  margin-top: 4px;
  max-width: 267px;
  overflow: hidden;
  line-height: 33px;
  white-space: nowrap;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: 700;
  font-style: normal;
`;

const Date = styled.div`
  margin-top: 16px;
  line-height: 21px;
  color: var(--gray-6);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
`;

export interface CompleteCardProps {
  candy?: string;
  category: string;
  title: string;
  date: Date;
  category_img?: string;
}

export default function CompleteCard({ candy, category, title, date, category_img }: CompleteCardProps) {
  const getDateFormat = (date: Date) => {
    if (typeof date === 'number') {
      return date;
    }
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDay()}일`;
  };

  return (
    <Container>
      <CandyImage>
        <Image src={{ default: ComingCandyNull, src: candy }} alt='' />
      </CandyImage>
      <CandyEmoticonWrapper>
        <CandyEmoticon>
          <CandyIcon name={category_img} />
        </CandyEmoticon>
      </CandyEmoticonWrapper>
      <Category>{category}</Category>
      <Title>{title}</Title>
      {/* <Date>{date}</Date> */}
    </Container>
  );
}
