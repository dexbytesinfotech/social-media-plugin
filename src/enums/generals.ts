/**
 * An object containing various messages used throughout the application.
 * These messages are primarily used for error handling and user feedback.
 * Each property of the object represents a specific error or message type,
 * and some properties are functions that return formatted strings based on input parameters.
 */// enums/general.ts

export enum Resources {
   meta = "meta",
   google = "google"
}

export enum Repositories {
   auth = "auth",
   facebook="facebook",
   instagram="instagram",
   youtube="youtube"

}

export enum Actions {
   generateAuthUrl = "generateAuthUrl",
   generateToken = "generateToken",
   facebookEvents="facebookEvents",
   facebookPosts="facebookPosts",
   facebookPhotos="facebookPhotos",
   facebookFeeds="facebookFeeds",
   facebookVideos="facebookVideos",
   facebookPageId="facebookPageId",
   instagramDetails="instagramDetails",
   instagramMedia="instagramMedia",
   instagramStories="instagramStories",
   instagramLiveMedia="instagramLiveMedia",
   channelDetails="channelDetails",
   channelSubscriptions="channelSubscriptions",
   channelPlaylists="channelPlaylists",
   channelPlaylistItems="channelPlaylistItems",
   channelSections="channelSections",
   languages=" languages",
   regions="regions",
   channelVideos="channelVideos",
   channelVideoDetails="channelVideoDetails",
   channelActivities="channelActivities",
   refreshAccessToken="refreshAccessToken"

}

export enum TextMessages {
   MISSING_ACCESS_TOKEN = "Access token is missing. Please provide a valid access token.",
   INVALID_ACCESS_TOKEN = "Invalid or expired access token. Please check your authentication.",
   NOT_FOUND = "Data not Available",
   INVALID_API_RESPONSE_FORMAT = "Invalid API response format",
   MISSING_PARAMETERS = "Missing or invalid parameters",
   NO_INSTAGRAM_ACCOUNT_FOUND = "No connected Instagram account found."
}
