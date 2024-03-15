"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAccessToken = exports.makeApiRequest = exports.handleApiError = void 0;
const axios_1 = __importDefault(require("axios"));
const generals_1 = require("../../../enums/generals");
const constants_1 = require("../../../constants");
/**
 * Handles API errors and returns a custom error message.
 * @param error - The error object thrown by the API call.
 * @param customErrorMessage - A custom error message to be returned.
 * @returns A promise that resolves to a custom error object.
 */
async function handleApiError(error, customErrorMessage) {
    // Check if the error is an AxiosError and if the status code is  401 (Unauthorized)
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
 * Makes an API request to the Facebook Graph API.
 * @param pageId - The ID of the Facebook page to query.
 * @param fields - The fields to request from the API.
 * @param accessToken - The access token for authentication.
 * @returns A promise that resolves to the API response data.
 */
async function makeApiRequest(pageId, fields, accessToken) {
    // Construct the API URL using the provided page ID
    const apiUrl = `${constants_1.Constants.META_API_BASE_URL}/${constants_1.Constants.META_GRAPH_API_VERSION}/${pageId}`;
    try {
        // Make a GET request to the API with the specified parameters
        const response = await axios_1.default.get(apiUrl, {
            params: {
                fields,
                access_token: accessToken,
            },
        });
        // Assuming the response type is AxiosResponse<T, any>
        const { status, statusText, data } = response;
        const simplifiedResponse = {
            status,
            statusText,
            data,
        };
        // Return the data from the API response
        return simplifiedResponse;
    }
    catch (error) {
        // Handle API error and throw a custom error object
        const errorResponse = {
            status: error.response.status,
            data: error.response.data.error,
        };
        throw await handleApiError(error, errorResponse);
    }
}
exports.makeApiRequest = makeApiRequest;
/**
 * Validates the access token.
 * @param accessToken - The access token to validate.
 * @returns An object indicating if the access token is valid or not, along with an error message if invalid.
 */
function validateAccessToken(accessToken) {
    // Check if the access token is missing
    if (!accessToken) {
        return {
            error: true,
            message: generals_1.TextMessages.MISSING_ACCESS_TOKEN,
        };
    }
    // Additional check for a valid access token (length greater than or equal to  10 characters)
    if (accessToken.length < 10) {
        return {
            error: true,
            message: generals_1.TextMessages.INVALID_ACCESS_TOKEN,
        };
    }
}
exports.validateAccessToken = validateAccessToken;
