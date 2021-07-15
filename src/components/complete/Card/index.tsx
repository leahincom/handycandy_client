import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Donut } from '../../../../public/assets/candy';
import { CompletedCandy } from '../../../pages/api/useGets/getCompletedCandy';

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
`;

const CandyEmoticon = styled(Image)``;

const CandyImage = styled(Image)`
  border-radius: 80px;
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

export interface CompleteCardProps extends CompletedCandy {}

export default function CompleteCard({
  candy_image_url,
  category_name,
  candy_name,
  category_image_url,
  year,
  month,
  date,
}: CompleteCardProps) {
  return (
    <Container>
      {/* <CandyImage src={candy_image_url} width='80px' height='80px' /> */}
      <CandyEmoticonWrapper>
        {/* <CandyEmoticon src={category_image_url} width='80px' height='80px' /> */}
      </CandyEmoticonWrapper>
      <Category>{category_name}</Category>
      <Title>{candy_name}</Title>
      <Date>{`${year}년 ${month}월 ${date}일`}</Date>
    </Container>
  );
}
