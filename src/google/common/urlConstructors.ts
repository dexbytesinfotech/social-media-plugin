import { Constants } from "../../constants";
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
export function constructYoutubeUrl(paramIdentifier: string, fields: string, paramId?: string, limit?: number): string {
    switch (paramIdentifier) {
        case 'channels':
            // Constructs the URL for fetching channel details of the authenticated user.
            return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&mine=true`;
        case 'search':
            // Constructs the URL for searching videos on a channel.
            if (limit && limit >  0) {
                return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&channelId=${paramId}&type=video&maxResults=${limit}`;
            } else {
                return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&channelId=${paramId}&type=video`;
            }
        case 'videos':
            // Constructs the URL for fetching video details.
            return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&id=${paramId}`;
        case 'activities':
        case 'channelSections':
            // Constructs the URL for fetching activities or channel sections.
            if (limit && limit >  0) {
                return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&channelId=${paramId}&maxResults=${limit}`
            } else {
                return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&channelId=${paramId}`
            }
        case 'captions':
            // Constructs the URL for fetching video captions.
            return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&videoId=${paramId}`
        case 'i18nLanguages':
        case 'i18nRegions':
            // Constructs the URL for fetching languages or regions.
            return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}`
        case 'playlists':
            // Constructs the URL for fetching playlists.
            return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&channelId=${paramId}`
        case 'playlistItems':
            // Constructs the URL for fetching playlist items.
            return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&playlistId=${paramId}&maxResult=${limit}`
        case 'subscriptions':
            // Constructs the URL for fetching subscriptions.
            return `${Constants.GOOGLE.GOOGLE_YOUTUBE_ENDPOINT}/${paramIdentifier}?part=${fields}&channelId=${paramId}&maxResults=${limit}`
        default:
            // Returns an error message if the paramIdentifier is not supported.
            return (`Unsupported paramIdentifier: ${paramIdentifier}`);
    }
}
