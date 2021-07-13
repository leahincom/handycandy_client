import { Meta, Story } from '@storybook/react';
import CandyList, { CandyListProps } from '.';

export default { title: 'components/search/CandyList', component: CandyList } as Meta;

const Template: Story<CandyListProps> = (props) => <CandyList {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  type: '완료한 캔디',
};
