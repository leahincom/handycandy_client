import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import DialogManager from '../components/DialogManager';
import RecommendCandyCard from '../components/home/RecommendCandyCard';
import WaitingCardSlider from '../components/home/WaitingCardSlider';
import ComingCandyCard from '../components/home/ComingCandyCard';
import Navbar from '../components/common/Navbar';
import { login } from './api';
import { getComingCandy } from './api/useGets/getComingCandy';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('/assets/images/MainBackground.png');
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 103px;
  padding-bottom: 56px;
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

const recommendCandies = [
  {
    title: '한강으로 자전거 타러 가기',
    content: '시원한 바람 맞으며 나들이가자!',
    image: 'https://dummyimage.com/74.68x74.68/000/fff',
  },
  {
    title: '한강으로 자전거 타러 가기',
    content: '시원한 바람 맞으며 나들이가자!',
    image: 'https://dummyimage.com/74.68x74.68/000/fff',
  },
  {
    title: '한강으로 자전거 타러 가기',
    content: '시원한 바람 맞으며 나들이가자!',
    image: 'https://dummyimage.com/74.68x74.68/000/fff',
  },
];

const userInfo = {
  nickname: '다정',
  candyPhrase: '날 위한 달콤함을 잊지마세요',
  phrase: '한줄 문구입니다',
};

export default function Home() {
  const user = useQuery(['login'], () => login('handycandy@gmail.com', 'handycandy1234!'));
  const { error, data } = useQuery(['upcoming'], getComingCandy);

  return (
    <>
      <BackgroundContainer>
        <Navbar />
        <Container>
          <TitleContainer>
            두 병 채운 {userInfo.nickname}님, <br />
            {userInfo.candyPhrase}
            <p>📢 {userInfo.phrase} </p>
          </TitleContainer>
          <div>
            <ComingContainer>
              <CandyTitle>다가오는 캔디</CandyTitle>
              <CandyDesc>행복을 안겨줄 캔디들이 곧 도착해요</CandyDesc>
              <FlexContainer>
                {data?.comming_candy
                  .slice(0, 4)
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
                {recommendCandies.slice(0, 3)?.map((candy, idx) => {
                  return (
                    <RecommendCandyCard key={idx} title={candy.title} content={candy.content} image={candy.image} />
                  );
                })}
              </RecommendContainer>
              <WaitingContainer>
                <CandyTitle>기다리는 캔디</CandyTitle>
                <CandyDesc> 담고만 있었던 캔디로 꺼내보세요 </CandyDesc>
                <WaitingCardSlider />
              </WaitingContainer>
            </FlexContainer>
          </div>
        </Container>
      </BackgroundContainer>
      <DialogManager />
    </>
  );
}
