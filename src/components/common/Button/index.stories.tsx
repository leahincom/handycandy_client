import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default { title: 'components/common/Button', component: Button } as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  buttonColor: 'gray',
  size: 'sm',
  text: '만들기',
};
