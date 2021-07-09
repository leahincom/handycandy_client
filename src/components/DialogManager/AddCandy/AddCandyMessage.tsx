import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import AddCandyDate from './AddCandyDate';
import { CandyAddedProps } from './CandyAdded';

const Dialog = styled.div`
  display: flex;
  /* position: absolute;
  top: 315px;
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

const Title = styled.h1`
  line-height: 23px;
  letter-spacing: -0.022em;
  color: #1e1e1e;
  font-family: 'NanumSquareRound';
  font-size: 20px;
  font-weight: 800;
  font-style: normal;
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

const TextBox = styled.textarea`
  box-sizing: border-box;
  opacity: 0.5;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background: #e9e9e9;
  padding: 23px 27px;
  width: 599px;
  height: 169px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #c1c1c1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
`;

const CountChar = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
  width: 100%;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: #c1c1c1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
`;

export default function AddCandyMessage({ category, selectedCategory, candy, handleDialogState }: CandyAddedProps) {
  const [count, setCount] = useState(0);
  const [goBefore, setGoBefore] = useState(false);

  const handleChange = (e) => {
    const script = e.target.value;
    setCount(script.length);
  };

  const handleFormerClick = () => {
    setGoBefore(true);
  };
  const handleEndClick = () => {
    // api POST
  };

  return (
    <>
      {!goBefore ? (
        <Dialog>
          <Title>캔디를 받을 미래에 남길 메시지</Title>
          <Desc>
            <TextBox placeholder='캔디를 받을 나에게 전할 메시지를 남겨주세요' onChange={handleChange} />
            <CountChar>{count}/100자</CountChar>
          </Desc>
          <ButtonBar>
            <Button text='뒤로가기' size='sm' buttonColor='gray' color='black' onClick={handleFormerClick} />
            <div style={{ margin: '9px' }} />
            <Button text='끝내기' size='sm' buttonColor='peach' color='black' onClick={handleEndClick} />
          </ButtonBar>
        </Dialog>
      ) : (
        <AddCandyDate
          category={category}
          selectedCategory={selectedCategory}
          candy={candy}
          handleDialogState={handleDialogState}
        />
      )}
    </>
  );
}
