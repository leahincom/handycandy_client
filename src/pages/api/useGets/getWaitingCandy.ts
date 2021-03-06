import { instance } from '..';

export interface WaitingCandy {
  candy_id: string;
  candy_image_url: string;
  candy_name: string;
  category_image_url: string;
  waiting_date: number;
  category_name: string;
}

export interface GetWaitingCandyResult {
  waiting_candy_count: number;
  waiting_candy: WaitingCandy[];
}

export const getWaitingCandy = async () => {
  const cards = await instance.get(`/api/candies/waitingCandy`, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
  });
  return cards.data.result.waiting_candy as WaitingCandy[];
};
