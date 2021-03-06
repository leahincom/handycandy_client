import { useAtom } from 'jotai';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
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
import CandyIcon from '../../components/common/CandyIcon';

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
  margin-top: -80px;
`;

const Banner = styled.div`
  position: relative;
  padding: 88px 0 47px;
  width: 100%;
  /* padding: 88px 269px 47px; */
  /* max-width: 1440px; */
  height: 327px;
`;

const BannerWrapper = styled.div`
  max-width: 1440px;
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

const Title = styled.div`
  margin: auto;
  max-width: 1440px;
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
  margin-top: 52px;
  width: 100%;
  max-width: 1440px;
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

const EmoticonWrapper = styled.div`
  position: absolute;
  top: -21px;
  left: -21px;
  z-index: 2;
  width: 77px;
  height: 81px;
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
  width: 100%;
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
  margin-left: 15px;
  cursor: pointer;
  padding-top: 4px;
  max-width: 416px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 33.6px;
  white-space: nowrap;
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
  margin-bottom: 36px;
`;

const TempCandyImage = styled.img`
  transition: filter 0.3s;
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
  useEffect(() => {
    if (data) {
      setValue(HISTORY, data.candy_history);
      setValue(MESSAGE, data.message);
    }
  }, [data]);

  const banner = completeBannerList.find((banner) => banner.name === data?.banner)?.src;

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
      {data && (
        <Container>
          <Banner>
            <BannerImage>
              {banner && <Image src={banner} alt='banner' layout='fill' objectFit='cover' objectPosition='center' />}
            </BannerImage>
            <BackArrowWrapper onClick={onClickToGoBack}>
              <Image src={BackArrow} layout='fill' objectFit='cover' objectPosition='center' alt='arrow' />
            </BackArrowWrapper>

            <Title>
              ?????? <Underline>{`${data.year}??? ${data.month}??? ${data.date}???`}</Underline>???
              <br />
              <Underline>{data.category_name}</Underline> ??????
              <br />
              <Underline>{data.candy_name}</Underline>??? ?????????.
            </Title>
          </Banner>

          <Wrapper>
            <CandyWrapper>
              <CandyImageWrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                <EmoticonWrapper>
                  <CandyIcon name={data.feeling_image_url} width={81} height={81} />
                </EmoticonWrapper>
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
              {data?.shopping_link && (
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
                <CandyTitle>?????? ??????</CandyTitle>
                <CandyDesc>{data.detail_info}</CandyDesc>
              </TextWrapper>
              <CandyTitle style={{ marginTop: '31px' }}>??????????????? ?????? ?????????</CandyTitle>
              <CandyTextArea
                {...register(MESSAGE)}
                rows={3}
                onChange={(e) => checkByte(e, messageTextLimitRef, MESSAGE, setValue)}
                // defaultValue={data.message}
              />
              <TextLimitNumber>
                <TextCurrentNumber ref={messageTextLimitRef}>0</TextCurrentNumber>/200Byte
              </TextLimitNumber>
              <CandyTitle style={{ marginTop: '8px' }}>?????? ????????????</CandyTitle>
              <CandyTextArea
                {...register(HISTORY)}
                rows={3}
                onChange={(e) => checkByte(e, historyTextLimitRef, HISTORY, setValue)}
                // defaultValue={data.candy_history}
              />
              <TextLimitNumber>
                <TextCurrentNumber ref={historyTextLimitRef}>0</TextCurrentNumber>/200Byte
              </TextLimitNumber>
            </Content>
          </Wrapper>

          <ButtonWrapper onClick={onClickToOpenCandyEditModal}>
            <Button buttonColor='gray' size='ls' text='????????????' />
          </ButtonWrapper>
        </Container>
      )}

      {/* Todo: ???????????? ???????????? ????????? ???????????? ???????????? ????????? */}
      {isImgModalOpen && <ImageEditModal candy={data?.candy_image_url || '/assets/images/ComingCandyNull.png'} />}
      {isEditModalOpen && <EditModal />}
      {isDeleteModalOpen && <DeleteModal candy={data?.candy_image_url || '/assets/images/ComingCandyNull.png'} />}
    </NavigationLayout>
  );
}
