import { Meta } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

export default { title: 'styles' } as Meta;

const pastelColors: string[] = [
  '--peach',
  '--lime',
  '--skyblue',
  '--orange',
  '--mint',
  '--purple',
  '--pink',
  '--blue',
  '--yellow',
  '--yellowgreen',
];

const grayColors: string[] = [
  '--gray-1',
  '--gray-2',
  '--gray-3',
  '--gray-4',
  '--gray-5',
  '--gray-6',
  '--gray-7',
  '--white',
  '--black',
];

const uiColors: string[] = ['--bg', '--button-on-bg'];

const colorsSet = [
  { name: 'paster', colors: pastelColors },
  { name: 'gray', colors: grayColors },
  { name: 'ui', colors: uiColors },
];

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 8px 8px;
`;

const ColorBadgeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ColorBadgeProps {
  bg?: string;
}
const ColorBadge = styled.div<ColorBadgeProps>`
  margin: 4px;
  border-radius: 100%;
  background-color: ${(props) => props.bg};
  width: 30px;
  height: 30px;
`;

const BadgeDecsMeta = styled.div`
  color: #b1b1b1;
`;

const BadgeHexValue = styled.div``;

export const Colors = () => {
  return (
    <div>
      {colorsSet.map(({ colors, name }) => (
        <div key={name}>
          <h2>{name}</h2>
          <Layout>
            {colors.map((colorVariable) => (
              <ColorBadgeCard key={colorVariable}>
                <ColorBadge bg={`var(${colorVariable})`} />
                <BadgeDecsMeta>
                  <BadgeHexValue>{colorVariable}</BadgeHexValue>
                </BadgeDecsMeta>
              </ColorBadgeCard>
            ))}
          </Layout>
        </div>
      ))}
    </div>
  );
};

const FontFamilyContainer = styled.div``;

const MainKor = styled.div`
  margin: 8px;
  line-height: 41px;
  color: #000000;
  font-family: 'NanumSquareRound', sans-serif;
  font-size: 36px;
  font-weight: 800;
`;

const Roboto = styled.div`
  margin: 8px;
  line-height: 42px;
  color: #000000;
  font-family: Roboto;
  font-size: 36px;
  font-weight: bold;
`;

export const FontFamily = () => {
  return (
    <FontFamilyContainer>
      <h3>Main/Kor</h3>
      <h4>
        <pre>{`font-family: 'NanumSquareRound', sans-serif`}</pre>
      </h4>
      <MainKor>메인폰트는 나눔 스퀘어 라운드 Extrabold </MainKor>
      <br />
      <h3>본문</h3>
      <h4>
        <pre>font-family: Roboto, sans-serif</pre>
      </h4>
      <Roboto>한글 기본 폰트는 Roboto</Roboto>
    </FontFamilyContainer>
  );
};
