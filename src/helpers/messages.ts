/**
 * An object containing various messages used throughout the application.
 * These messages are primarily used for error handling and user feedback.
 * Each property of the object represents a specific error or message type,
 * and some properties are functions that return formatted strings based on input parameters.
 */
export const Messages = {
   // Message indicating that an access token is missing
   missingAccessToken: "Access token is missing. Please provide a valid access token.",
   // Message indicating that an access token is invalid or expired
   invalidAccessToken: "Invalid or expired access token. Please check your authentication.",
   // Message indicating that requested data is not available
   notFound: "Data not Available",
   // Function that returns a formatted error message for a specific Facebook page ID
   facebookPageDetailsError: (pageId: string) => `Error fetching Facebook page details for ID ${pageId}`,
   // Function that returns a formatted error message for missing fields in an API response
   missingFields: (fields: string) => `Missing fields in API response: ${fields}`,
   // Message indicating that the API response format is invalid
   invalidApiResponseFormat: 'Invalid API response format',
   // Message indicating that missing or invalid parameters were provided
   missingParameters: "Missing or invalid parameters",
   // Message indicating that no connected Instagram account was found
   noInstagramAccountFound: "No connected Instagram account found."
};
