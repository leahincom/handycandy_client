import { instance } from '..';

interface BodyProps {
  year: number;
  month: number;
  date: number;
  message: string;
}

export interface PutBodyProps {
  candy_id: string;
  body: BodyProps;
}

export interface PutCandyDate {
  status: number;
  success: boolean;
  result: string;
}

export const putCandyDate = async (body: PutBodyProps) => {
  const data = await instance.put(`/api/candies/date/${body.candy_id}`, body.body, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
  });
  return data.data as PutCandyDate;
};
