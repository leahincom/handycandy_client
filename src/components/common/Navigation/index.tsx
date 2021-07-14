import styled from 'styled-components';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
const buttonItems = ['전체 캔디', '분류별 캔디'];
const Container = styled.span`
  display: inline-block;
  position: relative;
  border: 8px solid #e9e9e9;
  border-radius: 100px;
  background: #e9e9e9;
  font-family: var(--roboto);
`;
const TabItem = styled.span`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  padding: 12px 7px;
  min-width: 155px;
  text-align: center;
  line-height: 26px;
  letter-spacing: -0.022em;
  color: #2b2b2b;
  font-family: var(--roboto);
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
`;
const TabIndicator = styled(motion.span)`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  border-radius: 25px;
  background: #fff;
  width: 155px;
  height: 48px;
`;
export interface NavigationProps {
  tab: number;
}
export default function Navigation({ tab }: NavigationProps) {
  const [activeIndex, setActiveIndex] = useState(tab);
  const router = useRouter();
  const toggle = (idx: number) => {
    setActiveIndex(idx);
    if (idx === 0) {
      router.push('/wish/total');
    } else {
      router.push('/wish/category');
    }
  };
  return (
    <Container>
      <TabIndicator
        animate={{
          left: activeIndex === 0 ? 0 : 'auto',
          right: activeIndex === 1 ? 0 : 'auto',
        }}
        transition={{ type: 'tween' }}
      />
      {buttonItems.map((value, index) => (
        <TabItem key={value} onClick={() => toggle(index)}>
          {value}
        </TabItem>
      ))}
    </Container>
  );
}
