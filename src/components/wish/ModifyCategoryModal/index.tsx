import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation, QueryClient } from 'react-query';
import { putEditCategory } from '../../../pages/api/usePuts/putEditCategory';
import { Donut, Flower, Magnet, WaterDrop, Double } from '../../../../public/assets/candy';
import Button from '../../common/Button';
import { candyIconList } from '../../../utils/categoryIcons';
import { CategoryList } from '../../../pages/api/useGets/getCategoryList';
import CategoryDropdown from './CategoryDropdown';
import ImageContainer from './ImageContainer';
import DeleteCategoryModal from './DeleteCategoryModal';

interface BackgroundProps {
  isOpen: boolean;
}

const Background = styled.div<BackgroundProps>`
  display: ${({ isOpen }) => (isOpen ? 'box' : 'none')};
  position: fixed;
  top: 0%;
  left: 0%;
  opacity: 0.4;
  background-color: var(--black);
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div<BackgroundProps>`
  box-sizing: border-box;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  padding-top: 47px;
  padding-bottom: 42px;
  width: 727px;
  height: 711px;
`;

const Title = styled.div`
  margin-bottom: 41px;
  text-align: center;
  line-height: 25px;
  font-family: var(--nanum);
  font-size: 22px;
  font-weight: 800;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 29px;
  margin-bottom: 33px;
  line-height: 130%;
  font-family: var(--roboto);
  font-size: 18px;
`;

const CategoryInfo = styled.div`
  display: flex;
  margin-top: 18px;
`;

const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 42px;
  width: 486px;
  line-height: 130%;
  font-family: var(--roboto);
  font-size: 18px;

  p:nth-of-type(2) {
    color: #5a5a5a;
  }
`;

const InputBox = styled.input`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-left: 20px;
  border: 1px solid var(--gray-3);
  border-radius: 17px;
  padding-left: 37px;
  width: 365px;
  height: 50px;
  line-height: 28px;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const DeleteButton = styled.div`
  margin-top: 19px;
  margin-bottom: 11px;
  cursor: pointer;
  line-height: 28px;
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: bold;

  &:hover {
    color: var(--gray-6);
  }
`;

export interface ModifyCategoryModalProps {
  isOpen: boolean;
  setIsOpen: any;
  selectedCategory: string;
  setSelectedCategory: any;
  categoryList: CategoryList[];
  preview: string[];
}

export default function ModifyCategoryModal({
  isOpen,
  setIsOpen,
  selectedCategory,
  setSelectedCategory,
  categoryList,
  preview,
}: ModifyCategoryModalProps) {
  const queryClient = new QueryClient();
  const mutation = useMutation('categoryList', putEditCategory);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>(
    categoryList.filter((category: CategoryList) => category.category_id === selectedCategory)[0].name,
  );
  const tempImage = categoryList.filter((category) => category.category_id === selectedCategory)[0].category_image_url;
  const [categoryImage, setCategoryImage] = useState<string>(
    candyIconList.filter((icon) => icon.name === tempImage)[0].src.src,
  );

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const deleteModalOpen = () => {
    setIsDelete(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleSubmit = () => {
    mutation.mutate({ category_name: categoryName, category_image_url: categoryImage });
    setIsOpen(false);
  };

  const candyImage = categoryList.filter((category: CategoryList) => category.category_id === selectedCategory)[0]
    .category_image_url;

  return (
    <>
      {!isDelete ? (
        <>
          <Background isOpen={isOpen} onClick={handleCloseClick} />
          <Container isOpen={isOpen}>
            <Title>카테고리 수정</Title>
            <ImageContainer
              candyImg={candyIconList.filter((icon) => icon.name === candyImage)[0].src.src}
              firstImg={preview[0]}
              secondImg={preview[1]}
              thirdImg={preview[2]}
            />
            <CategoryWrapper>
              <p>카테고리명</p>
              <CategoryInfo>
                <CategoryDropdown
                  setCategoryImage={setCategoryImage}
                  categoryImage={categoryImage}
                  categoryList={categoryList}
                  setSelectedCategory={setSelectedCategory}
                />
                <InputBox value={categoryName} onChange={handleInputChange} />
              </CategoryInfo>
            </CategoryWrapper>
            <hr
              style={{
                border: '1px solid var(--gray-3)',
                width: '486px',
              }}
            />
            <DeleteWrapper>
              <p>작업</p>
              <DeleteButton onClick={deleteModalOpen}>카테고리 삭제</DeleteButton>
              <p>카테고리와 모든 캔디들은 영구적으로 삭제됩니다.</p>
            </DeleteWrapper>
            <Button text='완료' size='sm' buttonColor='peach' color='black' onClick={handleSubmit} />
          </Container>
        </>
      ) : (
        <DeleteCategoryModal
          selectedCategory={selectedCategory}
          candy={
            categoryList.filter((category: CategoryList) => category.category_id === selectedCategory)[0]
              .category_image_url
          }
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
    </>
  );
}
