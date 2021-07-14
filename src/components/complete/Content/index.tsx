import styled from 'styled-components';
import React from 'react';
import CompleteCard from '../Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px 50px 0px 0px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);
  background-color: var(--white);
  padding: 76px 240px 184px 240px;
  width: auto;
`;

const CandyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 73px;
  grid-column-gap: 40px;
`;
export interface Candy {
  candy: string;
  category: string;
  title: string;
  date: Date;
}

export interface CompleteContentProps {
  candyList: Candy[];
  candynum: number;
  date: Date;
  username: string;
}

export default function CompleteContent({ candyList }: CompleteContentProps) {
  return (
    <Container>
      <CandyGrid>
        {candyList.map((candy, index) => (
          <CompleteCard
            candy={candy.candy}
            category={candy.category}
            title={candy.title}
            date={candy.date}
            key={index}
          />
        ))}
      </CandyGrid>
    </Container>
  );
}
