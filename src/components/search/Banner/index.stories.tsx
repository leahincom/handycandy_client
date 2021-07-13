import { Meta, Story } from '@storybook/react';
import Banner from '.';

export default { title: 'components/search/Banner', component: Banner } as Meta;

const Template: Story = (props) => <Banner {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
