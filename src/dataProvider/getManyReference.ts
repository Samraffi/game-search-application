import { fetchUtils, GetManyReferenceParams } from 'react-admin';

import { API_URL } from '../constant/api';

export const getManyReference = async (resource: string, params: GetManyReferenceParams) => {
  try {
    const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
    const { field, order } = params.sort || { field: 'id', order: 'ASC' };
    const query = `${params.target}=${params.id}&_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`;
    
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}?${query}`);

    if (!response.json) {
      throw new Error('No data received from server');
    }

    // Ensure response is always an array
    const data = Array.isArray(response.json) ? response.json : [response.json];

    return {
      data,
      total: parseInt(response.headers.get('x-total-count') || data.length.toString(), 10),
    };
  } catch (error) {
    console.error('Error in getManyReference:', {
      resource,
      target: params.target,
      id: params.id,
      pagination: params.pagination,
      sort: params.sort,
      error: error instanceof Error ? error.message : 'Unknown error',
      fullError: error
    });
    throw error; // Let react-admin handle the error
  }
};
