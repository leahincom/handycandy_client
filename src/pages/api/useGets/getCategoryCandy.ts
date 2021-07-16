import { instance } from '..';

export interface CategoryCandy {
  candy_id: string;
  candy_name: string;
  candy_image_url: string;
  category_name: number;
  reward_planned_at: number;
  d_day: string;
}

export const getCategoryCandy = async (candy_id: string, category_id: string) => {
  const candy = await instance.get(`/api/candies/category/`, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
    params: {
      candy_id: `${candy_id}`,
      category_id: `${category_id}`,
    },
  });
  return candy.data.result as CategoryCandy[];
};
