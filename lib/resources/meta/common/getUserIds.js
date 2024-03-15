"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdFetcher = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../../constants");
const generals_1 = require("../../../enums/generals");
const parameters_meta_1 = require("./parameters.meta");
// Class to fetch Facebook page details including the accounts (pages) associated with the user
class UserIdFetcher {
    accessToken; // Access token for authentication with the Facebook API
    // Constructor to initialize the access token
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    /**
     * Fetch the Facebook page details including the accounts (pages) associated with the user.
     * @returns Promise<{ id: string, name: string }[]> - A promise that resolves to an array of objects containing the id and name of each Facebook page.
     */
    async fetchFacebookPageId() {
        try {
            // Construct the API URL using the base URL, API version, and the endpoint for fetching the user's Facebook pages
            const apiUrl = `${constants_1.Constants.META_API_BASE_URL}/${constants_1.Constants.META_GRAPH_API_VERSION}/${parameters_meta_1.MetaParams.me}`;
            // Make a GET request to the Facebook API to fetch the user's Facebook pages
            const response = await axios_1.default.get(apiUrl, {
                params: {
                    // Specify the fields to be returned by the API
                    fields: parameters_meta_1.MetaParams.facebookPageId,
                    // Include the access token for authentication
                    access_token: this.accessToken,
                },
            });
            // Extract the accounts data from the response and map it to an array of objects containing the id and name of each account
            const accountsData = response.data.accounts?.data || [];
            const extractedData = accountsData.map((account) => ({
                id: account.id,
                name: account.name,
            }));
            // Return the extracted data
            return extractedData;
        }
        catch (error) {
            // If an error occurs, throw a new error with a message indicating that the requested data was not found
            throw new Error(generals_1.TextMessages.NOT_FOUND);
        }
    }
}
exports.UserIdFetcher = UserIdFetcher;
