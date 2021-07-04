import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default { title: 'components/common/Button', component: Button } as Meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Basic = Template.bind({});
// Basic.args = {
//   decs: '설명',
//   image: 'https://dummyimage.com/600x400/000/fff',
//   title: '제목',
// };
