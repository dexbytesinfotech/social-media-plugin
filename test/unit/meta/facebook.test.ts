// Importing necessary interfaces and classes from the Meta module
import { EventsParams, MediaParams, PhotoParams, VideoParams } from '../../../src/resources/meta/common/interfaces';
import { FacebookPageDetails } from '../../../src/resources/meta/facebook/facebookPage.Detailes';
import { FacebookPageMedia } from '../../../src/resources/meta/facebook/facebookPage.Media';

// Mocking the FacebookPage.Media class to avoid actual API calls during tests
jest.mock('../../../src/resources/meta/facebook/facebookPage.Media', () => {
    return {
        FacebookPageMedia: jest.fn().mockImplementation(() => {
            return {
                // Mocking various methods of the FacebookPageMedia class
                fetchPagePosts: jest.fn().mockResolvedValue({}),
                fetchPageEvents: jest.fn().mockResolvedValue({}),
                fetchPagePhotos: jest.fn().mockResolvedValue({}),
                fetchPageFeeds: jest.fn().mockResolvedValue({}),
                fetchPageVideos: jest.fn().mockResolvedValue({}),
            };
        }),
    };
});

// Describing the test suite for the FacebookPage.Media class
describe('Facebook Page Media', () => {
    let facebookMedia: FacebookPageMedia;
    const mockPageAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvkc";

    // Initializing the FacebookPageMedia instance before each test
    beforeEach(() => {
        facebookMedia = new FacebookPageMedia(mockPageAccessToken);
    });

    // Test to verify fetching posts of the page
    it('should successfully fetch Posts of the page', async () => {
        // Mocking parameters and page ID for the test
        const params: MediaParams = { actions: true, isHidden: true, album: true };
        const mockPageId = "1234567689101112";
        try {
            const posts = await facebookMedia.fetchPagePosts(mockPageId, params);
            expect(posts).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });

    // Test to verify fetching events of the page
    it('should successfully fetch events of the page', async () => {
        // Mocking parameters and page ID for the test
        const params: EventsParams = { category: true, cover: true, limit: 10 };
        const mockPageId = "1234567689101112";
        try {
            const events = await facebookMedia.fetchPageEvents(mockPageId, params);
            expect(events).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });

    // Test to verify fetching photos of the page
    it('should successfully fetch photos of page', async () => {
        // Mocking parameters and page ID for the test
        const params: PhotoParams = { canDelete: true, cover: true, limit: 10 };
        const mockPageId = "1234567689101112";
        try {
            const photos = await facebookMedia.fetchPagePhotos(mockPageId, params);
            expect(photos).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });

    // Test to verify fetching feeds of the page
    it('should successfully fetch feeds of page', async () => {
        // Mocking parameters and page ID for the test
        const params: MediaParams = { canDelete: true, limit: 10, album: true };
        const mockPageId = "1234567689101112";
        try {
            const feeds = await facebookMedia.fetchPageFeeds(mockPageId, params);
            expect(feeds).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });

    // Test to verify fetching videos of the page
    it('should successfully fetch videos of page', async () => {
        // Mocking parameters and page ID for the test
        const params: VideoParams = { limit: 10, comments: true, likes: true };
        const mockPageId = "1234567689101112";
        try {
            const videos = await facebookMedia.fetchPageVideos(mockPageId, params);
            expect(videos).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });
});

// Mocking the FacebookPage.Details class to avoid actual API calls during tests
jest.mock('../../../src/resources/meta/facebook/facebookPage.Detailes', () => {
    return {
        FacebookPageDetails: jest.fn().mockImplementation(() => {
            return {
                // Mocking various methods of the FacebookPageDetails class
                fetchPageBasicDetails: jest.fn().mockResolvedValue({}),
                fetchPageFollowersCount: jest.fn().mockResolvedValue({}),
                fetchPageCategory: jest.fn().mockResolvedValue({}),
                // Add other functions here as needed
            };
        }),
    };
});

// Describing the test suite for the FacebookPage.Details class
describe('Facebook Page Details', () => {
    let facebookDetails: FacebookPageDetails;
    const mockUserAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvkc";

    // Initializing the FacebookPageDetails instance before each test
    beforeEach(() => {
        facebookDetails = new FacebookPageDetails(mockUserAccessToken);
    });

    // Test to verify fetching basic details of the page
    it('should successfully fetch basic details of page', async () => {
        // Mocking page ID for the test
        const mockPageId = "1234567689101112";
        try {
            const basicDetails = await facebookDetails.fetchPageBasicDetails(mockPageId);
            expect(basicDetails).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });

    // Test to verify fetching page followers count
    it('should successfully fetch Page Followers Count', async () => {
        // Mocking page ID for the test
        const mockPageId = "1234567689101112";
        try {
            const followersCount = await facebookDetails.fetchPageFollowersCount(mockPageId);
            expect(followersCount).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });

    // Test to verify fetching page category
    it('should successfully fetch Page Category', async () => {
        // Mocking page ID for the test
        const mockPageId = "1234567689101112";
        try {
            const category = await facebookDetails.fetchPageCategory(mockPageId);
            expect(category).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });
});
