import { useCallback, useState } from 'react';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://nc-backend-production.up.railway.app/api/',
});

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

// interface RegisterUniversity {
//   fullName: string;
//   email: string;
// }

export default function useRequestAuth() {
  const [registerAthleteData, setRegisterAthleteData] = useState<RegisterAthleteData>({
    fullName: '',
    email: '',
  });

  //   Register Athlete
  const postRegisterAthlete = useCallback(
    (body: postRegisterAthlete) => {
      client
        .post('auth/register/athlete', body)
        .then((res) => {
          setRegisterAthleteData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err, 'errrr'));
    },
    [setRegisterAthleteData],
  );

  //   Register University
  const postRegisterUniversity = useCallback(
    (body: postRegisterUniversity) => {
      client
        .post('auth/register/university', body)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err, 'errrr'));
    },
    [setRegisterAthleteData],
  );

  return {
    postRegisterAthlete,
    postRegisterUniversity,
    registerAthleteData,
  };
}
