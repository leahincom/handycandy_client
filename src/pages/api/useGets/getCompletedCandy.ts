import { instance } from '..';
import { WaitingCandy } from './getWaitingCandy';

export interface Category {
  category: string;
}

type WaitingCandyAdjusted = Omit<WaitingCandy, 'waiting_date'>;

export interface CompleteCandy extends WaitingCandyAdjusted {
  category_name: string;
  year: number;
  month: number;
  date: number;
}

export interface CompleteCandyResult {
  user_nickname: string;
  month: number;
  candy_count: number;
  cur_categories: Category[];
  before_categories: Category[];
  after_categories: Category[];
  completed_candy: CompleteCandy[];
}

export const getCompletedCandy = async (mon: number) => {
  const cards = await instance.get(`/api/candies/completedCandy`, {
    data: { month: mon },
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
  });
  console.log(cards);
  return cards.data.result as CompleteCandyResult;
};
