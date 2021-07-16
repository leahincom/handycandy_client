import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Image from 'next/image';
import { useAtom } from 'jotai';
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
import { CurrentMonthAtom } from '../../../states';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

interface Bottle {
  id: number;
  src: any;
}

export const bottleList: Bottle[] = [
  { id: 0, src: Bottle0 },
  { id: 1, src: Bottle1 },
  { id: 2, src: Bottle2 },
  { id: 3, src: Bottle3 },
  { id: 4, src: Bottle4 },
  { id: 5, src: Bottle5 },
  { id: 6, src: Bottle6 },
  { id: 7, src: Bottle7 },
  { id: 8, src: Bottle8 },
  { id: 9, src: Bottle9 },
];

const Container = styled.div`
  width: 1275px;

  .slick-list {
    overflow: visible;
    overflow-x: clip;
  }

  .slick-center {
    transform: scale(1.5);
    transition: transform 0.3s;
  }
  .slick-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export interface CompleteSliderProps {
  before: number;
  current: number;
  after: number;
}

export default function CompleteSlider({ before, current, after }: CompleteSliderProps) {
  const [setCurrentMonth] = useAtom(CurrentMonthAtom);
  const sliderList = [bottleList[before].src, bottleList[current].src, bottleList[after].src, bottleList[9].src];

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
        {sliderList.map((bottle, index) => (
          <Image key={index} src={bottle} alt='bottle' width={290} height={237} />
        ))}
      </Slider>
    </Container>
  );
}
