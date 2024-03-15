/**
 * Class for generating Google OAuth authorization URL.
 * This class is responsible for creating the URL that users will be redirected to
 * for the OAuth authorization process with Google.
 */
export declare class GoogleAuthUrlGenerator {
    private clientId;
    private redirectUri;
    private scope;
    /**
     * Constructor to initialize the class with OAuth configuration.
     * @param {string} clientId - The client ID obtained from the Google Developer Console.
     * @param {string} redirectUri - The redirect URI where the user will be sent after authorization.
     * @param {string} scope - The scope of access requested by the application.
     */
    constructor(clientId: string, redirectUri: string, scope: string);
    /**
     * Method to generate and return the Google OAuth authorization URL.
     * This method constructs the authorization URL using the provided configuration.
     * @returns {string} - The complete Google OAuth authorization URL.
     */
    getAuthorizationUrl(): object;
}
