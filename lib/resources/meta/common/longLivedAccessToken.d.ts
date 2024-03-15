/**
 * Class for requesting long-lived access tokens.
 */
export declare class MetaLongLivedAccessToken {
    private clientId;
    private clientSecret;
    private exchangeToken;
    private authType;
    /**
     * Constructor for the MetaLongLivedAccessToken class.
     * @param {string} clientId - The client ID.
     * @param {string} clientSecret - The client secret.
     * @param {string} exchangeToken - The exchange token.
     */
    constructor(clientId: string, clientSecret: string, exchangeToken: string);
    /**
     * Requests a long-lived access token.
     * @returns {Promise<any>} The response from the API.
     */
    requestLongLivedAccessToken(): Promise<{
        status: number;
        statusText: string;
        data: any;
    } | {
        error: import("axios").AxiosError<any, any>;
    } | undefined>;
}
