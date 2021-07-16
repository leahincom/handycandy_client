import { instance } from '..';
import { CompletedCandy, CategoryImageURL } from './getCompletedCandy';

export interface Coming {
  candy_image_url: string;
  waiting_date: number;
  category_image_url: string;
  category_name: string;
  candy_name: string;
}

export interface Completed extends CompletedCandy {
  candy_image_url: string;
  category_image_url: CategoryImageURL;
  candy_name: string;
}

export interface MatchedCandy {
  search_item: string;
  coming_candy_count: number;
  coming_list: Coming[];
  completed_candy_count: number;
  completed_list: Completed[];
}

export const getMatchedCandy = async (item?: string | string[]) => {
  const cards = await instance.get(`/api/search`, {
    params: {
      item: `${item}`,
    },
  });
  console.log(cards);
  return cards.data.result;
};
