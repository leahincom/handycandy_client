import { Meta, Story } from '@storybook/react';
import AddCandy from '.';

export default { title: 'components/DialogManager/AddCandy', component: AddCandy } as Meta;

const Template: Story = (props) => <AddCandy {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
