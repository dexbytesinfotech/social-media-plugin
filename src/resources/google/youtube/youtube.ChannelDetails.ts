import { fetchGoogleDataWithValidation } from '../common/dataValidators';
import {
  GoogleResponse,
  YoutubeChannelDetailsParams,
  StaticGoogleParam,
  YoutubChannelSubscriptionsParams,
  YoutubeChannelPlaylistParams,
  YoutubeChannelPLaylistItemsParams,
  YoutubeChannelSectionsParams,
  YoutubeChannelVideosParams,
  YoutubeChannelVideosDetailsParams,
  YoutubeChannelActivitiesParams,
  YoutubeChannelVideosCaptions,
} from '../common/interfaces';
import { GoogleParams } from '../common/parameters.google';
import { IYoutubeRepository } from '../factory/google.Factory.Interfaces';
import { buildFields, userLimit } from '../helpers/youtube.FieldGenerator';

/**
 * Class representing the retrieval of YouTube channel details.
 * This class is responsible for fetching various types of data from the YouTube API.
 */
export class Youtube implements IYoutubeRepository {
  private accessToken: string;

  /**
   * Constructor for the Youtube class.
   * @param {string} accessToken - The access token required for authentication.
   */
  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  /**
   * Fetches data from the Google API based on the specified parameters.
   * This method is a generic fetcher that can be used for various types of data.
   * @template T - The type of data to be fetched.
   * @param {string} paramId - The ID of the parameter to fetch.
   * @param {string} paramIdentifier - The identifier for the type of data to fetch.
   * @param {object} params - The parameters for the data fetch.
   * @returns {Promise<T>} - A promise that resolves with the fetched data.
   */
  private async fetchData<T>(paramId: string, paramIdentifier: string, params: object = {}): Promise<T> {
    const fields = buildFields(params);
    const limit = userLimit(params);
    return await fetchGoogleDataWithValidation<T>(paramIdentifier, this.accessToken, paramId, fields, limit);
  }

  /**
   * Fetches YouTube channel details based on the specified parameters.
   * @param {YoutubeChannelDetailsParams} params - The parameters for channel details.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched channel details.
   */
  fetchChannelDetails = async (params: YoutubeChannelDetailsParams): Promise<GoogleResponse> => {
    const paramId = GoogleParams.ifParamIdIsBlank;
    const paramIdentifier = GoogleParams.paramIdentifier.channels;
    return this.fetchData<GoogleResponse>(paramId, paramIdentifier, params);
  };

  /**
   * Fetches YouTube channel subscriptions based on the specified parameters.
   * @param {string} channelId - The ID of the channel.
   * @param {YoutubChannelSubscriptionsParams} params - The parameters for fetching subscriptions.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched subscriptions data.
   */
  fetchChannelSubscriptions = async (
    channelId: string,
    params: YoutubChannelSubscriptionsParams,
  ): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.subscriptions;
    return this.fetchData<GoogleResponse>(channelId, paramIdentifier, params);
  };

  /**
   * Fetches YouTube channel playlists based on the specified parameters.
   * @param {string} channelId - The ID of the channel.
   * @param {YoutubeChannelPlaylistParams} params - The parameters for fetching playlists.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched playlists data.
   */
  fetchChannelPlaylists = async (channelId: string, params: YoutubeChannelPlaylistParams): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.playlists;
    return this.fetchData<GoogleResponse>(channelId, paramIdentifier, params);
  };

  /**
   * Fetches YouTube channel playlist items based on the specified parameters.
   * @param {string} playlistId - The ID of the playlist.
   * @param {YoutubeChannelPLaylistItemsParams} params - The parameters for fetching playlist items.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched playlist items data.
   */
  fetchChannelPlaylistItems = async (
    playlistId: string,
    params: YoutubeChannelPLaylistItemsParams,
  ): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.playlistItems;
    return this.fetchData<GoogleResponse>(playlistId, paramIdentifier, params);
  };

  /**
   * Fetches YouTube channel sections based on the specified parameters.
   * @param {string} channelId - The ID of the channel.
   * @param {YoutubeChannelSectionsParams} params - The parameters for fetching channel sections.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched channel sections data.
   */
  fetchChannelSections = async (channelId: string, params: YoutubeChannelSectionsParams): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.channelSections;
    return this.fetchData<GoogleResponse>(channelId, paramIdentifier, params);
  };

  /**
   * Fetches YouTube languages based on the specified parameters.
   * @param {staticGoogleParam} params - The parameters for fetching languages.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched languages data.
   */
  fetchLanguages = async (params: StaticGoogleParam): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.i18nLanguages;
    return this.fetchData<GoogleResponse>('', paramIdentifier, params);
  };

  /**
   * Fetches YouTube regions based on the specified parameters.
   * @param {staticGoogleParam} params - The parameters for fetching regions.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched regions data.
   */
  fetchRegions = async (params: StaticGoogleParam): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.i18nRegions;
    return this.fetchData<GoogleResponse>('', paramIdentifier, params);
  };

  /**
   * Fetches YouTube channel videos based on the specified parameters.
   * @param {string} pageId - The ID of the page.
   * @param {YoutubeChannelVideosParams} params - The parameters for fetching videos.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched videos data.
   */
  fetchChannelVideos = async (channelId: string, params: YoutubeChannelVideosParams): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.search;
    return this.fetchData<GoogleResponse>(channelId, paramIdentifier, params);
  };

  /**
   * Fetches YouTube channel video details based on the specified parameters.
   * @param {string} videoId - The ID of the video.
   * @param {YoutubeChannelVideosDetailsParams} params - The parameters for fetching video details.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched video details data.
   */
  fetchChannelVideosDetails = async (
    videoId: string,
    params: YoutubeChannelVideosDetailsParams,
  ): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.videos;
    return this.fetchData<GoogleResponse>(videoId, paramIdentifier, params);
  };

  /**
   * Fetches YouTube channel activities based on the specified parameters.
   * @param {string} paramId - The ID of the parameter to fetch.
   * @param {YoutubeChannelActivitiesParams} params - The parameters for fetching activities.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched activities data.
   */
  fetchChannelActivities = async (
    channelId: string,
    params: YoutubeChannelActivitiesParams,
  ): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.activities;
    return this.fetchData<GoogleResponse>(channelId, paramIdentifier, params);
  };

  /**
   * Fetches YouTube videos captions based on the specified parameters.
   * @param {string} paramId - The ID of the parameter to fetch.
   * @param {YoutubeChannelVideosCaptions} params - The parameters for fetching video captions.
   * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched video captions data.
   */
  fetchVideosCaption = async (videoId: string, params: YoutubeChannelVideosCaptions): Promise<GoogleResponse> => {
    const paramIdentifier = GoogleParams.paramIdentifier.captions;
    return this.fetchData<GoogleResponse>(videoId, paramIdentifier, params);
  };
}
