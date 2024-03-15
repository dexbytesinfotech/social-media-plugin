import { MetaResponse, MediaParams, EventsParams, PhotoParams, VideoParams } from '../common/interfaces';
import { IFacebookPageMediaRepository } from '../factory/meta.Factory.Interfaces';
/**
 * Class for fetching Facebook page posts with various parameters.
 */
export declare class FacebookPageMedia implements IFacebookPageMediaRepository {
    private accessToken;
    /**
     * Constructor to initialize the FacebookPagePosts class with an access token.
     * @param accessToken - Access token required for fetching Facebook page posts.
     */
    constructor(accessToken: string);
    /**
     * Fetch data from the Facebook Graph API with validation.
     * @param pageId - The ID of the Facebook page.
     * @param urlParam - The URL parameter for the specific type of media (posts, events, photos, etc.).
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    private fetchData;
    /**
     * Fetch Facebook page posts using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPagePosts: (pageId: string, params?: MediaParams) => Promise<MetaResponse>;
    /**
     * Fetch Facebook page events using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPageEvents: (pageId: string, params?: EventsParams) => Promise<MetaResponse>;
    /**
     * Fetch Facebook page photos using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPagePhotos: (pageId: string, params?: PhotoParams) => Promise<MetaResponse>;
    /**
     * Fetch Facebook page feeds using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPageFeeds: (pageId: string, params?: MediaParams) => Promise<MetaResponse>;
    /**
     * Fetch Facebook page videos using the specified parameters.
     * @param pageId - The ID of the Facebook page.
     * @param params - Additional parameters for the request.
     * @returns A promise containing the fetched data.
     */
    fetchPageVideos: (pageId: string, params?: VideoParams) => Promise<MetaResponse>;
}
