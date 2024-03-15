"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramAccountDetails = void 0;
const dataValidator_1 = require("../common/dataValidator");
const instagram_FieldGenerator_1 = require("../helpers/instagram.FieldGenerator");
/**
 * Class for fetching Facebook page events with various parameters.
 */
class InstagramAccountDetails {
    accessToken;
    /**
     * Constructor to initialize the FacebookPageEvents class with an access token.
     * @param accessToken - Access token required for fetching Facebook page events.
     */
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    /**
     * Fetch data from the Facebook Graph API with validation.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    async fetchData(userId, params = {}) {
        const fields = (0, instagram_FieldGenerator_1.buildFields)(params);
        return await (0, dataValidator_1.fetchDataWithValidation)(this.accessToken, userId, fields);
    }
    /**
     * Fetch Facebook page posts using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchAccountDetails = async (userId, params) => {
        return this.fetchData(userId, params);
    };
}
exports.InstagramAccountDetails = InstagramAccountDetails;
