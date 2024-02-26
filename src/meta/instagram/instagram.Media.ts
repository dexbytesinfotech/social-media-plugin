import { fetchInstagramUsersDataWithValidation } from "./instagram.helper";
import { MetaResponse, InstagramMediaParams } from "../common/interfaces";
import { InstagramParams } from "../common/parameters.meta";
import { buildFields, userLimit } from "../helpers/instagram.FieldGenerator";
import { IInstagramAccountMediaRepository } from "../factory/meta.Factory.Interfaces";

// Define a type for the method that fetches Instagram Account details

/**
 * Class for fetching Instagram Account Media with various parameters.
 */
export class InstagramAccountMedia implements IInstagramAccountMediaRepository {
    private accessToken: string; // Access token required for fetching Instagram Account Media

    /**
     * Constructor to initialize the InstagramAccountMedia class with an access token.
     * @param accessToken - Access token required for fetching Instagram Account Media.
     */
    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    /**
     * Fetch data from the Facebook Graph API with validation.
     * This method is a private helper that constructs the fields string and limit based on the provided parameters,
     * and then fetches data from the Facebook Graph API with validation.
     * @param userId - The ID of the Instagram Account.
     * @param urlParam - The specific URL parameter to fetch data for (e.g., media, stories, liveMedia).
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    private async fetchData<T>(userId: string, urlParam: string, params: InstagramMediaParams = {}): Promise<T> {
        const fields = buildFields(params); // Build the fields string based on the provided parameters
        const limit = userLimit(params); // Determine the limit for the request based on the provided parameters
        return await fetchInstagramUsersDataWithValidation<T>(this.accessToken, userId, limit, fields, urlParam);
    }

    /**
     * Fetch Facebook page posts using the specified parameters.
     * This method fetches Instagram account media using the provided parameters.
     * @param userId - The ID of the Instagram Account.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountMedia = async (userId: string, params?: InstagramMediaParams): Promise<MetaResponse> => {
        return this.fetchData<MetaResponse>(userId, InstagramParams.media.media, params);
    };

    /**
     * Fetch Instagram account stories using the specified parameters.
     * This method fetches Instagram account stories using the provided parameters.
     * @param userId - The ID of the Instagram Account.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountStories = async (userId: string, params?: InstagramMediaParams): Promise<MetaResponse> => {
        return this.fetchData<MetaResponse>(userId, InstagramParams.media.stories, params);
    };

    /**
     * Fetch Instagram account live media using the specified parameters.
     * This method fetches Instagram account live media using the provided parameters.
     * @param userId - The ID of the Instagram Account.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountLiveMedia = async (userId: string, params?: InstagramMediaParams): Promise<MetaResponse> => {
        return this.fetchData<MetaResponse>(userId, InstagramParams.media.liveMedia, params);
    }
}
