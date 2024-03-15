"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramAccountMedia = void 0;
const instagram_helper_1 = require("./instagram.helper");
const parameters_meta_1 = require("../common/parameters.meta");
const instagram_FieldGenerator_1 = require("../helpers/instagram.FieldGenerator");
// Define a type for the method that fetches Instagram Account details
/**
 * Class for fetching Instagram Account Media with various parameters.
 */
class InstagramAccountMedia {
    accessToken; // Access token required for fetching Instagram Account Media
    /**
     * Constructor to initialize the InstagramAccountMedia class with an access token.
     * @param accessToken - Access token required for fetching Instagram Account Media.
     */
    constructor(accessToken) {
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
    async fetchData(userId, urlParam, params = {}) {
        const fields = (0, instagram_FieldGenerator_1.buildFields)(params); // Build the fields string based on the provided parameters
        const limit = (0, instagram_FieldGenerator_1.userLimit)(params); // Determine the limit for the request based on the provided parameters
        return await (0, instagram_helper_1.fetchInstagramUsersDataWithValidation)(this.accessToken, userId, limit, fields, urlParam);
    }
    /**
     * Fetch Facebook page posts using the specified parameters.
     * This method fetches Instagram account media using the provided parameters.
     * @param userId - The ID of the Instagram Account.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountMedia = async (userId, params) => {
        return this.fetchData(userId, parameters_meta_1.InstagramParams.media.media, params);
    };
    /**
     * Fetch Instagram account stories using the specified parameters.
     * This method fetches Instagram account stories using the provided parameters.
     * @param userId - The ID of the Instagram Account.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountStories = async (userId, params) => {
        return this.fetchData(userId, parameters_meta_1.InstagramParams.media.stories, params);
    };
    /**
     * Fetch Instagram account live media using the specified parameters.
     * This method fetches Instagram account live media using the provided parameters.
     * @param userId - The ID of the Instagram Account.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountLiveMedia = async (userId, params) => {
        return this.fetchData(userId, parameters_meta_1.InstagramParams.media.liveMedia, params);
    };
}
exports.InstagramAccountMedia = InstagramAccountMedia;
