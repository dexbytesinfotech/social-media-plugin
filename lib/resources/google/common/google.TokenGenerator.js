"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleTokenGenerator = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../../constants");
/**
 * Class for handling Google authentication and token retrieval.
 */
class GoogleTokenGenerator {
    clientId;
    clientSecret;
    redirectUri;
    /**
     * Constructs a GoogleTokenGenerator instance.
     *
     * @param {string} clientId - The client ID obtained from the Google Developer Console.
     * @param {string} clientSecret - The client secret obtained from the Google Developer Console.
     * @param {string} redirectUri - The redirect URI registered in the Google Developer Console.
     */
    constructor(clientId, clientSecret, redirectUri) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectUri = redirectUri;
    }
    /**
     * Retrieves an access token from Google using the provided authorization code.
     *
     * @param {string} authorizationCode - The authorization code received from the OAuth authorization flow.
     * @returns {Promise<any>} - A promise that resolves with the token data or rejects with an error.
     */
    async getToken(authorizationCode) {
        const authCode = decodeURIComponent(authorizationCode);
        const data = {
            code: authCode,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            redirect_uri: this.redirectUri,
            grant_type: constants_1.Constants.GOOGLE.GOOGLE_AUTH_CODE,
            access_type: constants_1.Constants.GOOGLE.GOOGLE_ACCESS_TYPE,
        };
        return this.makeTokenRequest(data, 'Failed to get token');
    }
    /**
     * Retrieves a new access token using a refresh token.
     *
     * @param {string} refreshToken - The refresh token obtained during the initial authorization.
     * @returns {Promise<any>} - A promise that resolves with the new token data or rejects with an error.
     */
    async refreshAccessToken(refreshToken) {
        const data = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: refreshToken,
            grant_type: constants_1.Constants.GOOGLE.GOOGLE_REFRESH_TOKEN,
        };
        return this.makeTokenRequest(data, 'Failed to refresh access token');
    }
    /**
     * Private method to make a POST request to the Google token generator endpoint.
     *
     * @param {any} data - The data payload for the request.
     * @param {string} errorMessage - The error message to throw in case of failure.
     * @returns {Promise<any>} - A promise that resolves with the token data or rejects with an error.
     */
    async makeTokenRequest(data, errorMessage) {
        try {
            const response = await axios_1.default.post(constants_1.Constants.GOOGLE.GOOGLE_TOKEN_GENERATOR_URL, data);
            return response.data;
        }
        catch (response) {
            return {
                response,
            };
        }
    }
}
exports.GoogleTokenGenerator = GoogleTokenGenerator;
