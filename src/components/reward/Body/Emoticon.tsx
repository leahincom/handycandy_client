import React from 'react';
import styled from 'styled-components';
import { fullpageApi } from '@fullpage/react-fullpage';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { Ball, Donut, Clover, Double, Flower, Fork, Magnet, WaterDrop } from '../../../../public/assets/emoticon';
import { Check } from '../../../../public/assets/icons';
import { CheckedEmoticon } from '../../../states';
import DownArrowButton from './DownArrowButton';
/**
 * - Magnet : 60e860d01d73b934dbce0ea5
- Donut : 60e861da1d73b934dbce0ea6
- WaterDrop : 60e861e51d73b934dbce0ea7
- Double : 60e861f01d73b934dbce0ea8
- Clover : 60e861fd1d73b934dbce0ea9
- Fork : 60e862071d73b934dbce0eaa
- Ball : 60e862111d73b934dbce0eab
- Flower : 60e8621d1d73b934dbce0eac
 */

export interface IEmoticon {
  name: 'Ball' | 'Donut' | 'Clover' | 'Double' | 'Flower' | 'Fork' | 'Magnet' | 'WaterDrop';
  emo: any;
  id: string;
}

export const EmoticonList: IEmoticon[] = [
  { name: 'Ball', emo: Ball, id: '60e862111d73b934dbce0eab' },
  { name: 'Donut', emo: Donut, id: '60e861da1d73b934dbce0ea6' },
  { name: 'Clover', emo: Clover, id: '60e861fd1d73b934dbce0ea9' },
  { name: 'Double', emo: Double, id: '60e861f01d73b934dbce0ea8' },
  { name: 'Flower', emo: Flower, id: '60e8621d1d73b934dbce0eac' },
  { name: 'Fork', emo: Fork, id: '60e862071d73b934dbce0eaa' },
  { name: 'Magnet', emo: Magnet, id: '60e860d01d73b934dbce0ea5' },
  { name: 'WaterDrop', emo: WaterDrop, id: '60e861e51d73b934dbce0ea7' },
];

const Container = styled.div`
  position: relative;
  padding: 368px 241px 0px 241px;
`;

const CandyTitle = styled.h1`
  padding-left: 5px;
  line-height: 135%;
  font-family: Roboto;
  font-size: 44px;
  font-weight: 400;
  font-style: normal;
`;

const Underlined = styled.span<{ style?: any }>`
  border-bottom: 1px solid var(--gray-7);
  padding-bottom: 1px;
  width: fit-content;
`;

const Desc = styled.p`
  margin-top: 21px;
  line-height: 36.4px;
  color: var(--gray-6);
  font-family: Roboto;
  font-size: 26px;
  font-weight: 400;
`;

const EmoticonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  border-radius: 20px;
  background-color: var(--bg);
  padding: 0px 69px;
  max-width: 1439px;
  height: 246px;
`;

const EmoticonWrapper = styled.div`
  position: relative;
  width: 132px;
  height: 132px;
`;

const CheckWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export interface EmoticonProps {
  candy: string;
  fullpageApi: fullpageApi;
}

export default function Emoticon({ candy = '필보이드 핸드크림', fullpageApi }: EmoticonProps) {
  const [checkedEmo, setCheckedEmo] = useAtom(CheckedEmoticon);

  return (
    <Container className='section'>
      <CandyTitle>
        오늘 <Underlined style={{ fontWeight: '700' }}>{candy}</Underlined>을 주며
        <br />
        어떤 기분이셨나요?
      </CandyTitle>
      <Desc>오늘의 감정을 이모티콘으로 남겨보세요.</Desc>
      <EmoticonArea>
        {EmoticonList.map((emo, index) => (
          <EmoticonWrapper key={index} onClick={() => setCheckedEmo(emo.id)}>
            {checkedEmo === emo.id && (
              <CheckWrapper>
                <Image src={Check} alt='check' layout='fixed' />
              </CheckWrapper>
            )}
            <Image src={emo.emo} layout='fixed' objectFit='cover' objectPosition='center' alt='emoticon' />
          </EmoticonWrapper>
        ))}
      </EmoticonArea>
      <DownArrowButton onClick={fullpageApi?.moveSectionDown} />
    </Container>
  );
}
