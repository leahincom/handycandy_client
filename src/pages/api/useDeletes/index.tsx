import { instance } from '..';

export const putCandyDate = async (candy_id: string) => {
  const cards = await instance.delete(`/api/candies/date/${candy_id}`, { data: { candy_id: `${candy_id}` } });
  return cards.data;
};
