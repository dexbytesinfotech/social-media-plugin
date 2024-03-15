import axios, { AxiosResponse } from "axios";
import { Constants } from "../../../constants";


/**
 * Response structure for access token requests.
 */
interface AccessTokenResponse {
    access_token: string;
  }
/**
 * Class for requesting long-lived access tokens.
 */
export class MetaLongLivedAccessToken {
    private clientId: string;
    private clientSecret: string;
    private exchangeToken: string;
    private authType: string = Constants.FACEBOOK_AUTH_TYPE_FOR_LONGLIVE_TOKEN;
  
    /**
     * Constructor for the MetaLongLivedAccessToken class.
     * @param {string} clientId - The client ID.
     * @param {string} clientSecret - The client secret.
     * @param {string} exchangeToken - The exchange token.
     */
    constructor(clientId: string, clientSecret: string, exchangeToken: string) {
      this.clientId = clientId;
      this.clientSecret = clientSecret;
      this.exchangeToken = exchangeToken;
    }
  
    /**
     * Requests a long-lived access token.
     * @returns {Promise<any>} The response from the API.
     */
    async requestLongLivedAccessToken() {
      const params = new URLSearchParams({
        grant_type: this.authType,
        client_id: this.clientId,
        client_secret: this.clientSecret,
        fb_exchange_token: this.exchangeToken,
      });
  
      try {
        const response: AxiosResponse<AccessTokenResponse> = await axios.get(
          Constants.FACEBOOK_OAUTH_LONGLIVEDTOKEN_URL,
          {
            params
          },
        );
        const { status, statusText, data } = response;
        const simplifiedResponse: { status: number; statusText: string; data: any } = {
          status,
          statusText,
          data,
        };
  
        // Return the data from the API response
        return simplifiedResponse;
      } catch (error) {
        // Handle AxiosError and throw a custom error object
        if (axios.isAxiosError(error) && error.response) {
          return { error };
        }
      }
    }
  }
  