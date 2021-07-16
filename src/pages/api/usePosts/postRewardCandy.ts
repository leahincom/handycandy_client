import { instance } from '..';

export interface PostRewardCandy {
  status: number;
  success: boolean;
  result: postRewardCandyResult;
}

export interface postRewardCandyResult {
  category_image_url: string;
}

export interface RewardBodyProps {
  candy_id: string;
  feeling: string;
  message?: string;
}

export const postRewardCandy = async (body: RewardBodyProps) => {
  const { data } = await instance.post('/api/candies/review', body);
  return data.result as postRewardCandyResult;
};
