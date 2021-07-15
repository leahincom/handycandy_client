import { instance } from '..';

export interface GetCompletedCandy {
  status: number;
  success: boolean;
  result: GetCompletedCandyResult;
}

export interface GetCompletedCandyResult {
  user_nickname: string;
  month: string;
  candy_count: number;
  cur_categories: string[];
  before_categoris: string[];
  after_categoris: string[];
  completed_candy: CompletedCandy[];
}

export interface CompletedCandy {
  candy_id: string;
  candy_image_url: string;
  candy_name: string;
  category_image_url: string;
  category_name: string;
  year: number;
  month: number;
  date: number;
}

export const getCompletedCandy = async (month: number) => {
  const { data } = await instance.get(`api/candies/completedCandy/${month}`);
  return data as GetCompletedCandy;
};
