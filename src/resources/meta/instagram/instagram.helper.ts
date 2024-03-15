import axios, { AxiosResponse } from 'axios';
import { TextMessages } from '../../../enums/generals';
import { Constants } from '../../../constants';
import { createErrorResponse, validateApiResponse } from '../common/dataValidator';
import { handleApiError, validateAccessToken } from '../common/common.helpers';

export async function makeInstagramApiRequest<T>(
  UserId: string,
  fields: string,
  limit: number,
  accessToken: string,
  urlParam: string,
): Promise<T> {
  // Construct the API URL using the provided page ID
  const apiUrl = `${Constants.META_API_BASE_URL}/${Constants.META_GRAPH_API_VERSION}/${UserId}/${urlParam}`;

  try {
    const params: Record<string, any> = {
      fields,
      access_token: accessToken,
    };
    // Add the limit parameter if it is valid
    if (limit && limit > 0) {
      params.limit = limit;
    }
    // Make a GET request to the API with the specified parameters
    const response: AxiosResponse<T> = await axios.get(apiUrl, {
      params
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

export async function fetchInstagramUsersDataWithValidation<T>(
  accessToken: string,
  userId: string,
  limit: number,
  fields: string,
  urlParam: string,
): Promise<T> {
  // Validate the user access token
  const accessTokenValidationResult = validateAccessToken(accessToken);
  // If there is an issue with the access token, return an error response
  if (accessTokenValidationResult) {
    return createErrorResponse<T>(TextMessages.INVALID_ACCESS_TOKEN);
  }
  try {
    // Make the API request and get the response
    const response = await makeInstagramApiRequest<T>(userId, fields, limit, accessToken, urlParam);

    // Validate the API response
    validateApiResponse<T>(response);

    // Check if the response is empty
    if (!response || (Array.isArray(response) && response.length === 0)) {
      // Send a message indicating no data found
      throw (TextMessages.NOT_FOUND);
      // You can also throw an error or handle this case based on your application's needs
    }

    // Return the validated response
    return response;
  } catch (error: any) {
    // Handle any errors that occurred during the API request or validation
    // You might want to throw the error or handle it based on your application's needs
    throw error;
  }
}
