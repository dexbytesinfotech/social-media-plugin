/**
 * Handles API errors and throws a custom error object with a specified or default error message.
 * @template T - The type of the response.
 * @param {any} error - The error object.
 * @param {any} customErrorMessage - Custom error message to be used (optional).
 * @returns {Promise<T>} - A promise that rejects with the custom error object.
 */
export declare function handleApiError<T>(error: any, customErrorMessage: any): Promise<T>;
/**
 * Makes a Google API request using Axios.
 * @template T - The type of the response.
 * @param {string} paramIdentifier - The identifier for the Google API endpoint (e.g., 'channels', 'search', 'videos').
 * @param {string} paramId - The specific identifier for the request (e.g., channel ID, video ID).
 * @param {string} fields - The fields to include in the API request.
 * @param {string} accessToken - The access token for authentication.
 * @returns {Promise<T>} - A promise that resolves with the formatted API response.
 */
export declare function makeGoogleApiRequest<T>(url: string, accessToken: string): Promise<T>;
/**
 * Validates the provided access token.
 * @param {string} accessToken - The access token to validate.
 * @returns {object | undefined} - An error object if validation fails, undefined otherwise.
 */
export declare function validateAccessToken(accessToken: string): {
    error: boolean;
    message: string;
} | undefined;
