import { Meta, Story } from '@storybook/react';
import Footer from './';

export default { title: 'components/common/Footer', component: Footer } as Meta;

const Template: Story = (props) => <Footer {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
