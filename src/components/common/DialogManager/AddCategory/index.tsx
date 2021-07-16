import React, { useState } from 'react';
import Image from 'next/dist/client/image';
import styled from 'styled-components';
import { makeStyles, TextField } from '@material-ui/core';
import { useMutation, QueryClient } from 'react-query';
import Button from '../../Button';
import { candyIconList } from '../../../../utils/categoryIcons';
import { Check } from '../../../../../public/assets/icons';
import { Category, NewCategory, postNewCategory } from '../../../../pages/api/usePosts/postNewCategory';
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
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
  const queryClient = new QueryClient();
  const [selectedCandy, setSelectedCandy] = useState(-1);
  const [category, setCategory] = useState('');
  const [added, setAdded] = useState(false);
  const mutation = useMutation((data: Category) => postNewCategory(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('categoryList');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const handleCandyClick = (id: number) => () => {
    id === selectedCandy ? setSelectedCandy(-1) : setSelectedCandy(id);
  };

  const handleNextClick = () => {
    if (selectedCandy > -1) {
      mutation.mutate({
        category_image_url: candyIconList[selectedCandy].src.src,
        name: category,
      });
      setAdded(true);
    } else {
      alert('아이콘을 선택하세요');
    }
  };

  const classes = useStyles();

  return (
    <>
      {!added ? (
        <>
          <Title>캔디 카테고리 추가하기</Title>
          <Main>
            <Instruction>원하는 캔디 아이콘을 선택하세요</Instruction>
            <CandyBox>
              {candyIconList.map((el, idx) => {
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
        <CategoryAdded category={category} candyList={candyIconList} selectedCandy={selectedCandy} />
      )}
    </>
  );
}
