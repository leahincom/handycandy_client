import NavigationLayout from '../../components/layout/NavigationLayout';
import RewardMain, { RewardMainProps } from '../../components/reward/Main';

export default function RewardPage({ ...restProps }: RewardMainProps) {
  return (
    <NavigationLayout>
      <RewardMain {...restProps} />
    </NavigationLayout>
  );
}
