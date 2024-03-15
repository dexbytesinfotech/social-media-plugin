import { MetaResponse, InstagramMediaParams } from '../common/interfaces';
import { IInstagramAccountMediaRepository } from '../factory/meta.Factory.Interfaces';
/**
 * Class for fetching Instagram Account Media with various parameters.
 */
export declare class InstagramAccountMedia implements IInstagramAccountMediaRepository {
    private accessToken;
    /**
     * Constructor to initialize the InstagramAccountMedia class with an access token.
     * @param accessToken - Access token required for fetching Instagram Account Media.
     */
    constructor(accessToken: string);
    /**
     * Fetch data from the Facebook Graph API with validation.
     * This method is a private helper that constructs the fields string and limit based on the provided parameters,
     * and then fetches data from the Facebook Graph API with validation.
     * @param userId - The ID of the Instagram Account.
     * @param urlParam - The specific URL parameter to fetch data for (e.g., media, stories, liveMedia).
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    private fetchData;
    /**
     * Fetch Facebook page posts using the specified parameters.
     * This method fetches Instagram account media using the provided parameters.
     * @param userId - The ID of the Instagram Account.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountMedia: (userId: string, params?: InstagramMediaParams) => Promise<MetaResponse>;
    /**
     * Fetch Instagram account stories using the specified parameters.
     * This method fetches Instagram account stories using the provided parameters.
     * @param userId - The ID of the Instagram Account.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountStories: (userId: string, params?: InstagramMediaParams) => Promise<MetaResponse>;
    /**
     * Fetch Instagram account live media using the specified parameters.
     * This method fetches Instagram account live media using the provided parameters.
     * @param userId - The ID of the Instagram Account.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountLiveMedia: (userId: string, params?: InstagramMediaParams) => Promise<MetaResponse>;
}
