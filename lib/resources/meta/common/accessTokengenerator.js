"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateMetaAuthUrl = void 0;
const constants_1 = require("../../../constants");
const generals_1 = require("../../../enums/generals");
/**
 * Class for generating Meta OAuth URLs.
 */
class GenerateMetaAuthUrl {
    clientId;
    redirectUri;
    permissions;
    /**
     * Constructor for the GenerateMetaAuthUrl class.
     * @param {OAuthParams} params - Parameters for the OAuth class.
     */
    constructor(clientId, redirectUri, permissions) {
        // Validate required parameters
        if (!clientId || !redirectUri || !permissions || permissions.length === 0) {
            throw new Error(generals_1.TextMessages.MISSING_PARAMETERS);
        }
        // Initialize class properties with the provided parameters
        this.clientId = clientId;
        this.redirectUri = redirectUri;
        this.permissions = permissions;
    }
    /**
     * Generates the OAuth URL.
     * @param {GenerateAuthUrlParams} params - Parameters for generating the OAuth URL.
     * @returns {string} The OAuth URL.
     */
    generateAuthUrl(authType) {
        // Validate required parameter
        if (!authType) {
            throw new Error(generals_1.TextMessages.MISSING_PARAMETERS);
        }
        // Base URL for the OAuth dialog
        const baseAuthUrl = constants_1.Constants.FACEBOOK_OAUTH_URL;
        // OAuth request response type
        const responseType = constants_1.Constants.FACEBOOK_AUTH_RESPONSE_TYPE;
        // Display type for the OAuth dialog
        const display = constants_1.Constants.FACEBOOK_AUTH_TYPE_POPUP;
        // Join permissions array into a comma-separated string
        const scope = this.permissions.join(',');
        // Construct URL parameters using URLSearchParams
        const urlParams = new URLSearchParams({
            response_type: responseType,
            display,
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            auth_type: authType,
            scope,
        });
        // Construct and return the final URL
        return {
            code: 200,
            statusText: 'Ok',
            url: `${baseAuthUrl}?${urlParams.toString()}`,
        };
    }
}
exports.GenerateMetaAuthUrl = GenerateMetaAuthUrl;
