"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchInstagramUsersDataWithValidation = exports.makeInstagramApiRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const generals_1 = require("../../../enums/generals");
const constants_1 = require("../../../constants");
const dataValidator_1 = require("../common/dataValidator");
const common_helpers_1 = require("../common/common.helpers");
async function makeInstagramApiRequest(UserId, fields, limit, accessToken, urlParam) {
    // Construct the API URL using the provided page ID
    const apiUrl = `${constants_1.Constants.META_API_BASE_URL}/${constants_1.Constants.META_GRAPH_API_VERSION}/${UserId}/${urlParam}`;
    try {
        const params = {
            fields,
            access_token: accessToken,
        };
        // Add the limit parameter if it is valid
        if (limit && limit > 0) {
            params.limit = limit;
        }
        // Make a GET request to the API with the specified parameters
        const response = await axios_1.default.get(apiUrl, {
            params
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
        throw await (0, common_helpers_1.handleApiError)(error, errorResponse);
    }
}
exports.makeInstagramApiRequest = makeInstagramApiRequest;
async function fetchInstagramUsersDataWithValidation(accessToken, userId, limit, fields, urlParam) {
    // Validate the user access token
    const accessTokenValidationResult = (0, common_helpers_1.validateAccessToken)(accessToken);
    // If there is an issue with the access token, return an error response
    if (accessTokenValidationResult) {
        return (0, dataValidator_1.createErrorResponse)(generals_1.TextMessages.INVALID_ACCESS_TOKEN);
    }
    try {
        // Make the API request and get the response
        const response = await makeInstagramApiRequest(userId, fields, limit, accessToken, urlParam);
        // Validate the API response
        (0, dataValidator_1.validateApiResponse)(response);
        // Check if the response is empty
        if (!response || (Array.isArray(response) && response.length === 0)) {
            // Send a message indicating no data found
            throw (generals_1.TextMessages.NOT_FOUND);
            // You can also throw an error or handle this case based on your application's needs
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
exports.fetchInstagramUsersDataWithValidation = fetchInstagramUsersDataWithValidation;
