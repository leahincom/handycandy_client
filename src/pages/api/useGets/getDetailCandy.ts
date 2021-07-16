import { instance } from '..';

export interface DetailCandyInfo {
  // candy_id: '60e3236d1ba2e66b40ac406f';
  candy_id: string;
  // candy_image_url: 'https://sopt-join-seminar.s3.ap-northeast-2.amazonaws.com/candy1/cowafter.png';
  candy_image_url: string;
  // candy_name: '핸캔 소고기 뒷풀이';
  candy_name: string;
  // category_name: '짜릿한 나를 위한';
  // reward_planned_at: '2021-07-17T00:00:00.000Z';
  reward_planned_at: string;
  // d_day: 1;
  message: string;
}

export interface DetailCandy {
  banner: string;
  d_day: number;
  category_name: string;
  candy_information: DetailCandyInfo[];
}

export const getDetailCandy = async (candy_id: string) => {
  const candy = await instance.get(`/api/candy/detail/${candy_id}`, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
  });
  return candy.data.result as DetailCandy;
};
