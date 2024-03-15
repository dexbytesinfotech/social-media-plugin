import { CommonInstagramParams } from '../common/interfaces';
/**
 * Determines the user limit based on the provided parameters.
 * @param params - The parameters object containing the limit value.
 * @returns The user limit as a number.
 */
export declare function userLimit(params: CommonInstagramParams): number;
/**
 * Builds a string of fields to be used in Instagram API requests based on the provided parameters.
 * @param params - The parameters object containing the fields to be included in the request.
 * @returns A string of comma-separated fields.
 */
export declare function buildFields(params: CommonInstagramParams): string;
