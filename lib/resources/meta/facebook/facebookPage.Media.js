"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookPageMedia = void 0;
// Import necessary modules and interfaces
const dataValidator_1 = require("../common/dataValidator");
const parameters_meta_1 = require("../common/parameters.meta");
const facebook_FieldGenerator_1 = require("../helpers/facebook.FieldGenerator");
/**
 * Class for fetching Facebook page posts with various parameters.
 */
class FacebookPageMedia {
    accessToken;
    /**
     * Constructor to initialize the FacebookPagePosts class with an access token.
     * @param accessToken - Access token required for fetching Facebook page posts.
     */
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    /**
     * Fetch data from the Facebook Graph API with validation.
     * @param pageId - The ID of the Facebook page.
     * @param urlParam - The URL parameter for the specific type of media (posts, events, photos, etc.).
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    async fetchData(pageId, urlParam, params = {}) {
        // Build fields based on URL parameter and additional parameters
        const fields = (0, facebook_FieldGenerator_1.buildFields)(urlParam, params);
        // Fetch data with validation using the access token, page ID, and constructed fields
        return await (0, dataValidator_1.fetchDataWithValidation)(this.accessToken, pageId, fields);
    }
    /**
     * Fetch Facebook page posts using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPagePosts = async (pageId, params) => {
        return this.fetchData(pageId, parameters_meta_1.MetaParams.media.posts, params);
    };
    /**
     * Fetch Facebook page events using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPageEvents = async (pageId, params) => {
        return this.fetchData(pageId, parameters_meta_1.MetaParams.events.events, params);
    };
    /**
     * Fetch Facebook page photos using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPagePhotos = async (pageId, params) => {
        return this.fetchData(pageId, parameters_meta_1.MetaParams.media.photos, params);
    };
    /**
     * Fetch Facebook page feeds using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPageFeeds = async (pageId, params) => {
        return this.fetchData(pageId, parameters_meta_1.MetaParams.media.feed, params);
    };
    /**
     * Fetch Facebook page videos using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPageVideos = async (pageId, params) => {
        return this.fetchData(pageId, parameters_meta_1.MetaParams.media.videos, params);
    };
}
exports.FacebookPageMedia = FacebookPageMedia;
