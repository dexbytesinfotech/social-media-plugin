/**
 * Fetch data with access token validation.
 * @param accessToken - User access token.
 * @param pageId - ID of the Facebook page.
 * @param fields - Fields to request from the API.
 * @returns Promise containing the fetched data or an error response.
 */
export declare function fetchDataWithValidation<T>(accessToken: string, pageId: string, fields: string): Promise<T>;
/**
 * Create an error response object.
 * @param message - Error message.
 * @returns Error response object.
 */
export declare function createErrorResponse<T>(message: string): T;
/**
 * Validate the API response format and the presence of requested fields.
 * @param response - API response object.
 * @param fields - Requested fields.
 * @throws Error if the response format is invalid or if requested fields are missing.
 */
export declare function validateApiResponse<T>(response: T): void;
