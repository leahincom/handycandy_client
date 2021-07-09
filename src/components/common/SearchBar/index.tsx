import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Line, Arrow, Search } from '../../../../public/assets/icons';

const SearchBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 30px;
  background-color: var(--gray-1);
  padding-left: 29px;
  width: 589px;
  height: 47px;
`;

const InputField = styled.input`
  display: flex;
  justify-content: center;
  margin-left: 13px;
  outline: none;
  background-color: var(--gray-1);
  width: 420px;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: var(--gray-6);
  font-size: 18px;
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;
  width: 140px;
  height: 100%;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: var(--black);
  font-size: 18px;

  &:hover {
    background-color: var(--gray-2);
  }

  & > p {
    width: 100px;
    text-align: center;
  }
`;

const Options = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: -25px;
  margin-top: 8px;
  border-radius: 15px;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
  background-color: var(--white);
  width: 196px;
  height: 131px;

  &.open {
    display: block;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white);
  cursor: pointer;
  height: 44px;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-size: 18px;

  &:hover {
    background-color: var(--gray-2);
  }

  input {
    display: flex;
    border-radius: inherit;
    background-color: inherit;
    cursor: pointer;
    padding-left: 28px;
    width: 100%;
    height: 100%;
    text-align: left;
    line-height: 21px;
    letter-spacing: -0.022em;
    color: var(--black);
    font-size: 18px;
  }

  :nth-of-type(1) {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  :nth-of-type(3) {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;

const LineIcon = styled(Image)`
  margin-right: 7px;
`;

export interface SearchBarProps {
  placeholder: string;
}

export default function Navbar({ placeholder }: SearchBarProps) {
  const options = ['모든 캔디', '담은 캔디', '완료한 캔디'];
  const [selectedValue, setSelectedValue] = useState<string>('모든 캔디');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const selectOption = (e: any): void => {
    setIsOpen((prev) => !prev);
    setSelectedValue(e.target.value);
  };

  return (
    <SearchBar>
      <Image src={Search} alt='' />
      <InputField type='text' placeholder={placeholder} />
      <LineIcon src={Line} />
      <Dropdown onClick={openDropdown}>
        <p>{selectedValue}</p>
        <Options className={`${isOpen ? 'open' : null}`}>
          {options.map((option, idx) => {
            return (
              <Option key={idx} onClick={selectOption}>
                <input type='button' value={option} />
              </Option>
            );
          })}
        </Options>
        <Image src={Arrow} alt='' />
      </Dropdown>
    </SearchBar>
  );
}