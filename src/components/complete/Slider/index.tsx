import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Image from 'next/image';
import {
  Bottle0,
  Bottle1,
  Bottle2,
  Bottle3,
  Bottle4,
  Bottle5,
  Bottle6,
  Bottle7,
  Bottle8,
  Bottle9,
} from '../../../../public/assets/bottles';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

export const bottleList = [Bottle0, Bottle1, Bottle2, Bottle3, Bottle4, Bottle5, Bottle6, Bottle7, Bottle8, Bottle9];

const Container = styled.div`
  width: 1275px;

  .slick-list {
    overflow: visible;
    overflow-x: clip;
  }

  .slick-center {
    transition: transform 0.3s;
    transform: scale(1.5);
  }
  .slick-slide > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export interface CompleteSliderProps {
  bottles: any[];
}

export default function CompleteSlider({ bottles }: CompleteSliderProps) {
  const settings = {
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Container>
      <Slider {...settings}>
        {bottles.map((bottle, index) => (
          <Image key={index} src={bottle} alt='bottle' width={290} height={237} />
        ))}
      </Slider>
    </Container>
  );
}
