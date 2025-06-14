import { convertKeysToCamelCase } from '../utils/convertKeysToCamelCase';
import api from './api';
import { AxiosResponse } from 'axios';

export const getData = async <T>(endpoint: string, params = {}): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(endpoint, { params });
  return convertKeysToCamelCase(response.data);
};
