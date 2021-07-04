import styled from 'styled-components';
import Image from 'next/image';
import { plus } from '../../../../public/assets/icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 403px;
  height: 99px;
  background: #fff;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
  border-radius: 15px;
  position: relative;
`;

const CardDetail = styled.div`
  margin-left: 16px;
`;

const CardTitle = styled.div`
  font-style: normal;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.022em;
  color: #1e1e1e;
`;

const CardContent = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: #808080;
`;

const CardImage = styled.img`
  width: 74.68px;
  height: 74.68px;
  border-radius: 10px;
  margin-left: 15px;
`;

const AddButton = styled(Image)`
  position: absolute;
  right: 16px;
  cursor: pointer;
`;

export interface RecommendCandyCardProps {
  title: string;
  content: string;
  image: string;
}

export default function RecommendCandyCard({ title, content, image }: RecommendCandyCardProps) {
  return (
    <Container>
      <CardImage src={image} />
      <CardDetail>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </CardDetail>
      <AddButton src={plus} />
    </Container>
  );
}
