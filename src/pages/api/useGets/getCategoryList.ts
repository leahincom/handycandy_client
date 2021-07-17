import { instance } from '..';

export interface CategoryList {
  category_id: string;
  name: string;
  category_image_url: string;
  category_candy_count: number;
  recent_update_date: number;
  image_url_one: string;
  image_url_two: string;
  image_url_three: string;
}

export const getCategoryList = async () => {
  const candy = await instance.get(`/api/category/`, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
  });
  return candy.data.result as CategoryList[];
};
