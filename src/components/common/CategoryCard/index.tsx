import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { getRoutesName } from '../../../utils/routes';
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 336px;
  height: 347px;
`;
const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 13px;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
  background: rgba(231, 231, 231, 0.2);
  cursor: pointer;
  width: 336px;
  height: 255px;
  font-family: var(--roboto);
`;
const Card = styled.div`
  display: flex;
  position: relative;
  width: 336px;
  height: 255px;
  :hover {
    opacity: 0.7;
  }
`;
const CardRow = styled.div`
  display: flex;
  flex-direction: column;
`;
const CandyImgDiv = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
`;
const Candy = styled(Image)`
  position: absolute;
  width: 72px;
  height: 72px;
  object-fit: contain;
`;
const ThreeButton = styled.div`
  position: absolute;
  right: 15px;
  bottom: 18px;
  cursor: pointer;
  width: 45px;
  height: 45px;

  &:hover {
    width: 50px;
    height: 50px;
  }
`;
const FirstImg = styled.img`
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  width: 184px;
  height: 254px;
`;
const SecondImg = styled.img`
  border-top-right-radius: 14px;
  width: 152px;
  height: 127px;
`;
const ThirdImg = styled.img`
  border-bottom-right-radius: 14px;
  width: 152px;
  height: 127px;
`;
const CardInfo = styled.div`
  margin-top: 10px;
  padding: 20px;
`;
const Category = styled.h1`
  margin-bottom: 7px;
  line-height: 28px;
  color: black;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;
const CandyNum = styled.span`
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
const FirstEmpty = styled.div`
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background: rgba(231, 231, 231, 0.2);
  width: 184px;
  height: 254px;
`;
const SecondEmpty = styled.div`
  border-top-right-radius: 14px;
  background: rgba(231, 231, 231, 0.2);
  width: 152px;
  height: 127px;
`;
const ThirdEmpty = styled.div`
  border-bottom-right-radius: 14px;
  background: rgba(231, 231, 231, 0.2);
  width: 152px;
  height: 127px;
`;
export interface CategoryCardProps {
  candyImg: string;
  category: string;
  candynum: number;
  date: number;
  firstImg: string;
  secondImg: string;
  thirdImg: string;
  setIsOpen: any;
  category_id: string;
  setSelectedCategory: any;
  setPreview: any;
}
export default function CategoryCard({
  candyImg,
  category,
  candynum,
  date,
  firstImg,
  secondImg,
  thirdImg,
  setIsOpen,
  category_id,
  setSelectedCategory,
  setPreview,
}: CategoryCardProps) {
  const candysrc = `/assets/candy/${candyImg}.svg`;
  const handleOptionClick = () => {
    setPreview([firstImg, secondImg, thirdImg]);
    setIsOpen(true);
    setSelectedCategory(category_id);
  };
  return (
    <>
      <Container>
        <CardContainer>
          <Link href={getRoutesName.wish.categoryDetail(category_id)} passHref>
            <Card>
              <CandyImgDiv>
                <Candy src={candysrc} alt='' width='52px' height='52px' objectFit='contain' />
              </CandyImgDiv>
              <CardRow>{firstImg === '' ? <FirstEmpty /> : <FirstImg src={firstImg} />}</CardRow>
              <CardRow>
                {secondImg === '' ? <SecondEmpty /> : <SecondImg src={secondImg} />}
                {thirdImg === '' ? <ThirdEmpty /> : <ThirdImg src={thirdImg} />}
              </CardRow>
            </Card>
          </Link>
          <ThreeButton onClick={handleOptionClick}>
            <Image src='/assets/icons/ThreeButton.svg' alt='' layout='fill' objectFit='contain' />
          </ThreeButton>
        </CardContainer>
        <CardInfo>
          <Category>{category}</Category>
          <CandyNum>캔디 {candynum}개 | </CandyNum>
          <Date>업데이트 {date}일전</Date>
        </CardInfo>
      </Container>
    </>
  );
}
