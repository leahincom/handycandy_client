import Image from 'next/image';
import styled from 'styled-components';
import { NextArrow as NextArrowIcon } from '../../../../public/assets/icons';

const ImageWrapper = styled.span``;

export default function NextArrow({ ...props }) {
  return (
    <ImageWrapper {...props}>
      <Image src={NextArrowIcon} alt='image' width={23} height={47} />
    </ImageWrapper>
  );
}
