import { Meta, Story } from '@storybook/react';
import ModifyCategoryModal, { ModifyCategoryModalProps } from '.';

export default { title: 'components/wish/ModifyCategoryModal', component: ModifyCategoryModal } as Meta;

const Template: Story<ModifyCategoryModalProps> = (props) => <ModifyCategoryModal {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
