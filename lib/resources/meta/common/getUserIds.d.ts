export declare class UserIdFetcher {
    private accessToken;
    constructor(accessToken: string);
    /**
     * Fetch the Facebook page details including the accounts (pages) associated with the user.
     * @returns Promise<{ id: string, name: string }[]> - A promise that resolves to an array of objects containing the id and name of each Facebook page.
     */
    fetchFacebookPageId(): Promise<{
        id: string;
        name: string;
    }[]>;
}
