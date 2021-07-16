import { instance } from '..';

export interface WaitingCandy {
  candy_id: string;
  candy_image_url: string;
  candy_name: string;
  category_image_url: string;
  waiting_date: number;
}

export interface GetWaitingCandyResult {
  waiting_candy_count: number;
  waiting_candy: WaitingCandy[];
}
export interface GetWaitingCards {
  status: number;
  success: boolean;
  result: GetWaitingCandyResult;
}
export const getWaitingCandy = async () => {
  const response = await instance.get(`/api/candies/waitingCandy`);
  const data = response.data as GetWaitingCards;
  return data.result;
};
