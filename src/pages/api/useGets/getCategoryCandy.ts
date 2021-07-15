import { instance } from '..';

export interface CategoryCandy {
  candy_id: string;
  candy_name: string;
  candy_image_url: string;
  category_name: number;
  reward_planned_at: number;
  d_day: string;
}

export const getCategoryCandy = async () => {
  const candy = await instance.get(`/api/category/`);
  return candy.data.result as CategoryCandy[];
};
