import React from 'react';
import styled from 'styled-components';
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
  return (
    <>
      <Navbar />
      <Banner />
      <ListBody>
        <CandyList type='담은 캔디' />
        <CandyList type='완료한 캔디' />
      </ListBody>
      <DialogManager />
    </>
  );
}
