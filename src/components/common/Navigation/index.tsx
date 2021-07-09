import styled from 'styled-components';
import React from 'react';
const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  background: #e9e9e9;

  width: 333px;
  height: 61px;
`;

const TotalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: white;
  cursor: pointer;
  width: 155px;
  height: 48px;
`;
const CategoryBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: #e9e9e9;
  cursor: pointer;
  width: 155px;
  height: 48px;
`;

export default function Navigation() {
  const totalRef = React.useRef<HTMLButtonElement>(null);
  const categoryRef = React.useRef<HTMLButtonElement>(null);
  const [curr, setCurr] = React.useState(0);
  const toggleHandler = () => {
    if (null !== totalRef.current) {
      console.log(totalRef.current.style);
      if (curr) {
        totalRef.current.style.background = 'white';
        totalRef.current.disabled = true;
      } else {
        totalRef.current.style.background = '#e9e9e9';
        totalRef.current.disabled = false;
        setCurr(1);
      }
    }
    if (null !== categoryRef.current) {
      console.log(categoryRef.current);
      if (!curr) {
        categoryRef.current.style.background = 'white';
        categoryRef.current.disabled = true;
      } else {
        categoryRef.current.style.background = '#e9e9e9';
        categoryRef.current.disabled = false;
        setCurr(0);
      }
    }
  };

  return (
    <Container>
      <TotalBtn onClick={toggleHandler} ref={totalRef}>
        전체 캔디
      </TotalBtn>
      <CategoryBtn onClick={toggleHandler} ref={categoryRef}>
        분류 캔디
      </CategoryBtn>
    </Container>
  );
}
