import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles, TextField } from '@material-ui/core';
import { useAtom } from 'jotai';
import { Donut, Ball } from '../../../../public/assets/candy';
import { DonutAdded, BallAdded } from '../../../../public/assets/candyAdded';
import Button from '../Button';
import { DetailCandyEditModalAtom } from '../../../states';
import DateDropdown from './Dropdown/Date';
import CategoryDropdown from './Dropdown/Category';
import DeleteModal from './DeleteModal';

interface BackgroundProps {
  isOpen: boolean;
}

const Background = styled.div<BackgroundProps>`
  display: ${({ isOpen }) => (isOpen ? 'box' : 'none')};
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div<BackgroundProps>`
  display: ${({ isOpen }) => (isOpen ? 'box' : 'none')};
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  z-index: 3;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* handycandy/white */
  background: var(--white);
  width: 727px;
  height: 889px;
  font-family: var(--roboto);
`;
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
const Title = styled.div`
  margin-top: 54px;
  margin-bottom: 45px;
  text-align: center;
  line-height: 25px;
  letter-spacing: -0.022em;
  font-size: 22px;
  font-weight: 800;
  font-style: normal;
`;

const Text = styled.div`
  margin-bottom: 20px;
  text-align: left;
  line-height: 21px;
  letter-spacing: -0.022em;
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  //styleName: popup/title2;
`;
const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 20px;
  width: 486px;
`;
const InfoTitle = styled.div`
  margin-bottom: 10px;
  text-align: left;
  line-height: 28px;
  letter-spacing: -0.022em;
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  //styleName: cardview/title;
`;
const InfoSubTitle = styled.div`
  text-align: left;
  line-height: 23px;
  letter-spacing: -0.022em;
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: 400;
  font-style: normal; //styleName: main/sub;
`;
const CandyName = styled.div``;
const Category = styled.div`
  margin-top: 30px;
`;

const DateInput = styled.div`
  margin-top: 30px;
  width: 486px;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 486px;
`;
const TextBox = styled.textarea`
  box-sizing: border-box;
  opacity: 0.5;
  border: 1px solid var(--gray-1);
  border-radius: 10px;
  background: var(--gray-2);
  padding: 3px 15px;
  width: 486px;
  height: 113px;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 14px;
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
  width: 486px;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: var(--gray-5);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
`;
const InputDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border: 1px solid #dcdcdc;
  border-radius: 17px;
  background: #ffffff;
  width: 486px;
  height: 50px;
  div {
    z-index: 10;
  }
  form {
    div {
      div::before {
        border: none !important;
      }
    }
  }
`;
const ButtonDiv = styled.div`
  margin-top: 39px;
`;
const DropdownDiv = styled.div`
  display: flex;
  align-items: center;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: var(--gray-5);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  div {
    z-index: 9;
  }
`;
const BorderLine = styled.div`
  /* handycandy/gray/3 */

  border: 1px solid #dcdcdc;
  width: 486px;
  height: 0px;
`;

export interface CandyEditProps {
  candyImg: string;
  candyName: string;
  candyCategory: string;
  candyDate: string;
  candyMessage: string;
}

export default function CandyEdit({ candyImg, candyCategory, candyMessage }: CandyEditProps) {
  const category = [
    {
      image: Donut,
      added: DonutAdded,
      name: candyCategory,
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

  const date = new Date();

  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDate());

  const yearList: number[] = [];
  const monthList: number[] = [];
  const dayList: number[] = [];

  for (let i = 0; i < 31; i++) {
    yearList.push(date.getFullYear() + i);
    if (i < 12) {
      monthList.push(i + 1);
    }
  }

  if (month === 2) {
    for (let i = 0; i < 28; i++) {
      dayList.push(i + 1);
    }
    if ((year % 4 === 0 && year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
      dayList.push(29);
    }
  } else if (month < 8) {
    for (let i = 0; i < 30; i++) {
      dayList.push(i + 1);
    }
    if (month % 2 !== 0) {
      dayList.push(31);
    }
  } else if (month >= 8) {
    for (let i = 0; i < 30; i++) {
      dayList.push(i + 1);
    }
    if (month % 2 === 0) {
      dayList.push(31);
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    e.preventDefault();
    setCandy(e.target.value);
  };

  const classes = useStyles();
  const [, setCount] = useState(0);
  const handleMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const script = e.target.value;
    setCount(script.length);
  };
  const [isOpen, setIsOpen] = useAtom(DetailCandyEditModalAtom);
  const handleClickToClose = () => {
    setIsOpen(false);
  };
  const handleNextClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setAdded(true);
    setIsOpen(false);
  };

  return (
    <>
      {!added ? (
        <>
          <Background isOpen={isOpen} onClick={handleClickToClose} />
          <Container isOpen={isOpen}>
            <Title>개별 캔디 수정</Title>
            <CandyName>
              <Text>캔디명</Text>
              <InputDiv>
                <form className={classes.root} noValidate autoComplete='off'>
                  <TextField
                    id='outlined-basic'
                    style={{ width: '311px', border: 'none' }}
                    value={candy}
                    onChange={handleChange}
                    inputProps={{
                      style: {
                        fontFamily: 'var(--roboto)',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: '22px',
                        lineHeight: '25px',
                        letterSpacing: '-0.022em',
                        color: 'var(--black)',
                        textAlign: 'center',
                        border: 'none',
                        width: '450px',
                      },
                    }}
                  />
                </form>
              </InputDiv>
            </CandyName>
            <Category>
              <Text>카테고리</Text>
              <InputDiv>
                <CategoryDropdown
                  category={category}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </InputDiv>
            </Category>
            <DateInput>
              <Text>날짜</Text>
              <DropdownDiv style={{ zIndex: 5 }}>
                <DateDropdown dropdownList={yearList} basis={year} setBasis={setYear} />
                <DateDropdown dropdownList={monthList} basis={month} setBasis={setMonth} />
                <DateDropdown dropdownList={dayList} basis={day} setBasis={setDay} />
              </DropdownDiv>
            </DateInput>
            <Message>
              <Text>캔디데이에 받을 메세지</Text>
              <TextBox onChange={handleMessageChange}>{candyMessage}</TextBox>
              <CountChar>{candyMessage.length}자</CountChar>
            </Message>
            <BorderLine />
            <InfoText>
              <InfoTitle>캔디 삭제</InfoTitle>
              <InfoSubTitle>캔디가 영구적으로 삭제됩니다.</InfoSubTitle>
            </InfoText>
            <ButtonDiv>
              <Button buttonColor='peach' color='gray' text='완료' size='md' onClick={handleNextClick} />
            </ButtonDiv>
          </Container>
        </>
      ) : (
        <DeleteModal candy={candyImg} />
      )}
    </>
  );
}
