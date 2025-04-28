import { fetchUtils } from 'react-admin';
import { DataNotFoundError, InvalidResponseError, NetworkError } from './errors';
import { API_URL } from '../constants/api';

export const getList = async (resource: string, params: any) => {
  const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
  const { field, order } = params.sort || { field: 'id', order: 'ASC' };

  try {
    let response;
    try {
      response = await fetchUtils.fetchJson(
        `${API_URL}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`
      );
    } catch (fetchError: any) {
      // Проверяем статус ошибки
      if (fetchError.status === 404) {
        throw new DataNotFoundError(resource, {
          message: 'Запрашиваемая страница не найдена',
          url: `${API_URL}/${resource}`,
          params: { page, perPage, field, order }
        });
      }
      throw new NetworkError(resource, fetchError);
    }

    // Проверка валидности ответа
    if (!response.json) {
      throw new InvalidResponseError(resource, {
        message: 'Сервер вернул пустой ответ',
        endpoint: `${API_URL}/${resource}`,
        params: { page, perPage, field, order }
      });
    }

    // Приведение к массиву и проверка наличия данных
    const data = Array.isArray(response.json) ? response.json : [response.json];
    
    if (data.length === 0 && page === 1) {
      throw new DataNotFoundError(resource, {
        message: 'Нет доступных данных',
        params: { page, perPage, field, order }
      });
    }

    return {
      data,
      total: parseInt(response.headers.get('x-total-count') || data.length.toString(), 10),
    };
  } catch (error) {
    // Если ошибка уже является нашей кастомной ошибкой, пробрасываем её дальше
    if (error instanceof InvalidResponseError || error instanceof DataNotFoundError) {
      throw error;
    }

    // Иначе оборачиваем в NetworkError
    console.error('Error in getList:', {
      resource,
      error: error instanceof Error ? error.message : 'Unknown error',
      fullError: error
    });
    
    throw new NetworkError(resource, error instanceof Error ? error : new Error('Unknown error'));
  }
};
