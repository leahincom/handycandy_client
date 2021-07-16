import { useAtom } from 'jotai';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { EditIcon, LinkIcon, BackArrow } from '../../../public/assets/icons';
import Button from '../../components/common/Button';
import DeleteModal from '../../components/complete/Modal/DeleteModal';
import EditModal from '../../components/complete/Modal/EditModal';
import ImageEditModal from '../../components/complete/Modal/ImageEditModal';
import NavigationLayout from '../../components/layout/NavigationLayout';
import { CandyEditModalAtom, DeleteModalAtom, ImageEditModalAtom } from '../../states';
import checkByte from '../../utils/checkBytes';
import { getComletedCandyDetail } from '../api/useGets/getCompletedCandyDetail';
import { ComingCandyNull } from '../../../public/assets/images';
import { Ball, Clover, Donut, Double, Flower, Fork, Leaf, Magnet, WaterDrop, X } from '../../../public/assets/banners';
import { CategoryImageUrl as BannerImageUrl } from '../api/useGets/getCompletedCandy';

interface CompleteBannerList {
  name: BannerImageUrl;
  src: any;
}

const completeBannerList: CompleteBannerList[] = [
  { name: BannerImageUrl.Ball, src: Ball },
  { name: BannerImageUrl.Donut, src: Donut },
  { name: BannerImageUrl.Clover, src: Clover },
  { name: BannerImageUrl.Double, src: Double },
  { name: BannerImageUrl.Flower, src: Flower },
  { name: BannerImageUrl.Fork, src: Fork },
  { name: BannerImageUrl.Magnet, src: Magnet },
  { name: BannerImageUrl.WaterDrop, src: WaterDrop },
  { name: BannerImageUrl.Leaf, src: Leaf },
  { name: BannerImageUrl.X, src: X },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  position: relative;
  padding: 88px 269px 47px;
  width: 100%;
  height: 327px;
`;

const BannerImage = styled.div`
  & > div {
    z-index: -1;
  }
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

const Wrapper = styled.div`
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
  min-width: 852px;
  height: 126px;
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
  padding-top: 4px;
  margin-left: 15px;
  cursor: pointer;
  line-height: 33.6px;
  color: var(--gray-7);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 416px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 36px;
`;

const TempCandyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: filter 0.3s;
  border-radius: 24px;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.09));
`;

interface InputForm {
  message?: string;
  history?: string;
}

const MESSAGE = 'message';
const HISTORY = 'history';

export default function Detail() {
  const { register, setValue } = useForm<InputForm>();
  const messageTextLimitRef = useRef<HTMLSpanElement>(null);
  const historyTextLimitRef = useRef<HTMLSpanElement>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isImgModalOpen, setIsImgModalOpen] = useAtom(ImageEditModalAtom);
  const [isEditModalOpen, setIsEditModalOpen] = useAtom(CandyEditModalAtom);
  const [isDeleteModalOpen] = useAtom(DeleteModalAtom);
  const router = useRouter();
  const candyId = router.query.id;
  const { isLoading, isError, data, error } = useQuery(['complete', candyId], () =>
    getComletedCandyDetail(candyId as string),
  );
  const banner = completeBannerList.find((banner) => banner.name === data?.banner)?.src;

  console.log('[완료 캔디 상세]: ', data);
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
    <NavigationLayout>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error! {console.log(error)}</p>}
      {data && (
        <Container>
          <Banner>
            <BannerImage>
              <Image src={banner} alt='banner' layout='fill' objectFit='cover' objectPosition='center' />
            </BannerImage>
            <BackArrowWrapper onClick={onClickToGoBack}>
              <Image src={BackArrow} layout='fill' objectFit='cover' objectPosition='center' alt='arrow' />
            </BackArrowWrapper>

            <Title>
              저는 <Underline>{`${data.year}년 ${data.month}월 ${data.date}일`}</Underline>에
              <br />
              <Underline>{data.category_name}</Underline> 위한
              <br />
              <Underline>{data.candy_name}</Underline>을 줬어요.
            </Title>
          </Banner>

          <Wrapper>
            <CandyWrapper>
              <CandyImageWrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                <CandyHover isHover={isHover} />
                <TempCandyImage src={data.candy_image_url || '/assets/images/ComingCandyNull.png'} alt='candy' />
                {/* <CandyImage
                  src={{ default: ComingCandyNull, src: data.candy_image_url }}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                /> */}
                <CandyEditIconWrapper onClick={onClickToOpenImageEditModal}>
                  <CandyEditIcon src={EditIcon} layout='fill' objectFit='cover' objectPosition='center' />
                </CandyEditIconWrapper>
              </CandyImageWrapper>
              {data.shopping_link && (
                <CandyLink>
                  <Image src={LinkIcon} alt='LinkIcon' />
                  <Link href={data.shopping_link} passHref>
                    <CandyLinkText>{data.shopping_link}</CandyLinkText>
                  </Link>
                </CandyLink>
              )}
            </CandyWrapper>
            <Content>
              <TextWrapper>
                <CandyTitle>상세 정보</CandyTitle>
                <CandyDesc>{data.detail_info}</CandyDesc>
              </TextWrapper>
              <CandyTitle style={{ marginTop: '31px' }}>캔디데이에 받을 메시지</CandyTitle>
              <CandyTextArea
                {...register(MESSAGE)}
                rows={3}
                onChange={(e) => checkByte(e, messageTextLimitRef, MESSAGE, setValue)}
                defaultValue={data.message}
              />
              <TextLimitNumber>
                <TextCurrentNumber ref={messageTextLimitRef}>0</TextCurrentNumber>/200Byte
              </TextLimitNumber>
              <CandyTitle style={{ marginTop: '8px' }}>캔디 히스토리</CandyTitle>
              <CandyTextArea
                {...register(HISTORY)}
                rows={3}
                onChange={(e) => checkByte(e, historyTextLimitRef, HISTORY, setValue)}
                defaultValue={data.candy_history}
              />
              <TextLimitNumber>
                <TextCurrentNumber ref={historyTextLimitRef}>0</TextCurrentNumber>/200Byte
              </TextLimitNumber>
            </Content>
          </Wrapper>

          <ButtonWrapper onClick={onClickToOpenCandyEditModal}>
            <Button buttonColor='gray' size='ls' text='수정하기' />
          </ButtonWrapper>
        </Container>
      )}

      {/* Todo: 서버에러 해결되면 이미지 서버에서 주는걸로 바꾸기 */}
      {isImgModalOpen && <ImageEditModal candy='https://dummyimage.com/221x221/000/fff' />}
      {isEditModalOpen && <EditModal />}
      {isDeleteModalOpen && <DeleteModal candy='https://dummyimage.com/100x100/000/fff' />}
    </NavigationLayout>
  );
}
