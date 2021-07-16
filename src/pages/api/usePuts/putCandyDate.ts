import { instance } from '..';

interface BodyProps {
  year: number;
  month: number;
  date: number;
  message: string;
}

export interface PutBodyProps {
  category_id: string;
  body: BodyProps;
}

export interface PutCandyDate {
  status: number;
  success: boolean;
  result: string;
}

export const putCandyDate = async (body: PutBodyProps) => {
  const { data } = await instance.put('/api/candies/completedCandy', body.body, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
    params: {
      candy_id: body.category_id,
    },
  });
  console.log(data);
  return data as PutCandyDate;
};
