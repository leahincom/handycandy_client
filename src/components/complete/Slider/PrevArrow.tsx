import { useAtom } from 'jotai';
import Image from 'next/image';
import Slider from 'react-slick';
import styled from 'styled-components';
import { PreviousArrow as PrevArrowIcon } from '../../../../public/assets/icons';
import { CurrentMonthAtom } from '../../../states';

const ImageWrapper = styled.span``;

interface PrevArrowProps {
  sliderRef: React.RefObject<Slider>;
}

export default function PrevArrow({ sliderRef, ...props }: PrevArrowProps) {
  const [curMonth, setCurMonth] = useAtom(CurrentMonthAtom);
  const handleClickPrev = () => {
    if (sliderRef.current) {
      if (curMonth === 1) {
        setCurMonth(12);
      } else {
        setCurMonth(curMonth - 1);
      }
      sliderRef.current.slickPrev();
    }
  };

  return (
    <ImageWrapper {...props} onClick={handleClickPrev}>
      <Image src={PrevArrowIcon} alt='image' width={23} height={47} />
    </ImageWrapper>
  );
}
