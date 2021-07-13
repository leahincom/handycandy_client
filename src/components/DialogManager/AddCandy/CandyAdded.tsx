import React, { useState, useMemo } from 'react';
import Image from 'next/dist/client/image';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { openCandyModal } from '../../../states/';
import Button from '../../common/Button';
import AddCandyDate from './AddCandyDate';

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
  line-height: 33px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const UnderLine = styled.div`
  border-bottom: 1px solid var(--black);
  padding: 0 5px;
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

export interface CandyAddedProps {
  category: any;
  selectedCategory: number;
  candy: string;
}

export default function CandyAdded({ category, selectedCategory, candy }: CandyAddedProps) {
  const [openModal, setOpenModal] = useAtom(openCandyModal);

  const [detailClicked, setDetailClicked] = useState(false);

  const selectedItem = useMemo(() => category[selectedCategory], [category, selectedCategory]);

  const handleDetailClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setDetailClicked(true);
  };

  const handleCloseClick = () => {
    setOpenModal(false);
  };

  return (
    <>
      {!detailClicked ? (
        <>
          <MainBox>
            <CandyAnimation src={selectedItem.added} />
            <Desc>
              <UnderLine>{selectedItem.name}</UnderLine>
              <div style={{ marginBottom: '17px' }} />
              <Line>
                <UnderLine style={{ marginRight: '7px' }}>{candy}</UnderLine>
                캔디가 추가되었어요!
              </Line>
            </Desc>
          </MainBox>
          <ButtonBar>
            <Button text='닫기' size='sm' buttonColor='gray' color='black' onClick={handleCloseClick} />
            <div style={{ margin: '9px' }} />
            <Button
              text='디데이와 메시지 정하기'
              size='sm'
              buttonColor='peach'
              color='black'
              onClick={handleDetailClick}
            />
          </ButtonBar>
        </>
      ) : (
        <AddCandyDate category={category} selectedCategory={selectedCategory} candy={candy} />
      )}
    </>
  );
}
