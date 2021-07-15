import { instance } from '..';

export interface DeleteCandy {
  status: number;
  success: boolean;
  result: string;
}

export const deleteCandy = async (candy_id: string) => {
  const { data } = await instance.delete(`api/candies/${candy_id}`);
  return data as DeleteCandy;
};
