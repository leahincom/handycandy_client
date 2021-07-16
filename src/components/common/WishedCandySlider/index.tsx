import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import ComingCandyCard from '../../home/ComingCandyCard';
import CandyCard from '../CandyCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dayjs from 'dayjs';
import { Coming } from '../../../pages/api/useGets/getMatchedCandy';

import { PlannedCandy, getComingCandy } from '../../../pages/api/useGets/getComingCandy';

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
  const router = useRouter();
  const { isLoading, error, data, status } = useQuery(['category'], () => getComingCandy());
  const comingList = data?.comming_candy;
  // const candy: PlannedCandy = {
  //   candy_image_url: 'https://dummyimage.com/254x278/000/fff',
  //   candy_id: '1',
  //   candy_name: '모베리웍스 티셔츠',
  //   category_image_url: 'Donut',
  //   category_name: '고생한 나 자신을 위한',
  //   d_day: 1,
  //   date: 2,
  //   month: 3,
  // };

  return (
    <Container>
      <Slider {...settings}>
        {comingList
          ?.slice(0, 6)
          .map(({ candy_id, candy_image_url, candy_name, category_image_url, category_name, d_day, month, date }) => (
            <CandyCard
              key={candy_id}
              candy_id={candy_id}
              candy_image_url={candy_image_url}
              candy_name={candy_name}
              category_image_url={category_image_url}
              category_name={category_name}
              d_day={d_day}
              month={month}
              day={date}
            />
          ))}
      </Slider>
    </Container>
  );
}
