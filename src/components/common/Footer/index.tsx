import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import { Logo, Mail, Instagram } from '../../../../public/assets/icons/';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: var(--gray-2);
  padding: 50px 238px 28px 238px;
  width: 100%;
  height: 264px;
`;

const LogoBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 15px;
  height: 100%;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 16px;
  letter-spacing: -0.022em;
  color: #5a5a5a;
  font-family: var(--nanum);
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
`;

const LogoIcon = styled.div`
  margin-bottom: 12px;
`;

const Button = styled.button`
  flex: none;
  flex-grow: 0;
  order: 0;
  margin: 0;
  border-radius: 12px;
  background: var(--white);
  padding: 10px 24px;
  text-align: center;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
`;

const Copyright = styled.p`
  line-height: 19px;
  letter-spacing: -0.022em;
  color: #808080;
  font-family: var(--roboto);
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  margin: 0 16px 0 0;
  height: 100%;
`;

const Title = styled.p`
  margin: 0 0 20px 0;
  line-height: 21px;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 10px 0;
  line-height: 19px;
  color: #5a5a5a;
  font-family: var(--roboto);
  font-size: 16px;
  font-weight: normal;
  font-style: normal;

  &:focus {
    outline: 0;
  }
`;

const ContactIcon = styled.div`
  margin-right: 10px;
`;

export default function Footer() {
  return (
    <Container>
      <LogoBar>
        <LogoBox>
          <LogoIcon>
            <Image src={Logo} alt='' />
          </LogoIcon>
          @Beta Version 2021
        </LogoBox>
        <Button>???????????? ????????????</Button>
        <Copyright>Copyright ?? 2021 All Rights Reserved. SOPT Candy Makers</Copyright>
      </LogoBar>
      <Menu>
        <Title>?????? ?????????</Title>
        <ItemBox>
          <Link href='/' passHref={true}>
            <Item>??? ????????????</Item>
          </Link>
          <Link href='/' passHref={true}>
            <Item>????????? ??????</Item>
          </Link>
        </ItemBox>
      </Menu>
      <Menu>
        <Title>???????????? ??????</Title>
        <ItemBox>
          <Link href='/' passHref={true}>
            <Item>???????????? ??????</Item>
          </Link>
          <Link href='/' passHref={true}>
            <Item>????????????</Item>
          </Link>
          <Link href='/' passHref={true}>
            <Item>?????? ?????????</Item>
          </Link>
        </ItemBox>
      </Menu>
      <Menu>
        <Title>FAQ</Title>
        <ItemBox>
          <Link href='/' passHref={true}>
            <Item>?????? ?????? ??????</Item>
          </Link>
          <Link href='/' passHref={true}>
            <Item>?????? ??????</Item>
          </Link>
        </ItemBox>
      </Menu>
      <Menu>
        <Title>Contact Us</Title>
        <ItemBox>
          <Link href='https://www.instagram.com/handycandy_official/' passHref={true}>
            <Item>
              <ContactIcon>
                <Image src={Instagram} alt='' />
              </ContactIcon>
              handycandy_official
            </Item>
          </Link>
          <Link href='mailto:handycandy@gmail.com' passHref={true}>
            <Item>
              <ContactIcon>
                <Image src={Mail} alt='' />
              </ContactIcon>
              handycandy@gmail.com
            </Item>
          </Link>
        </ItemBox>
      </Menu>
    </Container>
  );
}
