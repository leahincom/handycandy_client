import { Meta, Story } from '@storybook/react';
import DialogManager, { DialogManagerProps } from '.';

export default { title: 'components/DialogManager', component: DialogManager } as Meta;

const Template: Story<DialogManagerProps> = (props) => <DialogManager {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
