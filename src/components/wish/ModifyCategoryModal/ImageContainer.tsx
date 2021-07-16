import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  border-radius: 13px;
  box-shadow: 5px 5px 5px var(--gray-2);
  width: 262px;
  height: 205px;
`;

const Candy = styled.img`
  position: absolute;
  border-top-left-radius: 13px;
  width: 72px;
  height: 72px;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstImg = styled.img`
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  width: 139px;
  height: 192px;
`;

const SecondImg = styled.img`
  border-top-right-radius: 13px;
  width: 114px;
  height: 96px;
`;

const ThirdImg = styled.img`
  border-bottom-right-radius: 13px;
  width: 114px;
  height: 96px;
`;

export interface ImageContainerProps {
  candyImg: string;
  firstImg: string;
  secondImg: string;
  thirdImg: string;
}

export default function ImageContainer({ candyImg, firstImg, secondImg, thirdImg }: ImageContainerProps) {
  return (
    <Container>
      <Candy src={candyImg} alt='' />
      <CardRow>
        <FirstImg src={firstImg} alt='' />
      </CardRow>
      <CardRow>
        <SecondImg src={secondImg} alt='' />
        <ThirdImg src={thirdImg} alt='' />
      </CardRow>
    </Container>
  );
}
