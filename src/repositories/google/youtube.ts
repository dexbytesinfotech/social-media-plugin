import { Youtube } from '../../resources/google/youtube/youtube.ChannelDetails';
class YoutubeRepo {
  private payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }

  async channelDetails() {
    const { accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const channelDetails = channel.fetchChannelDetails(params);
    return channelDetails;
  }

  async channelSubscriptions() {
    const { channelId, accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const subscriptions = channel.fetchChannelSubscriptions(channelId, params);
    return subscriptions;
  }

  async channelPlaylists() {
    const { channelId, accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const playlists = channel.fetchChannelPlaylists(channelId, params);
    return playlists;
  }
  async channelPlaylistItems() {
    const { playlistId, accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const playlistsItems = channel.fetchChannelPlaylistItems(playlistId, params);
    return playlistsItems;
  }

  async channelSections() {
    const { channelId, accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const sections = channel.fetchChannelSections(channelId, params);
    return sections;
  }

  async languages() {
    const { accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const languages = channel.fetchLanguages(params);
    return languages;
  }

  async regions() {
    const { accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const regions = channel.fetchRegions(params);
    return regions;
  }

  async channelVideos() {
    const { channelId, accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const videos = channel.fetchChannelVideos(channelId, params);
    return videos;
  }

  async channelVideoDetails() {
    const { videoId, accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const videoDetails = channel.fetchChannelVideosDetails(videoId, params);
    return videoDetails;
  }

  async channelActivities() {
    const { channelId, accessesToken, params } = this.payload;
    const channel = new Youtube(accessesToken);
    const activites = channel.fetchChannelActivities(channelId, params);
    return activites;
  }
}

export { YoutubeRepo as Repository };
