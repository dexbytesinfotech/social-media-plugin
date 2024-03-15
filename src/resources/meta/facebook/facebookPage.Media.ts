// Import necessary modules and interfaces
import { fetchDataWithValidation } from '../common/dataValidator';
import { MetaResponse, MediaParams, EventsParams, PhotoParams, VideoParams } from '../common/interfaces';
import { MetaParams } from '../common/parameters.meta';
import { IFacebookPageMediaRepository } from '../factory/meta.Factory.Interfaces';
import { buildFields } from '../helpers/facebook.FieldGenerator';

/**
 * Class for fetching Facebook page posts with various parameters.
 */
export class FacebookPageMedia implements IFacebookPageMediaRepository {
  private accessToken: string;

  /**
   * Constructor to initialize the FacebookPagePosts class with an access token.
   * @param accessToken - Access token required for fetching Facebook page posts.
   */
  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  /**
   * Fetch data from the Facebook Graph API with validation.
   * @param pageId - The ID of the Facebook page.
   * @param urlParam - The URL parameter for the specific type of media (posts, events, photos, etc.).
   * @param params - Additional parameters for the request.
   * @returns A promise containing the fetched data.
   */
  private async fetchData<T>(pageId: string, urlParam: string, params: object = {}): Promise<T> {
    // Build fields based on URL parameter and additional parameters
    const fields = buildFields(urlParam, params);

    // Fetch data with validation using the access token, page ID, and constructed fields
    return await fetchDataWithValidation<T>(this.accessToken, pageId, fields);
  }

  /**
   * Fetch Facebook page posts using the specified parameters.
   * @param pageId - The ID of the Facebook page.
   * @param params - Additional parameters for the request.
   * @returns A promise containing the fetched data.
   */
  fetchPagePosts = async (pageId: string, params?: MediaParams): Promise<MetaResponse> => {
    return this.fetchData<MetaResponse>(pageId, MetaParams.media.posts, params);
  };

  /**
   * Fetch Facebook page events using the specified parameters.
   * @param pageId - The ID of the Facebook page.
   * @param params - Additional parameters for the request.
   * @returns A promise containing the fetched data.
   */
  fetchPageEvents = async (pageId: string, params?: EventsParams): Promise<MetaResponse> => {
    return this.fetchData<MetaResponse>(pageId, MetaParams.events.events, params);
  };

  /**
   * Fetch Facebook page photos using the specified parameters.
   * @param pageId - The ID of the Facebook page.
   * @param params - Additional parameters for the request.
   * @returns A promise containing the fetched data.
   */
  fetchPagePhotos = async (pageId: string, params?: PhotoParams): Promise<MetaResponse> => {
    return this.fetchData<MetaResponse>(pageId, MetaParams.media.photos, params);
  };

  /**
   * Fetch Facebook page feeds using the specified parameters.
   * @param pageId - The ID of the Facebook page.
   * @param params - Additional parameters for the request.
   * @returns A promise containing the fetched data.
   */
  fetchPageFeeds = async (pageId: string, params?: MediaParams): Promise<MetaResponse> => {
    return this.fetchData<MetaResponse>(pageId, MetaParams.media.feed, params);
  };

  /**
   * Fetch Facebook page videos using the specified parameters.
   * @param pageId - The ID of the Facebook page.
   * @param params - Additional parameters for the request.
   * @returns A promise containing the fetched data.
   */
  fetchPageVideos = async (pageId: string, params?: VideoParams): Promise<MetaResponse> => {
    return this.fetchData<MetaResponse>(pageId, MetaParams.media.videos, params);
  };
}
