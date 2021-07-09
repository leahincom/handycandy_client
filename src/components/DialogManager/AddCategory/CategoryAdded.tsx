import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

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
  text-align: center;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #808080;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
`;

const UnderLine = styled.div`
  border-bottom: 1px solid var(--black);
  text-align: center;
  line-height: 33px;
  letter-spacing: -0.022em;
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
`;

export interface CategoryAddedProps {
  category: any;
  handleDialogState: () => void;
}

export default function CategoryAdded({ category, handleDialogState }: CategoryAddedProps) {
  const handleCategoryClick = () => {};

  return (
    <Dialog>
      <CandyAnimation src='https://dummyimage.com/179x179/000/fff' />
      <Desc style={{ marginTop: '115px' }}>
        <Line>카테고리가 추가되었어요!</Line>
        <div style={{ marginBottom: '17px' }} />
        <UnderLine style={{ marginRight: '7px' }}>{category}를 위한</UnderLine>
      </Desc>
      <ButtonBar>
        <Button text='분류별 캔디 보러가기' size='sm' buttonColor='gray' color='black' onClick={handleCategoryClick} />
        <div style={{ margin: '9px' }} />
        <Button text='확인' size='sm' buttonColor='peach' color='black' onClick={handleDialogState} />
      </ButtonBar>
    </Dialog>
  );
}
