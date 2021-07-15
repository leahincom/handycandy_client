import Image from 'next/image';
import styled from 'styled-components';
import { PreviousArrow as PrevArrowIcon } from '../../../../public/assets/icons';

const ImageWrapper = styled.span``;

export default function PrevArrow({ ...props }) {
  return (
    <ImageWrapper {...props}>
      <Image src={PrevArrowIcon} alt='image' width={23} height={47} />
    </ImageWrapper>
  );
}
