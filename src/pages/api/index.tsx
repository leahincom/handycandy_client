import axios from 'axios';
export { getMatchingCards, getUpcomingCards } from './useGets';
// export * from './usePosts';

export const login = async (email: string, password: string) => {
  const userToken = await axios.post(`http://13.209.43.90:5000/api/users/signIn`, {
    body: {
      email: `${email}`,
      password: `${password}`,
    },
  });
  console.log(userToken);
  // localStorage.setItem('userToken', userToken.data);
};

export const instance = axios.create({
  baseURL: 'http://13.209.43.90:5000',
  headers: {
    // 'x-auth-token': localStorage && localStorage.getItem('userToken'),
  },
});
