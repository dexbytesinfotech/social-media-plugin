"use strict";
/**
 * An object containing various messages used throughout the application.
 * These messages are primarily used for error handling and user feedback.
 * Each property of the object represents a specific error or message type,
 * and some properties are functions that return formatted strings based on input parameters.
 */ // enums/general.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextMessages = exports.Actions = exports.Repositories = exports.Resources = void 0;
var Resources;
(function (Resources) {
    Resources["meta"] = "meta";
    Resources["google"] = "google";
})(Resources || (exports.Resources = Resources = {}));
var Repositories;
(function (Repositories) {
    Repositories["auth"] = "auth";
    Repositories["facebook"] = "facebook";
    Repositories["instagram"] = "instagram";
    Repositories["youtube"] = "youtube";
})(Repositories || (exports.Repositories = Repositories = {}));
var Actions;
(function (Actions) {
    Actions["generateAuthUrl"] = "generateAuthUrl";
    Actions["generateToken"] = "generateToken";
    Actions["facebookEvents"] = "facebookEvents";
    Actions["facebookPosts"] = "facebookPosts";
    Actions["facebookPhotos"] = "facebookPhotos";
    Actions["facebookFeeds"] = "facebookFeeds";
    Actions["facebookVideos"] = "facebookVideos";
    Actions["facebookPageId"] = "facebookPageId";
    Actions["instagramDetails"] = "instagramDetails";
    Actions["instagramMedia"] = "instagramMedia";
    Actions["instagramStories"] = "instagramStories";
    Actions["instagramLiveMedia"] = "instagramLiveMedia";
    Actions["channelDetails"] = "channelDetails";
    Actions["channelSubscriptions"] = "channelSubscriptions";
    Actions["channelPlaylists"] = "channelPlaylists";
    Actions["channelPlaylistItems"] = "channelPlaylistItems";
    Actions["channelSections"] = "channelSections";
    Actions["languages"] = "languages";
    Actions["regions"] = "regions";
    Actions["channelVideos"] = "channelVideos";
    Actions["channelVideoDetails"] = "channelVideoDetails";
    Actions["channelActivities"] = "channelActivities";
    Actions["refreshAccessToken"] = "refreshAccessToken";
    Actions["facebookPageDetails"] = "facebookPageDetails";
    Actions["facebookPageToken"] = "facebookPageToken";
})(Actions || (exports.Actions = Actions = {}));
var TextMessages;
(function (TextMessages) {
    TextMessages["MISSING_ACCESS_TOKEN"] = "Access token is missing. Please provide a valid access token.";
    TextMessages["INVALID_ACCESS_TOKEN"] = "Invalid or expired access token. Please check your authentication.";
    TextMessages["NOT_FOUND"] = "Data not Available";
    TextMessages["INVALID_API_RESPONSE_FORMAT"] = "Invalid API response format";
    TextMessages["MISSING_PARAMETERS"] = "Missing or invalid parameters";
    TextMessages["NO_INSTAGRAM_ACCOUNT_FOUND"] = "No connected Instagram account found.";
})(TextMessages || (exports.TextMessages = TextMessages = {}));
