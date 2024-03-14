import { Youtube } from "../../resources/google/youtube/youtube.ChannelDetails";

/**
 * YoutubeRepo class provides methods for interacting with YouTube channel data.
 */
class YoutubeRepo {
    private payload: any;

    /**
     * Constructor for YoutubeRepo class.
     * @param payload Object containing necessary information for channel operations.
     */
    constructor(payload: any) {
        this.payload = payload;
    }

    /**
     * Method to fetch details of a YouTube channel.
     * @returns Promise resolving to channel details.
     */
    async channelDetails() {
        const { accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchChannelDetails(params);
    }

    /**
     * Method to fetch subscriptions of a YouTube channel.
     * @returns Promise resolving to channel subscriptions.
     */
    async channelSubscriptions() {
        const { channelId, accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchChannelSubscriptions(channelId, params);
    }

    /**
     * Method to fetch playlists of a YouTube channel.
     * @returns Promise resolving to channel playlists.
     */
    async channelPlaylists() {
        const { channelId, accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchChannelPlaylists(channelId, params);
    }

    /**
     * Method to fetch playlist items of a YouTube channel.
     * @returns Promise resolving to playlist items.
     */
    async channelPlaylistItems() {
        const { playlistId, accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchChannelPlaylistItems(playlistId, params);
    }

    /**
     * Method to fetch sections of a YouTube channel.
     * @returns Promise resolving to channel sections.
     */
    async channelSections() {
        const { channelId, accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchChannelSections(channelId, params);
    }

    /**
     * Method to fetch languages supported by YouTube.
     * @returns Promise resolving to supported languages.
     */
    async languages() {
        const { accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchLanguages(params);
    }

    /**
     * Method to fetch regions supported by YouTube.
     * @returns Promise resolving to supported regions.
     */
    async regions() {
        const { accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchRegions(params);
    }

    /**
     * Method to fetch videos of a YouTube channel.
     * @returns Promise resolving to channel videos.
     */
    async channelVideos() {
        const { channelId, accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchChannelVideos(channelId, params);
    }

    /**
     * Method to fetch details of a specific video.
     * @returns Promise resolving to video details.
     */
    async channelVideoDetails() {
        const { videoId, accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchChannelVideosDetails(videoId, params);
    }
    
    /**
     * Method to fetch activities of a YouTube channel.
     * @returns Promise resolving to channel activities.
     */
    async channelActivities() {
        const { channelId, accessesToken, params } = this.payload;
        const channel = new Youtube(accessesToken);
        return channel.fetchChannelActivities(channelId, params);
    }
}

// Exporting YoutubeRepo class as Repository
export { YoutubeRepo as Repository };
