import {
  fetchUtils,
  RaRecord,
  DeleteParams,
  DeleteResult,
} from 'react-admin';
import { API_URL } from '../constant/api';

export const deleteOne = async <
  RecordType extends RaRecord = any
>(
  resource: string,
  params: DeleteParams<RecordType>
): Promise<DeleteResult<RecordType>> => {
  try {
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${params.id}`, {
      method: 'DELETE',
    });

    // Some APIs return no content for DELETE, so we don't check response.json here
    return {
      data: params.previousData as RecordType,
    };
  } catch (error) {
    console.error('Error in deleteOne:', {
      resource,
      id: params.id,
      previousData: params.previousData,
      error: error instanceof Error ? error.message : 'Unknown error',
      fullError: error
    });
    throw error; // Let react-admin handle the error
  }
};
