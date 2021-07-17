import axios from 'axios';

const check = typeof window === 'undefined' ? false : !window.localStorage ? false : true;

export const login = async (email: string, password: string) => {
  const userToken = await axios.post(`https://handycandy.cf/api/users/signIn`, {
    email: `${email}`,
    password: `${password}`,
  });
  if (check) {
    localStorage.setItem('userToken', userToken.data.token);
  }
};

export const instance = axios.create({
  baseURL: 'https://handycandy.cf',
  headers: {
    'x-auth-token': check && localStorage.getItem('userToken'),
  },
});
