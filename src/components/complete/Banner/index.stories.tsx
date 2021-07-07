import { Meta, Story } from '@storybook/react';
import Banner from '.';

export default { title: 'components/complete/Banner', component: Banner } as Meta;

const Template: Story = (props) => <Banner {...props} />;

export const Basic = Template.bind({});
