import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles, TextField } from '@material-ui/core';
import { Donut, Ball } from '../../../../public/assets/candy';
import { DonutAdded, BallAdded } from '../../../../public/assets/candyAdded';
import Button from '../../common/Button';
import CategoryDropdown from './Dropdown/Category';
import CandyAdded from './CandyAdded';

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
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
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

const Desc = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  align-items: center;
  line-height: 33px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
`;

const LinkBox = styled.input`
  box-sizing: border-box;
  border: 1px solid var(--gray-3);
  border-radius: 30px;
  background: var(--gray-1);
  padding: 15px 0 15px 54px;
  width: 520px;
  height: 52px;
  line-height: 23px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 20px;
  font-weight: 500;
  font-style: normal;

  &::placeholder {
    color: var(--gray-5);
  }

  &:focus {
    outline: none;
  }
`;

export default function AddCandy() {
  const category = [
    {
      image: Donut,
      added: DonutAdded,
      name: '행복해지고 싶은 나',
    },
    {
      image: Ball,
      added: BallAdded,
      name: '바쁜 일상이 끝난 후의 나',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [candy, setCandy] = useState('필보이드 핸드크림');
  const [added, setAdded] = useState(false);
  const [link, setLink] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.id === 'standard-basic') {
      setCandy(e.target.value);
    } else {
      setLink(e.target.value);
    }
  };

  const classes = useStyles();

  return (
    <Dialog>
      {!added ? (
        <>
          <Title>캔디 추가하기</Title>
          <Desc>
            <Line style={{ zIndex: 5 }}>
              <CategoryDropdown
                category={category}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              를 위한 <br />
            </Line>
            <div style={{ marginBottom: '17px' }} />
            <Line>
              <form className={classes.root} noValidate autoComplete='off'>
                <TextField
                  id='standard-basic'
                  style={{ width: '311px' }}
                  value={candy}
                  onChange={handleChange}
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
                />
              </form>
              캔디를 줄거예요.
            </Line>
          </Desc>
          <LinkBox placeholder='링크를 입력하세요' value={link} onChange={handleChange} />
          <Button
            text='다음'
            size='sm'
            buttonColor='peach'
            color='black'
            onClick={() => (link ? setAdded(true) : alert('링크를 입력하세요'))}
          />
        </>
      ) : (
        <CandyAdded category={category} selectedCategory={selectedCategory} candy={candy} />
      )}
    </Dialog>
  );
}
