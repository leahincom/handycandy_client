import { Meta, Story } from '@storybook/react';
import React from 'react';
import CandyBottle, { CandyBottleProps } from '.';

export default { title: 'components/home/CandyBottle', component: CandyBottle } as Meta;

const Template: Story<CandyBottleProps> = (props) => <CandyBottle {...props} />;

export const Control = Template.bind({});
Control.args = {
  candyList: ['Ball', 'Clover', 'Donut', 'Double', 'Flower', 'Fork', 'Leaf', 'Magnet', 'WaterDrop', 'X'],
};
