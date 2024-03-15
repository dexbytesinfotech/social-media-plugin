"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateApiResponse = exports.createErrorResponse = exports.fetchDataWithValidation = void 0;
const generals_1 = require("../../../enums/generals");
const common_helpers_1 = require("./common.helpers");
/**
 * Fetch data with access token validation.
 * @param accessToken - User access token.
 * @param pageId - ID of the Facebook page.
 * @param fields - Fields to request from the API.
 * @returns Promise containing the fetched data or an error response.
 */
async function fetchDataWithValidation(accessToken, pageId, fields) {
    // Validate the user access token
    const accessTokenValidationResult = (0, common_helpers_1.validateAccessToken)(accessToken);
    // If there is an issue with the access token, return an error response
    if (accessTokenValidationResult) {
        return createErrorResponse(generals_1.TextMessages.INVALID_ACCESS_TOKEN);
    }
    if (!fields) {
        return createErrorResponse(generals_1.TextMessages.NOT_FOUND);
    }
    try {
        // Make the API request and get the response
        const response = await (0, common_helpers_1.makeApiRequest)(pageId, fields, accessToken);
        // Validate the API response
        validateApiResponse(response);
        // Check if the response is empty
        if (!response || (Array.isArray(response) && response.length === 0)) {
            return response;
        }
        // Return the validated response
        return response;
    }
    catch (error) {
        // Handle any errors that occurred during the API request or validation
        // You might want to throw the error or handle it based on your application's needs
        throw error;
    }
}
exports.fetchDataWithValidation = fetchDataWithValidation;
/**
 * Create an error response object.
 * @param message - Error message.
 * @returns Error response object.
 */
function createErrorResponse(message) {
    return {
        error: true,
        message,
    };
}
exports.createErrorResponse = createErrorResponse;
/**
 * Validate the API response format and the presence of requested fields.
 * @param response - API response object.
 * @param fields - Requested fields.
 * @throws Error if the response format is invalid or if requested fields are missing.
 */
function validateApiResponse(response) {
    // Ensure that the response is an object
    if (!response || typeof response !== 'object') {
        throw new Error(generals_1.TextMessages.INVALID_API_RESPONSE_FORMAT);
    }
    // Check if the response data is empty
    if (Object.keys(response).length === 0) {
        throw createErrorResponse(generals_1.TextMessages.NOT_FOUND);
    }
}
exports.validateApiResponse = validateApiResponse;
