import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

const PageContent = styled.div<{ bg?: string }>`
  position: relative;
  background: url(${({ bg }) => bg});
  background-repeat: none;
  background-size: cover;
  padding-top: 80px;
  min-height: 70vh;
`;

export interface NavigationLayoutProps {
  children?: ReactNode;
  background?: string;
}

export default function NavigationLayout({ children, background }: NavigationLayoutProps) {
  return (
    <>
      <Navbar />
      <PageContent bg={background}>{children}</PageContent>
      <Footer />
    </>
  );
}
