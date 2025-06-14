import { getData } from '@/shared/lib/api/getData';
import { CarResponse } from '@/shared/lib/types';

export async function getCars(params?: Record<string, string | number>) {
  try {
    const data = await getData<CarResponse>('/cars', params);

    return data;
  } catch (error) {
    console.log('Что-то пошло не так', error);
  }
}
