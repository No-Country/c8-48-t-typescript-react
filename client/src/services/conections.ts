import { rootBackEnd } from '../constants/links';

const completeUrl = (url = '') => rootBackEnd + url;

const beaverHeader: () => HeadersInit = () => {
  return { 'Content-Type': 'application/json' };
};

type postLogin = {
  email: string;
  password: string;
};
const postLogin = async (body: postLogin) => {
  try {
    const _data = await fetch(completeUrl('api/auth/login'), {
      method: 'POST',
      headers: beaverHeader(),
      body: JSON.stringify(body),
    });
    const data = await _data.json();
  } catch (e) {
    console.log(e);
  }
};

export { postLogin };
