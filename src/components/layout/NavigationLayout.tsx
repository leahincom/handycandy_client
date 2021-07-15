import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';

const PageContent = styled.div`
  margin-top: 106px;
`;

export interface NavigationLayoutProps {
  children?: ReactNode;
}

export default function NavigationLayout({ children }: NavigationLayoutProps) {
  return (
    <>
      <Navbar />
      <PageContent>{children}</PageContent>
    </>
  );
}
