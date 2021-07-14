import { Meta, Story } from '@storybook/react';
import CandyEdit, { CandyEditProps } from '.';

export default { title: 'components/CandyEdit', component: CandyEdit } as Meta;

const Template: Story<CandyEditProps> = (props) => <CandyEdit {...props} />;

export const Basic = Template.bind({});
Basic.args = {};
