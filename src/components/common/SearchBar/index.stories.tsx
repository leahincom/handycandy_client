import { Meta, Story } from '@storybook/react';
import SearchBar, { SearchBarProps } from '.';

export default { title: 'components/common/SearchBar', component: SearchBar } as Meta;

const Template: Story<SearchBarProps> = (props) => <SearchBar {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: '모든 캔디 검색',
};
