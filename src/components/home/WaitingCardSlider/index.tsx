import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import WaitingCard from '../WaitingCard';
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

export default function WaitingCardSlider() {
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
        <WaitingCard
          thumbnail='https://dummyimage.com/364x278/000/fff'
          candy='https://dummyimage.com/70x70/000/fff'
          date={10}
          title='필보이드 핸드크림'
        />
        <WaitingCard
          thumbnail='https://dummyimage.com/364x278/000/fff'
          candy='https://dummyimage.com/70x70/000/fff'
          date={10}
          title='필보이드 핸드크림'
        />
        <WaitingCard
          thumbnail='https://dummyimage.com/364x278/000/fff'
          candy='https://dummyimage.com/70x70/000/fff'
          date={10}
          title='필보이드 핸드크림'
        />
        <WaitingCard
          thumbnail='https://dummyimage.com/364x278/000/fff'
          candy='https://dummyimage.com/70x70/000/fff'
          date={10}
          title='필보이드 핸드크림'
        />
      </Slider>
    </Container>
  );
}
