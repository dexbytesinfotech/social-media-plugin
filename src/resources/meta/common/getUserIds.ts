
import axios from 'axios';
import { Constants } from '../../../constants';
import {TextMessages} from '../../../enums/generals';
import { MetaParams } from './parameters.meta';

// Interface to define the structure of an account with an id and name
interface Account {
    id: string;
    name: string;
}

// Class to fetch Facebook page details including the accounts (pages) associated with the user
export class UserIdFetcher {
    private accessToken: string; // Access token for authentication with the Facebook API

    // Constructor to initialize the access token
    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    /**
     * Fetch the Facebook page details including the accounts (pages) associated with the user.
     * @returns Promise<{ id: string, name: string }[]> - A promise that resolves to an array of objects containing the id and name of each Facebook page.
     */
    async fetchFacebookPageId(): Promise<{ id: string, name: string }[]> {
        try {
            // Construct the API URL using the base URL, API version, and the endpoint for fetching the user's Facebook pages
            const apiUrl = `${Constants.META_API_BASE_URL}/${Constants.META_GRAPH_API_VERSION}/${MetaParams.me}`;

            // Make a GET request to the Facebook API to fetch the user's Facebook pages
            const response = await axios.get(apiUrl, {
                params: {
                    // Specify the fields to be returned by the API
                    fields: MetaParams.facebookPageId,
                    // Include the access token for authentication
                    access_token: this.accessToken,
                },
            });

            // Extract the accounts data from the response and map it to an array of objects containing the id and name of each account
            const accountsData = response.data.accounts?.data || [];
            const extractedData: { id: string, name: string }[] = accountsData.map((account: Account) => ({
                id: account.id,
                name: account.name,
            }));

            // Return the extracted data
            return extractedData;
        } catch (error) {
            // If an error occurs, throw a new error with a message indicating that the requested data was not found
            throw new Error(TextMessages.NOT_FOUND);
        }
    }
}
