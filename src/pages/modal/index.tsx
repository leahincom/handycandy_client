import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles, TextField } from '@material-ui/core';
import { Donut, Ball } from '../../../public/assets/candy';
import { DonutAdded, BallAdded } from '../../../public/assets/candyAdded';
import Button from '../../components/common/Button';
import DateDropdown from '../../components/common/CandyEdit/Dropdown/Category';
import CategoryDropdown from '../../components/common/CandyEdit/Dropdown/Date';
import CandyEdit, { CandyEditProps } from '../../components/common/CandyEdit';
const Container = styled.div``;

const Title = styled.div`
  text-align: left;
  line-height: 25px;
  letter-spacing: -0.022em;
  font-family: NanumSquareRoundOTF;
  font-size: 22px;
  font-weight: 800;
  font-style: normal;
`;

const Decs = styled.p``;

const Thumbnail = styled.img``;
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
const Category = styled.div``;

const DateInput = styled.div``;
const Message = styled.div``;
const Name = styled.div`
  padding: 10px;
`;
export interface CandyEditModalProps extends CandyEditProps {}

export default function CandyEditModal({ candyName, candyCategory, candyDate, candyMessage }: CandyEditProps) {
  return (
    <CandyEdit
      candyImg='https://dummyimage.com/100x100/000/fff'
      candyName='핸드크림'
      candyCategory='고생한 나를 위한'
      candyDate='20200601'
      candyMessage='aaaa'
    />
  );
}
