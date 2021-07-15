import { instance } from '..';

export interface CategoryCandy {
  category_id: string;
  name: string;
  category_image_url: string;
  category_candy_count: number;
  recent_update_date: number;
  image_url_one: string;
  image_url_two: string;
  image_url_three: string;
}

export const getCategoryCandy = async () => {
  const candy = await instance.get(`/api/category/`);
  return candy.data.result as CategoryCandy[];
};
