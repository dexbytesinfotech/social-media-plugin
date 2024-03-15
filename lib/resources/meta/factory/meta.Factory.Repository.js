"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meta = void 0;
const accessTokengenerator_1 = require("../common/accessTokengenerator");
const facebookPage_Detailes_1 = require("../facebook/facebookPage.Detailes");
const facebookPage_Media_1 = require("../facebook/facebookPage.Media");
const instagram_Details_1 = require("../instagram/instagram.Details");
const instagram_Media_1 = require("../instagram/instagram.Media");
/**
 * Class representing the Meta platform's repositories.
 * This class acts as a factory for creating instances of various repositories related to Facebook and Instagram.
 */
class Meta {
    /**
     * Creates a new instance of the FacebookPageMedia repository.
     * @param {string} accessToken - The access token required for authentication.
     * @returns {IFacebookPageMediaRepository} - An instance of the FacebookPageMedia repository.
     */
    static FacebookPageMedia(accessToken) {
        return new facebookPage_Media_1.FacebookPageMedia(accessToken);
    }
    /**
     * Creates a new instance of the FacebookPageDetails repository.
     * @param {string} accessToken - The access token required for authentication.
     * @returns {IFacebookPageDetailsRepository} - An instance of the FacebookPageDetails repository.
     */
    static FacebookPageDetails(accessToken) {
        return new facebookPage_Detailes_1.FacebookPageDetails(accessToken);
    }
    /**
     * Creates a new instance of the InstagramAccountDetails repository.
     * @param {string} accessToken - The access token required for authentication.
     * @returns {IInstagramAccountDetailsRepository} - An instance of the InstagramAccountDetails repository.
     */
    static InstagramAccountDetails(accessToken) {
        return new instagram_Details_1.InstagramAccountDetails(accessToken);
    }
    /**
     * Creates a new instance of the InstagramAccountMedia repository.
     * @param {string} accessToken - The access token required for authentication.
     * @returns {IInstagramAccountMediaRepository} - An instance of the InstagramAccountMedia repository.
     */
    static InstagramAccountMedia(accessToken) {
        return new instagram_Media_1.InstagramAccountMedia(accessToken);
    }
    /**
     * Creates a new instance of the GenerateMetaAuthUrl class.
     * This class is used to generate the OAuth URL for authentication.
     * @param {OAuthParams} params - The parameters required for generating the OAuth URL.
     * @returns {GenerateMetaAuthUrl} - An instance of the GenerateMetaAuthUrl class.
     */
    static GenerateMetaAuthUrl(clientId, redirectUri, permissions) {
        return new accessTokengenerator_1.GenerateMetaAuthUrl(clientId, redirectUri, permissions);
    }
    /**
     * Creates a new instance of the MetaLongLivedAccessToken class.
     * This class is used to create a long-lived access token for the Meta platform.
     * @param {string} clientId - The client ID for the Meta application.
     * @param {string} clientSecret - The client secret for the Meta application.
     * @param {string} exchangeToken - The exchange token used to obtain a long-lived access token.
     * @returns {MetaLongLivedAccessToken} - An instance of the MetaLongLivedAccessToken class.
     */
    static createMetaLongLivedAccessToken(clientId, clientSecret, exchangeToken) {
        return new accessTokengenerator_1.MetaLongLivedAccessToken(clientId, clientSecret, exchangeToken);
    }
}
exports.Meta = Meta;
