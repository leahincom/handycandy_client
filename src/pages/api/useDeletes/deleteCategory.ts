import { instance } from '..';

export interface DeleteCandy {
  status: number;
  success: boolean;
  result: string;
}

export const deleteCategory = async (category_id: string) => {
  const { data } = await instance.delete(`api/candies`, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
    params: {
      category_id,
    },
  });
  return data as DeleteCandy;
};
