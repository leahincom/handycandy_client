import { Meta, Story } from '@storybook/react';
import { SearchBarProps } from '../SearchBar';
import Navbar from '.';

export default { title: 'components/common/Navbar', component: Navbar } as Meta;

const Template: Story<SearchBarProps> = (props) => {
  return <Navbar {...props}></Navbar>;
};

export const Basic = Template.bind({});
