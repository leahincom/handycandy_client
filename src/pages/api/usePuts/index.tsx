import { instance } from '..';

export const putCandyDate = async (candy_id: string, year: number, month: number, date: number, message: string) => {
  const cards = await instance.put(`/api/candies/date/${candy_id}`, {
    body: {
      year: `${year}`,
      month: `${month}`,
      date: `${date}`,
      messsage: `${message}`,
    },
  });
  return cards.data;
};
