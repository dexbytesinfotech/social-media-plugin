"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const accessTokengenerator_1 = require("../../resources/meta/common/accessTokengenerator");
const longLivedAccessToken_1 = require("../../resources/meta/common/longLivedAccessToken");
/**
 * MetaAuth class provides methods for Meta authentication operations.
 */
class MetaAuth {
    payload;
    /**
     * Constructor for MetaAuth class.
     * @param payload Object containing necessary information for authentication operations.
     */
    constructor(payload) {
        this.payload = payload;
    }
    /**
     * Method to generate authorization URL for initiating the Meta OAuth2 flow.
     * @returns Authorization URL for initiating the OAuth2 flow.
     */
    async generateAuthUrl() {
        // Destructuring payload to extract clientId, redirectUri, and permissions
        const { clientId, redirectUri, permissions } = this.payload;
        // Creating an instance of GenerateMetaAuthUrl with required parameters
        const authUrl = new accessTokengenerator_1.GenerateMetaAuthUrl(clientId, redirectUri, permissions);
        // Generating the authorization URL with response type 'code'
        return authUrl.generateAuthUrl('code');
    }
    /**
     * Method to generate long-lived access token for Meta API calls.
     * @returns Long-lived access token for accessing Meta APIs.
     */
    async generateToken() {
        // Destructuring payload to extract clientId, clientSecret, and userAccessToken
        const { clientId, clientSecret, userAccessToken } = this.payload;
        // Creating an instance of MetaLongLivedAccessToken with required parameters
        const token = new longLivedAccessToken_1.MetaLongLivedAccessToken(clientId, clientSecret, userAccessToken);
        // Requesting a long-lived access token from Meta API
        const longLivedAccessToken = await token.requestLongLivedAccessToken();
        // Returning the long-lived access token
        return longLivedAccessToken;
    }
}
exports.Repository = MetaAuth;
