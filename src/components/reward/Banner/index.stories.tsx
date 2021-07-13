import { Meta, Story } from '@storybook/react';
import RewardBanner, { RewardBannerProps } from '.';

export default { title: 'components/reward/Banner', component: RewardBanner } as Meta;

const Template: Story<RewardBannerProps> = (props) => <RewardBanner {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  bannerTitle: '캔디로 보상완료하기',
  bannerDesc: '나에게 캔디를 주며 일상의 달콤한 순간을 남겨보세요',
};
