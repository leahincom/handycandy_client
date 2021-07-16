import { Ball, X, Clover, Donut, Double, Flower, Fork, Magnet, Leaf, WaterDrop } from '../../public/assets/candy';
import {
  BallAdded,
  XAdded,
  CloverAdded,
  DonutAdded,
  DoubleAdded,
  FlowerAdded,
  ForkAdded,
  MagnetAdded,
  LeafAdded,
  WaterDropAdded,
} from '../../public/assets/candyAdded';

export const candyIconList = [
  {
    name: 'Leaf',
    added: LeafAdded,
    src: Leaf,
  },
  {
    name: 'WaterDrop',
    added: WaterDropAdded,
    src: WaterDrop,
  },
  {
    name: 'Clover',
    added: CloverAdded,
    src: Clover,
  },
  {
    name: 'X',
    added: XAdded,
    src: X,
  },
  {
    name: 'Flower',
    added: FlowerAdded,
    src: Flower,
  },
  {
    name: 'Donut',
    added: DonutAdded,
    src: Donut,
  },
  {
    name: 'Fork',
    added: ForkAdded,
    src: Fork,
  },
  {
    name: 'Ball',
    added: BallAdded,
    src: Ball,
  },
  {
    name: 'Double',
    added: DoubleAdded,
    src: Double,
  },
  {
    name: 'Magnet',
    added: MagnetAdded,
    src: Magnet,
  },
];

export const getIconSrc = (icon: string) => {
  switch (icon) {
    case 'Ball':
      return Ball;
    case 'X':
      return X;
    case 'Clover':
      return Clover;
    case 'Donut':
      return Donut;
    case 'Double':
      return Double;
    case 'Flower':
      return Flower;
    case 'Fork':
      return Fork;
    case 'Magnet':
      return Magnet;
    case 'Leaf':
      return Leaf;
    case 'WaterDrop':
      return WaterDrop;
  }
};

export const getAddedSrc = (icon: string) => {
  switch (icon) {
    case 'Ball':
      return BallAdded;
    case 'X':
      return XAdded;
    case 'Clover':
      return CloverAdded;
    case 'Donut':
      return DonutAdded;
    case 'Double':
      return DoubleAdded;
    case 'Flower':
      return FlowerAdded;
    case 'Fork':
      return ForkAdded;
    case 'Magnet':
      return MagnetAdded;
    case 'Leaf':
      return LeafAdded;
    case 'WaterDrop':
      return WaterDropAdded;
  }
};
