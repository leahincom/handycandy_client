import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/dist/client/image';
import { useAtom } from 'jotai';
import { searchToken } from '../../../states';
import { NoResult } from '../../../../public/assets/icons';
import CandyCard from '../../../components/common/CandyCard/';
import CompleteCard from '../../reward/Card/';

const List = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 70px 240px 0 240px;
`;

const TitleBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid var(--gray-4);
  padding-bottom: 14px;
  height: fit-content;
`;

const Title = styled.span`
  margin-right: 15px;
  line-height: 32px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--nanum);
  font-size: 28px;
  font-weight: 800;
  font-style: normal;
`;

const Text = styled.span<{ size: number; weight: string; color: string }>`
  line-height: 150%;
  letter-spacing: -0.022em;
  color: ${(props) => props.color};
  font-family: var(--roboto);
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  font-style: normal;
`;

const CardBody = styled.div<{ type: string }>`
  display: grid;
  grid-template-rows: ${(props) =>
    props.type === '담은 캔디' ? 'repeat(auto-fill, minmax(383px, 1fr))' : 'repeat(auto-fill, minmax(224px, 1fr))'};
  grid-template-columns: ${(props) =>
    props.type === '담은 캔디' ? 'repeat(auto-fill, minmax(254px, 1fr))' : 'repeat(auto-fill, minmax(330px, 1fr))'};
  grid-gap: 38px;
  padding: 56px 0;
  width: 100%;
`;

const EmptyBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyIcon = styled.div`
  padding: 88px 0;
`;

export interface CandyListProps {
  type: string;
}

export default function CandyList({ type }: CandyListProps) {
  const [token, setToken] = useAtom(searchToken);
  const [cards, setCards] = useState([
    {
      itemImage: 'https://dummyimage.com/254x260/000/fff',
      category: '고생한 나 자신을 위한',
      name: '모베러웍스 티셔츠',
      createdDate: 15,
      plannedDate: new Date(),
    },
    {
      itemImage: 'https://dummyimage.com/254x260/000/fff',
      category: '고생한 나 자신을 위한',
      name: '모베러웍스 티셔츠',
      createdDate: 15,
      plannedDate: new Date(),
    },
  ]);

  // useEffect(
  //   (() => {
  //     // api GET
  //     // setcards()
  //   })(),
  //   [cards],
  // );

  return (
    <List>
      <TitleBox>
        <Title>{type === '담은 캔디' ? '담은 캔디' : '완료한 캔디'}</Title>
        <Text size={20} weight='normal' color='var(--gray-6)'>
          총
          <Text size={20} weight='bold' color='var(--gray-6)' style={{ marginLeft: '8px' }}>
            {cards.length}
          </Text>
          건의 캔디가 검색되었어요
        </Text>
      </TitleBox>
      {!cards ? (
        <EmptyBody>
          <EmptyIcon>
            <Image src={NoResult} alt='' />
          </EmptyIcon>
          <Text size={28} weight='bold' color='var(--gray-7)'>
            검색결과가 없어요!
          </Text>
          <Text size={18} weight='normal' color='var(--gray-5)'>
            다른 검색어로 소중한 캔디를 찾아보세요
          </Text>
        </EmptyBody>
      ) : (
        <CardBody type={type}>
          {cards.map((card, idx) =>
            type === '담은 캔디' ? (
              <CandyCard key={idx} candy={card} />
            ) : (
              <CompleteCard
                key={idx}
                candy={card.itemImage}
                category={card.category}
                title={card.name}
                date={new Date()}
              />
            ),
          )}
        </CardBody>
      )}
    </List>
  );
}