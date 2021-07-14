import { Meta, Story } from '@storybook/react';
import InputField, { InputFieldProps } from '.';

export default { title: 'components/signup/InputField', component: InputField } as Meta;

const Template: Story<InputFieldProps> = (props) => <InputField {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: '이름을 입력해주세요',
  type: 'text',
};
