import { instance } from '..';

export const putCandyImage = async (candy_id: string, candy_image_url: string) => {
  const data = await instance.put(`/api/candies/image/${candy_id}`, {
    candy_image_url,
  });
  return data;
};
