import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { AddIcon, WishedBackground } from '../../../../public/assets/icons';

import Navigation from '../../../components/common/Navigation';
import CategoryCard, { CategoryCardProps } from '../../../components/common/CategoryCard';
const Container = styled.div`
  width: 1920px;
  height: 2286px;
`;
const TopContainer = styled.div`
  background: url('/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Ficons%2FWishedBackground.d57609740f3e21029f9fec81c477a5f5.svg&w=3840&q=75');
  width: 1920px;
  height: 276px;
`;

const TopTitle = styled.div`
  margin-bottom: 5px;
  margin-left: 241px;
  padding-top: 95px;
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
  margin-left: 241px;
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

const AddButton = styled(Image)``;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  background: rgba(231, 231, 231, 0.2);
  padding-top: 50px;
`;
const CandyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 52px;
  width: 1440px;
  > div {
    margin-right: 43px;
    margin-bottom: 52px;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  .empty {
    width: 197px;
  }
`;

export default function CategoryCandy() {
  const router = useRouter();
  return (
    <Container>
      <TopContainer>
        <TopTitle>담은 캔디</TopTitle>
        <TopSubTitle>나만의 캔디들을 마음껏 담아보세요</TopSubTitle>
      </TopContainer>
      <BodyContainer>
        <Header>
          <div className='empty'></div>
          <Navigation tab={1} />
          <AddButton src={AddIcon} />
        </Header>

        <CandyContainer>
          <CategoryCard
            candyImg='https://dummyimage.com/72x72/000/fff'
            category='고생한 나를 위한 캔디'
            candynum={20}
            date='3'
            firstImg='https://dummyimage.com/184x255/000/fff'
            secondImg='https://dummyimage.com/151x127/000/fff'
            thirdImg='https://dummyimage.com/151x127/000/fff'
            onClick={() => router.push({ pathname: '/wish/category/[slug]', query: { slug: 0 } })}
          />
          <CategoryCard
            candyImg='https://dummyimage.com/72x72/000/fff'
            category='고생한 나를 위한 캔디'
            candynum={20}
            date='3'
            firstImg='https://dummyimage.com/184x255/000/fff'
            secondImg='https://dummyimage.com/151x127/000/fff'
            thirdImg='https://dummyimage.com/151x127/000/fff'
            onClick={() => router.push({ pathname: '/wish/category/[slug]', query: { slug: 0 } })}
          />
          <CategoryCard
            candyImg='https://dummyimage.com/72x72/000/fff'
            category='고생한 나를 위한 캔디'
            candynum={20}
            date='3'
            firstImg='https://dummyimage.com/184x255/000/fff'
            secondImg='https://dummyimage.com/151x127/000/fff'
            thirdImg='https://dummyimage.com/151x127/000/fff'
            onClick={() => router.push({ pathname: '/wish/category/[slug]', query: { slug: 0 } })}
          />
          <CategoryCard
            candyImg='https://dummyimage.com/72x72/000/fff'
            category='고생한 나를 위한 캔디'
            candynum={20}
            date='3'
            firstImg='https://dummyimage.com/184x255/000/fff'
            secondImg='https://dummyimage.com/151x127/000/fff'
            thirdImg='https://dummyimage.com/151x127/000/fff'
            onClick={() => router.push({ pathname: '/wish/category/[slug]', query: { slug: 0 } })}
          />
        </CandyContainer>
      </BodyContainer>
    </Container>
  );
}
