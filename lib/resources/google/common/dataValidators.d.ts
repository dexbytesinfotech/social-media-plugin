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
export declare function fetchGoogleDataWithValidation<T>(paramIdentifier: string, accessToken: string, paramId: string, fields: string, limit: number): Promise<any>;
/**
 * Create an error response object.
 * This function creates an error response object with a specified error message.
 * @param {string} message - The error message to include in the response.
 * @returns {T} - An error response object.
 */
export declare function createErrorResponse<T>(message: string): T;
/**
 * Validate the API response format and the presence of requested fields.
 * This function checks if the response is an object, if it's empty, and if it contains the requested fields.
 * @param {T} response - The API response object.
 * @throws {Error} If the response format is invalid or if requested fields are missing.
 */
export declare function validateApiResponse<T>(response: T): void;
