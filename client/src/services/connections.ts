import { rootBackEnd } from '../constants/links';

const completeUrl = (url = '') => rootBackEnd + url;

const bearerHeader: () => HeadersInit = () => {
  return { 'Content-Type': 'application/json' };
};

// Login
type postLogin = {
  email: string;
  password: string;
};
const postLogin = async (body: postLogin) => {
  try {
    const _data = await fetch(completeUrl('/auth/login'), {
      method: 'POST',
      headers: bearerHeader(),
      body: JSON.stringify(body),
    });
    const data = await _data.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export { postLogin };
