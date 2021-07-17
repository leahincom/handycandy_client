import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { PrevArrow, LinkIcon, RightQuote, LeftQuote, EditBtn } from '../../../../public/assets/icons';
import Button from '../../../components/common/Button';
import ImageEditModal from '../../../components/common/CandyEdit/ImageEditModal';
import { DetailCandyEditModalAtom, ImageEditModalAtom } from '../../../states';
import CandyEditModal from '../../../components/common/CandyEdit';
import Footer from '../../../components/common/Footer';
import NavigationLayout from '../../../components/layout/NavigationLayout';
import { getDetailCandy } from '../../api/useGets/getDetailCandy';

const Container = styled.div`
  margin: auto;
  padding-bottom: 160px;
  padding-left: 20px;
  width: 100%;
  max-width: 1300px;
`;
const TopContainer = styled.div`
  margin-bottom: 42px;
`;
const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PrevButtonDiv = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  cursor: pointer;
`;
const PrevButton = styled(Image)``;
const LeftQuoteImg = styled(Image)``;

const RightQuoteImg = styled(Image)``;

const TopText = styled.div`
  /* or 59px */
  line-height: 135%;
  line-height: 59.4px;
  letter-spacing: -0.022em;
  font-family: var(--nanum);
  font-size: 44px;
  font-weight: 800;
  font-style: normal;
`;
const Date = styled.div`
  margin-bottom: 10px;
  span:nth-child(2) {
    border-bottom: 1px solid #808080;
  }
`;
const Category = styled.div`
  margin-bottom: 10px;
  span:nth-child(1) {
    border-bottom: 1px solid #808080;
  }
`;
const Title = styled.div`
  margin-bottom: 47px;
  span:nth-child(1) {
    border-bottom: 1px solid #808080;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 91px;
  margin-bottom: 40px;
  div:nth-child(1) {
    margin-right: 52px;
    text-align: left;
    line-height: 28px;
    letter-spacing: -0.022em;
    font-family: var(--roboto);
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
    //styleName: cardview/title;
  }
  div:nth-child(2) {
    text-align: left;
    line-height: 36px;
    letter-spacing: -0.022em;
    font-family: var(--roboto);
    font-size: 26px;
    font-weight: 400;
    font-style: normal;
  }
`;
const BodyImg = styled.div`
  position: relative;
  margin-right: 94px;
  width: 440px;
  height: 440px;
  &:hover {
    opacity: 0.5;
  }
`;
const BodyInfo = styled.div``;
const CandyLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
  margin-bottom: 57px;
`;

const CandyLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  border-radius: 30px;
  background-color: var(--gray-1);
  cursor: pointer;
  padding: 12.5px 33px;
  height: 59px;
  :hover {
    background-color: var(--gray-4);
  }
`;
const CandyLinkText = styled.a`
  margin-left: 15px;
  cursor: pointer;
  line-height: 33.6px;
  color: var(--gray-7);
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;
const MessageTitle = styled.div`
  margin-bottom: 23px;
  text-align: left;
  line-height: 28px;
  letter-spacing: -0.022em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;
const MessageInfo = styled.div`
  display: flex;
  position: relatvie;
  margin-bottom: 7px;
  border-radius: 30px;
  background: #f2f2f2;
  width: 774px;
  height: 180px;
  color: black;
`;
const Message = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;
const LeftQuoteImgDiv = styled.div`
  position: absolute;
  top: 70px;
  left: 28px;
`;
const RightQuoteImgDiv = styled.div`
  position: absolute;
  top: 70px;
  right: 28px;
`;
const ButtonDiv = styled.div`
  display: flex;
  margin-top: 66px;
`;

const MessageText = styled.div`
  position: absolute;
  top: 70px;
  left: 80px;
  width: 615px;
  text-align: left;
  line-height: 30px;
  letter-spacing: -0.022em;
  font-family: var(—roboto);
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  //styleName: main/barsub;
`;
const MessageLength = styled.div`
  align-self: flex-end;
  text-align: left;
  line-height: 21px;
  letter-spacing: -0.022em;
  color: #c1c1c1;
  font-family: var(—roboto);
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  //styleName: main/cardsub;
`;
const ItemImg = styled.img`
  position: relative;
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);
  width: 440px;
  height: 440px;
`;
const ImageEditButtonDiv = styled.div`
  display: none;
  position: absolute;
  right: 26px;
  bottom: 26px;
  ${BodyImg}:hover & {
    display: block;
  }
`;
const EditButton = styled(Image)`
  cursor: pointer;
`;
const CandyEditButtonDiv = styled.div`
  margin-right: 7px;
  line-height: 26px;
  font-family: var(—roboto);
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
`;
const CandyCompleteButtonDiv = styled.div`
  margin-right: 7px;
  line-height: 26px;
  font-family: var(—roboto);
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
`;
const CandyLinkTitle = styled.div`
  margin-right: 52px;
  width: 90px;
  line-height: 28px;
  letter-spacing: -0.022em;
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;

export default function Detail() {
  const router = useRouter();
  const { data: detailCandy } = useQuery(['detail', router.query.cid], () =>
    getDetailCandy(router.query.cid as string),
  );
  const candyInfo = detailCandy?.candy_information;
  const dateStr = candyInfo?.reward_planned_at.toString();
  const candyUrl = candyInfo?.candy_image_url;
  const year = dateStr?.slice(0, 4);
  const month = dateStr?.slice(5, 7);
  const day = dateStr?.slice(8, 10);
  const [isImgModalOpen, setIsImgModalOpen] = useAtom(ImageEditModalAtom);
  const [isEditModalOpen, setIsEditModalOpen] = useAtom(DetailCandyEditModalAtom);

  const onClickToOpenImageEditModal = () => {
    setIsImgModalOpen(true);
  };
  const onClickToOpenCandyEditModal = () => {
    setIsEditModalOpen(true);
  };
  const onClickToGoBack = () => {
    router.back();
  };
  return (
    <NavigationLayout>
      <Container>
        <TopContainer>
          <PrevButtonDiv onClick={onClickToGoBack}>
            <PrevButton src={PrevArrow} />
          </PrevButtonDiv>
          <TopText>
            <Date>
              <span>저는 </span>
              <span>
                {year}년 {month}월 {day}일
              </span>
              <span>에</span>
            </Date>
            <Category>
              <span>{detailCandy?.category_name} </span>
              <span>위한,</span>
            </Category>
            <Title>
              <span>{candyInfo?.candy_name}</span> <span>주기로 했어요.</span>
            </Title>
          </TopText>
        </TopContainer>
        <BodyContainer>
          <BodyImg>
            <ItemImg src={candyInfo?.candy_image_url} />
            <ImageEditButtonDiv onClick={onClickToOpenImageEditModal}>
              <EditButton src={EditBtn} />
            </ImageEditButtonDiv>
          </BodyImg>
          <BodyInfo>
            <Info>
              <div>상세정보</div>
              <div>{candyInfo?.candy_name}</div>
            </Info>
            <CandyLinkWrapper>
              <CandyLinkTitle>링크</CandyLinkTitle>
              <CandyLink>
                <Image src={LinkIcon} alt='LinkIcon' />
                <a href={candyInfo?.shopping_link} target='_blank' rel='noreferrer'>
                  <CandyLinkText>
                    {candyInfo?.shopping_link && candyInfo.shopping_link.length >= 10
                      ? candyInfo?.shopping_link.slice(0, 10) + '...'
                      : candyInfo?.shopping_link}
                  </CandyLinkText>
                </a>
              </CandyLink>
            </CandyLinkWrapper>
            <Message>
              <MessageTitle>캔디데이에 받을 메세지</MessageTitle>
              <MessageInfo>
                <LeftQuoteImgDiv>
                  <LeftQuoteImg src={LeftQuote} />
                </LeftQuoteImgDiv>

                <MessageText>{candyInfo?.message}</MessageText>
                <RightQuoteImgDiv>
                  <RightQuoteImg src={RightQuote} />
                </RightQuoteImgDiv>
              </MessageInfo>
              <MessageLength>{candyInfo?.message.length}/100자</MessageLength>
            </Message>
            <ButtonDiv>
              <CandyEditButtonDiv onClick={onClickToOpenCandyEditModal}>
                <Button buttonColor='gray' color='gray' text='수정하기' size='md' />
              </CandyEditButtonDiv>
              <CandyCompleteButtonDiv
                onClick={() => router.push({ pathname: '/reward/[cid]', query: { cid: candyInfo?.candy_id } })}
              >
                <Button buttonColor='peach' color='gray' text='캔디 바로주기' size='md' />
              </CandyCompleteButtonDiv>
            </ButtonDiv>
          </BodyInfo>
        </BodyContainer>
      </Container>
      {isImgModalOpen && candyUrl && <ImageEditModal candy={candyUrl} />}
      {isEditModalOpen && (
        <CandyEditModal
          candyImg='https://dummyimage.com/100x100/000/fff'
          candyName='핸드크림'
          candyCategory='고생한 나를 위한'
          candyDate='20200601'
          candyMessage='aaaa'
        />
      )}
    </NavigationLayout>
  );
}
