import axios from 'axios';

console.log('aqui', process.env.REACT_APP_SERVER_URL);

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export default api;
