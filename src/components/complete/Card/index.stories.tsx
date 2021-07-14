import { Meta, Story } from '@storybook/react';
import CompleteCard, { CompleteCardProps } from '.';

export default { title: 'components/reward/Card', component: CompleteCard } as Meta;

const Template: Story<CompleteCardProps> = (props) => <CompleteCard {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  candy: 'https://dummyimage.com/80x80/000/fff',
  category: '일이삼사오육칠팔구십일이삼사',
  title: '일이삼사오육칠팔구십일이삼사',
  date: new Date(),
};
