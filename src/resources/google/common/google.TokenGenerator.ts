import axios, { AxiosResponse } from 'axios';
import { Constants } from '../../../constants';

/**
 * Class for handling Google authentication and token retrieval.
 */
export class GoogleTokenGenerator {
  private clientId: string;
  private clientSecret: string;
  private redirectUri: string;

  /**
   * Constructs a GoogleTokenGenerator instance.
   *
   * @param {string} clientId - The client ID obtained from the Google Developer Console.
   * @param {string} clientSecret - The client secret obtained from the Google Developer Console.
   * @param {string} redirectUri - The redirect URI registered in the Google Developer Console.
   */
  constructor(clientId: string, clientSecret: string, redirectUri: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
  }

  /**
   * Retrieves an access token from Google using the provided authorization code.
   *
   * @param {string} authorizationCode - The authorization code received from the OAuth authorization flow.
   * @returns {Promise<any>} - A promise that resolves with the token data or rejects with an error.
   */
  async getToken(authorizationCode: string): Promise<any> {
    const authCode = decodeURIComponent(authorizationCode);
    const data = {
      code: authCode,
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
      grant_type: Constants.GOOGLE.GOOGLE_AUTH_CODE,
      access_type: Constants.GOOGLE.GOOGLE_ACCESS_TYPE,
    };
    return this.makeTokenRequest(data, 'Failed to get token');
  }

  /**
   * Retrieves a new access token using a refresh token.
   *
   * @param {string} refreshToken - The refresh token obtained during the initial authorization.
   * @returns {Promise<any>} - A promise that resolves with the new token data or rejects with an error.
   */
  async refreshAccessToken(refreshToken: string): Promise<any> {
    const data = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: refreshToken,
      grant_type: Constants.GOOGLE.GOOGLE_REFRESH_TOKEN,
    };
    return this.makeTokenRequest(data, 'Failed to refresh access token');
  }

  /**
   * Private method to make a POST request to the Google token generator endpoint.
   *
   * @param {any} data - The data payload for the request.
   * @param {string} errorMessage - The error message to throw in case of failure.
   * @returns {Promise<any>} - A promise that resolves with the token data or rejects with an error.
   */
  private async makeTokenRequest(data: any, errorMessage: string): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.post(Constants.GOOGLE.GOOGLE_TOKEN_GENERATOR_URL, data);
      return response.data;
    } catch (response) {
      return {
        response,
      };
    }
  }
}
