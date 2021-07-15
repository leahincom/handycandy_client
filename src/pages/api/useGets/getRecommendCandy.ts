import { instance } from '..';

export interface RecommendCandy {
  candy_image_url: string;
  candy_name: string;
  tag_name: string;
}

export const getRecommendCandy = async (user_id: string) => {
  const cards = await instance.get(`/api/candies/recommendCandy`, {
    headers: {
      user_id: `${user_id}`,
    },
  });
  console.log(cards);
  return cards.data.result as RecommendCandy[];
};
