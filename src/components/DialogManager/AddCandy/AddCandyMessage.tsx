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
  background-color: var(--white);
  width: 726px;
  height: 400px;
`;

const Title = styled.h1`
  line-height: 23px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--nanum);
  font-size: 20px;
  font-weight: 800;
  font-style: normal;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;
  letter-spacing: -0.022em;
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const TextBox = styled.textarea`
  box-sizing: border-box;
  opacity: 0.5;
  border: 1px solid var(--gray-1);
  border-radius: 10px;
  background: var(--gray-2);
  padding: 23px 27px;
  width: 599px;
  height: 169px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: normal;
  font-style: normal;

  &::placeholder {
    color: var(--gray-5);
  }

  &:focus {
    outline: none;
  }
`;

const CountChar = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
  width: 100%;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: var(--gray-5);
  font-family: var(--roboto);
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

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const script = e.target.value;
    setCount(script.length);
  };

  const handleFormerClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setGoBefore(true);
  };
  const handleEndClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    // api POST
  };

  return (
    <>
      {!goBefore ? (
        <Dialog>
          <Title>미래의 캔디데이에 남길 메시지</Title>
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
