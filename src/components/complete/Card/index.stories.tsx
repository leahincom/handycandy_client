import { Meta, Story } from '@storybook/react';
import CompleteCard, { CompleteCardProps } from '.';

export default { title: 'components/reward/Card', component: CompleteCard } as Meta;

const Template: Story<CompleteCardProps> = (props) => <CompleteCard {...props} />;

export const Basic = Template.bind({});
