import styled from 'styled-components';
import Image from 'next/image';
import { Donut } from '../../../../public/assets/candy';
import { ComingCandyNull } from '../../../../public/assets/images';

import OptionBar from './OptionBar';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0;
  margin-right: 16px;
  width: 188px;
  height: 285px;
  font-family: var(--roboto);
  filter: drop-shadow(0px 0px 14.3769px rgba(0, 0, 0, 0.09));
`;

const Thumbnail = styled(Image)`
  z-index: 2;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  width: 100%;
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
  top: 157px;
  right: 12px;
  z-index: 100;
  width: 44px;
  height: 44px;
`;

export interface ComingCandyCardProps {
  itemImage: string;
  category: string;
  name: string;
  plannedDate?: Date;
}

export default function ComingCandyCard({ itemImage, category, name, plannedDate }: ComingCandyCardProps) {
  return (
    <Container>
      <Thumbnail src={itemImage === '' ? ComingCandyNull : itemImage} width='188px' height='192px' />
      <OptionBar plannedDate={plannedDate} />
      <Metadata>
        <Category>{category}</Category>
        <Name>{name}</Name>
      </Metadata>
      {itemImage === '' ? null : (
        <Candy>
          <Image src={Donut} alt='' />
        </Candy>
      )}
    </Container>
  );
}
