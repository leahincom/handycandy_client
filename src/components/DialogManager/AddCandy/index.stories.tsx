import { Meta, Story } from '@storybook/react';
import AddCandy, { AddCandyProps } from '.';

export default { title: 'components/DialogManager/AddCandy', component: AddCandy } as Meta;

const Template: Story<AddCandyProps> = (props) => <AddCandy {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
