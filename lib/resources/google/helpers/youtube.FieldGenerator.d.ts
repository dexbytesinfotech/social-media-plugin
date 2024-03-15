import { CommonForYoutube } from '../common/interfaces';
/**
 * Determines the user-specified limit for the number of items to return.
 * If a limit is not specified in the parameters, a default limit of  5 is used.
 * @param {commonForYoutube} params - The parameters object containing the limit.
 * @returns {number} - The limit for the number of items to return.
 */
export declare function userLimit(params: CommonForYoutube): number;
/**
 * Builds a string of fields to be included in the YouTube API request.
 * This function checks the parameters object for the presence of various fields and
 * constructs a comma-separated string of the fields that are set to true.
 * @param {commonForYoutube} params - The parameters object containing the fields to include.
 * @returns {string} - A comma-separated string of the fields to include in the request.
 */
export declare function buildFields(params: CommonForYoutube): string;
