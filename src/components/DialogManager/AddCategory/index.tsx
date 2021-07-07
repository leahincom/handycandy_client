import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { makeStyles, TextField } from '@material-ui/core';
import Image from 'next/dist/client/image';
import Button from '../../common/Button';
import {
  Donut,
  Ball,
  Clover,
  Double,
  Flower,
  Fork,
  Leaf,
  Magnet,
  WaterDrop,
  X,
} from '../../../../public/assets/candy/';
import { Check } from '../../../../public/assets/icons/';

const useStyles = makeStyles({
  root: {
    marginRight: '15px',
    paddingBottom: '5px',
  },
});

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
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 20px;
  font-weight: 800;
  font-style: normal;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CandyBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background: #e9e9e9;
  padding: 10px;
`;

const Instruction = styled.p`
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #c1c1c1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  line-height: 33px;
  letter-spacing: -0.022em;
  color: #1e1e1e;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

export interface AddCategoryProps {
  handleDialogState: () => void;
}

export default function AddCategory({ handleDialogState }: AddCategoryProps) {
  const candyList = [
    {
      name: 'leaf',
      src: Leaf,
    },
    {
      name: 'waterdrop',
      src: WaterDrop,
    },
    {
      name: 'clover',
      src: Clover,
    },
    {
      name: 'x',
      src: X,
    },
    {
      name: 'flower',
      src: Flower,
    },
    {
      name: 'donut',
      src: Donut,
    },
    {
      name: 'fork',
      src: Fork,
    },
    {
      name: 'magnet',
      src: Magnet,
    },
  ];

  const [selectedCandy, setSelectedCandy] = useState(null);
  const [category, setCategory] = useState('행복해지고 싶은 나');
  const [added, setAdded] = useState(false);

  const handleChange = (e: any) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const handleAddClick = () => {
    setAdded(true);
  };

  const checkRef = useRef<HTMLButtonElement>(null);

  const handleCandyClick = (e: any) => {
    console.log(e);
    setSelectedCandy(e.target.key);
    // const hiddenStyle: any = checkRef.current?.style.display;
    // if (hiddenStyle === 'none') {
    //   checkRef.current?.style.display = 'inline-block';
    // } else {
    //   checkRef.current?.style.display = 'none';
  };

  const classes = useStyles();

  return (
    <>
      {/* {!added ? ( */}
      <Dialog>
        <Title>캔디 추가하기</Title>
        <Main>
          <Instruction>원하는 캔디 아이콘을 선택하세요</Instruction>
          <CandyBox style={selectedCandy ? { opacity: '0.5' } : { opacity: '1' }}>
            {candyList.map((el, idx) => {
              return (
                <Image
                  src={el.src}
                  style={
                    idx === selectedCandy
                      ? { margin: '10px', zIndex: '5', opacity: '2' }
                      : { margin: '10px', zIndex: '5', opacity: '1' }
                  }
                  width='52px'
                  key={idx}
                  onClick={handleCandyClick}
                  alt=''
                />
              );
              {
                /* <Image src={Check} key={idx} ref={checkRef} alt='' />; */
              }
            })}
          </CandyBox>
        </Main>
        <Line>
          <form className={classes.root} noValidate autoComplete='off'>
            <TextField
              id='standard-basic'
              style={{
                width: '230px',
                fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif`,
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '28px',
                lineHeight: '33px',
                letterSpacing: '-0.022em',
                color: '#1E1E1E',
              }}
              value={category}
              onChange={handleChange}
            />
          </form>
          를 위한
        </Line>
        <Button text='추가하기' size='sm' buttonColor='peach' color='black' onClick={handleAddClick} />
      </Dialog>
      {/* ) : (
        <CategoryAdded category={category} selectedCategory={selectedCategory} category={category} />
      )} */}
    </>
  );
}
