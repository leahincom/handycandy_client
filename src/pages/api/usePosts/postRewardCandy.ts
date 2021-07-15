import { instance } from '..';

export interface RewardBodyProps {
  candy_id: string;
  feeling: string;
  message?: string;
}

export const postRewardCandy = async (body: RewardBodyProps) => {
  const { data } = await instance.post('/api/candies/review', body);
  return data;
};
