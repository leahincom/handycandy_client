import { instance } from '..';

interface BodyProps {
  category_image_url: string;
  category_name: string;
}

interface EditCategoryProps {
  category_id: string;
  category_image_url: string;
  category_name: string;
}

export interface PutEditCategory {
  status: number;
  success: boolean;
  result: EditCategoryProps;
}

export const putEditCategory = async (body: BodyProps) => {
  const { data } = await instance.put('/api/candies/completedCandy', body, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
  });
  return data as PutEditCategory;
};
