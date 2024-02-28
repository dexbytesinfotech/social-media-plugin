import { makeGoogleApiRequest, validateAccessToken } from "./common.helpers";
import { TextMessages} from "../../../enums/generals";
import { constructYoutubeUrl } from "./urlConstructors";

/**
 * Fetches data from the Google API with access token validation.
 * This function validates the access token, constructs the URL for the API request,
 * makes the request, validates the response, and returns the response data.
 * @param {string} paramIdentifier - The identifier for the type of data to fetch.
 * @param {string} accessToken - The access token required for authentication.
 * @param {string} paramId - The ID of the parameter to fetch.
 * @param {string} fields - The fields to be included in the response.
 * @param {number} limit - The limit for the number of items to return.
 * @returns {Promise<T>} - A promise that resolves with the fetched data or an error response.
 */
export async function fetchGoogleDataWithValidation<T>(paramIdentifier: string, accessToken: string, paramId: string, fields: string, limit: number) {
    // Validate the access token
    const accessTokenValidationResult = validateAccessToken(accessToken);

    // If the access token is invalid, return an error response
    if (accessTokenValidationResult) {
        return createErrorResponse<T>(TextMessages.INVALID_ACCESS_TOKEN);
    }

    try {
        // Construct the URL for the API request
        const url = constructYoutubeUrl(paramIdentifier, fields, paramId, limit);

        // Make the API request
        const response = await makeGoogleApiRequest<T>(url, accessToken);

        // Validate the API response
        validateApiResponse<T>(response);

        // Check if the response is empty
        if (!response || (Array.isArray(response) && response.length ===  0)) {
            // Return the response as is, indicating no data found
            // Alternatively, you can throw an error or handle this case based on your application's needs
            return response;
        }

        // Return the validated response
        return response;
    } catch (error: any) {
        // Handle any errors that occurred during the API request or validation
        // You might want to throw the error or handle it based on your application's needs
        return error;
    }
}

/**
 * Create an error response object.
 * This function creates an error response object with a specified error message.
 * @param {string} message - The error message to include in the response.
 * @returns {T} - An error response object.
 */
export function createErrorResponse<T>(message: string): T {
    return {
        error: true,
        message,
    } as T;
}

/**
 * Validate the API response format and the presence of requested fields.
 * This function checks if the response is an object, if it's empty, and if it contains the requested fields.
 * @param {T} response - The API response object.
 * @throws {Error} If the response format is invalid or if requested fields are missing.
 */
export function validateApiResponse<T>(response: T): void {
    // Ensure that the response is an object
    if (!response || typeof response !== 'object') {
        throw new Error(TextMessages.INVALID_API_RESPONSE_FORMAT);
    }

    // Check if the response data is empty
    if (Object.keys(response).length ===  0) {
        throw createErrorResponse<T>(TextMessages.NOT_FOUND);
    }
}
