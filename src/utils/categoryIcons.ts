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
    name: 'leaf',
    added: LeafAdded,
    src: Leaf,
  },
  {
    name: 'waterdrop',
    added: WaterDropAdded,
    src: WaterDrop,
  },
  {
    name: 'clover',
    added: CloverAdded,
    src: Clover,
  },
  {
    name: 'x',
    added: XAdded,
    src: X,
  },
  {
    name: 'flower',
    added: FlowerAdded,
    src: Flower,
  },
  {
    name: 'donut',
    added: DonutAdded,
    src: Donut,
  },
  {
    name: 'fork',
    added: ForkAdded,
    src: Fork,
  },
  {
    name: 'ball',
    added: BallAdded,
    src: Ball,
  },
  {
    name: 'double',
    added: DoubleAdded,
    src: Double,
  },
  {
    name: 'magnet',
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
