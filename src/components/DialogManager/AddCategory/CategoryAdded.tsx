import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/dist/client/image';
import { useAtom } from 'jotai';
import { openCategoryModal } from '../../../states/';
import Button from '../../common/Button';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CandyAnimation = styled(Image)``;

const Desc = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 21px;
  line-height: 50px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const Line = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #808080;
  font-family: var(--roboto);
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
`;

const UnderLine = styled.div`
  border-bottom: 1px solid var(--black);
  padding: 0 5px;
  text-align: center;
  line-height: 33px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
`;

export interface CategoryAddedProps {
  category: string;
  candyList: any;
  selectedCandy: number;
}

export default function CategoryAdded({ category, candyList, selectedCandy }: CategoryAddedProps) {
  const [openModal, setOpenModal] = useAtom(openCategoryModal);

  return (
    <>
      <MainBox>
        <CandyAnimation src={candyList[selectedCandy].added} />
        <Desc>
          <Line>카테고리가 추가되었어요!</Line>
          <div style={{ marginBottom: '17px' }} />
          <UnderLine style={{ marginRight: '7px' }}>{category}를 위한</UnderLine>
        </Desc>
      </MainBox>
      <ButtonBar>
        <Link href='/complete' passHref={true}>
          <Button text='분류별 캔디 보러가기' size='sm' buttonColor='gray' color='black' />
        </Link>
        <div style={{ margin: '9px' }} />
        <Button text='확인' size='sm' buttonColor='peach' color='black' onClick={() => setOpenModal(false)} />
      </ButtonBar>
    </>
  );
}
