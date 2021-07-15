import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo, Profile, Ring } from '../../../../public/assets/icons';
import SearchBar from '../SearchBar';
import NoticeModal from '../NoticeModal';
import { getRoutesName } from '../../../utils/routes';

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  padding: 0 110px;
  min-width: 1440px;
  height: 106px;
`;

const Menus = styled.div`
  display: flex;
  flex: 2.4;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled.a``;

const Menu = styled.a<{ active?: boolean }>`
  opacity: ${({ active }) => (active ? 1 : 0.2)};
  opacity: 0.2;
  cursor: pointer;
  line-height: 32px;
  color: var(--black);
  font-family: var(--nanum);
  font-size: 1.75rem;
  font-size: 28px;
  font-weight: bold;
  font-weight: 800;
`;

const SearchArea = styled.div`
  display: flex;
  flex: 2.7;
  justify-content: flex-end;
  margin-right: 54px;
`;

const Buttons = styled.div`
  display: flex;
  flex: 1.3;
  align-items: center;
  justify-content: space-between;
`;

const ProfileIcon = styled(Image)`
  cursor: pointer;
  width: 28px;
  height: 28px;
`;

const RingIcon = styled(Image)`
  cursor: pointer;
  width: 48px;
  height: 48px;
`;

const AddCandyButton = styled.button`
  border: 2px solid var(--peach);
  border-radius: 24px;
  background-color: var(--white);
  cursor: pointer;
  width: 192px;
  height: 47px;
  text-align: center;
  line-height: 23px;
  color: var(--peach);
  font-family: var(--roboto);
  font-size: 20px;
  font-weight: bold;
`;

interface NavMenu {
  name: string;
  href: string;
}

const menus: NavMenu[] = [
  { name: '캔디 홈', href: getRoutesName.home },
  { name: '담은 캔디', href: getRoutesName.wish.total },
  { name: '완료한 캔디', href: getRoutesName.complete },
];

export default function Navbar() {
  const { asPath } = useRouter();
  const [isNoticeOpen, setIsNoticeOpen] = React.useState(false);

  const openNotice = () => {
    setIsNoticeOpen((prev) => !prev);
  };

  const notices = {
    notCompleted: [
      {
        content: '한강에서 라이딩하기가 1일이 지났습니다. 캔디를 선물해보세요.',
        date: '7월 16일',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
    ],
    completed: [
      {
        content: '산타마리아노벨라 엔젤디피렌체 향수를 선물했어요.',
        date: '7월 16일',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
      {
        content: '시원스쿨 프랑스어를 선물했어요.',
        date: '7월 16일',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
      {
        content: '시원스쿨 프랑스어를 선물했어요.',
        date: '7월 16일',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
    ],
  };
  return (
    <Container>
      <Menus>
        <Link href={getRoutesName.home} passHref>
          <LogoLink>
            <Image src={Logo} alt='handycandy' />
          </LogoLink>
        </Link>
        {menus.map(({ href, name }) => (
          <Link key={name} href={href} passHref>
            <Menu active={asPath === href}>{name}</Menu>
          </Link>
        ))}
      </Menus>
      <SearchArea>
        <SearchBar />
      </SearchArea>
      <Buttons>
        <ProfileIcon src={Profile} />
        <RingIcon src={Ring} onClick={openNotice} />
        {isNoticeOpen && <NoticeModal notices={notices} />}
        <AddCandyButton>캔디추가하기</AddCandyButton>
      </Buttons>
    </Container>
  );
}
