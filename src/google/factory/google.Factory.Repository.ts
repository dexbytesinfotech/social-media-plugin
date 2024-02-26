// Importing the Youtube class from the youtube.ChannelDetails module
import { GoogleAuthUrlGenerator } from "../common/google.AuthUrlGenereator";
import { GoogleTokenGenerator } from "../common/google.TokenGenerator";
import { Youtube } from "../youtube/youtube.ChannelDetails";
// Importing the IYoutubeRepository interface from the google.Factory.Interfaces module
import { IYoutubeRepository } from "./google.Factory.Interfaces";

/**
 * Class representing the Google platform's repositories.
 * This class acts as a factory for creating instances of various repositories related to Google services,
 * specifically focusing on YouTube services in this case.
 */
export class Google {
    /**
     * Creates a new instance of the Youtube repository.
     * This method is a factory method that initializes a new Youtube object with the provided access token.
     * The Youtube object implements the IYoutubeRepository interface, which outlines the methods for fetching various types of YouTube data.
     * @param {string} accessToken - The access token required for authentication with the YouTube API.
     * @returns {IYoutubeRepository} - An instance of the Youtube repository.
     */
    static Youtube(accessToken: string): IYoutubeRepository {
        return new Youtube(accessToken);
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
    static AccessToken(clientId: string, clientSecret: string, redirectUri: string): GoogleTokenGenerator {
        return new GoogleTokenGenerator(clientId, clientSecret, redirectUri);
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
    static AuthUrlGenerator(clientId: string, redirectUri: string, scope: string): GoogleAuthUrlGenerator {
        return new GoogleAuthUrlGenerator(clientId, redirectUri, scope);
    }

}
