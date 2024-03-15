"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Youtube = void 0;
const dataValidators_1 = require("../common/dataValidators");
const parameters_google_1 = require("../common/parameters.google");
const youtube_FieldGenerator_1 = require("../helpers/youtube.FieldGenerator");
/**
 * Class representing the retrieval of YouTube channel details.
 * This class is responsible for fetching various types of data from the YouTube API.
 */
class Youtube {
    accessToken;
    /**
     * Constructor for the Youtube class.
     * @param {string} accessToken - The access token required for authentication.
     */
    constructor(accessToken) {
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
    async fetchData(paramId, paramIdentifier, params = {}) {
        const fields = (0, youtube_FieldGenerator_1.buildFields)(params);
        const limit = (0, youtube_FieldGenerator_1.userLimit)(params);
        return await (0, dataValidators_1.fetchGoogleDataWithValidation)(paramIdentifier, this.accessToken, paramId, fields, limit);
    }
    /**
     * Fetches YouTube channel details based on the specified parameters.
     * @param {YoutubeChannelDetailsParams} params - The parameters for channel details.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched channel details.
     */
    fetchChannelDetails = async (params) => {
        const paramId = parameters_google_1.GoogleParams.ifParamIdIsBlank;
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.channels;
        return this.fetchData(paramId, paramIdentifier, params);
    };
    /**
     * Fetches YouTube channel subscriptions based on the specified parameters.
     * @param {string} channelId - The ID of the channel.
     * @param {YoutubChannelSubscriptionsParams} params - The parameters for fetching subscriptions.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched subscriptions data.
     */
    fetchChannelSubscriptions = async (channelId, params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.subscriptions;
        return this.fetchData(channelId, paramIdentifier, params);
    };
    /**
     * Fetches YouTube channel playlists based on the specified parameters.
     * @param {string} channelId - The ID of the channel.
     * @param {YoutubeChannelPlaylistParams} params - The parameters for fetching playlists.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched playlists data.
     */
    fetchChannelPlaylists = async (channelId, params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.playlists;
        return this.fetchData(channelId, paramIdentifier, params);
    };
    /**
     * Fetches YouTube channel playlist items based on the specified parameters.
     * @param {string} playlistId - The ID of the playlist.
     * @param {YoutubeChannelPLaylistItemsParams} params - The parameters for fetching playlist items.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched playlist items data.
     */
    fetchChannelPlaylistItems = async (playlistId, params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.playlistItems;
        return this.fetchData(playlistId, paramIdentifier, params);
    };
    /**
     * Fetches YouTube channel sections based on the specified parameters.
     * @param {string} channelId - The ID of the channel.
     * @param {YoutubeChannelSectionsParams} params - The parameters for fetching channel sections.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched channel sections data.
     */
    fetchChannelSections = async (channelId, params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.channelSections;
        return this.fetchData(channelId, paramIdentifier, params);
    };
    /**
     * Fetches YouTube languages based on the specified parameters.
     * @param {staticGoogleParam} params - The parameters for fetching languages.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched languages data.
     */
    fetchLanguages = async (params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.i18nLanguages;
        return this.fetchData('', paramIdentifier, params);
    };
    /**
     * Fetches YouTube regions based on the specified parameters.
     * @param {staticGoogleParam} params - The parameters for fetching regions.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched regions data.
     */
    fetchRegions = async (params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.i18nRegions;
        return this.fetchData('', paramIdentifier, params);
    };
    /**
     * Fetches YouTube channel videos based on the specified parameters.
     * @param {string} pageId - The ID of the page.
     * @param {YoutubeChannelVideosParams} params - The parameters for fetching videos.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched videos data.
     */
    fetchChannelVideos = async (channelId, params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.search;
        return this.fetchData(channelId, paramIdentifier, params);
    };
    /**
     * Fetches YouTube channel video details based on the specified parameters.
     * @param {string} videoId - The ID of the video.
     * @param {YoutubeChannelVideosDetailsParams} params - The parameters for fetching video details.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched video details data.
     */
    fetchChannelVideosDetails = async (videoId, params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.videos;
        return this.fetchData(videoId, paramIdentifier, params);
    };
    /**
     * Fetches YouTube channel activities based on the specified parameters.
     * @param {string} paramId - The ID of the parameter to fetch.
     * @param {YoutubeChannelActivitiesParams} params - The parameters for fetching activities.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched activities data.
     */
    fetchChannelActivities = async (channelId, params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.activities;
        return this.fetchData(channelId, paramIdentifier, params);
    };
    /**
     * Fetches YouTube videos captions based on the specified parameters.
     * @param {string} paramId - The ID of the parameter to fetch.
     * @param {YoutubeChannelVideosCaptions} params - The parameters for fetching video captions.
     * @returns {Promise<GoogleResponse>} - A promise that resolves with the fetched video captions data.
     */
    fetchVideosCaption = async (videoId, params) => {
        const paramIdentifier = parameters_google_1.GoogleParams.paramIdentifier.captions;
        return this.fetchData(videoId, paramIdentifier, params);
    };
}
exports.Youtube = Youtube;
