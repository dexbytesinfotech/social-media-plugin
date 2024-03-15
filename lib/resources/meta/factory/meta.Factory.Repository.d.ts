import { GenerateMetaAuthUrl, MetaLongLivedAccessToken } from '../common/accessTokengenerator';
import { IFacebookPageDetailsRepository, IFacebookPageMediaRepository, IInstagramAccountDetailsRepository, IInstagramAccountMediaRepository } from './meta.Factory.Interfaces';
/**
 * Class representing the Meta platform's repositories.
 * This class acts as a factory for creating instances of various repositories related to Facebook and Instagram.
 */
export declare class Meta {
    /**
     * Creates a new instance of the FacebookPageMedia repository.
     * @param {string} accessToken - The access token required for authentication.
     * @returns {IFacebookPageMediaRepository} - An instance of the FacebookPageMedia repository.
     */
    static FacebookPageMedia(accessToken: string): IFacebookPageMediaRepository;
    /**
     * Creates a new instance of the FacebookPageDetails repository.
     * @param {string} accessToken - The access token required for authentication.
     * @returns {IFacebookPageDetailsRepository} - An instance of the FacebookPageDetails repository.
     */
    static FacebookPageDetails(accessToken: string): IFacebookPageDetailsRepository;
    /**
     * Creates a new instance of the InstagramAccountDetails repository.
     * @param {string} accessToken - The access token required for authentication.
     * @returns {IInstagramAccountDetailsRepository} - An instance of the InstagramAccountDetails repository.
     */
    static InstagramAccountDetails(accessToken: string): IInstagramAccountDetailsRepository;
    /**
     * Creates a new instance of the InstagramAccountMedia repository.
     * @param {string} accessToken - The access token required for authentication.
     * @returns {IInstagramAccountMediaRepository} - An instance of the InstagramAccountMedia repository.
     */
    static InstagramAccountMedia(accessToken: string): IInstagramAccountMediaRepository;
    /**
     * Creates a new instance of the GenerateMetaAuthUrl class.
     * This class is used to generate the OAuth URL for authentication.
     * @param {OAuthParams} params - The parameters required for generating the OAuth URL.
     * @returns {GenerateMetaAuthUrl} - An instance of the GenerateMetaAuthUrl class.
     */
    static GenerateMetaAuthUrl(clientId: string, redirectUri: string, permissions: string[]): GenerateMetaAuthUrl;
    /**
     * Creates a new instance of the MetaLongLivedAccessToken class.
     * This class is used to create a long-lived access token for the Meta platform.
     * @param {string} clientId - The client ID for the Meta application.
     * @param {string} clientSecret - The client secret for the Meta application.
     * @param {string} exchangeToken - The exchange token used to obtain a long-lived access token.
     * @returns {MetaLongLivedAccessToken} - An instance of the MetaLongLivedAccessToken class.
     */
    static createMetaLongLivedAccessToken(clientId: string, clientSecret: string, exchangeToken: string): MetaLongLivedAccessToken;
}