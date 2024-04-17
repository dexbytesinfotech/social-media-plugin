/**
 * YoutubeRepo class provides methods to interact with the Youtube API for various operations such as
 * fetching channel details, subscriptions, playlists, playlist items, sections, languages, regions,
 * videos, video details, and activities.
 * @class
 */
import { Youtube } from '../../resources/google/youtube/youtube.ChannelDetails';

class YoutubeRepo {
  private payload: any;

  /**
   * Constructor for YoutubeRepo class.
   * @constructor
   * @param {any} payload - The payload containing necessary data for API requests.
   */
  constructor(payload: any) {
    this.payload = payload;
  }

  /**
   * Fetches details of a specific Youtube channel.
   * @async
   * @returns {Promise<any>} The channel details.
   */
  async channelDetails() {
    const { accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const channelDetails = channel.fetchChannelDetails(params);
    return channelDetails;
  }

  /**
   * Fetches subscriptions of a specific Youtube channel.
   * @async
   * @returns {Promise<any>} The channel subscriptions.
   */
  async channelSubscriptions() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const subscriptions = channel.fetchChannelSubscriptions(channelId, params);
    return subscriptions;
  }

  /**
   * Fetches playlists of a specific Youtube channel.
   * @async
   * @returns {Promise<any>} The channel playlists.
   */
  async channelPlaylists() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const playlists = channel.fetchChannelPlaylists(channelId, params);
    return playlists;
  }

  /**
   * Fetches items of a specific playlist on Youtube.
   * @async
   * @returns {Promise<any>} The playlist items.
   */
  async channelPlaylistItems() {
    const { playlistId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const playlistsItems = channel.fetchChannelPlaylistItems(playlistId, params);
    return playlistsItems;
  }

  /**
   * Fetches sections of a specific Youtube channel.
   * @async
   * @returns {Promise<any>} The channel sections.
   */
  async channelSections() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const sections = channel.fetchChannelSections(channelId, params);
    return sections;
  }

  /**
   * Fetches supported languages on Youtube.
   * @async
   * @returns {Promise<any>} The supported languages.
   */
  async languages() {
    const { accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const languages = channel.fetchLanguages(params);
    return languages;
  }

  /**
   * Fetches supported regions on Youtube.
   * @async
   * @returns {Promise<any>} The supported regions.
   */
  async regions() {
    const { accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const regions = channel.fetchRegions(params);
    return regions;
  }

  /**
   * Fetches videos of a specific Youtube channel.
   * @async
   * @returns {Promise<any>} The channel videos.
   */
  async channelVideos() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const videos = channel.fetchChannelVideos(channelId, params);
    return videos;
  }

  /**
   * Fetches details of a specific Youtube video.
   * @async
   * @returns {Promise<any>} The video details.
   */
  async channelVideoDetails() {
    const { videoId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const videoDetails = channel.fetchChannelVideosDetails(videoId, params);
    return videoDetails;
  }

  /**
   * Fetches activities of a specific Youtube channel.
   * @async
   * @returns {Promise<any>} The channel activities.
   */
  async channelActivities() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const activites = channel.fetchChannelActivities(channelId, params);
    return activites;
  }
}

export { YoutubeRepo as Repository };
