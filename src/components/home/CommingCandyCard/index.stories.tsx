import { Meta, Story } from '@storybook/react';
import CommingCandyCard, { CommingCandyCardProps } from '.';

export default { title: 'components/home/CommingCandyCard', component: CommingCandyCard } as Meta;

const Template: Story<CommingCandyCardProps> = (props) => <CommingCandyCard {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  itemImage: 'https://dummyimage.com/188x192/000/fff',
  category: '고생한 나 자신을 위한',
  name: '모베러웍스 티셔츠',
  plannedDate: new Date(),
};
