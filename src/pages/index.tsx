import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import DialogManager from '../components/common/DialogManager';
import RecommendCandyCard from '../components/home/RecommendCandyCard';
import WaitingCardSlider from '../components/home/WaitingCardSlider';
import ComingCandyCard from '../components/home/ComingCandyCard';
import NavigationLayout from '../components/layout/NavigationLayout';
import { login } from './api';
import { PlannedCandy, getComingCandy } from './api/useGets/getComingCandy';
import { getRecommendCandy, RecommendCandy } from './api/useGets/getRecommendCandy';
import { getWaitingCandy, WaitingCandy } from './api/useGets/getWaitingCandy';
import { getUserInfo } from './api/useGets/getUserInfo';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 240px;
  max-width: 1440px;
`;

const TitleContainer = styled.div`
  margin-right: 104px;
  line-height: 135%;
  letter-spacing: -0.022em;
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
    letter-spacing: -0.022em;
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
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--nanum);
  font-size: 1.75rem;
  font-weight: 800;
`;

const CandyDesc = styled.div`
  margin-bottom: 30.77px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #808080;
  font-family: var(--roboto);
  font-size: 18px;
`;

const userInfo = {
  nickname: '다정',
  candyPhrase: '날 위한 달콤함을 잊지마세요',
  phrase: '한줄 문구입니다',
};

const user_id = 'handycandy@gmail.com';
const password = 'handycandy1234!';

export interface HomeServerProps {
  recommendCandyList: RecommendCandy[];
  comingCandyList: PlannedCandy[];
  waitingCandyList: WaitingCandy[];
}

const DynamicCandyBottle = dynamic(() => import('../components/home/CandyBottle'));

export default function Home() {
  const { isSuccess } = useQuery('login', () => login(user_id, password));

  const { data: userInfo } = useQuery(['userInfo'], getUserInfo, {
    enabled: isSuccess,
  });
  const { data: recommendCandyList } = useQuery(['getRecommendCandy', user_id], () => getRecommendCandy(user_id), {
    enabled: isSuccess,
  });
  const { data: comingCandyList } = useQuery(['getComingCandy'], getComingCandy, {
    enabled: isSuccess,
  });
  const { data: waitingCandyList } = useQuery(['getWaitingCandy'], getWaitingCandy, {
    enabled: isSuccess,
  });
  const candyInBottle = useMemo(() => {
    return comingCandyList?.map((value) => value.category_image_url);
  }, [comingCandyList]);
  const isLoad = useMemo(() => {
    return recommendCandyList && comingCandyList && waitingCandyList;
  }, [recommendCandyList, comingCandyList, waitingCandyList]);

  useEffect(() => {
    async function effect() {
      try {
        const reponse = await axios.get('/api/proxy/candies/waitingCandy');
        console.log('effect', reponse);
      } catch (error) {
        console.error(error);
      }
    }
    effect();
  }, []);
  return (
    <NavigationLayout background={'/assets/images/MainBackground.png'}>
      {isLoad && (
        <Container>
          <TitleContainer>
            {userInfo?.month}월의 {userInfo?.user_nickname}님, <br />
            {userInfo?.candy_count_phrase} {userInfo?.phrase}
            <p>
              📢 {userInfo?.month}월 {userInfo?.date}일 {userInfo?.banner}{' '}
            </p>
            {candyInBottle && <DynamicCandyBottle candyList={candyInBottle} />}
          </TitleContainer>
          <div>
            <ComingContainer>
              <CandyTitle>다가오는 캔디</CandyTitle>
              <CandyDesc>행복을 안겨줄 캔디들이 곧 도착해요</CandyDesc>
              <FlexContainer>
                {comingCandyList
                  ?.slice(0, 4)
                  .map(({ candy_id, candy_image_url, candy_name, category_image_url, category_name, d_day }) => (
                    <ComingCandyCard
                      key={candy_id}
                      candy_id={candy_id}
                      itemImage={candy_image_url}
                      category={category_name}
                      name={candy_name}
                      category_img={category_image_url}
                      plannedDate={new Date(dayjs().subtract(d_day, 'day').valueOf())}
                    />
                  ))}
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
                {waitingCandyList && (
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
      )}
      <DialogManager />
    </NavigationLayout>
  );
}
