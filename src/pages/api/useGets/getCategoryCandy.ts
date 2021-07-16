import { instance } from '..';

export interface CategoryCandyComingCandy {
  // candy_id: '60e3236d1ba2e66b40ac406f';
  candy_id: string;
  // candy_image_url: 'https://sopt-join-seminar.s3.ap-northeast-2.amazonaws.com/candy1/cowafter.png';
  candy_image_url: string;
  // candy_name: '핸캔 소고기 뒷풀이';
  candy_name: string;
  // category_name: '짜릿한 나를 위한';
  category_name: string;
  // reward_planned_at: '2021-07-17T00:00:00.000Z';
  reward_planned_at: string;
  // d_day: 1;
  d_day: number;
}
export interface CategoryCandyWaitingCandy {
  /** @example candy_id: '60e3251a1ba2e66b40ac407b'; */
  candy_id: string;
  // candy_image_url: '60e3251a1ba2e66b40ac407b';
  candy_image_url: string;
  // candy_name: '아원고택';
  candy_name: string;
  // category_name: '짜릿한 나를 위한';
  category_name: string;
  // waiting_date: 11;
  waiting_date: number;
}

<<<<<<< HEAD
export const getCategoryCandy = async () => {
  const candy = await instance.get(`/api/category/`);
  return candy.data.result as CategoryCandy[];
=======
export interface CategoryCandy {
  banner: string;
  all_candy_count: number;
  coming_candy_count: number;
  waiting_candy_count: number;
  coming_candy: CategoryCandyComingCandy[];
  waiting_candy: CategoryCandyWaitingCandy[];
}

export const getCategoryCandy = async (category_id: string) => {
  const candy = await instance.get(`/api/category/detail/${category_id}`, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
  });
  return candy.data.result as CategoryCandy;
>>>>>>> d02e273c9ad2352934979a49720c6c9a6cb40626
};
