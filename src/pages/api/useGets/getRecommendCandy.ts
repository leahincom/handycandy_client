import { instance } from '..';

export interface RecommendCandy {
  candy_image_url: string;
  candy_name: string;
  tag_name: string;
}

export const getRecommendCandy = async () => {
  const cards = await instance.get(`/api/candies/recommendCandy`);
  console.log(cards);
  return cards.data.result as RecommendCandy[];
};
