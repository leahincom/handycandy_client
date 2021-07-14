import { Meta, Story } from '@storybook/react';
import Navigation, { NavigationProps } from '.';

export default { title: 'components/common/Navigation', argTypes: { onClick: { action: 'clicked' } } } as Meta;

const Template: Story<NavigationProps> = (props) => <Navigation {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  tab: 0,
};
