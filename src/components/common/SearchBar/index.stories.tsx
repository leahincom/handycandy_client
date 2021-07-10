import { Meta, Story } from '@storybook/react';
import SearchBar from '.';

export default { title: 'components/common/SearchBar', component: SearchBar } as Meta;

const Template: Story = (props) => <SearchBar {...props} />;

export const Basic = Template.bind({});
