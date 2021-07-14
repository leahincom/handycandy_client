import { instance } from '..';

export const postCandy = async (
  category_id: string,
  candy_name: string,
  shopping_link: string,
  candy_image_url: string,
  detail_info: string,
) => {
  const cards = await instance.post(`/api/candies`, {
    body: {
      category_id: `${category_id}`,
      candy_name: `${candy_name}`,
      shopping_link: `${shopping_link}`,
      candy_image_url: `${candy_image_url}`,
      detail_info: `${detail_info}`,
    },
  });
  console.log(cards);
  return cards.data;
};
