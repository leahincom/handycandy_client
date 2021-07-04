import { Meta, Story } from '@storybook/react';
import WaitingCardSlider from '.';

export default { title: 'components/home/WaitingCardSlider', component: WaitingCardSlider } as Meta;

const Template: Story = (props) => <WaitingCardSlider {...props} />;

export const Basic = Template.bind({});
