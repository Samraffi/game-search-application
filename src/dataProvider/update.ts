import { fetchUtils, UpdateParams } from 'react-admin';

import { API_URL } from '../constant/api';

export const update = async (resource: string, params: UpdateParams) => {
  try {
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    });

    if (!response.json) {
      throw new Error('No data received from server');
    }

    return { data: response.json };
  } catch (error) {
    console.error('Error in update:', {
      resource,
      id: params.id,
      data: params.data,
      error: error instanceof Error ? error.message : 'Unknown error',
      fullError: error
    });
    throw error; // Let react-admin handle the error
  }
};
