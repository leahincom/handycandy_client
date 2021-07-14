import CompleteMain, { CompleteMainProps } from '../../components/complete/Main';

export default function CompletePage({ ...restProps }: CompleteMainProps) {
  return <CompleteMain {...restProps} />;
}
