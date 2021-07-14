import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navigation from '../../../components/common/Navigation';
import CandyCard from '../../../components/common/CandyCard';
import WishedCandySlider from '../../../components/common/WishedCandySlider';

const Container = styled.div`
  width: 1920px;
  height: 2286px;
`;
const TopContainer = styled.div`
  margin-bottom: 40px;
  background: url('/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Ficons%2FWishedBackground.d57609740f3e21029f9fec81c477a5f5.svg&w=3840&q=75');
  width: 1920px;
  height: 276px;
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  width: 1920px;
`;
const DdayContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 30px;
  background: rgba(231, 231, 231, 0.2);
  width: 1920px;
  height: 620px;
`;
const WaitingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 1920px;
`;
const DdayHeader = styled.div`
  display: flex;
`;
const TopTitle = styled.div`
  margin-bottom: 5px;
  margin-left: 241px;
  padding-top: 95px;
  text-align: left;
  line-height: 59px;
  letter-spacing: -0.022em;
  color: #000000;
  font-family: var(--nanum);
  font-size: 44px;
  font-weight: 800;
  font-style: normal;
  //styleName: title;
`;
const TopSubTitle = styled.div`
  margin-bottom: 130px;
  margin-left: 241px;
  text-align: left;
  line-height: 28px;
  letter-spacing: -0.022em;
  color: #909090;
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  //styleName: main/titlemd;
`;
const Title = styled.div`
  margin-top: 52px;

  text-align: left;
  line-height: 32px;
  letter-spacing: -0.022em;
  font-family: var(--nanum);
  font-size: 28px;
  font-weight: 800;
  font-style: normal;
  //styleName: main/title;
`;
const Border = styled.div`
  margin-top: 7px;
  margin-bottom: 11px;
  border: 1px solid #cfcfcf;
  width: 466px;
  height: 0px;
`;
const SubTitle = styled.div`
  margin-bottom: 51px;
  text-align: left;
  line-height: 30px;
  letter-spacing: -0.022em;
  font-family: var(--roboto);
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  //styleName: main/barsub;
`;
const Num = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 52px;
  margin-left: 8px;
  border-radius: 20px;
  background: #e9e9e9;
  padding: 3px 10px;
  width: 43px;
  height: 29px;
  color: #808080;
  font-size: 20px;
  font-weight: 600;
`;

const CandyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
  > div {
    margin-right: 43px;
  }
`;

export interface TotalCandyProps {
  ddayNum: number;
  waitingNum: number;
}
export default function TotalCandy({ ddayNum = 11, waitingNum = 11 }: TotalCandyProps) {
  const date = new Date();
  const router = useRouter();

  return (
    <Container>
      <TopContainer>
        <TopTitle>담은 캔디</TopTitle>
        <TopSubTitle>앞으로 만들어갈 나만의 보상들을 원하는대로 만들어보세요!</TopSubTitle>
      </TopContainer>
      <BodyContainer>
        <Navigation tab={0} />
        <DdayContainer>
          <DdayHeader>
            <Title>다가오는 캔디</Title>
            <Num>{ddayNum}</Num>
          </DdayHeader>
          <Border></Border>
          <SubTitle>계획된 캔디가 당신을 기다리고 있어요!</SubTitle>

          <WishedCandySlider />
        </DdayContainer>
        <WaitingContainer>
          <DdayHeader>
            <Title>기다리는 캔디</Title>

            <Num>{waitingNum}</Num>
          </DdayHeader>
          <Border></Border>
          <SubTitle>계획된 캔디가 당신을 기다리고 있어요!</SubTitle>
          <CandyContainer>
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
          </CandyContainer>
        </WaitingContainer>
      </BodyContainer>
    </Container>
  );
}