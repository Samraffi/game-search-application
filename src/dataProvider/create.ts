import {
  fetchUtils,
  RaRecord,
  CreateParams,
  CreateResult,
  Identifier,
} from 'react-admin';
import { API_URL } from '../constants/api';

export const create = async <RecordType extends RaRecord>(
  resource: string,
  params: CreateParams<Omit<RecordType, 'id'>>
): Promise<CreateResult<RecordType>> => {
  try {
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    });

    if (!response.json) {
      throw new Error('No data received from server');
    }

    // Ensure the response has an id
    if (!('id' in response.json)) {
      throw new Error('Server response missing id field');
    }

    // Create record with strongly typed id
    const newRecord = {
      ...(params.data as RecordType),
      id: response.json.id as Identifier,
    };

    // Return the record with the correct type
    return { 
      data: newRecord as RecordType
    };
  } catch (error) {
    console.error('Error in create:', {
      resource,
      data: params.data,
      error: error instanceof Error ? error.message : 'Unknown error',
      fullError: error
    });
    throw error; // Let react-admin handle the error
  }
};
