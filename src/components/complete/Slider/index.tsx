import React, { useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
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
import Slide from './Slide';
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
  .slick-center h1 {
    font-weight: 800;
    line-height: 51px;
  }

  .slick-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export interface CompleteSliderProps {
  category_num: number[];
}

export default function CompleteSlider({ category_num }: CompleteSliderProps) {
  const sliderList = category_num.map((num, index) => ({
    bottle: bottleList[num].src,
    month: index + 1,
  }));
  console.log('🚀 ~ file: index.tsx ~ line 72 ~ sliderList ~ sliderList', sliderList);

  const [curMonth] = useAtom(CurrentMonthAtom);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    initialSlide: curMonth - 1,
    slidesToShow: 3,
    centerPadding: '0px',
    nextArrow: <NextArrow sliderRef={sliderRef} />,
    prevArrow: <PrevArrow sliderRef={sliderRef} />,
  };
  return (
    <Container>
      <Slider ref={sliderRef} {...settings}>
        {sliderList.map((slider, index) => (
          <Slide bottle={slider.bottle} month={slider.month} key={index} />
        ))}
      </Slider>
    </Container>
  );
}
