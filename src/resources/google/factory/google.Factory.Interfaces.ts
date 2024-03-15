import {
  GoogleResponse,
    StaticGoogleParam,
  YoutubeChannelActivitiesParams,
  YoutubeChannelDetailsParams,
  YoutubeChannelPLaylistItemsParams,
  YoutubeChannelPlaylistParams,
  YoutubeChannelSectionsParams,
  YoutubeChannelVideosCaptions,
  YoutubeChannelVideosDetailsParams,
  YoutubeChannelVideosParams,
} from '../common/interfaces';

/*
 * Interface defining the contract for a YouTube repository.
 * This interface outlines the methods that any YouTube repository implementation must provide.
 * These methods are used to fetch various types of data from the YouTube API, such as channel details, playlists, videos, and more.
 */
export interface IYoutubeRepository {
  /**
   * Fetches YouTube channel details based on the specified parameters.
   * @param {YoutubeChannelDetailsParams} params - The parameters for channel details.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched channel details.
   */
  fetchChannelDetails(params: YoutubeChannelDetailsParams): Promise<GoogleResponse>;

  /**
   * Fetches YouTube channel playlists based on the specified parameters.
   * @param {string} channelId - The ID of the channel.
   * @param {YoutubeChannelPlaylistParams} params - The parameters for fetching playlists.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched playlists data.
   */
  fetchChannelPlaylists(channelId: string, params: YoutubeChannelPlaylistParams): Promise<GoogleResponse>;

  /**
   * Fetches YouTube channel playlist items based on the specified parameters.
   * @param {string} playlistId - The ID of the playlist.
   * @param {YoutubeChannelPLaylistItemsParams} params - The parameters for fetching playlist items.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched playlist items data.
   */
  fetchChannelPlaylistItems(playlistId: string, params: YoutubeChannelPLaylistItemsParams): Promise<GoogleResponse>;

  /**
   * Fetches YouTube channel sections based on the specified parameters.
   * @param {string} channelId - The ID of the channel.
   * @param {YoutubeChannelSectionsParams} params - The parameters for fetching channel sections.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched channel sections data.
   */
  fetchChannelSections(channelId: string, params: YoutubeChannelSectionsParams): Promise<GoogleResponse>;

  /**
   * Fetches YouTube languages based on the specified parameters.
   * @param {staticGoogleParam} params - The parameters for fetching languages.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched languages data.
   */
  fetchLanguages(params: StaticGoogleParam): Promise<GoogleResponse>;

  /**
   * Fetches YouTube regions based on the specified parameters.
   * @param {staticGoogleParam} params - The parameters for fetching regions.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched regions data.
   */
  fetchRegions(params: StaticGoogleParam): Promise<GoogleResponse>;

  /**
   * Fetches YouTube channel videos based on the specified parameters.
   * @param {string} channelId - The ID of the channel.
   * @param {YoutubeChannelVideosParams} params - The parameters for fetching videos.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched videos data.
   */
  fetchChannelVideos(channelId: string, params: YoutubeChannelVideosParams): Promise<GoogleResponse>;

  /**
   * Fetches YouTube channel video details based on the specified parameters.
   * @param {string} videoId - The ID of the video.
   * @param {YoutubeChannelVideosDetailsParams} params - The parameters for fetching video details.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched video details data.
   */
  fetchChannelVideosDetails(videoId: string, params: YoutubeChannelVideosDetailsParams): Promise<GoogleResponse>;

  /**
   * Fetches YouTube channel activities based on the specified parameters.
   * @param {string} channelId - The ID of the channel.
   * @param {YoutubeChannelActivitiesParams} params - The parameters for fetching activities.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched activities data.
   */
  fetchChannelActivities(channelId: string, params: YoutubeChannelActivitiesParams): Promise<GoogleResponse>;

  /**
   * Fetches YouTube videos captions based on the specified parameters.
   * @param {string} videoId - The ID of the video.
   * @param {YoutubeChannelVideosCaptions} params - The parameters for fetching video captions.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched video captions data.
   */
  fetchVideosCaption(videoId: string, params: YoutubeChannelVideosCaptions): Promise<GoogleResponse>;
}

export interface IGoogleTokenGenerator {
  getToken(authorizationCode: string): Promise<any>;
  refreshAccessToken(refreshToken: string): Promise<any>;
}
