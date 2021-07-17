import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Navigation from '../../../components/common/Navigation';
import CandyCard from '../../../components/common/CandyCard';
import WishedCandySlider from '../../../components/common/WishedCandySlider';
import NavigationLayout from '../../../components/layout/NavigationLayout';
import TopHeader from '../../../components/common/TopHeader';
import { PlannedCandy, getComingCandy } from '../../../pages/api/useGets/getComingCandy';
import { WaitingCandy, getWaitingCandy } from '../../../pages/api/useGets/getWaitingCandy';

const Container = styled.div`
  padding-bottom: 80px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
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
  width: 100%;
  height: 620px;
`;
const WaitingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* width: 1920px; */
`;
const DdayHeader = styled.div`
  display: flex;
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

const TopHeaderWrapper = styled.div`
  margin: auto;
  max-width: 1440px;
`;

const NavTapWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  flex-wrap: wrap;
  margin: 0 auto;
  width: 1480px;
  > div {
    margin-right: 40px;
    margin-bottom: 50px;
  }
`;

export default function TotalCandy() {
  const { data: comingList } = useQuery(['coming'], () => getComingCandy());
  const { data: waitingList } = useQuery(['waiting'], () => getWaitingCandy());

  return (
    <NavigationLayout
      background={
        '/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fassets%2Ficons%2FWishedBackground.d57609740f3e21029f9fec81c477a5f5.svg&w=3840&q=75'
      }
    >
      <Container>
        <TopHeaderWrapper>
          <TopHeader title='담은 캔디' subTitle='앞으로 만들어갈 나만의 보상들을 원하는대로 만들어보세요!' />
        </TopHeaderWrapper>
        <NavTapWrapper>
          <Navigation tab={0} />
        </NavTapWrapper>
        <BodyContainer>
          <DdayContainer>
            <DdayHeader>
              <Title>다가오는 캔디</Title>
              <Num>{comingList?.length}</Num>
            </DdayHeader>
            <Border></Border>
            <SubTitle>계획된 캔디가 당신을 기다리고 있어요!</SubTitle>

            <WishedCandySlider />
          </DdayContainer>
          <WaitingContainer>
            <DdayHeader>
              <Title>기다리는 캔디</Title>

              <Num>{waitingList?.length}</Num>
            </DdayHeader>
            <Border></Border>
            <SubTitle>계획된 캔디가 당신을 기다리고 있어요!</SubTitle>
            <CandyContainer>
              {waitingList?.map(
                ({ candy_id, category_name, candy_image_url, candy_name, category_image_url, waiting_date }) => (
                  <CandyCard
                    key={candy_id}
                    candy_id={candy_id}
                    candy_image_url={candy_image_url}
                    candy_name={candy_name}
                    category_image_url={category_image_url}
                    waiting_date={waiting_date}
                    category_name={category_name}
                  />
                ),
              )}
            </CandyContainer>
          </WaitingContainer>
        </BodyContainer>
      </Container>
    </NavigationLayout>
  );
}
