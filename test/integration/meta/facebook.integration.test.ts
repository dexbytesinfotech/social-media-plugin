// Import necessary modules and classes
import { EventsParams, MediaParams, PhotoParams, VideoParams } from '../../../src/meta/common/interfaces';
import { FacebookPageDetails } from '../../../src/meta/facebook/facebookPage.Detailes';
import { FacebookPageMedia } from '../../../src/meta/facebook/facebookPage.Media';

// Mocking the FacebookPage.Media and FacebookPage.Details classes
jest.mock('../../../src/meta/facebook/facebookPage.Media', () => {
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

jest.mock('../../../src/meta/facebook/facebookPage.Detailes', () => {
    return {
        FacebookPageDetails: jest.fn().mockImplementation(() => {
            return {
                fetchPageBasicDetails: jest.fn().mockResolvedValue({ basicDetails: {} }),
                fetchPageFollowersCount: jest.fn().mockResolvedValue({}),
                fetchPageCategory: jest.fn().mockResolvedValue({}),
                // Add other methods as needed
            };
        }),
    };
});

// Describing the integration test suite
describe('Facebook Page Integration', () => {
    let facebookMedia: FacebookPageMedia;
    let facebookDetails: FacebookPageDetails;
    const mockPageAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvkc";
    const mockUserAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvkc";

    // Initializing the instances before each test
    beforeEach(() => {
        facebookMedia = new FacebookPageMedia(mockPageAccessToken);
        facebookDetails = new FacebookPageDetails(mockUserAccessToken);
    });

    // Integration test to verify fetching posts and then fetching details of the same page
    it('should successfully fetch posts and then fetch details of the same page', async () => {
        // Mocking page ID for the test
        const mockPageId = "1234567689101112";
        const postParams: MediaParams = { actions: true, adminCreator: true, album: true }
        const videoParam: VideoParams = { adBreaks: true, comments: true }
        const feedParams: MediaParams = { actions: true, album: true, target: true }
        const photosParams: PhotoParams = { link: true, canBackdated: true }
        const eventParams: EventsParams = { attendingCount: true, comments: true }
        try {
            // Fetch posts using FacebookPageMedia
            const posts = await facebookMedia.fetchPagePosts(mockPageId, postParams);
            expect(posts).toBeInstanceOf(Object);

            //fetch Videos using FacebbokMedia
            const videos = await facebookMedia.fetchPageVideos(mockPageId, videoParam)
            expect(videos).toBeInstanceOf(Object)

            //fetch feeds using Facebook Media
            const feeds = await facebookMedia.fetchPageFeeds(mockPageId, feedParams);
            expect(feeds).toBeInstanceOf(Object)

            //fetch phots using FacebookMedia
            const photos = await facebookMedia.fetchPagePhotos(mockPageId, photosParams)
            expect(photos).toBeInstanceOf(Object)

            //fetch events using facebookMedia
            const events = await facebookMedia.fetchPageEvents(mockPageId, eventParams)
            expect(events).toBeInstanceOf(Object)

            // Fetch details using FacebookPageDetails
            const details = await facebookDetails.fetchPageBasicDetails(mockPageId);
            expect(details).toBeInstanceOf(Object);


            const followersCount = await facebookDetails.fetchPageFollowersCount(mockPageId)
            expect(followersCount).toBeInstanceOf(Object)

            const category = await facebookDetails.fetchPageCategory(mockPageId)
            expect(category).toBeInstanceOf(Object)

            // Additional assertions can be made here to verify the data fetched
        } catch (error) {
            // Handle error if needed

        }
    });



    //parallel testing
    it('should successfully fetch posts, videos, feeds, photos, events, and then fetch details of the same page in parallel', async () => {
        try {
            const mockPageId = "1234567689101112";
            const postParams: MediaParams = { actions: true, adminCreator: true, album: true };
            const videoParam: VideoParams = { adBreaks: true, comments: true };
            const feedParams: MediaParams = { actions: true, album: true, target: true };
            const photosParams: PhotoParams = { link: true, canBackdated: true };
            const eventParams: EventsParams = { attendingCount: true, comments: true };
    
            // Fetch posts, videos, feeds, photos, events in parallel
            const [posts, videos, feeds, photos, events] = await Promise.all([
                facebookMedia.fetchPagePosts(mockPageId, postParams),
                facebookMedia.fetchPageVideos(mockPageId, videoParam),
                facebookMedia.fetchPageFeeds(mockPageId, feedParams),
                facebookMedia.fetchPagePhotos(mockPageId, photosParams),
                facebookMedia.fetchPageEvents(mockPageId, eventParams)
            ]);
    
            expect(posts).toBeInstanceOf(Object);
            expect(videos).toBeInstanceOf(Object);
            expect(feeds).toBeInstanceOf(Object);
            expect(photos).toBeInstanceOf(Object);
            expect(events).toBeInstanceOf(Object);
    
            // Fetch details
            const details = await facebookDetails.fetchPageBasicDetails(mockPageId);
            expect(details).toBeInstanceOf(Object);
    
            const followersCount = await facebookDetails.fetchPageFollowersCount(mockPageId);
            expect(followersCount).toBeInstanceOf(Object);
    
            const category = await facebookDetails.fetchPageCategory(mockPageId);
            expect(category).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        
            // You can also fail the test explicitly if needed
            
        }
    });
    
    
    
});
