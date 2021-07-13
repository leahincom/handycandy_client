import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles, TextField } from '@material-ui/core';
import Button from '../../Button';
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
} from '../../../../../public/assets/candy';
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
} from '../../../../../public/assets/candyAdded';
import { Check } from '../../../../../public/assets/icons';
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CandyBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  border: 1px solid var(--gray-1);
  border-radius: 10px;
  background: var(--gray-2);
  padding: 10px;
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

const Candy = styled.div`
  position: relative;
`;

const CandyIcon = styled.img<{ selectedCandy: number; idx: number }>`
  opacity: ${(props) => (props.selectedCandy < 0 ? 1 : props.idx === props.selectedCandy ? 1 : 0.5)};
  margin: 10px;
`;

const CheckIcon = styled.img<{ selectedCandy: number; idx: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${(props) => (props.selectedCandy > -1 && props.idx === props.selectedCandy ? 'visible' : 'hidden')};
`;

export interface AddCategoryProps {
  handleDialogState: () => void;
}

export default function AddCategory({ handleDialogState }: AddCategoryProps) {
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

  const handleAddClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setAdded(true);
  };

  const handleCandyClick = (id: number) => (e: React.MouseEvent<EventTarget>) => {
    id === selectedCandy ? setSelectedCandy(-1) : setSelectedCandy(id);
  };

  const classes = useStyles();

  return (
    <>
      {!added ? (
        <Dialog>
          <Title>캔디 카테고리 추가하기</Title>
          <Main>
            <Instruction>원하는 캔디 아이콘을 선택하세요</Instruction>
            <CandyBox>
              {candyList.map((el, idx) => {
                return (
                  <Candy key={idx} onClick={handleCandyClick(idx)}>
                    <CandyIcon src={el.src} selectedCandy={selectedCandy} idx={idx} width='43px' alt='' />
                    <CheckIcon src={Check} selectedCandy={selectedCandy} idx={idx} alt='' />
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
          <Button text='추가하기' size='sm' buttonColor='peach' color='black' onClick={handleAddClick} />
        </Dialog>
      ) : (
        <CategoryAdded
          category={category}
          candyList={candyList}
          selectedCandy={selectedCandy}
          handleDialogState={handleDialogState}
        />
      )}
    </>
  );
}
