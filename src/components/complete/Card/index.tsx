import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { CompletedCandy } from '../../../pages/api/useGets/getCompletedCandy';
import { ComingCandyNull } from '../../../../public/assets/images';
import CandyIcon from '../../common/CandyIcon';

const Container = styled.div<{ bgColor: string }>`
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);
  background-color: ${({ bgColor }) => bgColor};
  padding: 18px 24px 27px 24px;
  width: 330px;
  height: 224px;
  cursor: pointer;
`;

const CandyEmoticon = styled.div`
  position: absolute;
  top: -27.06px;
  right: 19.71px;
  width: 80px;
  height: 80px;
  z-index: 10;
  opacity: 1;
`;

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

const bgColorList = [
  { color: 'rgba(230, 250, 148, 0.2)', category: 'Ball' },
  { color: 'rgba(174, 202, 255, 0.2)', category: 'Double' },
  { color: 'rgba(255, 208, 248, 0.2)', category: 'Clover' },
  { color: 'rgba(161, 247, 207, 0.2)', category: 'WaterDrop' },
  { color: 'rgba(199, 254, 180, 0.2)', category: 'Magnet' },
  { color: 'rgba(251, 239, 196, 0.2)', category: 'Fork' },
  { color: 'rgba(255, 191, 191, 0.2)', category: 'Donut' },
  { color: 'rgba(164, 226, 251, 0.2)', category: 'X' },
  { color: 'rgba(255,217,190,0.2)', category: 'Flower' },
];

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
  const bgColor = bgColorList.find((ele) => ele.category === category_image_url)?.color as string;

  return (
    <Container onClick={onClick} bgColor={bgColor}>
      <CandyImage>
        <TempCandyImage src={candy_image_url || '/assets/images/ComingCandyNull.png'} alt='candy' />
        {/* <Image src={{ default: ComingCandyNull, src: candy_image_url }} alt='' /> */}
      </CandyImage>
      <CandyEmoticon>
        <CandyIcon name={category_image_url} width={89} height={89} />
      </CandyEmoticon>
      <Category>{category_name}</Category>
      <Title>{candy_name}</Title>
      <Date>{`${year}년 ${month}월 ${date}일`}</Date>
    </Container>
  );
}
