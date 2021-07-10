import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Logo, Profile, Ring } from '../../../../public/assets/icons';
import SearchBar from '../SearchBar';
import NoticeModal from './NoticeModal';

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
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

const Menu = styled.div`
  opacity: 0.2;
  cursor: pointer;
  line-height: 32px;
  color: var(--black);
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 1.75rem;
  font-size: 28px;
  font-weight: bold;
  font-weight: 800;

  &.active {
    opacity: 1;
  }
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
  letter-spacing: -0.022em;
  color: var(--peach);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export default function Navbar() {
  const [isNoticeOpen, setIsNoticeOpen] = React.useState(false);
  const [menuState, setMenuState] = React.useState({
    activeMenu: 0,
    menus: [
      { id: 0, name: '캔디 홈' },
      { id: 1, name: '담은 캔디' },
      { id: 2, name: '완료한 캔디' },
    ],
  });

  const openNotice = () => {
    setIsNoticeOpen((prev) => !prev);
  };
  return (
    <Container>
      <Menus>
        <Image src={Logo} alt='' />
        {menuState.menus.map((menu) => (
          <Menu
            key={menu.id}
            onClick={() => setMenuState({ ...menuState, activeMenu: menu.id })}
            className={menu.id === menuState.activeMenu ? 'active' : ''}
          >
            {menu.name}
          </Menu>
        ))}
      </Menus>
      <SearchArea>
        <SearchBar />
      </SearchArea>
      <Buttons>
        <ProfileIcon src={Profile} />
        <RingIcon src={Ring} onClick={openNotice} />
        {isNoticeOpen && <NoticeModal />}
        <AddCandyButton>캔디추가하기</AddCandyButton>
      </Buttons>
    </Container>
  );
}
