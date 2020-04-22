import fetch from 'isomorphic-unfetch';
import Cookies from 'universal-cookie';

const isofetch = async (url: string, method: string, params: any): Promise<Response> => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return await fetch(url, {
    method: method,
    headers,
    body: JSON.stringify(params),
  });
};

export const signIn = async () => {
  const response = await isofetch('http://localhost:8000/auth/token', 'GET', {
    username: 'taketo',
    password: 'taketo',
  });

  if (!response.ok) {
    console.log(response.status);
    return;
  }

  const responseBody = await response.json();
  console.log(responseBody);
};
