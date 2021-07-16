import styled from 'styled-components';
import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import CandyCard from '../../../components/common/CandyCard';
import WishedCandySlider from '../../../components/common/WishedCandySlider';
import NavigationLayout from '../../../components/layout/NavigationLayout';
import TopHeader from '../../../components/common/TopHeader';
import { getCategoryCandy } from '../../api/useGets/getCategoryCandy';
const Container = styled.div`
  position: relative;
  padding-bottom: 160px;
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;
const DdayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 30px;
  background: rgba(231, 231, 231, 0.7);
  width: 100%;
  height: 620px;
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1440px;
`;
const CandyNumContainer = styled.div`
  display: flex;
  /* position: absolute; */
  /* top: 245px; */
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
  letter-spacing: -0.022em;
  color: #808080;
  font-family: var(--roboto);
  font-size: 21px;
  font-weight: normal;
  font-style: normal;
`;

const TopHeaderContainer = styled.div`
  margin-top: -80px;
  padding-top: 80px;
  height: 380px;
`;

const TopHeaderWrapper = styled.div`
  margin: auto;
  max-width: 1440px;
`;

export default function EachCategory() {
  const { query, back } = useRouter();
  const slug = useMemo(() => {
    if (typeof query.slug === 'string') {
      return query.slug;
    }
    return '';
  }, [query.slug]);
  const { data, status } = useQuery(['getCategoryCandy', slug], () => getCategoryCandy(slug), {
    enabled: slug.length > 0,
  });
  useEffect(() => {
    if (status === 'error') {
      alert('잘못된 페이지입니다.');
      back();
    }
  }, [status, back]);

  return (
    <NavigationLayout>
      <Container>
        <TopHeaderContainer style={{ backgroundImage: `url(${data?.banner})` }}>
          <TopHeaderWrapper>
            <TopHeader
              title={`${data?.coming_candy?.[0].category_name ?? ''} 캔디`}
              subTitle='앞으로 만들어갈 나만의 보상을 만들어보세요!'
            />
          </TopHeaderWrapper>
          <CandyNumContainer>
            <Total>
              <CandyNum>{data?.all_candy_count}</CandyNum>
              <Text>개의 총 캔디</Text>
            </Total>
            <Dday>
              <CandyNum>{data?.coming_candy_count}</CandyNum>
              <Text>개의 다가오는 캔디</Text>
            </Dday>
            <Waiting>
              <CandyNum>{data?.waiting_candy_count}</CandyNum>
              <Text>개의 기다리는 캔디</Text>
            </Waiting>
          </CandyNumContainer>
        </TopHeaderContainer>
        <BodyContainer>
          <DdayContainer>
            <DdayHeader>
              <Title>다가오는 캔디</Title>
              <Num>{data?.coming_candy_count}</Num>
            </DdayHeader>
            <Border></Border>
            <SubTitle>계획된 캔디가 당신을 기다리고 있어요!</SubTitle>
            <WishedCandySlider candy_list={data?.coming_candy} />
          </DdayContainer>
          <WaitingContainer>
            <DdayHeader>
              <Title>기다리는 캔디</Title>
              <Num>{data?.waiting_candy_count}</Num>
            </DdayHeader>
            <Border></Border>
            <SubTitle>계획된 캔디가 당신을 기다리고 있어요!</SubTitle>
            <CandyContainer>
              {data?.waiting_candy?.map((value) => {
                return (
                  <CandyCard
                    key={value.candy_id}
                    candy_id={value.candy_id}
                    candy_image_url={value.candy_image_url}
                    candy_name={value.candy_name}
                    category_image_url={value.candy_image_url}
                    category_name={value.candy_name}
                    d_day={value.waiting_date}
                  />
                );
              })}
            </CandyContainer>
          </WaitingContainer>
        </BodyContainer>
      </Container>
    </NavigationLayout>
  );
}
