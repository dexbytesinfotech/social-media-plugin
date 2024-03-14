import { InstagramAccountDetails } from "../../resources/meta/instagram/instagram.Details";
import { InstagramAccountMedia } from "../../resources/meta/instagram/instagram.Media";

/**
 * Instagram class provides methods for interacting with Instagram account data.
 */
class Instagram {
    private payload: any;

    /**
     * Constructor for Instagram class.
     * @param payload Object containing necessary information for Instagram operations.
     */
    constructor(payload: any) {
        this.payload = payload;
    }

    /**
     * Method to fetch details of an Instagram account.
     * @returns Promise resolving to account details.
     */
    async instagramDetails() {
        // Extracting userId, params, and accessToken from payload
        const { userId, params, accessToken } = this.payload;
        // Creating an instance of InstagramAccountDetails with access token
        const details = new InstagramAccountDetails(accessToken);
        // Fetching account details using userId and additional parameters
        const detailsResponse = await details.fetchAccountDetails(userId, params);
        return detailsResponse;
    }

    /**
     * Method to fetch media from an Instagram account.
     * @returns Promise resolving to account media.
     */
    async instagramMedia() {
        // Extracting userId, params, and accessToken from payload
        const { userId, params, accessToken } = this.payload;
        // Creating an instance of InstagramAccountMedia with access token
        const media = new InstagramAccountMedia(accessToken);
        // Fetching account media using userId and additional parameters
        const mediaResponse = media.fetchAccountMedia(userId, params);
        return mediaResponse;
    }

    /**
     * Method to fetch stories from an Instagram account.
     * @returns Promise resolving to account stories.
     */
    async instagramStories() {
        // Extracting userId, params, and accessToken from payload
        const { userId, params, accessToken } = this.payload;
        // Creating an instance of InstagramAccountMedia with access token
        const media = new InstagramAccountMedia(accessToken);
        // Fetching account stories using userId and additional parameters
        const stories = media.fetchAccountStories(userId, params);
        return stories;
    }

    /**
     * Method to fetch live media from an Instagram account.
     * @returns Promise resolving to account live media.
     */
    async instagramLiveMedia() {
        // Extracting userId, params, and accessToken from payload
        const { userId, params, accessToken } = this.payload;
        // Creating an instance of InstagramAccountMedia with access token
        const media = new InstagramAccountMedia(accessToken);
        // Fetching account live media using userId and additional parameters
        const liveMedia = media.fetchAccountLiveMedia(userId, params);
        return liveMedia;
    }
}

// Exporting Instagram class as Repository
export { Instagram as Repository };
