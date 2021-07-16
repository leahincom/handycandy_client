import { useAtom } from 'jotai';
import Image from 'next/image';
import Slider from 'react-slick';
import styled from 'styled-components';
import { NextArrow as NextArrowIcon } from '../../../../public/assets/icons';
import { CurrentMonthAtom } from '../../../states';

const ImageWrapper = styled.span``;

interface NextArrowProps {
  sliderRef: React.RefObject<Slider>;
}

export default function NextArrow({ sliderRef, ...props }: NextArrowProps) {
  const [curMonth, setCurMonth] = useAtom(CurrentMonthAtom);
  const handleClickNext = () => {
    if (sliderRef.current) {
      if (curMonth === 12) {
        setCurMonth(1);
      } else {
        setCurMonth(curMonth + 1);
      }
      sliderRef.current.slickNext();
    }
  };

  return (
    <ImageWrapper {...props} onClick={handleClickNext}>
      <Image src={NextArrowIcon} alt='image' width={23} height={47} />
    </ImageWrapper>
  );
}
