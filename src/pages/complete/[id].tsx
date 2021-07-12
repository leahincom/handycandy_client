import { useAtom } from 'jotai';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { EditIcon, LinkIcon, BackArrow } from '../../../public/assets/icons';
import Button from '../../components/common/Button';
import EditModal from '../../components/complete/Modal/EditModal';
import ImageEditModal from '../../components/complete/Modal/ImageEditModal';
import { CandyEditModalAtom, ImageEditModalAtom } from '../../states';
import checkByte from '../../utils/checkBytes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  position: relative;
  background-color: var(--peach);
  padding: 88px 269px 47px;
  width: 100%;
  height: 327px;
`;

const BackArrowWrapper = styled.div`
  position: absolute;
  top: 81px;
  left: 116px;
  cursor: pointer;
  width: 36px;
  height: 24px;
`;

const Title = styled.span`
  line-height: 59px;
  color: var(--black);
  font-family: var(--nanum);
  font-size: 44px;
  font-weight: 800;
  font-style: normal;
`;

const Underline = styled.span`
  border-bottom: 1px solid var(--gray-7);
  padding-bottom: 2px;
  width: fit-content;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 52px;
`;

const CandyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CandyImageWrapper = styled.div`
  position: relative;
  width: 416px;
  height: 416px;
`;

const CandyHover = styled.div<{ isHover: boolean }>`
  display: none;
  display: ${({ isHover }) => isHover && 'block'};

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: 1;
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);
  background-color: var(--gray-7);
  width: 416px;
  height: 416px;
`;

const CandyImage = styled(Image)`
  transition: filter 0.3s;
  border-radius: 24px;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.09));
`;

const CandyEditIconWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
  z-index: 1;
  cursor: pointer;
  width: 52px;
  height: 52px;
`;

const CandyEditIcon = styled(Image)``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 73px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CandyTitle = styled.h1`
  line-height: 28px;
  color: var(--black);
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;

const CandyDesc = styled.h2`
  margin-left: 56px;
  line-height: 33.6px;
  font-family: var(--roboto);
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
`;

const CandyTextArea = styled.textarea`
  margin-top: 20px;
  outline: none;
  border-radius: 17px;
  background-color: var(--gray-1);
  padding: 18px 29px;
  width: 100%;
  resize: none;
  line-height: 30px;
  font-family: var(--roboto);
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
`;

const TextLimitNumber = styled.h3`
  margin-top: 11px;
  text-align: end;
  line-height: 21px;
  color: var(--gray-6);
  font-family: var(--roboto);
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
`;

const TextCurrentNumber = styled.span``;

const CandyLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  margin-top: 22px;
  border-radius: 30px;
  background-color: var(--gray-1);
  cursor: pointer;
  padding: 12.5px 33px;
  :hover {
    background-color: var(--gray-4);
  }
`;

const CandyLinkText = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  cursor: pointer;
  padding-top: 4px;
  line-height: 33.6px;
  color: var(--gray-7);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7px;
`;

interface InputForm {
  message?: string;
  history?: string;
}

const MESSAGE = 'message';
const HISTORY = 'history';

export interface DetailProps {
  link: string;
}

export default function Detail({ link = 'https://www.naver.com' }: DetailProps) {
  const { register, setValue } = useForm<InputForm>();
  const messageTextLimitRef = useRef<HTMLSpanElement>(null);
  const historyTextLimitRef = useRef<HTMLSpanElement>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isImgModalOpen, setIsImgModalOpen] = useAtom(ImageEditModalAtom);
  const [isEditModalOpen, setIsEditModalOpen] = useAtom(CandyEditModalAtom);
  const router = useRouter();

  const onClickToGoBack = () => {
    router.back();
  };
  const onMouseOver = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    setIsHover(true);
  };
  const onMouseOut = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    setIsHover(false);
  };
  const onClickToOpenImageEditModal = () => {
    setIsImgModalOpen(true);
  };
  const onClickToOpenCandyEditModal = () => {
    setIsEditModalOpen(true);
  };

  return (
    <>
      <Wrapper>
        <Banner>
          <BackArrowWrapper onClick={onClickToGoBack}>
            <Image src={BackArrow} layout='fill' objectFit='cover' objectPosition='center' alt='arrow' />
          </BackArrowWrapper>

          <Title>
            저는 <Underline>2021년 6월 9일</Underline>에
            <br />
            <Underline>회사생활로 지친 나를</Underline> 위한
            <br />
            <Underline>필보이드 핸드크림</Underline>을 줬어요.
          </Title>
        </Banner>

        <Container>
          <CandyWrapper>
            <CandyImageWrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
              <CandyHover isHover={isHover} />
              <CandyImage
                src='https://dummyimage.com/416x416/000/fff'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
              <CandyEditIconWrapper onClick={onClickToOpenImageEditModal}>
                <CandyEditIcon src={EditIcon} layout='fill' objectFit='cover' objectPosition='center' />
              </CandyEditIconWrapper>
            </CandyImageWrapper>
            <CandyLink>
              <Image src={LinkIcon} alt='LinkIcon' />
              <Link href={link} passHref>
                <CandyLinkText>{link}</CandyLinkText>
              </Link>
            </CandyLink>
          </CandyWrapper>
          <Content>
            <TextWrapper>
              <CandyTitle>상세 정보</CandyTitle>
              <CandyDesc>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오</CandyDesc>
            </TextWrapper>
            <CandyTitle style={{ marginTop: '31px' }}>캔디데이에 받을 메시지</CandyTitle>
            <CandyTextArea
              {...register(MESSAGE)}
              rows={3}
              onChange={(e) => checkByte(e, messageTextLimitRef, MESSAGE, setValue)}
            />
            <TextLimitNumber>
              <TextCurrentNumber ref={messageTextLimitRef}>0</TextCurrentNumber>/200Byte
            </TextLimitNumber>
            <CandyTitle style={{ marginTop: '8px' }}>캔디 히스토리</CandyTitle>
            <CandyTextArea
              {...register(HISTORY)}
              rows={3}
              onChange={(e) => checkByte(e, historyTextLimitRef, HISTORY, setValue)}
            />
            <TextLimitNumber>
              <TextCurrentNumber ref={historyTextLimitRef}>0</TextCurrentNumber>/200Byte
            </TextLimitNumber>
          </Content>
        </Container>

        <ButtonWrapper onClick={onClickToOpenCandyEditModal}>
          <Button buttonColor='gray' size='ls' text='수정하기' />
        </ButtonWrapper>
      </Wrapper>
      {isImgModalOpen && <ImageEditModal candy='https://dummyimage.com/221x221/000/fff' />}
      {isEditModalOpen && <EditModal />}
    </>
  );
}
