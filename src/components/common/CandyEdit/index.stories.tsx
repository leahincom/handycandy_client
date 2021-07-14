import { Meta, Story } from '@storybook/react';
import WishedModal, { WishedModalProps } from '.';

export default { title: 'components/WishedModal', component: WishedModal } as Meta;

const Template: Story<WishedModalProps> = (props) => <WishedModal {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
