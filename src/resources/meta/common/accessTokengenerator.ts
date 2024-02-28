import { Constants } from '../../../constants';
import { TextMessages } from '../../../enums/generals';
import axios, {AxiosResponse } from 'axios';

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
export class GenerateMetaAuthUrl {
  private clientId: string;
  private redirectUri: string;
  private permissions: string[];

  /**
   * Constructor for the GenerateMetaAuthUrl class.
   * @param {OAuthParams} params - Parameters for the OAuth class.
   */
  constructor({ clientId, redirectUri, permissions }: OAuthParams) {
    // Validate required parameters
    if (!clientId || !redirectUri || !permissions || permissions.length ===  0) {
      throw new Error(TextMessages.MISSING_PARAMETERS);
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
  generateAuthUrl({ authType }: GenerateAuthUrlParams): object {
    // Validate required parameter
    if (!authType) {
      throw new Error(TextMessages.MISSING_PARAMETERS);
    }

    // Base URL for the OAuth dialog
    const baseAuthUrl = Constants.FACEBOOK_OAUTH_URL;

    // OAuth request response type
    const responseType = Constants.FACEBOOK_AUTH_RESPONSE_TYPE;

    // Display type for the OAuth dialog
    const display = Constants.FACEBOOK_AUTH_TYPE_POPUP;

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
      code:200,
      statusText:"Ok",
      url:`${baseAuthUrl}?${urlParams.toString()}`
    }
  }
}

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
      const response: AxiosResponse<AccessTokenResponse> = await axios.get(Constants.FACEBOOK_OAUTH_LONGLIVEDTOKEN_URL, {
        params: params,
      });
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
        return {error};
      }
    }
  }
}
