import React from 'react';
import styled from 'styled-components';
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

const LogoIcon = styled.img`
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
  align-items: flex-start;
  margin: 0;
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

const Item = styled.button`
  display: flex;
  flex: none;
  flex-grow: 0;
  align-items: center;
  justify-content: flex-start;
  order: 0;
  margin: 0 0 10px 0;
  border: 0px solid transparent;
  box-shadow: 0px 0px 0px transparent;
  background: transparent;
  text-shadow: 0px 0px 0px transparent;
  line-height: 19px;
  color: #5a5a5a;
  font-family: var(--roboto);
  font-size: 16px;
  font-weight: normal;
  font-style: normal;

  &:hover {
    border: 0px solid transparent;
    box-shadow: 0px 0px 0px transparent;
    background: transparent;
    text-shadow: 0px 0px 0px transparent;
  }

  &:active {
    outline: none;
    border: none;
  }

  &:focus {
    outline: 0;
  }
`;

const ContactIcon = styled.img`
  margin-right: 10px;
`;

export default function Footer() {
  return (
    <Container>
      <LogoBar>
        <LogoBox>
          <LogoIcon src={Logo} />
          @Beta Version 2021
        </LogoBox>
        <Button>익스텐션 설치하기</Button>
        <Copyright>Copyright © 2021 All Rights Reserved. SOPT Candy Makers</Copyright>
      </LogoBar>
      <div style={{ margin: '15px' }} />
      <Menu>
        <Title>캔디 메이커</Title>
        <ItemBox>
          <Item>팀 핸디캔디</Item>
          <Item>메이커 소개</Item>
        </ItemBox>
      </Menu>
      <Menu>
        <Title>핸디캔디 정보</Title>
        <ItemBox>
          <Item>핸디캔디 정보</Item>
          <Item>익스텐션</Item>
          <Item>메일 서비스</Item>
        </ItemBox>
      </Menu>
      <Menu>
        <Title>FAQ</Title>
        <ItemBox>
          <Item>자주 묻는 질문</Item>
          <Item>오류 제보</Item>
        </ItemBox>
      </Menu>
      <Menu>
        <Title>Contact Us</Title>
        <ItemBox>
          <Item>
            <ContactIcon src={Instagram} />
            handycandy_official
          </Item>
          <Item>
            <ContactIcon src={Mail} />
            handycandy@gmail.com
          </Item>
        </ItemBox>
      </Menu>
    </Container>
  );
}
