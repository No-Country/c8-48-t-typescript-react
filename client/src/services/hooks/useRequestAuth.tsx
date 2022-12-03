import { useCallback, useState } from 'react';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://nc-backend-production.up.railway.app/api/',
});

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
// interface postRegisterUniversity {
//   file: string;
//   fullName: string;
//   email: string;
//   password: string;
//   idCountry: number;
//   linkedin: string;
//   website: string;
//   description: string;
//   acceptConditions: boolean;
// }

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

  //   Register Athlete
  const postRegisterAthlete = useCallback(
    (body: postRegisterAthlete) => {
      client
        .post('auth/register/athlete', body)
        .then((res) => {
          setRegisterAthleteData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
    [setRegisterAthleteData],
  );

  //   Register University
  const postRegisterUniversity = useCallback(
    (body: FormData) => {
      client
        .post('auth/register/university', body, {
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

  return {
    postRegisterAthlete,
    postRegisterUniversity,
    registerAthleteData,
    registerUniversityData,
  };
}
