/**
 * MetaAuth class provides methods for Meta authentication operations.
 */
declare class MetaAuth {
    private payload;
    /**
     * Constructor for MetaAuth class.
     * @param payload Object containing necessary information for authentication operations.
     */
    constructor(payload: any);
    /**
     * Method to generate authorization URL for initiating the Meta OAuth2 flow.
     * @returns Authorization URL for initiating the OAuth2 flow.
     */
    generateAuthUrl(): Promise<{
        code: number;
        statusText: string;
        url: string;
    }>;
    /**
     * Method to generate long-lived access token for Meta API calls.
     * @returns Long-lived access token for accessing Meta APIs.
     */
    generateToken(): Promise<{
        status: number;
        statusText: string;
        data: any;
    } | {
        error: import("axios").AxiosError<any, any>;
    } | undefined>;
}
export { MetaAuth as Repository };
