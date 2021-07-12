import { basename } from 'path';
import { Meta } from '@storybook/react';
import Image from 'next/image';
import React from 'react';
import {
  Ball3d,
  Clover3d,
  Donut3d,
  Double3d,
  Flower3d,
  Fork3d,
  Leaf3d,
  Magnet3d,
  WaterDrop3d,
  X3d,
} from '../../../public/assets/candy3d';

export default { title: 'assets/candy3d' } as Meta;

const candyPathList = [Ball3d, Clover3d, Donut3d, Double3d, Flower3d, Fork3d, Leaf3d, Magnet3d, WaterDrop3d, X3d];
export const AllCandy = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 100px)', gridGap: '4px' }}>
      {candyPathList.map((src) => {
        const str_src = String(src);
        return (
          <span key={str_src} style={{ textAlign: 'center' }}>
            <p>{basename(str_src)}</p>
            <Image src={src} alt='ball' width='50px' />
          </span>
        );
      })}
    </div>
  );
};
