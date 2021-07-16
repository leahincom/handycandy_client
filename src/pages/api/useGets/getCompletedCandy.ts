import { instance } from '..';

export interface GetCompletedCandy {
  category_num: number[];
  user_nickname: string;
  monthly_candies: { [key: string]: CompletedCandy[] };
}

export interface CompletedCandy {
  candy_id: string;
  candy_image_url: string;
  candy_name: string;
  category_image_url: CategoryImageUrl;
  category_name: string;
  year: number;
  month: number;
  date: number;
}

export enum CategoryImageUrl {
  Ball = 'Ball',
  Clover = 'Clover',
  Donut = 'Donut',
  Double = 'Double',
  Flower = 'Flower',
  WaterDrop = 'WaterDrop',
  X = 'X',
  Fork = 'Fork',
  Leaf = 'Leaf',
  Magnet = 'Magnet',
}

export const getCompletedCandy = async () => {
  const { data } = await instance.get(`api/candies/completedCandy`);
  return data.result as GetCompletedCandy;
};
