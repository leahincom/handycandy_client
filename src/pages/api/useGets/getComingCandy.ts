import { instance } from '..';

export interface PlannedCandy {
  candy_id: string;
  candy_image_url: string;
  candy_name: string;
  category_image_url: string;
  category_name: string;
  d_day: number;
  month: number;
  date: number;
}

export interface GetUpcomingCardsResult {
  comming_candy_count: number;
  comming_candy: PlannedCandy[];
}

export interface GetUpcomingCards {
  status: number;
  success: boolean;
  result: GetUpcomingCardsResult;
}

export const getComingCandy = async () => {
  const response = await instance.get(`/api/candies/commingCandy`);
  const data = response.data as GetUpcomingCards;
  return data.result.comming_candy;
};
