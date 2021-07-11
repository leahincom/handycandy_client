import { Meta, Story } from '@storybook/react';
import Banner, { BannerProps } from '.';

export default { title: 'components/complete/Banner', component: Banner } as Meta;

const Template: Story<BannerProps> = (props) => <Banner {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  bannerTitle: '캔디로 보상완료하기',
  bannerDesc: '나에게 캔디를 주며 일상의 달콤한 순간을 남겨보세요',
};
