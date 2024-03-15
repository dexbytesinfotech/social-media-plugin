"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Google = void 0;
// Importing the Youtube class from the youtube.ChannelDetails module
const google_AuthUrlGenereator_1 = require("../common/google.AuthUrlGenereator");
const google_TokenGenerator_1 = require("../common/google.TokenGenerator");
const youtube_ChannelDetails_1 = require("../youtube/youtube.ChannelDetails");
/**
 * Class representing the Google platform's repositories.
 * This class acts as a factory for creating instances of various repositories related to Google services,
 * specifically focusing on YouTube services in this case.
 */
class Google {
    /**
     * Creates a new instance of the Youtube repository.
     * This method is a factory method that initializes a new Youtube object with the provided access token.
     * The Youtube object implements the IYoutubeRepository interface, which outlines the methods for fetching various types of YouTube data.
     * @param {string} accessToken - The access token required for authentication with the YouTube API.
     * @returns {IYoutubeRepository} - An instance of the Youtube repository.
     */
    static Youtube(accessToken) {
        return new youtube_ChannelDetails_1.Youtube(accessToken);
    }
    /**
     * Factory method to create a new instance of GoogleTokenGenerator.
     * This method encapsulates the creation logic, making it easier to instantiate the class.
     *
     * @param {string} clientId - The client ID obtained from the Google Developer Console.
     * @param {string} clientSecret - The client secret obtained from the Google Developer Console.
     * @param {string} redirectUri - The redirect URI registered in the Google Developer Console.
     * @returns {GoogleTokenGenerator} - A new instance of GoogleTokenGenerator.
     */
    static AccessToken(clientId, clientSecret, redirectUri) {
        return new google_TokenGenerator_1.GoogleTokenGenerator(clientId, clientSecret, redirectUri);
    }
    /**
     * Factory method to create a new instance of GoogleAuthUrlGenerator.
     * This method encapsulates the creation logic, making it easier to instantiate the class.
     *
     * @param {string} clientId - The client ID obtained from the Google Developer Console.
     * @param {string} redirectUri - The redirect URI where the user will be sent after authorization.
     * @param {string} scope - The scope of access requested by the application.
     * @returns {GoogleAuthUrlGenerator} - A new instance of GoogleAuthUrlGenerator.
     */
    static AuthUrlGenerator(clientId, redirectUri, scope) {
        return new google_AuthUrlGenereator_1.GoogleAuthUrlGenerator(clientId, redirectUri, scope);
    }
}
exports.Google = Google;
