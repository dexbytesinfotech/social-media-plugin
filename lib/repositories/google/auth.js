"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const google_AuthUrlGenereator_1 = require("../../resources/google/common/google.AuthUrlGenereator");
const google_TokenGenerator_1 = require("../../resources/google/common/google.TokenGenerator");
/**
 * GoogleAuth class provides methods for Google authentication operations.
 */
class GoogleAuth {
    payload;
    /**
     * Constructor for GoogleAuth class.
     * @param payload Object containing necessary information for authentication operations.
     */
    constructor(payload) {
        this.payload = payload;
    }
    /**
     * Method to generate authorization URL for Google OAuth2.
     * @returns Authorization URL for initiating the OAuth2 flow.
     */
    async generateAuthUrl() {
        // Destructuring payload to extract clientId, redirectUri, and scope
        const { clientId, redirectUri, scope } = this.payload;
        // Creating an instance of GoogleAuthUrlGenerator with required parameters
        const authUrl = new google_AuthUrlGenereator_1.GoogleAuthUrlGenerator(clientId, redirectUri, scope);
        // Returning the authorization URL
        return authUrl.getAuthorizationUrl();
    }
    /**
     * Method to exchange authorization code for access token.
     * @returns Access token obtained after exchanging authorization code.
     */
    async generateToken() {
        // Destructuring payload to extract clientId, clientSecret, redirectUri, and code
        const { clientId, clientSecret, redirectUri, code } = this.payload;
        // Creating an instance of GoogleTokenGenerator with required parameters
        const token = new google_TokenGenerator_1.GoogleTokenGenerator(clientId, clientSecret, redirectUri);
        // Getting the access token by exchanging the authorization code
        const accessToken = await token.getToken(code);
        // Returning the access token
        return accessToken;
    }
    /**
     * Method to refresh access token using refresh token.
     * @returns Refreshed access token.
     */
    async refreshAccessToken() {
        // Destructuring payload to extract clientId, clientSecret, redirectUri, and refreshToken
        const { clientId, clientSecret, redirectUri, refreshToken } = this.payload;
        // Creating an instance of GoogleTokenGenerator with required parameters
        const token = new google_TokenGenerator_1.GoogleTokenGenerator(clientId, clientSecret, redirectUri);
        // Refreshing the access token using the refresh token
        const accessToken = await token.refreshAccessToken(refreshToken);
        // Returning the refreshed access token
        return accessToken;
    }
}
exports.Repository = GoogleAuth;
