import { Meta, Story } from '@storybook/react';
import AddCategory, { AddCategoryProps } from '.';

export default { title: 'components/DialogManager/AddCategory', component: AddCategory } as Meta;

const Template: Story<AddCategoryProps> = (props) => <AddCategory {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
