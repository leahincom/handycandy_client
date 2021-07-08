import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { fullpageApi } from '@fullpage/react-fullpage';
import { HandCream, LinkIcon } from '../../../../public/assets/icons';
import DownArrowButton from './DownArrowButton';

const Container = styled.div`
  position: relative;
  padding: 368px 241px 0px 241px;
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

const CandyContentWrapper = styled.div`
  display: flex;
  margin-top: 45px;
`;

const CandyContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  margin-left: 114px;
`;

interface CandyTextProps {
  weight: 400 | 700;
}

const CandyText = styled.div<CandyTextProps>`
  line-height: 36.4px;
  font-family: Roboto;
  font-size: 26px;
  font-weight: ${({ weight }) => weight};
`;

const CandyInfoText = styled(CandyText)`
  margin-left: 45px;
  width: 585px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CandyLinkWrapper = styled.div`
  display: flex;
  margin-top: 17px;
`;

const CandyLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  margin-left: 97px;
  border-radius: 30px;
  background-color: var(--gray-1);
  cursor: pointer;
  padding: 12.5px 33px;
  :hover {
    background-color: var(--gray-4);
  }
`;
const CandyLinkText = styled.a`
  margin-left: 15px;
  cursor: pointer;
  line-height: 33.6px;
  color: var(--gray-7);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;

const CandyInfo = styled.div`
  display: flex;
  margin-top: 57px;
`;

const CandyDate = styled.div`
  display: flex;
  margin-top: 52px;
`;

export interface BodyProps {
  candy: string;
  date: string;
  desc: string;
  link: string;
  info: string;
  fullpageApi: fullpageApi;
  className?: any;
}

export default function Body({
  candy = '필보이드 핸드크림',
  desc = '회사생활로 지친 자신',
  date = '2020년 7월 3일',
  info = '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
  link = 'https://www.naver.com',
  fullpageApi,
}: BodyProps) {
  return (
    <Container className='section'>
      <CandyTitle>
        <Underlined>{desc}</Underlined>을 위해
        <br />
        <Underlined style={{ fontWeight: '700' }}>{candy}</Underlined>을 선물할거에요.
      </CandyTitle>
      <CandyContentWrapper>
        <Candy src={HandCream} width='325px' height='325px' />
        <CandyContent>
          <CandyInfo>
            <CandyText weight={700}>상세정보</CandyText>
            <CandyInfoText weight={400}>{info}</CandyInfoText>
          </CandyInfo>

          <CandyLinkWrapper>
            <CandyText weight={700}>링크</CandyText>
            <CandyLink>
              <Image src={LinkIcon} alt='LinkIcon' />
              <Link href={link} passHref>
                <CandyLinkText>{link}</CandyLinkText>
              </Link>
            </CandyLink>
          </CandyLinkWrapper>

          <CandyDate>
            <CandyText weight={700}>캔디 준 날</CandyText>
            <CandyText weight={400} style={{ marginLeft: '39px' }}>
              {date}
            </CandyText>
          </CandyDate>
        </CandyContent>
      </CandyContentWrapper>
      <DownArrowButton onClick={fullpageApi?.moveSectionDown} />
    </Container>
  );
}