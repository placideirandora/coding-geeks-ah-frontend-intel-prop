const token = localStorage.getItem('token');

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
};

export default axiosConfig;
