import { fetchUtils } from 'react-admin';

import { API_URL } from '../constant/api';

export const getOne = async (resource: string, params: any) => {
  try {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.id}`
    );

    if (!response.json) {
      throw new Error('No data received from server');
    }

    return { data: response.json };
  } catch (error) {
    console.error('Error in getOne:', {
      resource,
      id: params.id,
      error: error instanceof Error ? error.message : 'Unknown error',
      fullError: error
    });
    throw error; // Let react-admin handle the error
  }
};
