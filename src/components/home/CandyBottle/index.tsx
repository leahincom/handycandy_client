import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Bodies, Composite, Engine, Render, Runner } from 'matter-js';
import ImageComp from 'next/image';
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
} from '../../../../public/assets/candy3d';
import bottle from '../../../../public/assets/home/bottle.svg';
import random from '../../../utils/random';

const WIDTH = 450;
const HEIGHT = 650;
const BAR_MASS = 50;

const leftBorder = Bodies.rectangle(0, HEIGHT / 2, BAR_MASS, HEIGHT, {
  isStatic: true,
  render: { fillStyle: 'rgba(255,255,255,0)' },
});
const rightBorder = Bodies.rectangle(WIDTH, HEIGHT / 2, BAR_MASS, HEIGHT, {
  isStatic: true,
  render: { fillStyle: 'rgba(255,255,255,0)' },
});
const bottomBorder = Bodies.rectangle(WIDTH / 2, HEIGHT, WIDTH, BAR_MASS, {
  isStatic: true,
  render: { fillStyle: 'rgba(255,255,255,0)' },
});

const Container = styled.div`
  position: relative;
  width: 475px;
`;

const BottleWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const BottleHead = styled.div`
  z-index: 5;
  border: 1.8px solid rgba(215, 215, 215, 0.6);
  border-radius: 14.9885px;
  background: rgba(240, 240, 240, 0.8);
  height: 15.24px;
  backdrop-filter: blur(3px);
`;

const BottleNeck = styled.div`
  margin: auto;
  border: 1.8px solid rgba(256, 256, 256, 0.7);
  border-radius: 14.9885px;
  background: rgba(250, 250, 250, 0.6);
  width: 438.76px;
  height: 49.5px;
  backdrop-filter: blur(3px);
`;

const BottleBody = styled.div`
  border: 3px solid rgba(256, 256, 256, 0.7);
  border-radius: 30px;
  background: linear-gradient(147.01deg, rgba(255, 255, 255, 0.2) 10.48%, rgba(189, 189, 189, 0.04) 100.5%);
  height: 300px;
  backdrop-filter: blur(3px);
`;

const candyMap: Record<string, string> = {
  Ball: Ball3d.src,
  Clover: Clover3d.src,
  Donut: Donut3d.src,
  Double: Double3d.src,
  Flower: Flower3d.src,
  Fork: Fork3d.src,
  Leaf: Leaf3d.src,
  Magnet: Magnet3d.src,
  WaterDrop: WaterDrop3d.src,
  X: X3d.src,
};
export interface CandyBottleProps {
  candyList: string[];
}

export default function CandyBottle({ candyList }: CandyBottleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadingImage, setLoadingImage] = useState(true);
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    let loadingCount = 0;
    Object.values(candyMap).forEach((value) => {
      const img = new Image();
      img.src = value;
      img.onload = () => {
        loadingCount = loadingCount + 1;
        if (loadingCount >= 10) {
          setLoadingImage(false);
        }
      };
    });
  }, []);
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || typeof window === 'undefined' || loadingImage) {
      return;
    }

    const engine = Engine.create({});
    const render = Render.create({
      element: containerRef.current,
      engine,
      canvas: canvasRef.current,
      options: {
        width: WIDTH,
        height: HEIGHT,
        wireframes: false,
        hasBounds: true,
        background: 'rgba(255,255,255,0)',
      },
    });
    const world = engine.world;
    const candy_render_list = candyList.filter((value) => value).map((value) => candyMap[value]);
    const candy_object_list = candy_render_list.map((value) =>
      Bodies.circle(random(-60, 60) + WIDTH / 2, -100 + random(-50, 50), 55, {
        density: 0.0005,
        frictionAir: 0.02,
        render: {
          sprite: { texture: value, xScale: 0.3, yScale: 0.3 },
        },
      }),
    );
    Composite.add(world, [leftBorder, rightBorder, bottomBorder] as any);
    Composite.add(world, candy_object_list as any);
    Render.run(render);
    Runner.run(engine);
  }, [candyList, loadingImage]);
  return (
    <Container ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
      <BottleWrapper>
        <ImageComp src={bottle} alt='bottle' />
      </BottleWrapper>
    </Container>
  );
}
