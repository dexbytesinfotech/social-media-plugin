import { Constants } from '../../../constants';
import { TextMessages } from '../../../enums/generals';
import axios, { AxiosResponse } from 'axios';

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
  constructor(clientId: string, redirectUri: string, permissions: string[]) {
    // Validate required parameters
    if (!clientId || !redirectUri || !permissions || permissions.length === 0) {
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
  generateAuthUrl(authType: string) {
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
      code: 200,
      statusText: 'Ok',
      url: `${baseAuthUrl}?${urlParams.toString()}`,
    };
  }
}



