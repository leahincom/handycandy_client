import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import DialogManager from '../components/common/DialogManager';
import RecommendCandyCard from '../components/home/RecommendCandyCard';
import WaitingCardSlider from '../components/home/WaitingCardSlider';
import CandyCard from '../components/common/CandyCard';
import NavigationLayout from '../components/layout/NavigationLayout';
import { PlannedCandy, getComingCandy } from './api/useGets/getComingCandy';
import { getRecommendCandy, RecommendCandy } from './api/useGets/getRecommendCandy';
import { getWaitingCandy, WaitingCandy } from './api/useGets/getWaitingCandy';
import { getUserInfo } from './api/useGets/getUserInfo';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 240px;
  max-width: 1440px;
`;

const TitleContainer = styled.div`
  margin-right: 104px;
  line-height: 135%;
  font-family: var(--nanum);
  font-size: 44px;
  font-weight: 800;
  & > p {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 21px;
    border-radius: 18px;
    background-color: var(--gray-1);
    padding-left: 21px;
    width: 533px;
    height: 56px;
    line-height: 130%;
    color: var(--black);
    font-family: var(--roboto);
    font-size: 18px;
    font-weight: normal;
  }
`;

const ComingContainer = styled.div`
  margin-bottom: 52px;
  width: 803px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 285px;
`;

const RecommendContainer = styled.div`
  width: 403px;
`;

const WaitingContainer = styled.div`
  margin-left: 36px;
`;

const CandyTitle = styled.div`
  margin-bottom: 4.79px;
  line-height: 32px;
  color: var(--black);
  font-family: var(--nanum);
  font-size: 1.75rem;
  font-weight: 800;
`;

const CandyDesc = styled.div`
  margin-bottom: 30.77px;
  line-height: 150%;
  color: var(--gray-6);
  font-family: var(--roboto);
  font-size: 18px;
`;

export interface HomeServerProps {
  recommendCandyList: RecommendCandy[];
  comingCandyList: PlannedCandy[];
  waitingCandyList: WaitingCandy[];
}

const DynamicCandyBottle = dynamic(() => import('../components/home/CandyBottle'));

export default function Home() {
  const currMonth = new Date().getMonth() + 1;
  const [userToken, setUserToken] = useState<string | null>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setUserToken(token);
    token !== null && setIsLoggedIn(true);
  }, []);

  const { data: userInfo } = useQuery(['userInfo'], getUserInfo, {
    enabled: isLoggedIn,
  });
  const { data: recommendCandyList } = useQuery('getRecommendCandy', getRecommendCandy);
  const { data: comingCandyList } = useQuery(['getComingCandy', userToken], getComingCandy, {
    enabled: isLoggedIn,
  });
  const { data: waitingCandyList } = useQuery('getWaitingCandy', getWaitingCandy, {
    enabled: isLoggedIn,
  });
  const candyInBottle = useMemo(() => {
    return comingCandyList ? comingCandyList.map((value) => value.category_image_url) : [];
  }, [comingCandyList]);

  return (
    <NavigationLayout background={'/assets/images/MainBackground.png'}>
      <Container>
        {!isLoggedIn ? (
          <TitleContainer>
            {currMonth}월의 달콤님, 오늘은 어떤 캔디를 주실건가요?
            <p>📢 환영합니다 달콤님!</p>
            {candyInBottle && <DynamicCandyBottle candyList={candyInBottle} />}
          </TitleContainer>
        ) : (
          <TitleContainer>
            {userInfo?.month}월의 {userInfo?.user_nickname}님, <br />
            {userInfo?.candy_count_phrase} {userInfo?.phrase}
            <p>
              📢 {userInfo?.month}월 {userInfo?.date}일 {userInfo?.banner}{' '}
            </p>
            {candyInBottle && <DynamicCandyBottle candyList={candyInBottle} />}
          </TitleContainer>
        )}
        <div>
          <ComingContainer>
            <CandyTitle>다가오는 캔디</CandyTitle>
            <CandyDesc>행복을 안겨줄 캔디들이 곧 도착해요</CandyDesc>
            <FlexContainer>
              {!isLoggedIn ? (
                <CandyCard
                  candy_image_url=''
                  candy_name='캔디를 추가해보세요'
                  category_name='내 손안의 달콤한 보상'
                  from='home'
                  isNull={true}
                />
              ) : (
                comingCandyList
                  ?.slice(0, 4)
                  .map(
                    ({
                      candy_id,
                      candy_image_url,
                      candy_name,
                      category_image_url,
                      category_name,
                      d_day,
                      month,
                      date,
                    }) => (
                      <CandyCard
                        key={candy_id}
                        candy_id={candy_id}
                        candy_image_url={candy_image_url}
                        candy_name={candy_name}
                        category_image_url={category_image_url}
                        category_name={category_name}
                        d_day={d_day}
                        month={month}
                        date={date}
                        from='home'
                      />
                    ),
                  )
              )}
            </FlexContainer>
          </ComingContainer>
          <FlexContainer>
            <RecommendContainer>
              <CandyTitle>추천 캔디</CandyTitle>
              <CandyDesc>핸디캔디 추천으로 새로운 행복을 더해보세요</CandyDesc>
              {recommendCandyList?.slice(0, 3).map((candy, idx) => {
                return (
                  <RecommendCandyCard
                    key={idx}
                    title={candy.candy_name}
                    content={candy.tag_name}
                    image={candy.candy_image_url}
                  />
                );
              })}
            </RecommendContainer>
            <WaitingContainer>
              <CandyTitle>기다리는 캔디</CandyTitle>
              <CandyDesc> 담고만 있었던 캔디로 꺼내보세요 </CandyDesc>
              {!isLoggedIn ? (
                <WaitingCardSlider waitingCandyList={[{ thumbnail: '', title: '', id: '', isNull: true, candy: '' }]} />
              ) : (
                <WaitingCardSlider
                  waitingCandyList={waitingCandyList?.map(
                    ({ candy_id, candy_image_url, candy_name, category_image_url, waiting_date }) => ({
                      candy: category_image_url,
                      date: waiting_date,
                      thumbnail: candy_image_url,
                      title: candy_name,
                      id: candy_id,
                    }),
                  )}
                />
              )}
            </WaitingContainer>
          </FlexContainer>
        </div>
      </Container>
      <DialogManager />
    </NavigationLayout>
  );
}
