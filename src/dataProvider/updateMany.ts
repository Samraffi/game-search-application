import { fetchUtils, UpdateManyParams } from 'react-admin';

import { API_URL } from '../constants/api';

export const updateMany = async (resource: string, params: UpdateManyParams) => {
  try {
    const updateResults = await Promise.allSettled(
      params.ids.map(id =>
        fetchUtils.fetchJson(`${API_URL}/${resource}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(params.data),
        })
      )
    );

    // Check for any failed updates
    const failedUpdates = updateResults
      .map((result, index) => ({ result, id: params.ids[index] }))
      .filter(({ result }) => result.status === 'rejected');

    if (failedUpdates.length > 0) {
      console.error('Some updates failed:', {
        resource,
        failedIds: failedUpdates.map(({ id }) => id),
        data: params.data,
        errors: failedUpdates.map(({ result }) => 
          result.status === 'rejected' ? result.reason : 'Unknown error'
        )
      });
      throw new Error(`Failed to update ${failedUpdates.length} items`);
    }

    // Get successful updates
    const successfulUpdates = updateResults
      .filter((result): result is PromiseFulfilledResult<any> => result.status === 'fulfilled')
      .map(result => result.value.json.id);

    return { data: successfulUpdates };
  } catch (error) {
    console.error('Error in updateMany:', {
      resource,
      ids: params.ids,
      data: params.data,
      error: error instanceof Error ? error.message : 'Unknown error',
      fullError: error
    });
    throw error; // Let react-admin handle the error
  }
};
