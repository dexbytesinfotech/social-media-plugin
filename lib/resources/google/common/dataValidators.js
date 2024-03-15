"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateApiResponse = exports.createErrorResponse = exports.fetchGoogleDataWithValidation = void 0;
const common_helpers_1 = require("./common.helpers");
const generals_1 = require("../../../enums/generals");
const urlConstructors_1 = require("./urlConstructors");
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
async function fetchGoogleDataWithValidation(paramIdentifier, accessToken, paramId, fields, limit) {
    // Validate the access token
    const accessTokenValidationResult = (0, common_helpers_1.validateAccessToken)(accessToken);
    // If the access token is invalid, return an error response
    if (accessTokenValidationResult) {
        return createErrorResponse(generals_1.TextMessages.INVALID_ACCESS_TOKEN);
    }
    try {
        // Construct the URL for the API request
        const url = (0, urlConstructors_1.constructYoutubeUrl)(paramIdentifier, fields, paramId, limit);
        // Make the API request
        const response = await (0, common_helpers_1.makeGoogleApiRequest)(url, accessToken);
        // Validate the API response
        validateApiResponse(response);
        // Check if the response is empty
        if (!response || (Array.isArray(response) && response.length === 0)) {
            // Return the response as is, indicating no data found
            // Alternatively, you can throw an error or handle this case based on your application's needs
            return response;
        }
        // Return the validated response
        return response;
    }
    catch (error) {
        // Handle any errors that occurred during the API request or validation
        // You might want to throw the error or handle it based on your application's needs
        return error;
    }
}
exports.fetchGoogleDataWithValidation = fetchGoogleDataWithValidation;
/**
 * Create an error response object.
 * This function creates an error response object with a specified error message.
 * @param {string} message - The error message to include in the response.
 * @returns {T} - An error response object.
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
 * This function checks if the response is an object, if it's empty, and if it contains the requested fields.
 * @param {T} response - The API response object.
 * @throws {Error} If the response format is invalid or if requested fields are missing.
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
