import { Meta, Story } from '@storybook/react';
import CandyCard, { CandyCardProps } from '.';

export default { title: 'components/common/CandyCard', component: CandyCard } as Meta;

const Template: Story<CandyCardProps> = (props) => <CandyCard {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  itemImage: 'https://dummyimage.com/254x260/000/fff',
  category: '고생한 나 자신을 위한',
  name: '모베러웍스 티셔츠',
  createdDate: 15,
  plannedDate: new Date(),
};
