import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';

const Container = styled.div`
  position: relative;
  width: 290px;
  height: 237px;
`;

const CurrentMonth = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--nanum);
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
`;

interface SlideProps {
  bottle: any;
  month: number;
}

export default function ImageSlide({ bottle, month }: SlideProps) {
  return (
    <Container>
      <Image src={bottle} layout='fill' alt='bottle' objectFit='cover' objectPosition='center' />
      <CurrentMonth>{month}월</CurrentMonth>
    </Container>
  );
}
