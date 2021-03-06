import { instance } from '..';
import { CategoryImageUrl as BannerImageUrl } from './getCompletedCandy';

export interface GetCompletedCandyDetail {
  status: number;
  success: boolean;
  result: CompletedCandyDetail;
}

export interface CompletedCandyDetail {
  year: number;
  month: number;
  date: number;
  category_name: string;
  candy_name: string;
  feeling_image_url: string;
  candy_image_url: string;
  detail_info: string;
  message: string;
  candy_history: string;
  review_id: string;
  banner: BannerImageUrl;
  shopping_link: string;
}

export const getComletedCandyDetail = async (candy_id: string) => {
  const { data } = await instance.get(`/api/candies/completedCandy/detail/${candy_id}`);
  return data.result as CompletedCandyDetail;
};
