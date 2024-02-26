/**
 * Interface representing the response from Google API.
 */
export interface GoogleResponse {
  data: any; // The data returned from the API.
  status(status: any): unknown; // Method to set the status in the response.
  errors(errors: any): unknown; // Method to set errors in the response.
  message(message: any): unknown; // Method to set a message in the response.
  code(code: any): unknown; // Method to set a code in the response.
}

/**
 * Configuration for OAuth.
 */
export interface OAuthConfig {
  clientId: string; // The client ID for OAuth.
  redirectUri: string; // The redirect URI for OAuth.
}

/**
 * User credentials for accessing Google services.
 */
export interface Credentials {
  refresh_token?: string | null; // Optional refresh token.
  expiry_date?: number | null; // Optional expiry date of the token.
  access_token?: string | null; // Optional access token.
  token_type?: string | null; // Optional token type.
  id_token?: string | null; // Optional ID token.
  scope?: string; // The scope of access.
}

/**
 * Parameters for fetching details of a YouTube channel.
 */
export interface YoutubeChannelDetailsParams {
  snippet?: boolean; // Include snippet details.
  contentDetails?: boolean; // Include content details.
  statistics?: boolean; // Include statistics.
  auditDetails?: boolean; // Include audit details.
  brandingSettings?: boolean; // Include branding settings.
  contentOwnerDetails?: boolean; // Include content owner details.
  id?: boolean; // Include channel ID.
  localizations?: boolean; // Include localizations.
  status?: boolean; // Include status.
  topicDetails?: boolean; // Include topic details.
}

/**
 * Parameters for fetching videos of a YouTube channel.
 */
export interface YoutubeChannelVideosParams {
  snippet?: boolean; // Include snippet details.
  limit?: number; // Limit the number of videos.
  id?: boolean; // Include video ID.

}

/**
 * Parameters for fetching details of videos from a YouTube channel.
 */
export interface YoutubeChannelVideosDetailsParams {
  snippet?: boolean; // Include snippet details.
  contentDetails?: boolean; // Include content details.
  statistics?: boolean; // Include statistics.
  status?: boolean; // Include status.
  fileDetails?: boolean; // Include file details.
  player?: boolean; // Include player details.
  processingDetails?: boolean; // Include processing details.
  recordingDetails?: boolean; // Include recording details.
  suggestions?: boolean; // Include suggestions.
  topicDetails?: boolean; // Include topic details.
}

/**
 * Parameters for fetching activities of a YouTube channel.
 */
export interface YoutubeChannelActivitiesParams {
  limit?: number; // Limit the number of activities.
  contentDetails?: boolean; // Include content details.
  id?: boolean; // Include activity ID.
  snippet?: boolean; // Include snippet details.
}

/**
 * Parameters for fetching captions of videos from a YouTube channel.
 */
export interface YoutubeChannelVideosCaptions {
  id?: boolean; // Include caption ID.
  snippet?: boolean; // Include snippet details.
}

/**
 * Parameters for fetching sections of a YouTube channel.
 */
export interface YoutubeChannelSectionsParams {
  contentDetails?: boolean; // Include content details.
  id?: boolean; // Include section ID.
  snippet?: boolean; // Include snippet details.
}

/**
 * Parameters for fetching playlists of a YouTube channel.
 */
export interface YoutubeChannelPlaylistParams {
  contentDetails?: boolean; // Include content details.
  id?: boolean; // Include playlist ID.
  localization?: boolean; // Include localization details.
  player?: boolean; // Include player details.
  snippet?: boolean; // Include snippet details.
  status?: boolean; // Include status.
}

/**
 * Parameters for fetching items in a playlist from a YouTube channel.
 */
export interface YoutubeChannelPLaylistItemsParams {
  limit?: number; // Limit the number of playlist items.
  id?: boolean; // Include playlist item ID.
  snippet?: boolean; // Include snippet details.
  status?: boolean; // Include status.
}

/**
 * Common parameters for various YouTube API calls.
 */
export interface commonForYoutube {
  limit?: number; // Common limit for multiple requests.
  subscriberSnippet?: boolean; // Include subscriber snippet details.
  statistics?: boolean; // Include statistics.
  auditDetails?: boolean; // Include audit details.
  brandingSettings?: boolean; // Include branding settings.
  contentOwnerDetails?: boolean; // Include content owner details.
  localizations?: boolean; // Include localizations.
  fileDetails?: boolean; // Include file details.
  processingDetails?: boolean; // Include processing details.
  recordingDetails?: boolean; // Include recording details.
  suggestions?: boolean; // Include suggestions.
  topicDetails?: boolean; // Include topic details.
  contentDetails?: boolean; // Include content details.
  id?: boolean; // Include common ID.
  localization?: boolean; // Include localization details.
  player?: boolean; // Include player details.
  snippet?: boolean; // Include snippet details.
  status?: boolean; // Include status.
}

/**
 * Parameters for fetching subscriptions of a YouTube channel.
 */
export interface YoutubChannelSubscriptionsParams {
  id?: boolean; // Include subscription ID.
  snippet?: boolean; // Include snippet details.
  subscriberSnippet?: boolean; // Include subscriber snippet details.
  contentDetails?: boolean; // Include content details.
  limit?: number; // Limit the number of subscriptions.
}
