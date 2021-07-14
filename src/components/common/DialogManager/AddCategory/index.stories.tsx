import { Meta, Story } from '@storybook/react';
import AddCategory from '.';

export default { title: 'components/DialogManager/AddCategory', component: AddCategory } as Meta;

const Template: Story = (props) => <AddCategory {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
