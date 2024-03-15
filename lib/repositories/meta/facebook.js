"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
// Importing necessary modules
const getUserIds_1 = require("../../resources/meta/common/getUserIds");
const facebookPage_Detailes_1 = require("../../resources/meta/facebook/facebookPage.Detailes");
const facebookPage_Media_1 = require("../../resources/meta/facebook/facebookPage.Media");
// Define a class named Facebook
class Facebook {
    // Private property to store payload data
    payload;
    // Constructor to initialize the payload
    constructor(payload) {
        this.payload = payload;
    }
    // Method to fetch basic details of a Facebook Page
    async facebookPageDetails() {
        // Destructuring pageId and accessToken from payload
        const { pageId, accessToken } = this.payload;
        // Creating an instance of FacebookPageDetails with the provided access token
        const details = new facebookPage_Detailes_1.FacebookPageDetails(accessToken);
        // Calling fetchPageBasicDetails method from FacebookPageDetails instance to get basic details
        const basicDetails = details.fetchPageBasicDetails(pageId);
        // Returning the fetched basic details
        return basicDetails;
    }
    // Method to fetch access token of a Facebook Page
    async facebookPageToken() {
        // Destructuring pageId and accessToken from payload
        const { pageId, accessToken } = this.payload;
        // Creating an instance of FacebookPageDetails with the provided access token
        const details = new facebookPage_Detailes_1.FacebookPageDetails(accessToken);
        // Calling fetchPageAccessToken method from FacebookPageDetails instance to get the access token
        const pageAccessToken = details.fetchPageAccessToken(pageId);
        // Returning the fetched access token
        return pageAccessToken;
    }
    // Method to fetch Facebook Page ID using provided access token
    async facebookPageId() {
        // Destructuring access token from payload
        const { accessToken } = this.payload;
        // Creating an instance of UserIdFetcher with the provided access token
        const userId = new getUserIds_1.UserIdFetcher(accessToken);
        // Calling fetchFacebookPageId method from UserIdFetcher instance to get the Page ID
        const id = await userId.fetchFacebookPageId();
        // Returning the fetched Page ID
        return id;
    }
    // Method to fetch events from a Facebook Page
    async facebookEvents() {
        // Destructuring pageId, accessToken, and params from payload
        const { pageId, accessToken, params } = this.payload;
        // Creating an instance of FacebookPageMedia with the provided access token
        const mediaData = new facebookPage_Media_1.FacebookPageMedia(accessToken);
        // Calling fetchPageEvents method from FacebookPageMedia instance to get the events
        const events = await mediaData.fetchPageEvents(pageId, params);
        // Returning the fetched events
        return events;
    }
    // Method to fetch posts from a Facebook Page
    async facebookPosts() {
        // Destructuring pageId, accessToken, and params from payload
        const { pageId, accessToken, params } = this.payload;
        // Creating an instance of FacebookPageMedia with the provided access token
        const mediaData = new facebookPage_Media_1.FacebookPageMedia(accessToken);
        // Calling fetchPagePosts method from FacebookPageMedia instance to get the posts
        const posts = await mediaData.fetchPagePosts(pageId, params);
        // Returning the fetched posts
        return posts;
    }
    // Method to fetch photos from a Facebook Page
    async facebookPhotos() {
        // Destructuring pageId, accessToken, and params from payload
        const { pageId, accessToken, params } = this.payload;
        // Creating an instance of FacebookPageMedia with the provided access token
        const mediaData = new facebookPage_Media_1.FacebookPageMedia(accessToken);
        // Calling fetchPagePhotos method from FacebookPageMedia instance to get the photos
        const photos = await mediaData.fetchPagePhotos(pageId, params);
        // Returning the fetched photos
        return photos;
    }
    // Method to fetch feeds from a Facebook Page
    async facebookFeeds() {
        // Destructuring pageId, accessToken, and params from payload
        const { pageId, accessToken, params } = this.payload;
        // Creating an instance of FacebookPageMedia with the provided access token
        const mediaData = new facebookPage_Media_1.FacebookPageMedia(accessToken);
        // Calling fetchPageFeeds method from FacebookPageMedia instance to get the feeds
        const feeds = await mediaData.fetchPageFeeds(pageId, params);
        // Returning the fetched feeds
        return feeds;
    }
    // Method to fetch videos from a Facebook Page
    async facebookVideos() {
        // Destructuring pageId, accessToken, and params from payload
        const { pageId, accessToken, params } = this.payload;
        // Creating an instance of FacebookPageMedia with the provided access token
        const mediaData = new facebookPage_Media_1.FacebookPageMedia(accessToken);
        // Calling fetchPageVideos method from FacebookPageMedia instance to get the videos
        const videos = await mediaData.fetchPageVideos(pageId, params);
        // Returning the fetched videos
        return videos;
    }
}
exports.Repository = Facebook;
