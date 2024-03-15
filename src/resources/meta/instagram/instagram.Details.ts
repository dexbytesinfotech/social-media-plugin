import { fetchDataWithValidation } from '../common/dataValidator';
import { MetaResponse, InstagramBasicDetailsParams } from '../common/interfaces';
import { IInstagramAccountDetailsRepository } from '../factory/meta.Factory.Interfaces';
import { buildFields } from '../helpers/instagram.FieldGenerator';

/**
 * Class for fetching Facebook page events with various parameters.
 */

export class InstagramAccountDetails implements IInstagramAccountDetailsRepository {
  private accessToken: string;
  /**
   * Constructor to initialize the FacebookPageEvents class with an access token.
   * @param accessToken - Access token required for fetching Facebook page events.
   */
  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  /**
   * Fetch data from the Facebook Graph API with validation.
   * @param pageId - The ID of the Facebook page.
   * @param params - Additional parameters for the request.
   * @returns A promise containing the fetched data.
   */
  private async fetchData<T>(userId: string, params: InstagramBasicDetailsParams = {}): Promise<T> {
    const fields = buildFields(params);
    return await fetchDataWithValidation<T>(this.accessToken, userId, fields);
  }
  /**
   * Fetch Facebook page posts using the specified parameters.
   * @param pageId - The ID of the Facebook page.
   * @param params - Additional parameters for the request.
   * @returns A promise containing the fetched data.
   */
  fetchAccountDetails = async (userId: string, params?: InstagramBasicDetailsParams): Promise<MetaResponse> => {
    return this.fetchData<MetaResponse>(userId, params);
  };
}
