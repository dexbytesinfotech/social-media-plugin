/**
 * Parameters for the OAuth class.
 */
export interface OAuthParams {
    clientId: string;
    redirectUri: string;
    permissions: string[];
}
/**
 * Parameters for the generateAuthUrl method.
 */
export interface GenerateAuthUrlParams {
    authType: string;
}
/**
 * Class for generating Meta OAuth URLs.
 */
export declare class GenerateMetaAuthUrl {
    private clientId;
    private redirectUri;
    private permissions;
    /**
     * Constructor for the GenerateMetaAuthUrl class.
     * @param {OAuthParams} params - Parameters for the OAuth class.
     */
    constructor(clientId: string, redirectUri: string, permissions: string[]);
    /**
     * Generates the OAuth URL.
     * @param {GenerateAuthUrlParams} params - Parameters for generating the OAuth URL.
     * @returns {string} The OAuth URL.
     */
    generateAuthUrl(authType: string): {
        code: number;
        statusText: string;
        url: string;
    };
}
