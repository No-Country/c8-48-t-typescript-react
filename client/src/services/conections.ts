const beaverHeader: () => HeadersInit = () => {
  return { 'Content-Type': 'application/json' };
};

type postLogin = {
  email: string;
  password: string;
};
/**  email: string;
  password: string; */
const postLogin = async (body: postLogin) => {
  try {
    const _data = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: beaverHeader(),
      body: JSON.stringify(body),
    });
    const data = await _data.json();
    console.log('file: conections.ts:6  postLogin  data', data);
  } catch (e) {
    console.log(e);
  }
};

export { postLogin };
