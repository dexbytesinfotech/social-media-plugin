import axios, { AxiosResponse } from 'axios';
import { TextMessages } from '../../../enums/generals';
import { Constants } from '../../../constants';

/**
 * Handles API errors and returns a custom error message.
 * @param error - The error object thrown by the API call.
 * @param customErrorMessage - A custom error message to be returned.
 * @returns A promise that resolves to a custom error object.
 */
export async function handleApiError<T>(error: any, customErrorMessage: any): Promise<T> {
  // Check if the error is an AxiosError and if the status code is  401 (Unauthorized)
  if (axios.isAxiosError(error) && error.response?.status === 401) {
    throw {
      error: true,
      message: TextMessages.INVALID_ACCESS_TOKEN,
    } as T;
  }

  // Extract the error message from the error object
  const errorMessage = (error as Error).message;

  // Throw a custom error object with the specified or default error message
  throw {
    error: true,
    message: customErrorMessage ? customErrorMessage : `Error: ${errorMessage}`,
  } as T;
}

/**
 * Makes an API request to the Facebook Graph API.
 * @param pageId - The ID of the Facebook page to query.
 * @param fields - The fields to request from the API.
 * @param accessToken - The access token for authentication.
 * @returns A promise that resolves to the API response data.
 */
export async function makeApiRequest<T>(pageId: string, fields: string, accessToken: string): Promise<T> {
  // Construct the API URL using the provided page ID
  const apiUrl = `${Constants.META_API_BASE_URL}/${Constants.META_GRAPH_API_VERSION}/${pageId}`;

  try {
    // Make a GET request to the API with the specified parameters
    const response: AxiosResponse<T> = await axios.get(apiUrl, {
      params: {
        fields,
        access_token: accessToken,
      },
    });
    // Assuming the response type is AxiosResponse<T, any>
    const { status, statusText, data } = response;

    const simplifiedResponse: { status: number; statusText: string; data: any } = {
      status,
      statusText,
      data,
    };

    // Return the data from the API response
    return simplifiedResponse as T;
  } catch (error: any) {
    // Handle API error and throw a custom error object
    const errorResponse = {
      status: error.response.status,
      data: error.response.data.error,
    };
    throw await handleApiError<T>(error, errorResponse);
  }
}

/**
 * Validates the access token.
 * @param accessToken - The access token to validate.
 * @returns An object indicating if the access token is valid or not, along with an error message if invalid.
 */
export function validateAccessToken(accessToken: string) {
  // Check if the access token is missing
  if (!accessToken) {
    return {
      error: true,
      message: TextMessages.MISSING_ACCESS_TOKEN,
    };
  }

  // Additional check for a valid access token (length greater than or equal to  10 characters)
  if (accessToken.length < 10) {
    return {
      error: true,
      message: TextMessages.INVALID_ACCESS_TOKEN,
    };
  }
}
