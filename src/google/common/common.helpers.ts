import axios from 'axios';
import { Constants } from '../../constants';
import { Messages } from '../../helpers/messages';

/**
 * Handles API errors and throws a custom error object with a specified or default error message.
 * @template T - The type of the response.
 * @param {any} error - The error object.
 * @param {any} customErrorMessage - Custom error message to be used (optional).
 * @returns {Promise<T>} - A promise that rejects with the custom error object.
 */
export async function handleApiError<T>(error: any, customErrorMessage: any): Promise<T> {
    // Check if the error is an AxiosError and has a 401 status (Unauthorized)
    if (axios.isAxiosError(error) && error.response?.status === 401) {
        throw {
            error: true,
            message: Messages.invalidAccessToken,
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
 * Makes a Google API request using Axios.
 * @template T - The type of the response.
 * @param {string} paramIdentifier - The identifier for the Google API endpoint (e.g., 'channels', 'search', 'videos').
 * @param {string} paramId - The specific identifier for the request (e.g., channel ID, video ID).
 * @param {string} fields - The fields to include in the API request.
 * @param {string} accessToken - The access token for authentication.
 * @returns {Promise<T>} - A promise that resolves with the formatted API response.
 */

export async function makeGoogleApiRequest<T>(url: string, accessToken: string): Promise<T> {
    try {
        // Make the API request using Axios
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        // Format the response object
        const formattedResponse = {
            status: response.status,
            statusText: response.statusText,
            data: response.data,
        };

        return formattedResponse as T;
    } catch (error: any) {
        // Handle API errors and rethrow with a custom error object
        const errorResponse = {
            data: error.response.data.error,
        };
        return errorResponse.data;
    }
}
/**
 * Validates the provided access token.
 * @param {string} accessToken - The access token to validate.
 * @returns {object | undefined} - An error object if validation fails, undefined otherwise.
 */
export function validateAccessToken(accessToken: string): { error: boolean, message: string } | undefined {
    // Check if the access token is missing
    if (!accessToken) {
        return {
            error: true,
            message: Messages.missingAccessToken,
        };
    }

    // Additional check for a valid access token (length greater than or equal to 10 characters)
    if (accessToken.length < 10) {
        return {
            error: true,
            message: Messages.invalidAccessToken,
        };
    }

    // Return undefined if validation passes
    return undefined;
}
