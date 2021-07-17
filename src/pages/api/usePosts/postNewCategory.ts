import { instance } from '..';

export interface NewCategory {
  category_id: string;
}

export interface Category {
  category_image_url: string;
  name: string;
}

export const postNewCategory = async (category: Category) => {
  const { data } = await instance.post(
    `/api/category`,
    {
      category_image_url: `${category.category_image_url}`,
      name: `${category.name}`,
    },
    {
      headers: {
        'x-auth-token': localStorage.getItem('userToken'),
      },
    },
  );
  return data.result as NewCategory;
};
