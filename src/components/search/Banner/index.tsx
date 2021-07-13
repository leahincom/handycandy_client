import React from 'react';
import styled from 'styled-components';
import Image from 'next/dist/client/image';
import { useAtom } from 'jotai';
import { SearchThin, Exclude } from '../../../../public/assets/icons';
import { searchToken } from '../../../states';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  background: rgba(207, 207, 207, 0.15);
  padding: 88px 242px;
  width: 100%;
  height: 276px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid var(--gray-7);
  padding: 0 5px;
  width: fit-content;
  height: 44px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--nanum);
  font-size: 44px;
  font-weight: 800;
  font-style: normal;
`;

const ImageStyle = styled.div`
  margin-right: 12px;
`;

const Desc = styled.p`
  line-height: 28px;
  letter-spacing: -0.022em;
  color: var(--gray-7);
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  right: 200px;
  height: 100%;
`;

export default function Banner() {
  const [token, setToken] = useAtom(searchToken);

  return (
    <Container>
      <SearchBar>
        <ImageStyle>
          <Image src={SearchThin} alt='' />
        </ImageStyle>
        {token}
      </SearchBar>
      <Desc>모든 캔디 검색결과 입니다.</Desc>
      <Circle>
        <Image src={Exclude} alt='' />
      </Circle>
    </Container>
  );
}
