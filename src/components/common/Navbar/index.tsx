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
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  justify-content: center;
  /* margin-right: 54px;
  margin-left: 40px; */
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileIcon = styled.div`
  margin-right: 16px;
  cursor: pointer;
  width: 28px;
  height: 28px;
`;

const RingIcon = styled.div`
  margin-right: 16px;
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
  { name: '?????? ???', href: getRoutesName.home, path: ['/', ''] },
  {
    name: '?????? ??????',
    href: getRoutesName.wish.total,
    path: ['/wish', '/wish/total', '/wish/detail/[cid]', '/wish/category/[slug]', '/wish/category'],
  },
  { name: '????????? ??????', href: getRoutesName.complete, path: ['/complete', '/complete/[id]'] },
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
        content: '???????????? ?????????????????? 1?????? ???????????????. ????????? ??????????????????.',
        date: '7??? 16???',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
    ],
    completed: [
      {
        content: '???????????????????????? ?????????????????? ????????? ???????????????.',
        date: '7??? 16???',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
      {
        content: '???????????? ??????????????? ???????????????.',
        date: '7??? 16???',
        candy: 'https://dummyimage.com/35x35/000/fff',
      },
      {
        content: '???????????? ??????????????? ???????????????.',
        date: '7??? 16???',
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
          <ProfileIcon>
            <Image onClick={handleMoveToLogin} src={Profile} alt='' />
          </ProfileIcon>
          <RingIcon>
            <Image src={Ring} onClick={openNotice} alt='' />
          </RingIcon>
          {isNoticeOpen && <NoticeModal notices={notices} />}
          <AddCandyButton onClick={handleOpenModal}>??????????????????</AddCandyButton>
        </Buttons>
      </Wrapper>
    </Container>
  );
}
