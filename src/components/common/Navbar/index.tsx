import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { openCandyModal } from '../../../states';
import { Logo, Profile, Ring } from '../../../../public/assets/icons';
import SearchBar from '../SearchBar';
import NoticeModal from '../NoticeModal';
import { getRoutesName } from '../../../utils/routes';

const Container = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 1440px;
  height: 106px;
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled.a`
  margin-right: 30px;
`;

const Menu = styled.a<{ active?: boolean }>`
  opacity: ${({ active = false }) => (active ? 1 : 0.2)};
  opacity: 0.2;
  margin-right: 30px;
  cursor: pointer;
  line-height: 32px;
  color: var(--black);
  font-family: var(--nanum);
  font-size: 1.75rem;
  font-size: 28px;
  font-weight: bold;
  font-weight: 800;
  &[data-active] {
    opacity: 1;
  }
`;

const SearchArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 54px;
  margin-left: 40px;
`;

const Buttons = styled.div`
  display: flex;
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
  path: string[];
}

const menus: NavMenu[] = [
  { name: '캔디 홈', href: getRoutesName.home, path: ['/', ''] },
  {
    name: '담은 캔디',
    href: getRoutesName.wish.total,
    path: ['/wish', '/wish/total', '/wish/detail/[cid]', '/wish/category/[slug]', '/wish/category'],
  },
  { name: '완료한 캔디', href: getRoutesName.complete, path: ['/complete', '/complete/[id]'] },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const router = useRouter();
  const [isNoticeOpen, setIsNoticeOpen] = React.useState(false);

  const [, setOpenModal] = useAtom(openCandyModal);

  const openNotice = () => {
    setIsNoticeOpen((prev) => !prev);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleMoveToLogin = () => {
    router.push('/signin');
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
      <Wrapper>
        <Menus>
          <Link href={getRoutesName.home} passHref>
            <LogoLink>
              <Image src={Logo} alt='handycandy' />
            </LogoLink>
          </Link>
          {menus.map(({ href, name, path }) => {
            const active = path.some((p) => p === pathname);
            return (
              <Link key={name} href={href} passHref>
                <Menu active={active} data-active={active ? '' : undefined}>
                  {name}
                </Menu>
              </Link>
            );
          })}
        </Menus>
        <SearchArea>
          <SearchBar />
        </SearchArea>
        <Buttons>
          <ProfileIcon onClick={handleMoveToLogin} src={Profile} />
          <RingIcon src={Ring} onClick={openNotice} />
          {isNoticeOpen && <NoticeModal notices={notices} />}
          <AddCandyButton onClick={handleOpenModal}>캔디추가하기</AddCandyButton>
        </Buttons>
      </Wrapper>
    </Container>
  );
}
