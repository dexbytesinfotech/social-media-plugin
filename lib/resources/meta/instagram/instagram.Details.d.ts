import { MetaResponse, InstagramBasicDetailsParams } from '../common/interfaces';
import { IInstagramAccountDetailsRepository } from '../factory/meta.Factory.Interfaces';
/**
 * Class for fetching Facebook page events with various parameters.
 */
export declare class InstagramAccountDetails implements IInstagramAccountDetailsRepository {
    private accessToken;
    /**
     * Constructor to initialize the FacebookPageEvents class with an access token.
     * @param accessToken - Access token required for fetching Facebook page events.
     */
    constructor(accessToken: string);
    /**
     * Fetch data from the Facebook Graph API with validation.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    private fetchData;
    /**
     * Fetch Facebook page posts using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountDetails: (userId: string, params?: InstagramBasicDetailsParams) => Promise<MetaResponse>;
}
