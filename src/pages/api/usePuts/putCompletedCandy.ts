import { instance } from '..';

interface bodyProps {
  review_id: string;
  candy_name: string;
  feeling: string;
  message: string;
}

export interface PutCompletedCandy {
  status: number;
  success: boolean;
  result: string;
}

export const putCompletedCandy = async (body: bodyProps) => {
  const { data } = await instance.put('/api/candies/completedCandy', body);
  return data as PutCompletedCandy;
};
