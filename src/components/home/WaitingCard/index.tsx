import Link from 'next/link';
import styled from 'styled-components';
import { getRoutesName } from '../../../utils/routes';
import CandyIcon from '../../common/CandyIcon';

const Container = styled.div`
  position: relative;
  border-radius: 16px;
  width: 364px;
  height: 278px;
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  box-sizing: border-box;
  position: relative;
  border-radius: 16px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);
  background: ${(props) =>
    props.isNull
      ? 'none'
      : `linear-gradient(
    180deg,
    rgba(255, 208, 248, 0) 0%,
    rgba(239, 128, 222, 0.156771) 30.73%,
    rgba(255, 181, 243, 0.7) 85.42%
  )`};
  padding: 33px 28px;
  width: 100%;
  height: 100%;
  color: #ffffff;
`;

const BackgroundThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
  width: 364px;
  height: 278px;
`;

const CandyWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
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

const Notice = styled.div`
  display: flex;
  position: absolute;
  bottom: 55px;
  left: 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  line-height: 150%;
  color: var(--gray-7);
  font-family: var(--nanum);

  & p:nth-of-type(1) {
    color: var(--gray-7);
    font-family: var(--nanum);
    font-size: 21px;
    font-weight: 800;
  }

  & p:nth-of-type(2) {
    color: var(--gray-6);
    font-family: var(--roboto);
    font-size: 16px;
  }
`;
export interface WaitingCardProps {
  id: string;
  thumbnail: string;
  candy: any;
  date?: number;
  title: string;
  isNull?: boolean;
}

export interface WrapperProps {
  isNull?: boolean;
}

export default function WaitingCard({ candy, title, date, thumbnail, id, isNull }: WaitingCardProps) {
  return (
    <Link href={getRoutesName.wish.detail(id)} passHref>
      <Container>
        <BackgroundThumbnail src={thumbnail === '' || isNull ? '/assets/images/WaitingCandyNull.png' : thumbnail} />
        <Wrapper isNull={isNull}>
          {isNull ? (
            <Notice>
              <p>아직 캔디가 없어요!</p>
              <p>아직 캔디가 없어요!</p>
            </Notice>
          ) : (
            <>
              <CandyWrapper>
                <CandyIcon name={candy} />
              </CandyWrapper>
              <Title>
                <UnderLinedTitle>{title}</UnderLinedTitle>이
              </Title>
              <Date>{date}일째</Date>
              <Decs>캔디함에서 기다리고 있습니다.</Decs>
            </>
          )}
        </Wrapper>
      </Container>
    </Link>
  );
}
