export const getToken = () => localStorage.getItem('token');
const setAxiosConfig = () => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      authorization: getToken()
    }
  };
  return axiosConfig;
};

export default setAxiosConfig;
