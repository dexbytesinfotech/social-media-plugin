import { CommonFacebookParams } from '../common/interfaces';
/**
 * Builds a string representing a set of fields to be used in a query or request,
 * based on the provided parameters.
 * @param field - The main field to be included in the query.
 * @param params - An object containing boolean flags for each field that can be included.
 * @returns A string representing the fields to be included in the query.
 */
export declare function buildFields(field: string, params: CommonFacebookParams): string;
