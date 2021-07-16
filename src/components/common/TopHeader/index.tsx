import React from 'react';
import styled from 'styled-components';
const TopContainer = styled.div`
  margin-bottom: 40px;
  z-index: 10;
`;
const TopTitle = styled.div`
  margin-bottom: 5px;
  text-align: left;
  line-height: 59px;
  letter-spacing: -0.022em;
  color: #000000;
  font-family: var(--nanum);
  font-size: 44px;
  font-weight: 800;
  font-style: normal;
  //styleName: title;
`;

const TopSubTitle = styled.div`
  margin-bottom: 130px;
  text-align: left;
  line-height: 28px;
  letter-spacing: -0.022em;
  color: #909090;
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  //styleName: main/titlemd;
`;

export interface TopHeaderProps {
  title: string;
  subTitle?: string;
}
export default function TopHeader({ title, subTitle }: TopHeaderProps) {
  return (
    <TopContainer>
      <TopTitle>{title}</TopTitle>
      <TopSubTitle>{subTitle}</TopSubTitle>
    </TopContainer>
  );
}
