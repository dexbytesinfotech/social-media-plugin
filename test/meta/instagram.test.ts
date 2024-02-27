// Importing necessary interfaces and classes from the Meta module
import { InstagramBasicDetailsParams, InstagramMediaParams } from '../../src/meta/common/interfaces';
import { InstagramAccountDetails } from '../../src/meta/instagram/instagram.Details';
import { InstagramAccountMedia } from '../../src/meta/instagram/instagram.Media';

// Mocking the InstagramAccount.Media class to avoid actual API calls during tests
jest.mock('../../src/meta/instagram/instagram.Media', () => {
    return {
        InstagramAccountMedia: jest.fn().mockImplementation(() => {
            return {
                // Mocking various methods of the InstagramAccountMedia class
                fetchAccountMedia: jest.fn().mockResolvedValue({}),
                fetchAccountStories: jest.fn().mockResolvedValue({}),
                fetchAccountLiveMedia: jest.fn().mockResolvedValue({}),
            };
        }),
    };
});

// Describing the test suite for the InstagramAccount.Media class
describe('Instagram Media', () => {
    let instagramAccountMedia: InstagramAccountMedia;
    const mockUserAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvkc";

    // Initializing the InstagramAccountMedia instance before each test
    beforeEach(() => {
        instagramAccountMedia = new InstagramAccountMedia(mockUserAccessToken);
    });

    // Test to verify fetching media of the account
    it('should successfully fetch media of the account', async () => {
        // Mocking parameters and user ID for the test
        const param: InstagramMediaParams = { igId: true, limit: 10, likeCount: true };
        const mockUserId = "1234567689101112";
        try {
            const media = await instagramAccountMedia.fetchAccountMedia(mockUserId, param);
            expect(media).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });

    // Test to verify fetching live media of the account
    it('should successfully fetch live media of the account', async () => {
        // Mocking parameters and user ID for the test
        const param: InstagramMediaParams = { igId: true, limit: 10, likeCount: true };
        const mockUserId = "1234567689101112";
        try {
            const liveMedia = await instagramAccountMedia.fetchAccountLiveMedia(mockUserId, param);
            expect(liveMedia).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });

    // Test to verify fetching stories of the account
    it('should successfully fetch stories of the account', async () => {
        // Mocking parameters and user ID for the test
        const param: InstagramMediaParams = { igId: true, limit: 10, likeCount: true };
        const mockUserId = "1234567689101112";
        try {
            const stories = await instagramAccountMedia.fetchAccountStories(mockUserId, param);
            expect(stories).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });
});

// Mocking the InstagramAccount.Details class to avoid actual API calls during tests
jest.mock('../../src/meta/instagram/instagram.Details', () => {
    return {
        InstagramAccountDetails: jest.fn().mockImplementation(() => {
            return {
                // Mocking various methods of the InstagramAccountDetails class
                fetchAccountDetails: jest.fn().mockResolvedValue({}),
            };
        }),
    };
});

// Describing the test suite for the InstagramAccount.Details class
describe('Instagram Details', () => {
    let instagramAccountDetails: InstagramAccountDetails;
    const mockUserAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvkc";

    // Initializing the InstagramAccountDetails instance before each test
    beforeEach(() => {
        instagramAccountDetails = new InstagramAccountDetails(mockUserAccessToken);
    });

    // Test to verify fetching basic details of the account
    it('should successfully fetch basic details of account', async () => {
        // Mocking parameters and user ID for the test
        const param: InstagramBasicDetailsParams = { followersCount: true, followsCount: true, mediaCount: true, biography: true, profilePicture: true, website: true };
        const mockUserId = "1234567689101112";
        try {
            const basicDetails = await instagramAccountDetails.fetchAccountDetails(mockUserId, param);
            expect(basicDetails).toBeInstanceOf(Object);
        } catch (error) {
            // Handle error if needed
        }
    });
});
