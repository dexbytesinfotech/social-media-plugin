import { Messages } from '../../helpers/messages';
import { validateAccessToken, makeApiRequest} from './common.helpers';

/**
 * Fetch data with access token validation.
 * @param accessToken - User access token.
 * @param pageId - ID of the Facebook page.
 * @param fields - Fields to request from the API.
 * @returns Promise containing the fetched data or an error response.
 */
export async function fetchDataWithValidation<T>(accessToken: string, pageId: string, fields: string): Promise<T> {
    // Validate the user access token
    const accessTokenValidationResult = validateAccessToken(accessToken);

    // If there is an issue with the access token, return an error response
    if (accessTokenValidationResult) {
        return createErrorResponse<T>(Messages.invalidAccessToken);
    }

    if(!fields){
        return createErrorResponse<T>(Messages.notFound)
    }
    try {
        // Make the API request and get the response
        const response = await makeApiRequest<T>(pageId, fields, accessToken);
        
    
        // Validate the API response
        validateApiResponse<T>(response);
    
        // Check if the response is empty
        if (!response || (Array.isArray(response) && response.length === 0)) {
           return response
        }
    
        // Return the validated response
        return response;
    } catch (error:any) {
        // Handle any errors that occurred during the API request or validation
        // You might want to throw the error or handle it based on your application's needs
        throw error;
    }
    
}

/**
 * Create an error response object.
 * @param message - Error message.
 * @returns Error response object.
 */
 export function createErrorResponse<T>(message: string): T {
    return {
        error: true,
        message,
    } as T;
}

/**
 * Validate the API response format and the presence of requested fields.
 * @param response - API response object.
 * @param fields - Requested fields.
 * @throws Error if the response format is invalid or if requested fields are missing.
 */
export function validateApiResponse<T>(response: T): void {
    // Ensure that the response is an object
    if (!response || typeof response !== 'object') {
        throw new Error(Messages.invalidApiResponseFormat);
    }
    // Check if the response data is empty
    if (Object.keys(response).length === 0) {
        throw createErrorResponse<T>(Messages.notFound);
    }
}
