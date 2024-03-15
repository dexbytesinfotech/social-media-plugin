import { MediaParams, MetaResponse, EventsParams, InstagramBasicDetailsParams, InstagramMediaParams, PhotoParams, VideoParams } from "../common/interfaces";

/**
 * Interface defining the contract for a Facebook Page Media repository.
 * This interface outlines the methods that any Facebook Page Media repository implementation must provide.
 * These methods are used to fetch various types of media from a Facebook page, such as posts, events, photos, feeds, and videos.
 */
export interface IFacebookPageMediaRepository {
    /**
     * Fetches posts from a Facebook page based on the specified parameters.
     * @param {string} pageId - The ID of the Facebook page.
     * @param {MediaParams} [params] - Optional parameters for fetching posts.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched posts data.
     */
    fetchPagePosts(pageId: string, params?: MediaParams): Promise<MetaResponse>;

    /**
     * Fetches events from a Facebook page based on the specified parameters.
     * @param {string} pageId - The ID of the Facebook page.
     * @param {EventsParams} [params] - Optional parameters for fetching events.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched events data.
     */
    fetchPageEvents(pageId: string, params?: EventsParams): Promise<MetaResponse>;

    /**
     * Fetches photos from a Facebook page based on the specified parameters.
     * @param {string} pageId - The ID of the Facebook page.
     * @param {PhotoParams} [params] - Optional parameters for fetching photos.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched photos data.
     */
    fetchPagePhotos(pageId: string, params?: PhotoParams): Promise<MetaResponse>;

    /**
     * Fetches feeds from a Facebook page based on the specified parameters.
     * @param {string} pageId - The ID of the Facebook page.
     * @param {MediaParams} [params] - Optional parameters for fetching feeds.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched feeds data.
     */
    fetchPageFeeds(pageId: string, params?: MediaParams): Promise<MetaResponse>;

    /**
     * Fetches videos from a Facebook page based on the specified parameters.
     * @param {string} pageId - The ID of the Facebook page.
     * @param {VideoParams} [params] - Optional parameters for fetching videos.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched videos data.
     */
    fetchPageVideos(pageId: string, params?: VideoParams): Promise<MetaResponse>;
}

/**
 * Interface defining the contract for a Facebook Page Details repository.
 * This interface outlines the methods that any Facebook Page Details repository implementation must provide.
 * These methods are used to fetch basic details and follower count of a Facebook page.
 */
export interface IFacebookPageDetailsRepository {
    /**
     * Fetches basic details of a Facebook page.
     * @param {string} pageId - The ID of the Facebook page.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched basic details data.
     */
    fetchPageBasicDetails(pageId: string): Promise<MetaResponse>;

    /**
     * Fetches the follower count of a Facebook page.
     * @param {string} pageId - The ID of the Facebook page.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched follower count data.
     */
    fetchPageFollowersCount(pageId: string): Promise<MetaResponse>;
}

/**
 * Interface defining the contract for an Instagram Account Details repository.
 * This interface outlines the methods that any Instagram Account Details repository implementation must provide.
 * These methods are used to fetch basic details of an Instagram account.
 */
export interface IInstagramAccountDetailsRepository {
    /**
     * Fetches basic details of an Instagram account.
     * @param {string} userId - The ID of the Instagram user.
     * @param {InstagramBasicDetailsParams} [params] - Optional parameters for fetching account details.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched account details data.
     */
    fetchAccountDetails(userId: string, params?: InstagramBasicDetailsParams): Promise<MetaResponse>;
}

/**
 * Interface defining the contract for an Instagram Account Media repository.
 * This interface outlines the methods that any Instagram Account Media repository implementation must provide.
 * These methods are used to fetch media, stories, and live media from an Instagram account.
 */
export interface IInstagramAccountMediaRepository {
    /**
     * Fetches media from an Instagram account.
     * @param {string} userId - The ID of the Instagram user.
     * @param {InstagramMediaParams} [params] - Optional parameters for fetching media.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched media data.
     */
    fetchAccountMedia(userId: string, params?: InstagramMediaParams): Promise<MetaResponse>;

    /**
     * Fetches stories from an Instagram account.
     * @param {string} userId - The ID of the Instagram user.
     * @param {InstagramMediaParams} [params] - Optional parameters for fetching stories.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched stories data.
     */
    fetchAccountStories(userId: string, params?: InstagramMediaParams): Promise<MetaResponse>;

    /**
     * Fetches live media from an Instagram account.
     * @param {string} userId - The ID of the Instagram user.
     * @param {InstagramMediaParams} [params] - Optional parameters for fetching live media.
     * @returns {Promise<MetaResponse>} - A promise that resolves with the fetched live media data.
     */
    fetchAccountLiveMedia(userId: string, params?: InstagramMediaParams): Promise<MetaResponse>;
}