import { Meta, Story } from '@storybook/react';
import WishedCandySlider from '.';

export default { title: 'components/common/WishedCandySlider', component: WishedCandySlider } as Meta;

const Template: Story = (props) => <WishedCandySlider {...props} />;

export const Basic = Template.bind({});
