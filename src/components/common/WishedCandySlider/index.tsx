import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CandyCard from '../CandyCard';
import { SliderRightBtn } from '../../../../public/assets/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  /* width: 1450px; */
  height: 420px;
  .react__slick__slider__parent {
    position: relative;
  }

  .react__slick__slider__parent .slick-prev,
  .react__slick__slider__parent .slick-next {
    position: absolute;
    top: 45%;

    /* width: 23px;
    height: 47px; */
  }

  .react__slick__slider__parent .slick-prev {
    color: black;
  }
  .react__slick__slider__parent .slick-next {
    color: #c4c4c4;
  }

  .react__slick__slider__parent .slick-prev:before,
  .slick-next:before {
    color: #c4c4c4;
  }
  .react__slick__slider__parent .slick-prev:before {
    content: url('/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Ficons%2FSliderLeftArrow.6c26cf89495a445124b3c14ac0080f7c.svg&w=64&q=75');
  }
  .react__slick__slider__parent .slick-next:before {
    content: url('/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Ficons%2FSliderRightArrow.b96f375582e6a093583d32ee43089944.svg&w=64&q=75');
  }
  .slick-slider {
    display: flex;
    justify-content: center;
    width: 1400px;
  }
  .slick-track {
    display: flex;
    justify-content: center;
    width: 1400px !important;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-right: 30px;
    width: 270px !important;
    height: 450px;
  }
`;
export default function WishedCandySlider() {
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,

    className: 'react__slick__slider__parent',
  };
  const date = new Date();
  const router = useRouter();
  return (
    <Container>
      <Slider {...settings}>
        <CandyCard
          onClick={() => router.push({ pathname: '/wish/detail/[cid]', query: { cid: 0 } })}
          itemImage='https://dummyimage.com/254x278/000/fff'
          category='고생한 나 자신을 위한'
          name='모베러웍스 티셔츠'
          createdDate={15}
          plannedDate={date}
        />
        <CandyCard
          onClick={() => router.push({ pathname: '/wish/detail/[cid]', query: { cid: 0 } })}
          itemImage='https://dummyimage.com/254x278/000/fff'
          category='고생한 나 자신을 위한'
          name='모베러웍스 티셔츠'
          createdDate={15}
          plannedDate={date}
        />
        <CandyCard
          onClick={() => router.push({ pathname: '/wish/detail/[cid]', query: { cid: 0 } })}
          itemImage='https://dummyimage.com/254x278/000/fff'
          category='고생한 나 자신을 위한'
          name='모베러웍스 티셔츠'
          createdDate={15}
          plannedDate={date}
        />
        <CandyCard
          onClick={() => router.push({ pathname: '/wish/detail/[cid]', query: { cid: 0 } })}
          itemImage='https://dummyimage.com/254x278/000/fff'
          category='고생한 나 자신을 위한'
          name='모베러웍스 티셔츠'
          createdDate={15}
          plannedDate={date}
        />
        <CandyCard
          onClick={() => router.push({ pathname: '/wish/detail/[cid]', query: { cid: 0 } })}
          itemImage='https://dummyimage.com/254x278/000/fff'
          category='고생한 나 자신을 위한'
          name='모베러웍스 티셔츠'
          createdDate={15}
          plannedDate={date}
        />
        <CandyCard
          onClick={() => router.push({ pathname: '/wish/detail/[cid]', query: { cid: 0 } })}
          itemImage='https://dummyimage.com/254x278/000/fff'
          category='고생한 나 자신을 위한'
          name='모베러웍스 티셔츠'
          createdDate={15}
          plannedDate={date}
        />
      </Slider>
    </Container>
  );
}
