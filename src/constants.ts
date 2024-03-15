// constants.ts
export const Constants = {
  // META ENDPOINTS AND CONSTANTS
  META_API_BASE_URL: 'https://graph.facebook.com', // Base URL for Facebook Graph API
  META_GRAPH_API_VERSION: 'v18.0', // Current version of the Facebook Graph API
  FACEBOOK_OAUTH_URL: 'https://www.facebook.com/v18.0/dialog/oauth', // URL for Facebook OAuth dialog
  FACEBOOK_OAUTH_LONGLIVEDTOKEN_URL: 'https://graph.facebook.com/v3.2/oauth/access_token', // URL for obtaining a long-lived access token
  FACEBOOK_AUTH_TYPE_FOR_LONGLIVE_TOKEN: 'fb_exchange_token', // Authentication type for exchanging a short-lived token for a long-lived token
  FACEBOOK_AUTH_TYPE_POPUP: 'popup', // Authentication type for popup window
  FACEBOOK_AUTH_RESPONSE_TYPE: 'token', // Response type for OAuth flow

  // GOOGLE ENDPOINTS AND CONSTANTS
  GOOGLE: {
    GOOGLE_AUTH_URL: 'https://accounts.google.com/o/oauth2/auth', // URL for Google OAuth  2.0 authorization
    CODE: 'code', // Authorization code response type
    ACCESS_TYPE: 'offline', // Access type for obtaining a refresh token
    SCOPE: 'https://www.googleapis.com/auth/youtube', // Scope for YouTube API access
    GOOGLE_TOKEN_GENERATOR_URL: 'https://accounts.google.com/o/oauth2/token', // URL for generating an access token
    GOOGLE_AUTH_CODE: 'authorization_code', // Authorization code grant type
    GOOGLE_ACCESS_TYPE: 'authorization_code', // Access type for authorization code grant
    GOOGLE_REFRESH_TOKEN: 'refresh_token', // Refresh token grant type
    GOOGLE_YOUTUBE_ENDPOINT: 'https://www.googleapis.com/youtube/v3', // Base URL for YouTube Data API v3
  },
};
