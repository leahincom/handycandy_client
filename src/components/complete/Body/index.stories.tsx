import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Banner, { BannerProps } from '../../reward/Banner';
import Diary from './Diary';
import Emoticon, { EmoticonProps } from './Emoticon';
import Body, { BodyProps } from '.';
export default { title: 'components/complete/Body', component: Body } as Meta;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

interface CompeleteProps extends BodyProps, EmoticonProps, BannerProps {}

const Template: Story<CompeleteProps> = (props) => (
  <Wrapper>
    <Banner {...props} />
    <Body {...props} />
    <Emoticon {...props} />
    <Diary />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  candy: '필보이드 핸드크림',
  desc: '회사생활로 지친 자신',
  date: '2020년 7월 3일',
  info: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
  link: 'https://www.naver.com',
};
