import { useCallback, useState } from 'react';
import axios from 'axios';
import { rootBackEnd } from '../../constants/links';
import { handleMessageError } from '../helpers';
import { errorAlert, successAlert } from '../alerts';
import { cleanToken, setToken } from '../handleLocalStorage';

const client = axios.create({
  baseURL: rootBackEnd,
});

// Login
type postLoginBody = {
  email: string;
  password: string;
};

// Athlete
interface postRegisterUniversity {
  file: string;
  fullName: string;
  email: string;
  password: string;
  idCountry: number;
  linkedin: string;
  website: string;
  description: string;
  acceptConditions: boolean;
}

interface RegisterAthleteData {
  fullName: string;
  email: string;
}

// University

interface postRegisterAthlete {
  fullName: string;
  email: string;
  password: string;
}

interface LoggedUser {
  email: string;
  fullName: string;
}

interface LoginResponse {
  ok: boolean;
  message?: string[];
  jwt: string;
  data?: LoggedUser;
}

export default function useRequestAuth() {
  const [registerAthleteData, setRegisterAthleteData] = useState<RegisterAthleteData>({
    fullName: '',
    email: '',
  });

  const postLogin = useCallback(
    async (body: postLoginBody) =>
      await client
        .post('api/auth/login', body)
        .then((res) => {
          const response: LoginResponse = res.data;
          if (!response.ok) {
            errorAlert(handleMessageError(response.message));
            cleanToken();
          }
          localStorage.setItem('user', JSON.stringify(res.data.user));
          setToken(response.jwt);
          successAlert('Has Ingresado exitosamente');
          return true;
        })
        .catch((error) => {
          console.log({ error });
          return false;
        }),
    [],
  );
  //   Register Athlete
  const postRegisterAthlete = useCallback(
    (body: postRegisterAthlete) => {
      client
        .post('api/auth/register/athlete', body)
        .then((res) => {
          setRegisterAthleteData(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log({ error }));
    },
    [setRegisterAthleteData],
  );

  //   Register University
  const postRegisterUniversity = useCallback(
    (body: postRegisterUniversity) => {
      client
        .post('api/auth/register/university', body)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log({ error }));
    },
    [setRegisterAthleteData],
  );

  return {
    postRegisterAthlete,
    postRegisterUniversity,
    registerAthleteData,
    postLogin,
  };
}
