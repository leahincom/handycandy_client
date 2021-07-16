import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { CompletedCandy } from '../../../pages/api/useGets/getCompletedCandy';
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
  cursor: pointer;
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

const TempCandyImage = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
export interface CompleteCardProps extends CompletedCandy {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function CompleteCard({
  candy_image_url,
  category_name,
  candy_name,
  category_image_url,
  year,
  month,
  date,
  onClick,
}: CompleteCardProps) {
  return (
    <Container onClick={onClick}>
      <CandyImage>
        <TempCandyImage src={candy_image_url || '/assets/images/ComingCandyNull.png'} alt='candy' />
        {/* <Image src={{ default: ComingCandyNull, src: candy_image_url }} alt='' /> */}
      </CandyImage>
      <CandyEmoticonWrapper>
        <CandyEmoticon>
          <CandyIcon name={category_image_url} width={89} height={89} />
        </CandyEmoticon>
      </CandyEmoticonWrapper>
      <Category>{category_name}</Category>
      <Title>{candy_name}</Title>
      <Date>{`${year}년 ${month}월 ${date}일`}</Date>
    </Container>
  );
}
