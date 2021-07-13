import React, { useState } from 'react';
import styled from 'styled-components';
import { Donut, Flower, Magnet, WaterDrop, Double } from '../../../../public/assets/candy';
import Button from '../../common/Button';
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

const CateogoryInfo = styled.div`
  display: flex;
  margin-top: 18px;

  > span {
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
  }
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

const DeleteButton = styled.div`
  margin-top: 19px;
  margin-bottom: 11px;
  cursor: pointer;
  line-height: 28px;
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: bold;
`;

const categories = [
  {
    image: Donut,
    name: '행복한 나를 위한',
  },
  {
    image: Magnet,
    name: '바쁜 일상 후를 위한',
  },
  {
    image: WaterDrop,
    name: '휴식주기를 위한',
  },
  {
    image: Flower,
    name: '특별한 날을 위한',
  },
  {
    image: Double,
    name: '짜릿한 나를 위한',
  },
  {
    image: Double,
    name: '짜릿한 나를 위한',
  },
  {
    image: Double,
    name: '짜릿한 나를 위한',
  },
];

export default function ModifyCategoryModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [categoryName, setCategoryName] = useState<string>(categories[categoryId].name);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const deleteModalOpen = () => {
    setIsDelete(true);
  };
  return (
    <>
      {!isDelete ? (
        <>
          <Background isOpen={isOpen} />
          <Container isOpen={isOpen}>
            <Title>카테고리 수정</Title>
            <ImageContainer
              candyImg='https://dummyimage.com/364x278/000/fff'
              firstImg='https://dummyimage.com/184x255/000/fff'
              secondImg='https://dummyimage.com/364x278/000/fff'
              thirdImg='https://dummyimage.com/364x278/000/fff'
            />
            <CategoryWrapper>
              <p>카테고리명</p>
              <CateogoryInfo>
                <CategoryDropdown
                  categories={categories}
                  categoryId={categoryId}
                  setCategoryId={setCategoryId}
                  setCategoryName={setCategoryName}
                />
                <span>{categoryName}</span>
              </CateogoryInfo>
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
            <Button text='완료' size='sm' buttonColor='peach' color='black' onClick={handleCloseClick} />
          </Container>
        </>
      ) : (
        <DeleteCategoryModal candy={categories[categoryId].image} />
      )}
    </>
  );
}
