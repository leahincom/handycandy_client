import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import DateDropdown from './Dropdown/Date';
import AddCandyMessage from './AddCandyMessage';
import CandyAdded, { CandyAddedProps } from './CandyAdded';

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

export default function AddCandyDate({ category, selectedCategory, candy }: CandyAddedProps) {
  const [goBefore, setGoBefore] = useState(false);
  const [added, setAdded] = useState(false);

  const handleFormerClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setGoBefore(true);
  };
  const handleNextClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setAdded(true);
  };

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

  if (added) {
    return <AddCandyMessage category={category} selectedCategory={selectedCategory} candy={candy} />;
  }

  if (goBefore) {
    return <CandyAdded category={category} selectedCategory={selectedCategory} candy={candy} />;
  }

  return (
    <>
      <Title>캔디데이를 정해주세요.</Title>
      <Desc>
        <Line style={{ zIndex: 5 }}>
          <DateDropdown dropdownList={yearList} basis={year} setBasis={setYear} />
          <DateDropdown dropdownList={monthList} basis={month} setBasis={setMonth} />
          <DateDropdown dropdownList={dayList} basis={day} setBasis={setDay} />
        </Line>
        <div style={{ marginBottom: '17px' }} />
        <Line>날짜를 설정하면 핸디캔디가 알림을 드릴 거예요.</Line>
      </Desc>
      <ButtonBar>
        <Button text='뒤로가기' size='sm' buttonColor='gray' color='black' onClick={handleFormerClick} />
        <div style={{ margin: '9px' }} />
        <Button text='다음' size='sm' buttonColor='peach' color='black' onClick={handleNextClick} />
      </ButtonBar>
    </>
  );
}
