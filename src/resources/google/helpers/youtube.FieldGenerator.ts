import { CommonForYoutube } from '../common/interfaces';
import { GoogleParams } from '../common/parameters.google';

/**
 * Determines the user-specified limit for the number of items to return.
 * If a limit is not specified in the parameters, a default limit of  5 is used.
 * @param {commonForYoutube} params - The parameters object containing the limit.
 * @returns {number} - The limit for the number of items to return.
 */
export function userLimit(params: CommonForYoutube): number {
  let userLimit = 5; // Default limit
  const { limit } = params; // Extracting the limit from the parameters
  if (limit) {
    userLimit = limit; // Overriding the default limit if specified
  }
  return userLimit;
}

/**
 * Builds a string of fields to be included in the YouTube API request.
 * This function checks the parameters object for the presence of various fields and
 * constructs a comma-separated string of the fields that are set to true.
 * @param {commonForYoutube} params - The parameters object containing the fields to include.
 * @returns {string} - A comma-separated string of the fields to include in the request.
 */
export function buildFields(params: CommonForYoutube): string {
  const {
    contentDetails = false,
    snippet = false,
    statistics = false,
    auditDetails = false,
    brandingSettings = false,
    contentOwnerDetails = false,
    id = false,
    localizations = false,
    status = false,
    topicDetails = false,
    subscriberSnippet = false,
    limit,
    fileDetails = false,
    localization = false,
    player = false,
    processingDetails = false,
    recordingDetails = false,
    suggestions = false,
  } = params;

  // An empty array for pushing selected fields
  const fieldsArray: string[] = [];
  // Checking each field in the parameters and adding it to the fieldsArray if true
  if (fileDetails) {
    fieldsArray.push(GoogleParams.fileDetails);
  }
  if (localization) {
    fieldsArray.push(GoogleParams.localizations);
  }
  if (player) {
    fieldsArray.push(GoogleParams.player);
  }
  if (processingDetails) {
    fieldsArray.push(GoogleParams.processingDetails);
  }
  if (recordingDetails) {
    fieldsArray.push(GoogleParams.recordingDetails);
  }
  if (suggestions) {
    fieldsArray.push(GoogleParams.suggestions);
  }
  if (subscriberSnippet) {
    fieldsArray.push(GoogleParams.subscriberSnippet);
  }
  if (contentDetails) {
    fieldsArray.push(GoogleParams.contentDetails);
  }
  if (snippet) {
    fieldsArray.push(GoogleParams.snippet);
  }
  if (statistics) {
    fieldsArray.push(GoogleParams.statistics);
  }
  if (auditDetails) {
    fieldsArray.push(GoogleParams.auditDetails);
  }
  if (brandingSettings) {
    fieldsArray.push(GoogleParams.brandingSettings);
  }
  if (contentOwnerDetails) {
    fieldsArray.push(GoogleParams.contentOwnerDetails);
  }
  if (id) {
    fieldsArray.push(GoogleParams.id);
  }
  if (localizations) {
    fieldsArray.push(GoogleParams.localizations);
  }
  if (status) {
    fieldsArray.push(GoogleParams.status);
  }
  if (topicDetails) {
    fieldsArray.push(GoogleParams.topicDetails);
  }

  // Joining the fieldsArray into a comma-separated string and returning it
  return fieldsArray.join(',');
}
