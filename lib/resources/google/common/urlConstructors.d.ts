/**
 * Constructs a YouTube API URL based on the specified parameters.
 * This function dynamically generates the URL for various YouTube API endpoints
 * such as channels, search, videos, activities, channel sections, captions, languages, regions, playlists, playlist items, and subscriptions.
 * @param {string} paramIdentifier - The identifier for the type of data to fetch (e.g., 'channels', 'search', 'videos', etc.).
 * @param {string} fields - The fields to be included in the response.
 * @param {string} [paramId] - The ID of the parameter to fetch (e.g., channel ID, video ID, etc.).
 * @param {number} [limit] - The limit for the number of items to return.
 * @returns {string} - The constructed YouTube API URL.
 */
export declare function constructYoutubeUrl(paramIdentifier: string, fields: string, paramId?: string, limit?: number): string;
