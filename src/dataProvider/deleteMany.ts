import { fetchUtils, DeleteManyParams } from 'react-admin';

import { API_URL } from '../constant/api';

export const deleteMany = async (resource: string, params: DeleteManyParams) => {
  try {
    const deletionResults = await Promise.allSettled(
      params.ids.map(id =>
        fetchUtils.fetchJson(`${API_URL}/${resource}/${id}`, {
          method: 'DELETE',
        })
      )
    );

    // Check for any failed deletions
    const failedDeletions = deletionResults
      .map((result, index) => ({ result, id: params.ids[index] }))
      .filter(({ result }) => result.status === 'rejected');

    if (failedDeletions.length > 0) {
      console.error('Some deletions failed:', {
        resource,
        failedIds: failedDeletions.map(({ id }) => id),
        errors: failedDeletions.map(({ result }) => 
          result.status === 'rejected' ? result.reason : 'Unknown error'
        )
      });
      throw new Error(`Failed to delete ${failedDeletions.length} items`);
    }

    return { data: params.ids };
  } catch (error) {
    console.error('Error in deleteMany:', {
      resource,
      ids: params.ids,
      error: error instanceof Error ? error.message : 'Unknown error',
      fullError: error
    });
    throw error; // Let react-admin handle the error
  }
};
