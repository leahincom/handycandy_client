import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Banner from '../Banner';
import Emoticon from './Emoticon';
import Diary from './Diary';
import Body, { BodyProps } from '.';
export default { title: 'components/complete/Body', component: Body } as Meta;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Template: Story<BodyProps> = (props) => (
  <Wrapper>
    <Banner />
    <Body {...props} />
    <Emoticon candy='필보이드 핸드크림' />
    <Diary />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  candy: '필보이드 핸드크림',
  desc: '회사생활로 지친 자신',
  date: '2020년 7월 3일',
  location: '쿠팡',
};
