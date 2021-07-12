import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Search } from '../../../../public/assets/icons';

const SearchBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 30px;
  background-color: #f0f2f5;
  padding-left: 29px;
  width: 589px;
  height: 47px;
`;

const InputField = styled.input`
  display: flex;
  justify-content: center;
  margin-left: 13px;
  outline: none;
  background-color: #f0f2f5;
  width: 420px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 18px;
`;

export default function Navbar() {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchInput('');
  };

  return (
    <SearchBar>
      <Image src={Search} alt='' />
      <form onSubmit={handleSearch}>
        <InputField type='text' placeholder='캔디 검색' value={searchInput} onChange={handleInputChange} />
      </form>
    </SearchBar>
  );
}
