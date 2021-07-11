import { Meta, Story } from '@storybook/react';
import Navigation from '.';

export default { title: 'components/common/Navigation', argTypes: { onClick: { action: 'clicked' } } } as Meta;

const Template: Story = (props) => <Navigation {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  decs: '설명',
  image: 'https://dummyimage.com/600x400/000/fff',
  title: '제목',
};
