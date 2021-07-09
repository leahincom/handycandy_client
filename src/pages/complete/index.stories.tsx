import { Meta, Story } from '@storybook/react';
import Complete, { CompleteProps } from '.';

export default { title: 'pages/complete', component: Complete } as Meta;

const Template: Story<CompleteProps> = (props) => <Complete {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  candy: '필보이드 핸드크림',
  desc: '회사생활로 지친 자신',
  date: '2020년 7월 3일',
  info: '하나둘삼넷오여섯칠팔아홉공하나둘삼넷오여섯칠팔아홉공',
  link: 'abcdeabcdeabc',
  bannerTitle: '캔디로 보상완료하기',
  bannerDesc: '나에게 캔디를 주며 일상의 달콤한 순간을 남겨보세요',
};
