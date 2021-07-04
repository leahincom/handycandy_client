import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 13px;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
  background: rgba(231, 231, 231, 0.2);
  width: 336px;
  height: 347px;
`;
const Card = styled.div`
  display: flex;
  width: 336px;
  height: 255px;
`;
const CardRow = styled.div`
  display: flex;
  flex-direction: column;
`;
const Candy = styled(Image)`
  position: absolute;
`;
const ThreeButton = styled(Image)`
  position: absolute;
  top: 18px;
  right: 15px;
  cursor: pointer;
`;
const FirstImg = styled(Image)`
  width: 184px;
  height: 254px;
`;
const SecondImg = styled(Image)`
  width: 152px;
  height: 127px;
`;
const ThirdImg = styled(Image)`
  width: 152px;
  height: 127px;
`;
const CardInfo = styled.div`
  margin-top: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
`;
const Category = styled.h1`
  margin-bottom: 7px;
  margin-left: 20px;
  line-height: 28px;
  color: black;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;
const CandyNum = styled.span`
  margin-left: 20px;
  line-height: 21px;
  color: gray;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
`;
const Date = styled.span`
  line-height: 21px;
  color: gray;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
`;

export interface CategoryCardProps {
  candyImg: string;
  category: string;
  candynum: number;
  date: string;
  firstImg: string;
  secondImg: string;
  thirdImg: string;
}

export default function CategoryCard({
  candyImg,
  category,
  candynum,
  date,
  firstImg,
  secondImg,
  thirdImg,
}: CategoryCardProps) {
  return (
    <Container>
      <Card>
        <Candy src={candyImg} />
        <ThreeButton src='/assets/icons/ThreeButton.svg' alt='' width='15px' height='15px' objectFit='contain' />
        <CardRow>
          <FirstImg src={firstImg} />
        </CardRow>
        <CardRow>
          <SecondImg src={secondImg} />
          <ThirdImg src={thirdImg} />
        </CardRow>
      </Card>
      <CardInfo>
        <Category>{category}</Category>
        <CandyNum>캔디 {candynum}개 | </CandyNum>
        <Date>업데이트 {date}일전</Date>
      </CardInfo>
    </Container>
  );
}
