import styled from 'styled-components';
import { useAtom } from 'jotai';
import { openCandyModal } from '../../../states';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 9px;
  border-radius: 15px;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.09);
  background: #fff;
  width: 403px;
  height: 99px;

  :hover {
    background-color: var(--gray-1);
    cursor: pointer;
  }
`;

const CardDetail = styled.div`
  margin-left: 16px;
  width: 240px;
`;

const CardTitle = styled.div`
  margin-bottom: 4px;
  line-height: 23px;
  letter-spacing: -0.022em;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
`;

const CardContent = styled.div`
  line-height: 21px;
  letter-spacing: -0.022em;
  color: #808080;
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
`;

const CardImage = styled.img`
  margin-left: 15px;
  border-radius: 10px;
  width: 74.68px;
  height: 74.68px;
`;

const AddButton = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--gray-3);
  cursor: pointer;
  padding-bottom: 4px;
  width: 23px;
  height: 23px;
  color: var(--white);
  font-size: 22px;
  font-weight: bold;

  ${Container}:hover & {
    background-color: var(--gray-7);
    cursor: pointer;
  }
`;

export interface RecommendCandyCardProps {
  title: string;
  content: string;
  image: string;
}

export default function RecommendCandyCard({ title, content, image }: RecommendCandyCardProps) {
  const [, setOpenModal] = useAtom(openCandyModal);
  return (
    <Container>
      <CardImage src={image} />
      <CardDetail>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
      </CardDetail>
      <AddButton onClick={() => setOpenModal(true)}>+</AddButton>
    </Container>
  );
}
