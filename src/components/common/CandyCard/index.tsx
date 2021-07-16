import styled from 'styled-components';
import Image from 'next/dist/client/image';
import Link from 'next/link';
import { ComingCandyNull } from '../../../../public/assets/images';
import CandyIcon from '../CandyIcon';
import { getRoutesName } from '../../../utils/routes';
import OptionBar from './OptionBar';

const Container = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0;
  cursor: pointer;
  width: ${(props) => (props.from === 'home' ? '188px' : '254px')};
  height: ${(props) => (props.from === 'home' ? '285px' : '383px')};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
`;

const Thumbnail = styled.div<ContainerProps>`
  position: relative;
  z-index: 1;
  box-shadow: 5px 5px 20px #c4c4c471;
  width: 100%;
  height: ${(props) => (props.from === 'home' ? '188px' : '254px')};

  ${Container}:hover & {
    opacity: 0.7;
  }
`;

const Metadata = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  box-shadow: 5px 5px 20px #c4c4c471;
  background-color: white;
  padding: 23px 0 23px 17px;
  width: 100%;

  ${Container}:hover & {
    background-color: rgba(90, 90, 90, 0.1);
  }
`;

const Category = styled.h2<ContainerProps>`
  margin: 0;
  margin-bottom: 4px;
  color: #4b4b4b;
  font-size: ${(props) => (props.from === 'home' ? '14px' : '16px')};
  font-weight: 400;
`;

const Name = styled.h1<ContainerProps>`
  margin: 0;
  color: #252525;
  font-size: ${(props) => (props.from === 'home' ? '18px' : '24px')};
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
  candy_id?: string;
  candy_image_url: string;
  candy_name: string;
  category_image_url: string;
  category_name: string;
  d_day?: number;
  month?: number;
  date?: number;
  waiting_date?: number;
  from?: string;
}

export interface ContainerProps {
  from?: string;
}

export default function CandyCard({
  candy_id,
  candy_image_url,
  candy_name,
  category_image_url,
  category_name,
  d_day,
  month,
  date,
  waiting_date,
  from,
}: CandyCardProps) {
  return (
    <Link href={getRoutesName.wish.detail(candy_id ?? '')} passHref>
      <Container from={from}>
        <Thumbnail from={from}>
          <Image src={{ src: candy_image_url, default: ComingCandyNull }} alt='' layout='fill' />
        </Thumbnail>
        {d_day && <OptionBar d_day={d_day} />}

        <Metadata>
          <Category from={from}>{category_name}</Category>
          <Name from={from}>{candy_name}</Name>
          <Date>{d_day === undefined ? `담은지 ${waiting_date}일 되었어요.` : `${month}월 ${date}일 예정`}</Date>
        </Metadata>
        <Candy>
          <CandyIcon name={category_image_url} />
        </Candy>
      </Container>
    </Link>
  );
}
