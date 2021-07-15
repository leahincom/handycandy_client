import styled from 'styled-components';
import { MouseEventHandler } from 'react';
import Image from 'next/dist/client/image';
import { ComingCandyNull } from '../../../../public/assets/images';
import CandyIcon from '../CandyIcon';
import { PlannedCandy } from '../../../pages/api/useGets/getComingCandy';
import OptionBar from './OptionBar';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0;
  cursor: pointer;
  width: 254px;
  height: 383px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
`;

const Thumbnail = styled.div`
  position: relative;
  z-index: 2;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  width: 100%;
  height: 258px;
`;

const Metadata = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  box-shadow: 5px 5px 20px #c4c4c471;
  background-color: white;
  padding: 23px 0 23px 17px;
  width: 100%;
`;

const Category = styled.h2`
  margin: 0;
  margin-bottom: 4px;
  color: #4b4b4b;
  font-size: 16px;
  font-weight: 400;
`;

const Name = styled.h1`
  margin: 0;
  color: #252525;
  font-size: 24px;
  font-weight: 700;
`;

const Date = styled.h3`
  margin: 0;
  margin-top: 12px;
  color: #a0a0a0;
  font-size: 13px;
  font-weight: 400;
`;

const Candy = styled.div`
  position: absolute;
  right: 16px;
  bottom: 109px;
  z-index: 100;
`;

export interface CandyCardProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  candy: PlannedCandy;
}

export default function CandyCard({ candy, onClick }: CandyCardProps) {
  const { candy_image_url, category_name, candy_name, date, category_image_url } = candy;
  console.log(candy_image_url, category_image_url);
  return (
    <Container onClick={onClick}>
      <Thumbnail>
        <Image src={{ src: candy_image_url, default: ComingCandyNull }} alt='' layout='fill' />
      </Thumbnail>
      <OptionBar plannedDate={undefined} />
      <Metadata>
        <Category>{category_name}</Category>
        <Name>{candy_name}</Name>
        <Date>{`담은지 ${date}일 되었어요.`}</Date>
      </Metadata>
      <Candy>
        <CandyIcon name={category_image_url} />
      </Candy>
    </Container>
  );
}
