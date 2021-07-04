import { Meta, Story } from '@storybook/react';
import RecommendCandyCard, { RecommendCandyCardProps } from '.';

export default { title: 'components/home/RecommendCandyCard', component: RecommendCandyCard } as Meta;

const Template: Story<RecommendCandyCardProps> = (props) => <RecommendCandyCard {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  title: '한강으로 자전거 타러 가기',
  content: '시원한 바람 맞으며 나들이가자!',
  image: 'https://dummyimage.com/74.68x74.68/000/fff',
};
