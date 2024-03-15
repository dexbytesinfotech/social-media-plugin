/**
 * Interface representing the response from Google API.
 */
export interface GoogleResponse {
    data: any;
    status(status: any): unknown;
    errors(errors: any): unknown;
    message(message: any): unknown;
    code(code: any): unknown;
}
/**
 * Configuration for OAuth.
 */
export interface OAuthConfig {
    clientId: string;
    redirectUri: string;
}
/**
 * User credentials for accessing Google services.
 */
export interface Credentials {
    refresh_token?: string | null;
    expiry_date?: number | null;
    access_token?: string | null;
    token_type?: string | null;
    id_token?: string | null;
    scope?: string;
}
/**
 * Parameters for fetching details of a YouTube channel.
 */
export interface YoutubeChannelDetailsParams {
    snippet?: boolean;
    contentDetails?: boolean;
    statistics?: boolean;
    auditDetails?: boolean;
    brandingSettings?: boolean;
    contentOwnerDetails?: boolean;
    id?: boolean;
    localizations?: boolean;
    status?: boolean;
    topicDetails?: boolean;
}
/**
 * Parameters for fetching videos of a YouTube channel.
 */
export interface YoutubeChannelVideosParams {
    snippet?: boolean;
    limit?: number;
    id?: boolean;
}
/**
 * Parameters for fetching details of videos from a YouTube channel.
 */
export interface YoutubeChannelVideosDetailsParams {
    snippet?: boolean;
    contentDetails?: boolean;
    statistics?: boolean;
    status?: boolean;
    fileDetails?: boolean;
    player?: boolean;
    processingDetails?: boolean;
    recordingDetails?: boolean;
    suggestions?: boolean;
    topicDetails?: boolean;
}
/**
 * Parameters for fetching activities of a YouTube channel.
 */
export interface YoutubeChannelActivitiesParams {
    limit?: number;
    contentDetails?: boolean;
    id?: boolean;
    snippet?: boolean;
}
/**
 * Parameters for fetching captions of videos from a YouTube channel.
 */
export interface YoutubeChannelVideosCaptions {
    id?: boolean;
    snippet?: boolean;
}
/**
 * Parameters for fetching sections of a YouTube channel.
 */
export interface YoutubeChannelSectionsParams {
    contentDetails?: boolean;
    id?: boolean;
    snippet?: boolean;
}
/**
 * Parameters for fetching playlists of a YouTube channel.
 */
export interface YoutubeChannelPlaylistParams {
    contentDetails?: boolean;
    id?: boolean;
    localization?: boolean;
    player?: boolean;
    snippet?: boolean;
    status?: boolean;
}
/**
 * Parameters for fetching items in a playlist from a YouTube channel.
 */
export interface YoutubeChannelPLaylistItemsParams {
    limit?: number;
    id?: boolean;
    snippet?: boolean;
    status?: boolean;
}
/**
 * Common parameters for various YouTube API calls.
 */
export interface CommonForYoutube {
    limit?: number;
    subscriberSnippet?: boolean;
    statistics?: boolean;
    auditDetails?: boolean;
    brandingSettings?: boolean;
    contentOwnerDetails?: boolean;
    localizations?: boolean;
    fileDetails?: boolean;
    processingDetails?: boolean;
    recordingDetails?: boolean;
    suggestions?: boolean;
    topicDetails?: boolean;
    contentDetails?: boolean;
    id?: boolean;
    localization?: boolean;
    player?: boolean;
    snippet?: boolean;
    status?: boolean;
}
/**
 * Parameters for fetching subscriptions of a YouTube channel.
 */
export interface YoutubChannelSubscriptionsParams {
    id?: boolean;
    snippet?: boolean;
    subscriberSnippet?: boolean;
    contentDetails?: boolean;
    limit?: number;
}
export interface StaticGoogleParam {
    snippet?: boolean;
}
