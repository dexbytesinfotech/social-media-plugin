"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const instagram_Details_1 = require("../../resources/meta/instagram/instagram.Details");
const instagram_Media_1 = require("../../resources/meta/instagram/instagram.Media");
class Instagram {
    payload;
    constructor(payload) {
        this.payload = payload;
    }
    async instagramDetails() {
        const { userId, params, accessToken } = this.payload;
        const details = new instagram_Details_1.InstagramAccountDetails(accessToken);
        const detailsResponse = await details.fetchAccountDetails(userId, params);
        return detailsResponse;
    }
    async instagramMedia() {
        const { userId, params, accessToken } = this.payload;
        const media = new instagram_Media_1.InstagramAccountMedia(accessToken);
        const mediaResponse = media.fetchAccountMedia(userId, params);
        return mediaResponse;
    }
    async instagramStories() {
        const { userId, params, accessToken } = this.payload;
        const media = new instagram_Media_1.InstagramAccountMedia(accessToken);
        const stories = media.fetchAccountStories(userId, params);
        return stories;
    }
    async instagramLiveMedia() {
        const { userId, params, accessToken } = this.payload;
        const media = new instagram_Media_1.InstagramAccountMedia(accessToken);
        const liveMedia = media.fetchAccountLiveMedia(userId, params);
        return liveMedia;
    }
}
exports.Repository = Instagram;
