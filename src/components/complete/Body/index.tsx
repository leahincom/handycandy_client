import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { BottomArrow, HandCream } from '../../../../public/assets/icons';

const Container = styled.div`
  padding-top: 77px;
  padding-left: 241px;
  height: 100%;
`;

const CandyTitle = styled.h1`
  padding-left: 5px;
  line-height: 135%;
  font-family: Roboto;
  font-size: 44px;
  font-weight: 400;
  font-style: normal;
`;

const Underlined = styled.span<{ style?: any }>`
  border-bottom: 1px solid var(--gray-7);
  padding-bottom: 1px;
  width: fit-content;
`;

const Candy = styled(Image)`
  border-radius: 24px;
  filter: drop-shadow(0px 0px 17px rgba(0, 0, 0, 0.09));
`;

const CandyInfoWrapper = styled.div`
  display: flex;
  margin-top: 45px;
`;

const CandyInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  margin-left: 114px;
`;

interface CandyTextProps {
  weight: 400 | 700;
}

const CandyText = styled.span<CandyTextProps>`
  line-height: 36.4px;
  font-family: Roboto;
  font-size: 26px;
  font-weight: ${({ weight }) => weight};
`;

const CandyLink = styled.div`
  margin-top: 11px;
  border-radius: 20px;
  background-color: var(--gray-2);
  width: 945px;
  height: 90px;
`;

const CandyLocation = styled.div`
  display: flex;
  margin-top: 57px;
`;

const CandyDate = styled.div`
  display: flex;
  margin-top: 11px;
`;

const SlideButton = styled(Image)`
  position: absolute;
  bottom: 45px;
  left: 50%;
  cursor: pointer;
  translate: (-50%);
`;

export interface BodyProps {
  candy: string;
  date: string;
  desc: string;
  location: string;
}

export default function Body({ candy, desc, date, location }: BodyProps) {
  return (
    <Container>
      <CandyTitle>
        <Underlined>{desc}</Underlined>을 위해
        <br />
        <Underlined style={{ fontWeight: '700' }}>{candy}</Underlined>을 선물할거에요.
      </CandyTitle>
      <CandyInfoWrapper>
        <Candy src={HandCream} width='325px' height='325px' layout='fill' />
        <CandyInfo>
          <CandyText weight={700}>링크</CandyText>
          <CandyLink></CandyLink>
          <CandyLocation>
            <CandyText weight={700}>캔디 찾는 곳</CandyText>
            <CandyText weight={400} style={{ marginLeft: '38px' }}>
              {location}
            </CandyText>
          </CandyLocation>
          <CandyDate>
            <CandyText weight={700}>캔디 준 날</CandyText>
            <CandyText weight={400} style={{ marginLeft: '62px' }}>
              {date}
            </CandyText>
          </CandyDate>
        </CandyInfo>
      </CandyInfoWrapper>
      <SlideButton src={BottomArrow} />
    </Container>
  );
}
