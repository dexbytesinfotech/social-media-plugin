"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAccessToken = exports.makeGoogleApiRequest = exports.handleApiError = void 0;
const axios_1 = __importDefault(require("axios"));
const generals_1 = require("../../../enums/generals");
/**
 * Handles API errors and throws a custom error object with a specified or default error message.
 * @template T - The type of the response.
 * @param {any} error - The error object.
 * @param {any} customErrorMessage - Custom error message to be used (optional).
 * @returns {Promise<T>} - A promise that rejects with the custom error object.
 */
async function handleApiError(error, customErrorMessage) {
    // Check if the error is an AxiosError and has a 401 status (Unauthorized)
    if (axios_1.default.isAxiosError(error) && error.response?.status === 401) {
        throw {
            error: true,
            message: generals_1.TextMessages.INVALID_ACCESS_TOKEN,
        };
    }
    // Extract the error message from the error object
    const errorMessage = error.message;
    // Throw a custom error object with the specified or default error message
    throw {
        error: true,
        message: customErrorMessage ? customErrorMessage : `Error: ${errorMessage}`,
    };
}
exports.handleApiError = handleApiError;
/**
 * Makes a Google API request using Axios.
 * @template T - The type of the response.
 * @param {string} paramIdentifier - The identifier for the Google API endpoint (e.g., 'channels', 'search', 'videos').
 * @param {string} paramId - The specific identifier for the request (e.g., channel ID, video ID).
 * @param {string} fields - The fields to include in the API request.
 * @param {string} accessToken - The access token for authentication.
 * @returns {Promise<T>} - A promise that resolves with the formatted API response.
 */
async function makeGoogleApiRequest(url, accessToken) {
    try {
        // Make the API request using Axios
        const response = await axios_1.default.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        // Format the response object
        const formattedResponse = {
            status: response.status,
            statusText: response.statusText,
            data: response.data,
        };
        return formattedResponse;
    }
    catch (error) {
        // Handle API errors and rethrow with a custom error object
        const errorResponse = {
            data: error.response.data.error,
        };
        return errorResponse.data;
    }
}
exports.makeGoogleApiRequest = makeGoogleApiRequest;
/**
 * Validates the provided access token.
 * @param {string} accessToken - The access token to validate.
 * @returns {object | undefined} - An error object if validation fails, undefined otherwise.
 */
function validateAccessToken(accessToken) {
    // Check if the access token is missing
    if (!accessToken) {
        return {
            error: true,
            message: generals_1.TextMessages.MISSING_ACCESS_TOKEN,
        };
    }
    // Additional check for a valid access token (length greater than or equal to 10 characters)
    if (accessToken.length < 10) {
        return {
            error: true,
            message: generals_1.TextMessages.INVALID_ACCESS_TOKEN,
        };
    }
    // Return undefined if validation passes
    return undefined;
}
exports.validateAccessToken = validateAccessToken;
