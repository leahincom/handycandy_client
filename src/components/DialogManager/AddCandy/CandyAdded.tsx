import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import AddCandyDate from './AddCandyDate';

const Dialog = styled.div`
  display: flex;
  position: absolute;
  top: 100px;
  /* top: 315px;
  left: 589px; */
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid var(--gray-1);
  border-radius: 25px;
  background-color: #ffffff;
  width: 726px;
  height: 400px;
`;

const CandyAnimation = styled.img`
  position: absolute;
  top: -55px;
`;

const Desc = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;
  letter-spacing: -0.022em;
  color: #1e1e1e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const Line = styled.div`
  display: flex;
  align-items: flex-end;
  line-height: 33px;
  letter-spacing: -0.022em;
  color: #1e1e1e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const UnderLine = styled.div`
  border-bottom: 1px solid var(--black);
  line-height: 33px;

  letter-spacing: -0.022em;

  /* handycandy/black */

  color: #1e1e1e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
`;

const Icon = styled.img`
  margin-right: 12px;
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
  const [detailClicked, setDetailClicked] = useState(false);

  const handleCloseClick = () => {};
  const handleDetailClick = () => {};

  return (
    <>
      {detailClicked ? (
        <Dialog>
          <CandyAnimation src='https://dummyimage.com/179x179/000/fff' />
          <Desc style={{ marginTop: '100px' }}>
            <Line>
              <Icon src={category[selectedCategory].image} width='54px' />
              <UnderLine>{category[selectedCategory].name}</UnderLine>
            </Line>
            <div style={{ marginBottom: '17px' }} />
            <Line>
              <UnderLine style={{ marginRight: '7px' }}>{candy}</UnderLine>
              캔디가 추가되었어요!
            </Line>
          </Desc>
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
        </Dialog>
      ) : (
        <AddCandyDate />
      )}
    </>
  );
}
