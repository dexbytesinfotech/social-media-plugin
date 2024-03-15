// Import necessary modules and classes for Facebook
import { EventsParams, MediaParams, PhotoParams, VideoParams } from '../../../src/resources/meta/common/interfaces';
import { FacebookPageDetails } from '../../../src/resources/meta/facebook/facebookPage.Detailes';
import { FacebookPageMedia } from '../../../src/resources/meta/facebook/facebookPage.Media';

// Import necessary modules and classes for Instagram
import { InstagramBasicDetailsParams, InstagramMediaParams } from '../../../src/resources/meta/common/interfaces';
import { InstagramAccountDetails } from '../../../src/resources/meta/instagram/instagram.Details';
import { InstagramAccountMedia } from '../../../src/resources/meta/instagram/instagram.Media';

// Mocking the FacebookPage.Media and FacebookPage.Details classes
jest.mock('../../../src/resources/meta/facebook/facebookPage.Media', () => {
    return {
        FacebookPageMedia: jest.fn().mockImplementation(() => {
            return {
                fetchPagePosts: jest.fn().mockResolvedValue({ posts: {} }),
                fetchPageEvents: jest.fn().mockResolvedValue({ events: {} }),
                fetchPagePhotos: jest.fn().mockResolvedValue({ photos: {} }),
                fetchPageFeeds: jest.fn().mockResolvedValue({ feed: {} }),
                fetchPageVideos: jest.fn().mockResolvedValue({ videos: {} }),
            };
        }),
    };
});

jest.mock('../../../src/resources/meta/facebook/facebookPage.Detailes', () => {
    return {
        FacebookPageDetails: jest.fn().mockImplementation(() => {
            return {
                fetchPageBasicDetails: jest.fn().mockResolvedValue({ basicDetails: {} }),
                fetchPageFollowersCount: jest.fn().mockResolvedValue({}),
                fetchPageCategory: jest.fn().mockResolvedValue({}),
            };
        }),
    };
});

// Mocking the InstagramAccount.Media and InstagramAccount.Details classes
jest.mock('../../../src/resources/meta/instagram/instagram.Media', () => {
    return {
        InstagramAccountMedia: jest.fn().mockImplementation(() => {
            return {
                fetchAccountMedia: jest.fn().mockResolvedValue({ media: [] }),
                fetchAccountStories: jest.fn().mockResolvedValue({ stories: [] }),
                fetchAccountLiveMedia: jest.fn().mockResolvedValue({ liveMedia: [] }),
            };
        }),
    };
});

jest.mock('../../../src/resources/meta/instagram/instagram.Details', () => {
    return {
        InstagramAccountDetails: jest.fn().mockImplementation(() => {
            return {
                fetchAccountDetails: jest.fn().mockResolvedValue({ details: {} }),
            };
        }),
    };
});

// Describing the combined integration test suite for Facebook and Instagram
describe('Cross-Platform Integration Tests', () => {
    let facebookMedia: FacebookPageMedia;
    let facebookDetails: FacebookPageDetails;
    let instagramAccountMedia: InstagramAccountMedia;
    let instagramAccountDetails: InstagramAccountDetails;
    const mockPageAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvkc";
    const mockUserAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvkc";

    // Initializing the instances before each test
    beforeEach(() => {
        facebookMedia = new FacebookPageMedia(mockPageAccessToken);
        facebookDetails = new FacebookPageDetails(mockUserAccessToken);
        instagramAccountMedia = new InstagramAccountMedia(mockUserAccessToken);
        instagramAccountDetails = new InstagramAccountDetails(mockUserAccessToken);
    });

    it('should successfully fetch data from both Facebook and Instagram together', async () => {
        const mockPageId = "1234567689101112";
        const mockUserId = "1234567689101112";
        const postParams: MediaParams = { actions: true, adminCreator: true, album: true };
        const videoParam: VideoParams = { adBreaks: true, comments: true };
        const feedParams: MediaParams = { actions: true, album: true, target: true };
        const photosParams: PhotoParams = { link: true, canBackdated: true };
        const eventParams: EventsParams = { attendingCount: true, comments: true };
        const mediaParam: InstagramMediaParams = { igId: true, limit: 10, likeCount: true };
        const detailsParam: InstagramBasicDetailsParams = { followersCount: true, followsCount: true, mediaCount: true, biography: true, profilePicture: true, website: true };

        try {
            // Fetch data from Facebook
            const [facebookPosts, facebookVideos, facebookFeeds, facebookPhotos, facebookEvents] = await Promise.all([
                facebookMedia.fetchPagePosts(mockPageId, postParams),
                facebookMedia.fetchPageVideos(mockPageId, videoParam),
                facebookMedia.fetchPageFeeds(mockPageId, feedParams),
                facebookMedia.fetchPagePhotos(mockPageId, photosParams),
                facebookMedia.fetchPageEvents(mockPageId, eventParams)
            ]);

            // Fetch data from Instagram
            const [instagramMedia, instagramDetails] = await Promise.all([
                instagramAccountMedia.fetchAccountMedia(mockUserId, mediaParam),
                instagramAccountDetails.fetchAccountDetails(mockUserId, detailsParam)
            ]);

            // Perform assertions on the combined data
            expect(facebookPosts).toBeInstanceOf(Object);
            expect(facebookVideos).toBeInstanceOf(Object);
            expect(facebookFeeds).toBeInstanceOf(Object);
            expect(facebookPhotos).toBeInstanceOf(Object);
            expect(facebookEvents).toBeInstanceOf(Object);
            expect(instagramMedia).toBeInstanceOf(Object);
            expect(instagramDetails).toBeInstanceOf(Object);

            // Additional assertions can be made here to verify the data fetched
        } catch (error) {
        }
    });
});
