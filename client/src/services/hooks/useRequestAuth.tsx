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
interface postRegisterAthlete {
  fullName: string;
  email: string;
  password: string;
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
  idAthlete?: string;
}

interface LoginResponse {
  success: boolean;
  message?: string[];
  jwt: string;
  data?: LoggedUser;
}

interface RegisterUniversityData {
  fullName: string;
  email: string;
}

export default function useRequestAuth() {
  const [registerAthleteData, setRegisterAthleteData] = useState<RegisterAthleteData>({
    fullName: '',
    email: '',
  });
  const [registerUniversityData, setRegisterUniversityData] = useState<RegisterUniversityData>({
    fullName: '',
    email: '',
  });

  const postLogin = useCallback(
    async (body: postLoginBody) =>
      await client
        .post('api/auth/login', body)
        .then((res) => {
          console.log('file: useRequestAuth.tsx:72  .then  res', res);

          const response: LoginResponse = res.data;
          if (!response.success) {
            errorAlert(handleMessageError(response.message));
            cleanToken();
          }
          localStorage.setItem('user', JSON.stringify(res.data.data));
          setToken(response.jwt);
          successAlert('Has Ingresado exitosamente');
          return response;
        })
        .catch((error) => {
          if (error.response?.status === 400) {
            errorAlert(
              handleMessageError(
                error.response?.data?.message ?? ['Hubo problemas con los datos proporcionados'],
              ),
            );
          }
          if (error.response?.status === 401) {
            errorAlert(
              handleMessageError(
                error.response?.data?.message ?? ['Las credenciales proporcionadas son inválidas'],
              ),
            );
          }
          return { success: false, data: { idAthlete: null } };
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
        })
        .catch((error) => console.log({ error }));
    },
    [setRegisterAthleteData],
  );

  //   Register University
  const postRegisterUniversity = useCallback(
    (body: FormData) => {
      client
        .post('api/auth/register/university', body, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          setRegisterUniversityData(res.data);
        })
        .catch((err) => console.log(err));
    },
    [setRegisterAthleteData],
  );

  const searchAthlete: any = (search: string | null) => {
    client
      .get('/api/athlete/search/' + search, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error({ error });
        if (error.response.status === 401) localStorage.clear();

        return false;
      });
  };
  const searchUniversity = (search: string | null) => {
    return client
      .get('/api/university/search/' + search, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error({ error });
        if (error.response.status === 401) localStorage.clear();

        return false;
      });
  };

  return {
    postRegisterAthlete,
    postRegisterUniversity,
    registerAthleteData,
    postLogin,
    registerUniversityData,
    searchAthlete,
    searchUniversity,
  };
}
