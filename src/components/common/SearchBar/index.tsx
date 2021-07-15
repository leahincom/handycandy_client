import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Search } from '../../../../public/assets/icons';

const SearchBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 30px;
  background-color: #f0f2f5;
  padding-left: 29px;
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
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch('');
    router.push({
      pathname: '/search',
      query: { item: search },
    });
  };

  return (
    <SearchBar>
      <Image src={Search} alt='' />
      <form onSubmit={handleSearch}>
        <InputField type='text' placeholder='캔디 검색' value={search} onChange={handleInputChange} />
      </form>
    </SearchBar>
  );
}
