import { instance } from '..';

export interface UserInfo {
  user_nickname: string;
  candy_count_phrase: string;
  month: number;
  phrase: string;
  banner: string;
  date: number;
}

export const getUserInfo = async () => {
  const user = await instance.get(`/api/userInfo`, {
    headers: {
      'x-auth-token': localStorage.getItem('userToken'),
    },
  });
  return user.data.result as UserInfo;
};
