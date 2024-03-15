import { InstagramAccountDetails } from '../../resources/meta/instagram/instagram.Details';
import { InstagramAccountMedia } from '../../resources/meta/instagram/instagram.Media';

class Instagram {
  private payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }

  async instagramDetails() {
    const { userId, params, accessToken } = this.payload;
    const details = new InstagramAccountDetails(accessToken);
    const detailsResponse = await details.fetchAccountDetails(userId, params);
    return detailsResponse;
  }

  async instagramMedia() {
    const { userId, params, accessToken } = this.payload;
    const media = new InstagramAccountMedia(accessToken);
    const mediaResponse = media.fetchAccountMedia(userId, params);
    return mediaResponse;
  }

  async instagramStories() {
    const { userId, params, accessToken } = this.payload;
    const media = new InstagramAccountMedia(accessToken);
    const stories = media.fetchAccountStories(userId, params);
    return stories;
  }

  async instagramLiveMedia() {
    const { userId, params, accessToken } = this.payload;
    const media = new InstagramAccountMedia(accessToken);
    const liveMedia = media.fetchAccountLiveMedia(userId, params);
    return liveMedia;
  }
}

export { Instagram as Repository };
