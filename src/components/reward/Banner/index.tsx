import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { CommonBanner } from '../../../../public/assets/banners';

const Container = styled(Image)`
  position: relative;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 98px 240px 104px;
`;

const Title = styled.h1`
  line-height: 135%;
  color: var(--black);
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 44px;
  font-weight: 800;
`;

const Desc = styled.h2`
  margin-top: 6px;
  line-height: 28px;
  color: #919191;
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
`;

export interface RewardBannerProps {
  bannerTitle: string;
  bannerDesc: string;
}

export default function RewardBanner({
  bannerTitle = '캔디로 보상 완료하기',
  bannerDesc = '나에게 캔디를 주며 일상의 달콤한 순간을 남겨보세요',
}: RewardBannerProps) {
  return (
    <>
      <Container src={CommonBanner} layout='fixed' />
      <Contents>
        <Title>{bannerTitle}</Title>
        <Desc>{bannerDesc}</Desc>
      </Contents>
    </>
  );
}
