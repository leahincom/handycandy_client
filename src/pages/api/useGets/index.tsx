import { instance } from '../';

export const getUserInfo = async () => {
  const user = await instance.get(`/api/userInfo`);
  console.log(user);
  return user.data;
};

export const getMatchingCards = async (item: string) => {
  const cards = await instance.get(`/api/search/item=${item}`);
  console.log(cards);
  return cards.data.result.item_list;
};

export const getUpcomingCards = async () => {
  const cards = await instance.get(`/api/candies/commingCandy`);
  console.log(cards);
  return cards.data.result.comming_candy;
};

export const getRecommendCards = async (user_id: number) => {
  const cards = await instance.get(`/api/candies/recommendCandy`, {
    headers: {
      user_id: `${user_id}`,
    },
  });
  console.log(cards);
  return cards.data;
};

export const getWaitingCards = async () => {
  const cards = await instance.get(`/api/candies/waitingCandy`);
  console.log(cards);
  return cards.data;
};

export const getCompletedCandy = async (month: number) => {
  const cards = await instance.get(`/api/candies/completedCandy/${month}`);
  console.log(cards);
  return cards.data;
};
