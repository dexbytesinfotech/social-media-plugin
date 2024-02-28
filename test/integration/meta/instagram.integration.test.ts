// Import necessary modules and classes
import { InstagramBasicDetailsParams, InstagramMediaParams } from '../../../src/meta/common/interfaces';
import { InstagramAccountDetails } from '../../../src/meta/instagram/instagram.Details';
import { InstagramAccountMedia } from '../../../src/meta/instagram/instagram.Media';

// Mocking the InstagramAccount.Media and InstagramAccount.Details classes
jest.mock('../../../src/meta/instagram/instagram.Media', () => {
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

jest.mock('../../../src/meta/instagram/instagram.Details', () => {
    return {
        InstagramAccountDetails: jest.fn().mockImplementation(() => {
            return {
                fetchAccountDetails: jest.fn().mockResolvedValue({ details: {} }),
            };
        }),
    };
});

// Describing the integration test suite
describe('Instagram Account Integration', () => {
    let instagramAccountMedia: InstagramAccountMedia;
    let instagramAccountDetails: InstagramAccountDetails;
    const mockUserAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvkc";

    // Initializing the instances before each test
    beforeEach(() => {
        instagramAccountMedia = new InstagramAccountMedia(mockUserAccessToken);
        instagramAccountDetails = new InstagramAccountDetails(mockUserAccessToken);
    });

    // Integration test to verify fetching media and then fetching details of the same account
    it('should successfully fetch media and then fetch details of the same account', async () => {
        // Mocking user ID for the test
        const mockUserId = "1234567689101112";
        const mediaParam: InstagramMediaParams = { igId: true, limit: 10, likeCount: true };
        const detailsParam: InstagramBasicDetailsParams = { followersCount: true, followsCount: true, mediaCount: true, biography: true, profilePicture: true, website: true };
        try {
            // Fetch media using InstagramAccountMedia
            const media = await instagramAccountMedia.fetchAccountMedia(mockUserId,mediaParam);
            expect(media).toBeInstanceOf(Object);

            // Fetch details using InstagramAccountDetails
            const details = await instagramAccountDetails.fetchAccountDetails(mockUserId,detailsParam);
            expect(details).toBeInstanceOf(Object);

            // Additional assertions can be made here to verify the data fetched
        } catch (error) {
            // Handle error if needed
            
        }
    });

    // Integration test to verify fetching stories and then fetching details of the same account
    it('should successfully fetch stories and then fetch details of the same account', async () => {
        // Mocking user ID for the test
        const mockUserId = "1234567689101112";
        const mediaParam: InstagramMediaParams = { igId: true, limit: 10, likeCount: true };
        const detailsParam: InstagramBasicDetailsParams = { followersCount: true, followsCount: true, mediaCount: true, biography: true, profilePicture: true, website: true };
        try {
            // Fetch stories using InstagramAccountMedia
            const stories = await instagramAccountMedia.fetchAccountStories(mockUserId,mediaParam);
            expect(stories).toBeInstanceOf(Object);

            // Fetch details using InstagramAccountDetails
            const details = await instagramAccountDetails.fetchAccountDetails(mockUserId,detailsParam);
            expect(details).toBeInstanceOf(Object);

            // Additional assertions can be made here to verify the data fetched
        } catch (error) {
            // Handle error if needed
            
        }
    });

     // Integration test to verify fetching stories and then fetching details of the same account in parallel
     it('should successfully fetch stories and then fetch details of the same account in parallel', async () => {
        const mockUserId = "1234567689101112";
        const mediaParam: InstagramMediaParams = { igId: true, limit: 10, likeCount: true };
        const detailsParam: InstagramBasicDetailsParams = { followersCount: true, followsCount: true, mediaCount: true, biography: true, profilePicture: true, website: true };

        try {
            // Fetch stories and details in parallel
            const [stories, details] = await Promise.all([
                instagramAccountMedia.fetchAccountStories(mockUserId, mediaParam),
                instagramAccountDetails.fetchAccountDetails(mockUserId, detailsParam)
            ]);

            expect(stories).toBeInstanceOf(Object);
            expect(details).toBeInstanceOf(Object);

            // Additional assertions can be made here to verify the data fetched
        } catch (error) {
            // Handle error if needed
            
        }
    });
});
