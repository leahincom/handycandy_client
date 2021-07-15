import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navbar from '../../components/common/Navbar';
import DialogManager from '../../components/common/DialogManager';
import Banner from '../../components/search/Banner';
import CandyList from '../../components/search/CandyList';

const ListBody = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
  width: 100%;
`;

export default function Search() {
  const router = useRouter();
  const searchValue = router.query.item;

  return (
    <>
      <Navbar />
      <Banner searchValue={searchValue} />
      <ListBody>
        <CandyList type='담은 캔디' searchValue={searchValue} />
        <CandyList type='완료한 캔디' searchValue={searchValue} />
      </ListBody>
      <DialogManager />
    </>
  );
}
