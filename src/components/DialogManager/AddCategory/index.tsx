import React, { useState } from 'react';
import Image from 'next/dist/client/image';
import styled from 'styled-components';
import { makeStyles, TextField } from '@material-ui/core';
import Button from '../../common/Button';
import {
  Donut,
  Clover,
  Flower,
  Fork,
  Leaf,
  Magnet,
  WaterDrop,
  X,
  Ball,
  Double,
} from '../../../../public/assets/candy/';
import {
  DonutAdded,
  CloverAdded,
  FlowerAdded,
  ForkAdded,
  LeafAdded,
  MagnetAdded,
  WaterDropAdded,
  XAdded,
  BallAdded,
  DoubleAdded,
} from '../../../../public/assets/candyAdded/';
import { Check } from '../../../../public/assets/icons/';
import CategoryAdded from './CategoryAdded';

const useStyles = makeStyles({
  root: {
    // eslint-disable-next-line quote-props
    marginRight: '15px',
    // eslint-disable-next-line quote-props
    paddingBottom: '5px',
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--black)',
    },
  },
});

const Dialog = styled.div`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  top: 340px;
  left: 596px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--gray-1);
  border-radius: 25px;
  background-color: var(--white);
  padding: 40px 0 20px 0;
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Instruction = styled.p`
  line-height: 150%;
  letter-spacing: -0.022em;
  color: var(--gray-5);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  line-height: 33px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const CandyBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--gray-2);
  border-radius: 10px;
  background: var(--gray-2);
  padding: 26px 15px;
  width: 616px;
  height: 99px;
`;

const Candy = styled.div`
  position: relative;
`;

const CandyIcon = styled.div<{ selectedCandy: number; idx: number }>`
  opacity: ${(props) => (props.selectedCandy < 0 ? 1 : props.idx === props.selectedCandy ? 1 : 0.5)};
`;

const CheckIcon = styled.div<{ selectedCandy: number; idx: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${(props) => (props.selectedCandy > -1 && props.idx === props.selectedCandy ? 'visible' : 'hidden')};
`;

export default function AddCategory() {
  const candyList = [
    {
      name: 'leaf',
      added: LeafAdded,
      src: Leaf,
    },
    {
      name: 'waterdrop',
      added: WaterDropAdded,
      src: WaterDrop,
    },
    {
      name: 'clover',
      added: CloverAdded,
      src: Clover,
    },
    {
      name: 'x',
      added: XAdded,
      src: X,
    },
    {
      name: 'flower',
      added: FlowerAdded,
      src: Flower,
    },
    {
      name: 'donut',
      added: DonutAdded,
      src: Donut,
    },
    {
      name: 'fork',
      added: ForkAdded,
      src: Fork,
    },
    {
      name: 'ball',
      added: BallAdded,
      src: Ball,
    },
    {
      name: 'double',
      added: DoubleAdded,
      src: Double,
    },
    {
      name: 'magnet',
      added: MagnetAdded,
      src: Magnet,
    },
  ];

  const [selectedCandy, setSelectedCandy] = useState(-1);
  const [category, setCategory] = useState('행복해지고 싶은 나');
  const [added, setAdded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const handleCandyClick = (id: number) => (e: React.MouseEvent<EventTarget>) => {
    id === selectedCandy ? setSelectedCandy(-1) : setSelectedCandy(id);
  };

  const handleNextClick = () => {
    selectedCandy > -1 ? setAdded(true) : alert('아이콘을 선택하세요');
  };

  const classes = useStyles();

  return (
    <Dialog>
      {!added ? (
        <>
          <Title>캔디 카테고리 추가하기</Title>
          <Main>
            <Instruction>원하는 캔디 아이콘을 선택하세요</Instruction>
            <CandyBox>
              {candyList.map((el, idx) => {
                return (
                  <Candy key={idx} onClick={handleCandyClick(idx)}>
                    <CandyIcon selectedCandy={selectedCandy} idx={idx}>
                      <Image src={el.src} alt='' width='48px' height='48px' />
                    </CandyIcon>
                    <CheckIcon selectedCandy={selectedCandy} idx={idx}>
                      <Image src={Check} alt='' />
                    </CheckIcon>
                  </Candy>
                );
              })}
            </CandyBox>
          </Main>
          <Line>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                id='standard-basic'
                style={{
                  width: '230px',
                }}
                inputProps={{
                  style: {
                    fontFamily: 'var(--roboto)',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '28px',
                    lineHeight: '33px',
                    letterSpacing: '-0.022em',
                    color: 'var(--black)',
                    textAlign: 'center',
                  },
                }}
                value={category}
                onChange={handleChange}
              />
            </form>
            를 위한
          </Line>
          <Button text='추가하기' size='sm' buttonColor='peach' color='black' onClick={handleNextClick} />
        </>
      ) : (
        <CategoryAdded category={category} candyList={candyList} selectedCandy={selectedCandy} />
      )}
    </Dialog>
  );
}
