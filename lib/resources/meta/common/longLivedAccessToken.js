"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaLongLivedAccessToken = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../../constants");
/**
 * Class for requesting long-lived access tokens.
 */
class MetaLongLivedAccessToken {
    clientId;
    clientSecret;
    exchangeToken;
    authType = constants_1.Constants.FACEBOOK_AUTH_TYPE_FOR_LONGLIVE_TOKEN;
    /**
     * Constructor for the MetaLongLivedAccessToken class.
     * @param {string} clientId - The client ID.
     * @param {string} clientSecret - The client secret.
     * @param {string} exchangeToken - The exchange token.
     */
    constructor(clientId, clientSecret, exchangeToken) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.exchangeToken = exchangeToken;
    }
    /**
     * Requests a long-lived access token.
     * @returns {Promise<any>} The response from the API.
     */
    async requestLongLivedAccessToken() {
        const params = new URLSearchParams({
            grant_type: this.authType,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            fb_exchange_token: this.exchangeToken,
        });
        try {
            const response = await axios_1.default.get(constants_1.Constants.FACEBOOK_OAUTH_LONGLIVEDTOKEN_URL, {
                params
            });
            const { status, statusText, data } = response;
            const simplifiedResponse = {
                status,
                statusText,
                data,
            };
            // Return the data from the API response
            return simplifiedResponse;
        }
        catch (error) {
            // Handle AxiosError and throw a custom error object
            if (axios_1.default.isAxiosError(error) && error.response) {
                return { error };
            }
        }
    }
}
exports.MetaLongLivedAccessToken = MetaLongLivedAccessToken;
