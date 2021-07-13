import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { BottomArrow } from '../../../../public/assets/icons';

const SlideButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 45px;
  left: 0;
  justify-content: center;
  width: 100vw;
`;

const SlideButton = styled(Image)`
  cursor: pointer;
`;

interface DownArrowButtonProps {
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export default function DownArrowButton({ onClick }: DownArrowButtonProps) {
  return (
    <SlideButtonWrapper>
      <SlideButton src={BottomArrow} alt='BottomArrow' onClick={onClick} />
    </SlideButtonWrapper>
  );
}
