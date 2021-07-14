import { Meta, Story } from '@storybook/react';
import ModifyCategoryModal from '.';

export default { title: 'components/wish/ModifyCategoryModal', component: ModifyCategoryModal } as Meta;

const Template: Story = (props) => <ModifyCategoryModal {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
