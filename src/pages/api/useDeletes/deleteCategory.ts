import { instance } from '..';

export interface DeleteCandy {
  status: number;
  success: boolean;
  result: string;
}

export const deleteCategory = async (category_id: string) => {
  const { data } = await instance.delete(`api/candies/${category_id}`, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
  });
  return data as DeleteCandy;
};
