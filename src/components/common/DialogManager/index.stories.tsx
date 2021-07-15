import { Meta, Story } from '@storybook/react';
import DialogManager from '.';

export default { title: 'components/DialogManager', component: DialogManager } as Meta;

const Template: Story = (props) => <DialogManager {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
