import styled from 'styled-components';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { AddIcon } from '../../../../public/assets/icons';
import CategoryCard from '../../../components/common/CategoryCard';
import Navigation from '../../../components/common/Navigation';
import NavigationLayout from '../../../components/layout/NavigationLayout';
import TopHeader from '../../../components/common/TopHeader';
import { getCategoryList } from '../../../pages/api/useGets/getCategoryList';
import ModifyCategoryModal from '../../../components/wish/ModifyCategoryModal';

const Container = styled.div`
  padding-bottom: 80px;
`;

const AddButton = styled(Image)``;
const BodyContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border-radius: 50px;
  background: rgba(231, 231, 231, 0.2);
`;
const CandyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 52px;
  width: 1520px;
  > div {
    margin-right: 40px;
    margin-bottom: 52px;
  }
`;
const Header = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  padding-top: 52px;
`;

const TopHeaderWrapper = styled.div`
  margin: auto;
  max-width: 1440px;
`;

const NavTapWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
`;

export default function CategoryCandy() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [preview, setPreview] = useState<string[]>([]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const { isLoading, error, data: categoryList, status } = useQuery(['categoryList'], getCategoryList);
  return (
    <>
      <NavigationLayout
        background={
          '/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Ficons%2FWishedBackground.d57609740f3e21029f9fec81c477a5f5.svg&w=3840&q=75'
        }
      >
        <Container>
          <TopHeaderWrapper>
            <TopHeader title='담은 캔디' subTitle='나만의 캔디들을 마음껏 담아보세요' />
          </TopHeaderWrapper>

          <BodyContainer>
            <NavTapWrapper>
              <Navigation tab={1} />
            </NavTapWrapper>
            <Header>
              <AddButton src={AddIcon} />
            </Header>

            <CandyContainer>
              {categoryList?.map(
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
                    category_id={category_id}
                    candyImg={category_image_url}
                    category={name}
                    candynum={category_candy_count}
                    date={recent_update_date}
                    firstImg={image_url_one}
                    secondImg={image_url_two}
                    thirdImg={image_url_three}
                    setIsOpen={setIsOpen}
                    setSelectedCategory={setSelectedCategory}
                    setPreview={setPreview}
                  />
                ),
              )}
            </CandyContainer>
          </BodyContainer>
        </Container>
      </NavigationLayout>
      {isOpen && categoryList && (
        <ModifyCategoryModal
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          preview={preview}
        />
      )}
    </>
  );
}
