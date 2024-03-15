"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFields = exports.userLimit = void 0;
const parameters_google_1 = require("../common/parameters.google");
/**
 * Determines the user-specified limit for the number of items to return.
 * If a limit is not specified in the parameters, a default limit of  5 is used.
 * @param {commonForYoutube} params - The parameters object containing the limit.
 * @returns {number} - The limit for the number of items to return.
 */
function userLimit(params) {
    let userLimit = 5; // Default limit
    const { limit } = params; // Extracting the limit from the parameters
    if (limit) {
        userLimit = limit; // Overriding the default limit if specified
    }
    return userLimit;
}
exports.userLimit = userLimit;
/**
 * Builds a string of fields to be included in the YouTube API request.
 * This function checks the parameters object for the presence of various fields and
 * constructs a comma-separated string of the fields that are set to true.
 * @param {commonForYoutube} params - The parameters object containing the fields to include.
 * @returns {string} - A comma-separated string of the fields to include in the request.
 */
function buildFields(params) {
    const { contentDetails = false, snippet = false, statistics = false, auditDetails = false, brandingSettings = false, contentOwnerDetails = false, id = false, localizations = false, status = false, topicDetails = false, subscriberSnippet = false, limit, fileDetails = false, localization = false, player = false, processingDetails = false, recordingDetails = false, suggestions = false, } = params;
    // An empty array for pushing selected fields
    const fieldsArray = [];
    // Checking each field in the parameters and adding it to the fieldsArray if true
    if (fileDetails) {
        fieldsArray.push(parameters_google_1.GoogleParams.fileDetails);
    }
    if (localization) {
        fieldsArray.push(parameters_google_1.GoogleParams.localizations);
    }
    if (player) {
        fieldsArray.push(parameters_google_1.GoogleParams.player);
    }
    if (processingDetails) {
        fieldsArray.push(parameters_google_1.GoogleParams.processingDetails);
    }
    if (recordingDetails) {
        fieldsArray.push(parameters_google_1.GoogleParams.recordingDetails);
    }
    if (suggestions) {
        fieldsArray.push(parameters_google_1.GoogleParams.suggestions);
    }
    if (subscriberSnippet) {
        fieldsArray.push(parameters_google_1.GoogleParams.subscriberSnippet);
    }
    if (contentDetails) {
        fieldsArray.push(parameters_google_1.GoogleParams.contentDetails);
    }
    if (snippet) {
        fieldsArray.push(parameters_google_1.GoogleParams.snippet);
    }
    if (statistics) {
        fieldsArray.push(parameters_google_1.GoogleParams.statistics);
    }
    if (auditDetails) {
        fieldsArray.push(parameters_google_1.GoogleParams.auditDetails);
    }
    if (brandingSettings) {
        fieldsArray.push(parameters_google_1.GoogleParams.brandingSettings);
    }
    if (contentOwnerDetails) {
        fieldsArray.push(parameters_google_1.GoogleParams.contentOwnerDetails);
    }
    if (id) {
        fieldsArray.push(parameters_google_1.GoogleParams.id);
    }
    if (localizations) {
        fieldsArray.push(parameters_google_1.GoogleParams.localizations);
    }
    if (status) {
        fieldsArray.push(parameters_google_1.GoogleParams.status);
    }
    if (topicDetails) {
        fieldsArray.push(parameters_google_1.GoogleParams.topicDetails);
    }
    // Joining the fieldsArray into a comma-separated string and returning it
    return fieldsArray.join(',');
}
exports.buildFields = buildFields;
