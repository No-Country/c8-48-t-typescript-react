export const cleanToken = () => {
  localStorage.removeItem('token');
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};
