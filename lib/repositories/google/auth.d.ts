/**
 * GoogleAuth class provides methods for Google authentication operations.
 */
declare class GoogleAuth {
    private payload;
    /**
     * Constructor for GoogleAuth class.
     * @param payload Object containing necessary information for authentication operations.
     */
    constructor(payload: any);
    /**
     * Method to generate authorization URL for Google OAuth2.
     * @returns Authorization URL for initiating the OAuth2 flow.
     */
    generateAuthUrl(): Promise<object>;
    /**
     * Method to exchange authorization code for access token.
     * @returns Access token obtained after exchanging authorization code.
     */
    generateToken(): Promise<any>;
    /**
     * Method to refresh access token using refresh token.
     * @returns Refreshed access token.
     */
    refreshAccessToken(): Promise<any>;
}
export { GoogleAuth as Repository };
