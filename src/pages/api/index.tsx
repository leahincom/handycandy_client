import axios from 'axios';

const check = typeof window === 'undefined' ? false : !window.localStorage ? false : true;

export const login = async (email: string, password: string) => {
  const userToken = await axios.post(`http://13.209.43.90:5000/api/users/signIn`, {
    email: `${email}`,
    password: `${password}`,
  });
  console.log(userToken);
  if (check) {
    localStorage.setItem('userToken', userToken.data.token);
  }
};

export const instance = axios.create({
  baseURL: 'http://13.209.43.90:5000',
  headers: {
    'x-auth-token': check && localStorage.getItem('userToken'),
  },
});
