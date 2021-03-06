import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ToggleButton } from '../../../../public/assets/icons';
import { CategoryList } from '../../../pages/api/useGets/getCategoryList';
import { candyIconList } from '../../../utils/categoryIcons';

const Dropdown = styled.div<{ isOpen: boolean }>`
  box-sizing: border-box;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gray-3);
  border-radius: 17px;
  border-bottom-left-radius: ${(props) => (props.isOpen ? '0' : '17px')};
  border-bottom-right-radius: ${(props) => (props.isOpen ? '0' : '17px')};
  background-color: var(--white);
  cursor: pointer;
  width: 101px;
  height: 50px;
`;

const Options = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  border: 1px solid var(--gray-3);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
  background-color: var(--white);
  width: 101px;
  height: 238px;
`;

const Wrapper = styled.div`
  margin: 6px 5px 0 8px;
  width: 88px;
  height: 224px;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    border-radius: 5px;
    background: #c4c4c4;
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #c4c4c4;
  }
`;

const Option = styled.div`
  cursor: pointer;

  div {
    border-radius: 6px;
    background: var(--white);
    padding: 3px 0;
    width: 78px;
    height: 44px;
    text-align: center;

    :hover {
      background: #f2f2f2;
    }
  }
`;

const CategoryIcon = styled.img`
  margin-right: 13px;
  width: 36px;
  height: 36px;
`;

const Toggle = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => props.isOpen && 'rotate(180deg)'};
  transition: all 0.2s linear;
  cursor: pointer;
  width: 15px;
  height: 100%;
`;

export interface CategoryDropdownProps {
  setSelectedCategory: any;
  categoryList: CategoryList[];
  categoryImage: string;
  setCategoryImage: any;
}

export default function CategoryDropdown({
  setSelectedCategory,
  categoryList,
  categoryImage,
  setCategoryImage,
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (category_id: string) => {
    const imageName = categoryList.filter((category) => category.category_id === category_id)[0].category_image_url;
    setSelectedCategory(category_id);
    setCategoryImage(candyIconList.filter((icon) => icon.name === imageName)[0].src.src);
  };

  return (
    <Dropdown isOpen={isOpen} onClick={openDropdown}>
      <CategoryIcon src={categoryImage} alt='' />
      <Options isOpen={isOpen}>
        <Wrapper>
          {categoryList.map((category, idx) => {
            return (
              <Option key={idx} onClick={() => handleOptionClick(category.category_id)}>
                <Image
                  src={candyIconList.filter((icon) => icon.name === category.category_image_url)[0].src.src}
                  alt=''
                  width='36px'
                  height='36px'
                />
              </Option>
            );
          })}
        </Wrapper>
      </Options>
      <Toggle isOpen={isOpen}>
        <Image src={ToggleButton} alt='' />
      </Toggle>
    </Dropdown>
  );
}
