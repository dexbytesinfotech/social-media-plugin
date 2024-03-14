import { GoogleAuthUrlGenerator } from "../../resources/google/common/google.AuthUrlGenereator";
import { GoogleTokenGenerator } from "../../resources/google/common/google.TokenGenerator";

/**
 * GoogleAuth class provides methods for Google authentication operations.
 */
class GoogleAuth {
    private payload: any;

    /**
     * Constructor for GoogleAuth class.
     * @param payload Object containing necessary information for authentication operations.
     */
    constructor(payload: any) {
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
        const authUrl = new GoogleAuthUrlGenerator(clientId, redirectUri, scope);
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
        const token = new GoogleTokenGenerator(clientId, clientSecret, redirectUri);
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
        const token = new GoogleTokenGenerator(clientId, clientSecret, redirectUri);
        // Refreshing the access token using the refresh token
        const accessToken = await token.refreshAccessToken(refreshToken);
        // Returning the refreshed access token
        return accessToken;
    }
}

// Exporting GoogleAuth class as Repository
export { GoogleAuth as Repository };
