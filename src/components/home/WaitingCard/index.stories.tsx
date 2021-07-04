import { Meta, Story } from '@storybook/react';

import WaitingCard, { WaitingCardProps } from '.';

export default { title: 'components/home/WaitingCard', component: WaitingCard } as Meta;

const Template: Story<WaitingCardProps> = (props) => <WaitingCard {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  thumbnail: 'https://dummyimage.com/364x278/000/fff',
  candy: 'https://dummyimage.com/70x70/000/fff',
  date: 10,
  title: '필보이드 핸드크림',
};

export const OverflowTest = () => {
  return (
    <div>
      <h3>11자를 넘으면 안됨</h3>
      <WaitingCard
        {...{
          thumbnail: 'https://dummyimage.com/364x278/000/fff',
          candy: 'https://dummyimage.com/70x70/000/fff',
          date: 10,
          title: '일이삼사오육칠팔구십일이삼사',
        }}
      />
    </div>
  );
};
