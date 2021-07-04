import { Meta, Story } from '@storybook/react';
import CategoryCard, { CategoryCardProps } from '.';

export default { title: 'components/common/CategoryCard', component: CategoryCard } as Meta;

const Template: Story<CategoryCardProps> = (props) => <CategoryCard {...props} />;

export const Basic = Template.bind({});
Basic.args = {
    candyImg:'https://dummyimage.com/72x72/000/fff',
    category:'고생한 나를 위한 캔디',
    candynum:20,
    date:'3',
    firstImg:'https://dummyimage.com/184x255/000/fff',
    secondImg:'https://dummyimage.com/151x127/000/fff',
    thirdImg:'https://dummyimage.com/151x127/000/fff',
  
};