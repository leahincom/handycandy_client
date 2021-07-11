import { Meta, Story } from '@storybook/react';
import Modal from '.';

export default { title: 'components/complete/Modal', component: Modal } as Meta;

const Template: Story = (props) => <Modal {...props} />;

export const Basic = Template.bind({});
