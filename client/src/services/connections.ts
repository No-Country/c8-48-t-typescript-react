import { rootBackEnd } from '../constants/links';
import { errorAlert, errorServerAlert, successAlert } from './alerts';
import { cleanToken, setToken } from './handleLocalStorage';
import { handleMessageError } from './helpers';

const completeUrl = (url = '') => rootBackEnd + url;

const bearerHeader: () => HeadersInit = () => {
  return { 'Content-Type': 'application/json' };
};

// Login
type postLogin = {
  email: string;
  password: string;
};
const postLogin:(body: postLogin) => Promise<boolean> = async (body: postLogin) => {
  try {
    const _data = await fetch(completeUrl('/auth/login'), {
      method: 'POST',
      headers: bearerHeader(),
      body: JSON.stringify(body),
    });
    const data = await _data.json();
    if (data.ok !== true) {
      errorAlert(handleMessageError(data.message));
      cleanToken();
      return false;
    }
    setToken(data.jwt);
    successAlert('Logeado exitosamente');
    return true;
  } catch (e) {
    errorServerAlert();
    console.error(e);
    return false;
  }
};

export { postLogin };
