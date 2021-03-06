import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import CandyIcon from '../../common/CandyIcon';
import { ComingCandyNull } from '../../../../public/assets/images';
import { getRoutesName } from '../../../utils/routes';
import OptionBar from './OptionBar';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0;

  width: 254px;
  height: 383px;
  font-family: var(--roboto);
  filter: drop-shadow(0px 0px 14.3769px rgba(0, 0, 0, 0.09));
  &:hover {
    cursor: pointer;
  }
`;

const Thumbnail = styled.div`
  z-index: 2;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  img {
    width: 254px;
    height: 258px;
  }
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
  background-color: var(--white);
  padding: 14px 0 20px 12px;
  width: 100%;
`;

const Category = styled.h2`
  margin: 0;
  margin-bottom: 4px;
  line-height: 16px;
  letter-spacing: -0.022em;
  color: #5a5a5a;
  font-size: 14px;
  font-weight: 400;
`;

const Name = styled.h1`
  margin: 0;
  line-height: 21px;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: 700;
  font-weight: bold;
`;

const Candy = styled.div`
  position: absolute;
  top: 234px;
  right: 14px;
  z-index: 100;
  width: 44px;
  height: 44px;
`;
const Date = styled.div`
  margin-top: 9px;
  line-height: 21px;
  color: gray;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`;
export interface ComingCandyCardProps {
  itemImage: string;
  candy_id?: string;
  category: string;
  category_img: string;
  name: string;
  plannedDate?: Date;
  date: number;
  month: number;
}

export default function ComingCandyCard({
  itemImage,
  category,
  name,
  plannedDate,
  category_img,
  candy_id,
  date,
  month,
}: ComingCandyCardProps) {
  return (
    <Link href={getRoutesName.wish.detail(candy_id ?? '')} passHref>
      <Container>
        <Thumbnail>
          <Image src={{ default: ComingCandyNull, src: itemImage, height: 192, width: 188 }} alt='' />
        </Thumbnail>
        <OptionBar plannedDate={plannedDate} />
        <Metadata>
          <Category>{category}</Category>
          <Name>{name}</Name>
          <Date>
            {month}??? {date}??? ??????
          </Date>
        </Metadata>
        <Candy>
          <CandyIcon name={category_img} />
        </Candy>
      </Container>
    </Link>
  );
}
