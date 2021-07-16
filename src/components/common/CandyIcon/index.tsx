import Image from 'next/image';
import { Ball, Clover, Donut, Double, Flower, Fork, Leaf, Magnet, WaterDrop, X } from '../../../../public/assets/candy';

const candyIcon = { Ball, Clover, Donut, Double, Flower, Fork, Leaf, Magnet, WaterDrop, X };

export type CandyIconName = keyof typeof candyIcon;

export interface CandyIconProps {
  name?: CandyIconName | string;
  width?: number;
  height?: number;
}

export default function CandyIcon({ name = 'X', width = 44, height = 44 }: CandyIconProps) {
  return <Image src={{ src: candyIcon?.[name as CandyIconName]?.src ?? X.src, width, height }} alt={name} />;
}
