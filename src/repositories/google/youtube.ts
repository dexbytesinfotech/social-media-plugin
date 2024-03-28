import { Youtube } from '../../resources/google/youtube/youtube.ChannelDetails';
class YoutubeRepo {
  private payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }

  async channelDetails() {
    const { accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const channelDetails = channel.fetchChannelDetails(params);
    return channelDetails;
  }

  async channelSubscriptions() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const subscriptions = channel.fetchChannelSubscriptions(channelId, params);
    return subscriptions;
  }

  async channelPlaylists() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const playlists = channel.fetchChannelPlaylists(channelId, params);
    return playlists;
  }
  async channelPlaylistItems() {
    const { playlistId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const playlistsItems = channel.fetchChannelPlaylistItems(playlistId, params);
    return playlistsItems;
  }

  async channelSections() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const sections = channel.fetchChannelSections(channelId, params);
    return sections;
  }

  async languages() {
    const { accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const languages = channel.fetchLanguages(params);
    return languages;
  }

  async regions() {
    const { accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const regions = channel.fetchRegions(params);
    return regions;
  }

  async channelVideos() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const videos = channel.fetchChannelVideos(channelId, params);
    return videos;
  }

  async channelVideoDetails() {
    const { videoId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const videoDetails = channel.fetchChannelVideosDetails(videoId, params);
    return videoDetails;
  }

  async channelActivities() {
    const { channelId, accessToken, params } = this.payload;
    const channel = new Youtube(accessToken);
    const activites = channel.fetchChannelActivities(channelId, params);
    return activites;
  }
}

export { YoutubeRepo as Repository };
