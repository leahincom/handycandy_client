import { Meta, Story } from '@storybook/react';
import Navbar from '.';

export default { title: 'components/common/Navbar', component: Navbar } as Meta;

const Template: Story = (props) => {
  return <Navbar {...props}></Navbar>;
};

export const Basic = Template.bind({});
