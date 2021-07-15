import CompleteMain, { CompleteMainProps } from '../../components/complete/Main';
import NavigationLayout from '../../components/layout/NavigationLayout';

export default function CompletePage({ ...restProps }: CompleteMainProps) {
  return (
    <NavigationLayout>
      <CompleteMain {...restProps} />
    </NavigationLayout>
  );
}
