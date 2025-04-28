import { fetchUtils, GetManyParams } from 'react-admin';

import { API_URL } from '../constants/api';

export const getMany = async (resource: string, params: GetManyParams) => {
  try {
    const query = params.ids.map(id => `id=${id}`).join('&');
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}?${query}`);

    if (!response.json) {
      throw new Error('No data received from server');
    }

    // Ensure response is always an array
    const data = Array.isArray(response.json) ? response.json : [response.json];

    return { data };
  } catch (error) {
    console.error('Error in getMany:', {
      resource,
      ids: params.ids,
      error: error instanceof Error ? error.message : 'Unknown error',
      fullError: error
    });
    throw error; // Let react-admin handle the error
  }
};
