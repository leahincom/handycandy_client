import { Meta, Story } from '@storybook/react';

import WaitingCard, { WaitingCardProps } from '.';

export default { title: 'components/home/WaitingCard', component: WaitingCard } as Meta;

const Template: Story<WaitingCardProps> = (props) => <WaitingCard {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  thumbnail: 'https://dummyimage.com/364x278/000/fff',
  candy: 'https://dummyimage.com/70x70/000/fff',
  date: 10,
  decs: '캔디함에서 기다리고 있어요.',
  title: '필보이드 핸드크림',
};
