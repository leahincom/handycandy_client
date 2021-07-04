import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  border-radius: 16px;
  width: 364px;
  height: 278px;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 208, 248, 0) 0%,
    rgba(239, 128, 222, 0.156771) 30.73%,
    rgba(255, 181, 243, 0.7) 85.42%
  );
  padding: 33px 28px;
  width: 100%;
  height: 100%;
  color: #ffffff;
`;

const BackgroundThumbnail = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 16px;
`;

const Candy = styled(Image)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 70px;
  height: 70px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  margin-top: 96px;
  margin-bottom: 4px;
  line-height: 36px;
  letter-spacing: -0.3px;
  font-size: 28px;
  font-weight: 900;
`;

const UnderLinedTitle = styled.span`
  border-bottom: 1px solid #ffffff;
  padding-bottom: 1px;
  width: fit-content;
  max-width: 264px;
  overflow: hidden;
  white-space: nowrap;
`;

const Date = styled.div`
  line-height: 36px;
  font-size: 31px;
  font-weight: 900;
`;

const Decs = styled.div`
  padding-top: 10px;
  line-height: 28px;
  font-size: 24px;
`;
export interface WaitingCardProps {
  thumbnail: string;
  candy: string;
  date: number;
  title: string;
}

export default function WaitingCard({ candy, title, date, thumbnail }: WaitingCardProps) {
  return (
    <Container>
      <BackgroundThumbnail src={thumbnail} layout='fill' objectFit='cover' objectPosition='center' />
      <Wrapper>
        <Candy src={candy} />
        <Title>
          <UnderLinedTitle>{title}</UnderLinedTitle>이
        </Title>
        <Date>{date}일째</Date>
        <Decs>캔디함에서 기다리고 있습니다.</Decs>
      </Wrapper>
    </Container>
  );
}
