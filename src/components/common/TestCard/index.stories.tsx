import { Meta, Story } from '@storybook/react';
import TestCard, { TestCardProps } from '.';

export default { title: 'components/common/TestCard', component: TestCard } as Meta;

const Template: Story<TestCardProps> = (props) => <TestCard {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  decs: '설명',
  image: 'https://dummyimage.com/600x400/000/fff',
  title: '제목',
};
