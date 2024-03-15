import { TextMessages } from '../../../enums/generals';
/**
 * Handles API errors and returns a custom error message.
 * @param error - The error object thrown by the API call.
 * @param customErrorMessage - A custom error message to be returned.
 * @returns A promise that resolves to a custom error object.
 */
export declare function handleApiError<T>(error: any, customErrorMessage: any): Promise<T>;
/**
 * Makes an API request to the Facebook Graph API.
 * @param pageId - The ID of the Facebook page to query.
 * @param fields - The fields to request from the API.
 * @param accessToken - The access token for authentication.
 * @returns A promise that resolves to the API response data.
 */
export declare function makeApiRequest<T>(pageId: string, fields: string, accessToken: string): Promise<T>;
/**
 * Validates the access token.
 * @param accessToken - The access token to validate.
 * @returns An object indicating if the access token is valid or not, along with an error message if invalid.
 */
export declare function validateAccessToken(accessToken: string): {
    error: boolean;
    message: TextMessages;
} | undefined;
