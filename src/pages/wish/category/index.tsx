import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useQuery } from 'react-query';
import { AddIcon } from '../../../../public/assets/icons';

import Navigation from '../../../components/common/Navigation';
import CategoryCard from '../../../components/common/CategoryCard';
import NavigationLayout from '../../../components/layout/NavigationLayout';
import TopHeader from '../../../components/common/TopHeader';
import { getCategoryCandy } from '../../../pages/api/useGets/getCategoryCandy';

const Container = styled.div`
  padding-bottom: 80px;
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

const TopHeaderWrapper = styled.div`
  margin: auto;
  max-width: 1440px;
`;

const NavTapWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function CategoryCandy() {
  const router = useRouter();
  const { isLoading, error, data, status } = useQuery(['category'], () => getCategoryCandy());
  const categoryList = data;
  return (
    <NavigationLayout
      background={
        '/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Ficons%2FWishedBackground.d57609740f3e21029f9fec81c477a5f5.svg&w=3840&q=75'
      }
    >
      <Container>
        <TopHeaderWrapper>
          <TopHeader title='담은 캔디' subTitle='나만의 캔디들을 마음껏 담아보세요' />
        </TopHeaderWrapper>
        <NavTapWrapper>
          <Navigation tab={1} />
        </NavTapWrapper>
        <BodyContainer>
          <Header>
            <div className='empty'></div>
            <AddButton src={AddIcon} />
          </Header>

          <CandyContainer>
            {categoryList
              ?.slice(0, 4)
              .map(
                ({
                  category_id,
                  name,
                  recent_update_date,
                  category_image_url,
                  category_candy_count,
                  image_url_one,
                  image_url_two,
                  image_url_three,
                }) => (
                  <CategoryCard
                    key={category_id}
                    candyImg={category_image_url}
                    category={name}
                    candynum={category_candy_count}
                    date={recent_update_date}
                    firstImg={image_url_one}
                    secondImg={image_url_two}
                    thirdImg={image_url_three}
                    onClick={() => router.push({ pathname: '/wish/category/[slug]', query: { slug: 0 } })}
                  />
                ),
              )}
          </CandyContainer>
        </BodyContainer>
      </Container>
    </NavigationLayout>
  );
}
