import axios from 'axios';

const api = axios.create({
  baseURL: 'https://testing-api.ru-rating.ru',
});

export default api;
