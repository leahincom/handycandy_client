import styled from 'styled-components';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const buttonItems = ['전체 캔디', '분류별 캔디'];
const Container = styled.span`
  display: inline-block;
  position: relative;
  border: 8px solid #e9e9e9;
  border-radius: 100px;
  background: #e9e9e9;
`;
const TabItem = styled.span`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  padding: 15px 25px;
  min-width: 155px;
  text-align: center;
  color: #1e1e1e;
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
export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0);
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
        <TabItem key={value} onClick={() => setActiveIndex(index)}>
          {value}
        </TabItem>
      ))}
    </Container>
  );
}
