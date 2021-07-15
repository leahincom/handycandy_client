import styled from 'styled-components';
import React from 'react';
import { useQuery } from 'react-query';
import { useAtom } from 'jotai';
import CompleteCard from '../Card';
import { getCompletedCandy } from '../../../pages/api/useGets/getCompletedCandy';
import { CurrentMonthAtom } from '../../../states';

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

export default function CompleteContent() {
  const [curMonth] = useAtom(CurrentMonthAtom);
  const { data, isError, isLoading, error } = useQuery('complete', () => getCompletedCandy(curMonth));

  return (
    <Container>
      <CandyGrid>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error! {console.log(error)}</p>}
        {data?.result.completed_candy.map((candy, index) => (
          <CompleteCard
            candy_id={candy.candy_id}
            candy_name={candy.candy_name}
            candy_image_url={candy.candy_image_url}
            category_name={candy.category_image_url}
            category_image_url={candy.category_image_url}
            year={candy.year}
            month={candy.month}
            date={candy.date}
            key={index}
          />
        ))}
      </CandyGrid>
    </Container>
  );
}
