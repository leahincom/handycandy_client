import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';
import CandyCard from '../../../components/common/CandyCard';
import WishedCandySlider from '../../../components/common/WishedCandySlider';
import NavigationLayout from '../../../components/layout/NavigationLayout';
import TopHeader from '../../../components/common/TopHeader';
const Container = styled.div`
  position: relative;
  padding-bottom: 160px;
`;
const BodyContainer = styled.div`
  display: flex;
  top: 380px;
  flex-direction: column;
  align-items: center;
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
  height: 620px;
  /* div :nth-child(last) {
    position: absolute;
    right: 10px;
    bottom: 10px;
  } */
`;
const WaitingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
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
const CandyNumContainer = styled.div`
  display: flex;
  position: absolute;
  top: 245px;
  margin-bottom: 30px;
  border-radius: 50px;
  background: #ffffff;
  height: 142px;
`;
const Total = styled.div`
  margin-top: 31px;

  margin-left: 238px;
  color: #e28888;
`;
const Dday = styled.div`
  margin-top: 31px;
  margin-left: 168px;
  color: black;
`;
const Waiting = styled.div`
  margin-top: 31px;
  margin-left: 168px;
  color: black;
`;
const CandyNum = styled.div`
  font-family: var(--nanum);
  font-size: 44px;
  font-weight: 800;
  font-style: normal;
`;
const Text = styled.div`
  opacity: 0.9;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: -0.022em;

  /* handycandy/gray6 */

  color: #808080;
  font-family: var(--roboto);
  font-size: 21px;
  font-weight: normal;
  font-style: normal;
`; // const Background = styled(Image)``;

export interface EachCategoryProps {
  category: string;
  totalNum: number;
  ddayNum: number;
  waitingNum: number;
}
export default function EachCategory({ category, totalNum, ddayNum, waitingNum }: EachCategoryProps) {
  const router = useRouter();

  return (
    <NavigationLayout>
      <Container>
        <TopHeader title={`${category} 캔디`} subTitle='앞으로 만들어갈 나만의 보상을 만들어보세요!' />
        <CandyNumContainer>
          <Total>
            <CandyNum>{totalNum}</CandyNum>
            <Text>개의 총 캔디</Text>
          </Total>
          <Dday>
            <CandyNum>{ddayNum}</CandyNum>
            <Text>개의 다가오는 캔디</Text>
          </Dday>
          <Waiting>
            <CandyNum>{waitingNum}</CandyNum>
            <Text>개의 기다리는 캔디</Text>
          </Waiting>
        </CandyNumContainer>
        <BodyContainer>
          <DdayContainer>
            <DdayHeader>
              <Title>다가오는 캔디</Title>

              <Num>{ddayNum}</Num>
            </DdayHeader>
            <Border></Border>
            <SubTitle>계획된 캔디가 당신을 기다리고 있어요!</SubTitle>

            <WishedCandySlider />
            {/* <UpButtonDiv>
            <UpButton src={UpIcon} />
          </UpButtonDiv> */}
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
                candy_id='1'
                candy_image_url=''
                candy_name=''
                category_image_url=''
                category_name=''
                d_day={1}
                date={0}
                month={0}
              />
            </CandyContainer>
          </WaitingContainer>
        </BodyContainer>
      </Container>
    </NavigationLayout>
  );
}
