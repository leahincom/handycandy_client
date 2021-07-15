import { Meta, Story } from '@storybook/react';
import {
  Bottle0,
  Bottle1,
  Bottle2,
  Bottle3,
  Bottle4,
  Bottle5,
  Bottle6,
  Bottle7,
  Bottle8,
  Bottle9,
} from '../../../../public/assets/bottles';
import CompleteSlider, { CompleteSliderProps } from '.';

export default { title: 'components/complete/Slider/CompleteSlider', component: CompleteSlider } as Meta;

const Template: Story<CompleteSliderProps> = (props) => <CompleteSlider {...props} />;

const bottleList = [Bottle0, Bottle1, Bottle2, Bottle3, Bottle4, Bottle5, Bottle6, Bottle7, Bottle8, Bottle9];

export const Basic = Template.bind({});
Basic.args = {
  bottles: bottleList,
};
