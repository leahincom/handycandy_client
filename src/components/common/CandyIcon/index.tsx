import Image from 'next/image';
import { Ball, Clover, Donut, Double, Flower, Fork, Leaf, Magnet, WaterDrop, X } from '../../../../public/assets/candy';

const candyIcon = { Ball, Clover, Donut, Double, Flower, Fork, Leaf, Magnet, WaterDrop, X };

export type CandyIconName = keyof typeof candyIcon;

export interface CandyIconProps {
  name: CandyIconName | string;
}

export default function CandyIcon({ name }: CandyIconProps) {
  return <Image src={{ src: candyIcon?.[name as CandyIconName].src, width: 44, height: 44 }} alt={name} />;
}
