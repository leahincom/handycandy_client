import styled from 'styled-components';
import RecommendCandyCard from '../components/home/RecommendCandyCard';
import CommingCandyCard from '../components/home/CommingCandyCard';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 103px;
  max-width: 1440px;
`;

const TitleContainer = styled.div`
  margin-right: 104px;
  line-height: 135%;
  letter-spacing: -0.022em;
  font-family: NanumSquareRoundOTF;
  font-size: 2.75rem;
  font-weight: 800;

  & > p {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 21px;
    border: 1px solid var(--gray-3);
    border-radius: 18px;
    background: var(--white);
    padding-left: 21px;
    width: 533px;
    height: 56px;
    font-size: 18px;
  }
`;

const ComingContainer = styled.div`
  margin-bottom: 52px;
  width: 803px;
`;

const SubCandyContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  color: #000000;
  font-family: NanumSquareRoundOTF;
  font-size: 1.75rem;
  font-weight: 800;
`;

const CandyDesc = styled.div`
  margin-bottom: 30.77px;
  line-height: 150%;
  letter-spacing: -0.022em;
  color: #808080;
  font-family: Roboto;
  font-size: 18px;
`;

const CommingCandies = styled.div`
  display: flex;
`;

const commingCandies = [
  {
    image: 'https://dummyimage.com/254x260/000/fff',
    category: '고생한 나 자신을 위한',
    name: '모베러웍스 티셔츠',
    createdDate: 15,
    plannedDate: new Date(),
  },
  {
    image: 'https://dummyimage.com/254x260/000/fff',
    category: '고생한 나 자신을 위한',
    name: '모베러웍스 티셔츠',
    createdDate: 15,
    plannedDate: new Date(),
  },
  {
    image: 'https://dummyimage.com/254x260/000/fff',
    category: '고생한 나 자신을 위한',
    name: '모베러웍스 티셔츠',
    createdDate: 15,
    plannedDate: new Date(),
  },
  {
    image: 'https://dummyimage.com/254x260/000/fff',
    category: '고생한 나 자신을 위한',
    name: '모베러웍스 티셔츠',
    createdDate: 15,
    plannedDate: new Date(),
  },
];

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
];

const userInfo = {
  nickname: '다정',
  candyPhrase: '날 위한 달콤함을 잊지마세요',
  month: 7,
  phrase: '한줄 문구입니다',
  banner: '배너',
};

export default function Home() {
  return (
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
          <CommingCandies>
            {commingCandies.length > 0 ? (
              commingCandies.map((candy, idx) => {
                return (
                  <CommingCandyCard
                    key={idx}
                    itemImage={candy.image}
                    category={candy.category}
                    name={candy.name}
                    plannedDate={candy.plannedDate}
                  />
                );
              })
            ) : (
              <CommingCandyCard
                itemImage='https://dummyimage.com/188x192/000/fff'
                category='내 손안의 달콤한 보상'
                name='캔디를 추가해보세요'
              />
            )}
          </CommingCandies>
        </ComingContainer>
        <SubCandyContainer>
          <RecommendContainer>
            <CandyTitle>추천 캔디</CandyTitle>
            <CandyDesc>핸디캔디 추천으로 새로운 행복을 더해보세요</CandyDesc>
            {recommendCandies?.map((candy, idx) => {
              return <RecommendCandyCard key={idx} title={candy.title} content={candy.content} image={candy.image} />;
            })}
          </RecommendContainer>
          <WaitingContainer>
            <CandyTitle>기다리는 캔디</CandyTitle>
            <CandyDesc> 담고만 있었던 캔디로 꺼내보세요 </CandyDesc>
            {/* <WaitingCardSlider /> */}
          </WaitingContainer>
        </SubCandyContainer>
      </div>
    </Container>
  );
}
