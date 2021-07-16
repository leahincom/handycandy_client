import { instance } from '..';

export interface GetRewardCandy {
  status: number;
  success: boolean;
  result: RewardCandy;
}

export interface RewardCandy {
  category_name: string;
  candy_name: string;
  detail_info: string;
  shopping_link: string;
  year: number;
  month: number;
  date: number;
}

export const getRewardCandy = async (candy_id: string) => {
  const { data } = await instance.get(`api/candies/review/${candy_id}`);
  return data as GetRewardCandy;
};
