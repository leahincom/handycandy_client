import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 345px;
  height: 347px;
  background: #fff;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
  border-radius: 13px;
  position: relative;
`;
const Card=styled.div`
  display:flex;
  width:336px;
  height:255px;
`;
const CardRow=styled.div`
  display:flex;
  flex-direction: column;
`
const Candy = styled(Image)`
  position:absolute;
`;
const ThreeButton = styled(Image)`
  position: absolute;
  right:15px;
  top:18px;
  cursor: pointer;
`;
const FirstImg=styled(Image)`
   width:184px;
    height:255px;
`;
const SecondImg=styled(Image)`
  width:151px;
  height:127px;
`;
const ThirdImg=styled(Image)`
  width:151px;
  height:127px;
`;
const CardInfo=styled.div`
  /* margin-top:26px; */
`
const Category=styled.h1`
    color:black;
    font-style: normal;
    font-family: Roboto;
    font-weight:700;
    font-size:24px;
    margin-bottom:7px;
`;
const CandyNum=styled.span`
    color:gray;
    font-style: normal;
    font-family: Roboto;
    font-weight:400;
    font-size:18px;
`;
const Date=styled.span`
    color:gray;
    font-style: normal;
    font-family: Roboto;
    font-weight:400;
    font-size:18px;
`
export interface CategoryCardProps {
  candyImg:string;
  category: string;
  candynum: number;
  date:string;
  firstImg: string;
  secondImg:string;
  thirdImg:string;
}

export default function CategoryCard({candyImg,category,candynum,date,firstImg,secondImg,thirdImg}:CategoryCardProps) {
  return (
    <Container>
      <Card>
        <Candy src={candyImg}/>
        <ThreeButton src='/assets/icons/ThreeButton.svg' alt='' width='15px' height='15px' objectFit='contain' />
        <CardRow>
          <FirstImg src={firstImg}/>
        </CardRow>
        <CardRow>
          <SecondImg src={secondImg}/>
          <ThirdImg src={thirdImg}/>
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
