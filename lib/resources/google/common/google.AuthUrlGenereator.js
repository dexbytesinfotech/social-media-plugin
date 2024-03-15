"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthUrlGenerator = void 0;
// Importing necessary modules and interfaces
const constants_1 = require("../../../constants");
/**
 * Class for generating Google OAuth authorization URL.
 * This class is responsible for creating the URL that users will be redirected to
 * for the OAuth authorization process with Google.
 */
class GoogleAuthUrlGenerator {
    // Private properties to store OAuth configuration
    clientId;
    redirectUri;
    scope;
    /**
     * Constructor to initialize the class with OAuth configuration.
     * @param {string} clientId - The client ID obtained from the Google Developer Console.
     * @param {string} redirectUri - The redirect URI where the user will be sent after authorization.
     * @param {string} scope - The scope of access requested by the application.
     */
    constructor(clientId, redirectUri, scope) {
        this.clientId = clientId;
        this.redirectUri = redirectUri;
        this.scope = scope;
    }
    /**
     * Method to generate and return the Google OAuth authorization URL.
     * This method constructs the authorization URL using the provided configuration.
     * @returns {string} - The complete Google OAuth authorization URL.
     */
    getAuthorizationUrl() {
        // Creating URL parameters using URLSearchParams
        const params = new URLSearchParams({
            response_type: constants_1.Constants.GOOGLE.CODE,
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            scope: this.scope,
            access_type: constants_1.Constants.GOOGLE.ACCESS_TYPE,
        });
        // Constructing the complete authorization URL
        return {
            code: 200,
            statusText: 'ok',
            url: `${constants_1.Constants.GOOGLE.GOOGLE_AUTH_URL}?${params.toString()}`,
        };
    }
}
exports.GoogleAuthUrlGenerator = GoogleAuthUrlGenerator;
