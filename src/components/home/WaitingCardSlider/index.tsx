import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import WaitingCard, { WaitingCardProps } from '../WaitingCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  width: 380px;
  height: 278px;

  .slick-dots {
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
    li {
      margin: 0;
    }
  }
`;

export interface WaitingCandyItem extends WaitingCardProps {
  id: string;
}

export interface WaitingCardSliderProps {
  waitingCandyList: WaitingCandyItem[] | undefined;
}

export default function WaitingCardSlider({ waitingCandyList }: WaitingCardSliderProps) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        {waitingCandyList?.map(({ candy, date, thumbnail, title, id, isNull }) => (
          <WaitingCard key={id} id={id} thumbnail={thumbnail} candy={candy} date={date} title={title} isNull={isNull} />
        ))}
      </Slider>
    </Container>
  );
}
