/**
 * Class for handling Google authentication and token retrieval.
 */
export declare class GoogleTokenGenerator {
    private clientId;
    private clientSecret;
    private redirectUri;
    /**
     * Constructs a GoogleTokenGenerator instance.
     *
     * @param {string} clientId - The client ID obtained from the Google Developer Console.
     * @param {string} clientSecret - The client secret obtained from the Google Developer Console.
     * @param {string} redirectUri - The redirect URI registered in the Google Developer Console.
     */
    constructor(clientId: string, clientSecret: string, redirectUri: string);
    /**
     * Retrieves an access token from Google using the provided authorization code.
     *
     * @param {string} authorizationCode - The authorization code received from the OAuth authorization flow.
     * @returns {Promise<any>} - A promise that resolves with the token data or rejects with an error.
     */
    getToken(authorizationCode: string): Promise<any>;
    /**
     * Retrieves a new access token using a refresh token.
     *
     * @param {string} refreshToken - The refresh token obtained during the initial authorization.
     * @returns {Promise<any>} - A promise that resolves with the new token data or rejects with an error.
     */
    refreshAccessToken(refreshToken: string): Promise<any>;
    /**
     * Private method to make a POST request to the Google token generator endpoint.
     *
     * @param {any} data - The data payload for the request.
     * @param {string} errorMessage - The error message to throw in case of failure.
     * @returns {Promise<any>} - A promise that resolves with the token data or rejects with an error.
     */
    private makeTokenRequest;
}
