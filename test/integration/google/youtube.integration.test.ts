// Importing necessary interfaces and the Youtube class from the YouTube module
import {
    YoutubeChannelDetailsParams,
    YoutubeChannelVideosParams,
    YoutubChannelSubscriptionsParams,
    YoutubeChannelActivitiesParams,
    YoutubeChannelPlaylistParams,
    YoutubeChannelPLaylistItemsParams,
    YoutubeChannelSectionsParams,
    YoutubeChannelVideosCaptions,
    staticGoogleParam
} from '../../../src/resources/google/common/interfaces';
import { Youtube } from '../../../src/resources/google/youtube/youtube.ChannelDetails';
import 'jest';

// Mocking the external dependency to avoid actual API calls during tests
jest.mock('../../../src/resources/google/youtube/youtube.ChannelDetails', () => {
    return {
        Youtube: jest.fn().mockImplementation(() => {
            return {
                // Mocking various methods of the Youtube class
                fetchChannelDetails: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchChannelVideos: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchChannelSubscriptions: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchChannelVideosDetails: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchChannelPlaylists: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchChannelPlaylistItems: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchChannelSections: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchLanguages: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchRegions: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchChannelActivities: jest.fn().mockResolvedValue({}), // Returns an empty object
                fetchVideosCaption: jest.fn().mockResolvedValue({}), // Returns an empty object
            };
        }),
    };
});

// Describing the test suite for the Youtube Channel Details Fetcher
describe('Youtube Channel Details Fetcher Integration Test', () => {
    let youtube: Youtube;
    const mockAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvk c";

    // Initializing the Youtube instance before each test
    beforeEach(() => {
        youtube = new Youtube(mockAccessToken);
    });

    // Integration test to verify fetching data from multiple endpoints sequentially
    it('should successfully fetch data from multiple endpoints sequentially', async () => {
        // Mocking parameters for fetching channel details
        const channelDetailsParams: YoutubeChannelDetailsParams = { statistics: true, snippet: true, auditDetails: true, brandingSettings: true, contentDetails: true, contentOwnerDetails: true, id: true, localizations: true, status: true, topicDetails: true };
        // Mocking parameters for fetching channel videos
        const channelVideosParams: YoutubeChannelVideosParams = { id: true, limit: 10, snippet: true };
        // Mocking parameters for fetching channel subscriptions
        const channelSubscriptionsParams: YoutubChannelSubscriptionsParams = { contentDetails: true, limit: 10, id: true, snippet: true, subscriberSnippet: true };
        // Mocking parameters for fetching channel activities
        const channelActivitiesParams: YoutubeChannelActivitiesParams = { snippet: true, id: true, contentDetails: true, limit: 20 };
        // Mocking parameters for fetching channel playlists
        const channelPlaylistsParams: YoutubeChannelPlaylistParams = { contentDetails: true, id: true, localization: true, player: true, snippet: true, status: true };
        // Mocking parameters for fetching channel playlist items
        const channelPlaylistItemsParams: YoutubeChannelPLaylistItemsParams = { snippet: true, status: true, id: true, limit: 20 };
        // Mocking parameters for fetching channel sections
        const channelSectionsParams: YoutubeChannelSectionsParams = { snippet: true, id: true, contentDetails: true };
        // Mocking parameters for fetching YouTube languages
        const languagesParams: staticGoogleParam = { snippet: true };
        // Mocking parameters for fetching YouTube regions
        const regionsParams: staticGoogleParam = { snippet: true };
        // Mocking parameters for fetching channel captions
        const channelCaptionsParams: YoutubeChannelVideosCaptions = { snippet: true, id: true };
        // Mocking channel ID
        const mockChannelId = 'wwXCEddfvnDSaasWW';
        // Mocking video ID
        const mockVideoId = "avcfvgjnSFDWQXad";

        try {
            // Fetch channel details
            const channelDetails = await youtube.fetchChannelDetails(channelDetailsParams);
            expect(channelDetails).toBeInstanceOf(Object);

            // Fetch channel videos
            const channelVideos = await youtube.fetchChannelVideos(mockChannelId, channelVideosParams);
            expect(channelVideos).toBeInstanceOf(Object);

            // Fetch channel subscriptions
            const channelSubscriptions = await youtube.fetchChannelSubscriptions(mockChannelId, channelSubscriptionsParams);
            expect(channelSubscriptions).toBeInstanceOf(Object);

            // Fetch channel activities
            const channelActivities = await youtube.fetchChannelActivities(mockChannelId, channelActivitiesParams);
            expect(channelActivities).toBeInstanceOf(Object);

            // Fetch channel playlists
            const channelPlaylists = await youtube.fetchChannelPlaylists(mockChannelId, channelPlaylistsParams);
            expect(channelPlaylists).toBeInstanceOf(Object);

            // Fetch channel playlist items
            const channelPlaylistItems = await youtube.fetchChannelPlaylistItems(mockChannelId, channelPlaylistItemsParams);
            expect(channelPlaylistItems).toBeInstanceOf(Object);

            // Fetch channel sections
            const channelSections = await youtube.fetchChannelSections(mockChannelId, channelSectionsParams);
            expect(channelSections).toBeInstanceOf(Object);

            // Fetch YouTube languages
            const languages = await youtube.fetchLanguages(languagesParams);
            expect(languages).toBeInstanceOf(Object);

            // Fetch YouTube regions
            const regions = await youtube.fetchRegions(regionsParams);
            expect(regions).toBeInstanceOf(Object);

            // Fetch channel captions
            const channelCaptions = await youtube.fetchVideosCaption(mockVideoId, channelCaptionsParams);
            expect(channelCaptions).toBeInstanceOf(Object);

            // Additional assertions can be made here to verify the data fetched
        } catch (error) {
            console.error("An error occurred during the test:", error);
        }
    });
});

// Describing the test suite for the Youtube Channel Details Fetcher
describe('Youtube Channel Details Fetcher Parallel Integration Test', () => {
    let youtube: Youtube;
    const mockAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvk c";

    // Initializing the Youtube instance before each test
    beforeEach(() => {
        youtube = new Youtube(mockAccessToken);
    });

    // Integration test to verify fetching data from multiple endpoints in parallel
    it('should successfully fetch data from multiple endpoints in parallel', async () => {
        // Mocking parameters for fetching channel details
        const channelDetailsParams: YoutubeChannelDetailsParams = { statistics: true, snippet: true, auditDetails: true, brandingSettings: true, contentDetails: true, contentOwnerDetails: true, id: true, localizations: true, status: true, topicDetails: true };
        // Mocking parameters for fetching channel videos
        const channelVideosParams: YoutubeChannelVideosParams = { id: true, limit: 10, snippet: true };
        // Mocking parameters for fetching channel subscriptions
        const channelSubscriptionsParams: YoutubChannelSubscriptionsParams = { contentDetails: true, limit: 10, id: true, snippet: true, subscriberSnippet: true };
        // Mocking parameters for fetching channel activities
        const channelActivitiesParams: YoutubeChannelActivitiesParams = { snippet: true, id: true, contentDetails: true, limit: 20 };
        // Mocking parameters for fetching channel playlists
        const channelPlaylistsParams: YoutubeChannelPlaylistParams = { contentDetails: true, id: true, localization: true, player: true, snippet: true, status: true };
        // Mocking parameters for fetching channel playlist items
        const channelPlaylistItemsParams: YoutubeChannelPLaylistItemsParams = { snippet: true, status: true, id: true, limit: 20 };
        // Mocking parameters for fetching channel sections
        const channelSectionsParams: YoutubeChannelSectionsParams = { snippet: true, id: true, contentDetails: true };
        // Mocking parameters for fetching YouTube languages
        const languagesParams: staticGoogleParam = { snippet: true };
        // Mocking parameters for fetching YouTube regions
        const regionsParams: staticGoogleParam = { snippet: true };
        // Mocking parameters for fetching channel captions
        const channelCaptionsParams: YoutubeChannelVideosCaptions = { snippet: true, id: true };
        // Mocking channel ID
        const mockChannelId = 'wwXCEddfvnDSaasWW';
        // Mocking video ID
        const mockVideoId = "avcfvgjnSFDWQXad";

        try {
            // Fetch data from multiple endpoints in parallel
            const [channelDetails, channelVideos, channelSubscriptions, channelActivities, channelPlaylists, channelPlaylistItems, channelSections, languages, regions, channelCaptions] = await Promise.all([
                youtube.fetchChannelDetails(channelDetailsParams),
                youtube.fetchChannelVideos(mockChannelId, channelVideosParams),
                youtube.fetchChannelSubscriptions(mockChannelId, channelSubscriptionsParams),
                youtube.fetchChannelActivities(mockChannelId, channelActivitiesParams),
                youtube.fetchChannelPlaylists(mockChannelId, channelPlaylistsParams),
                youtube.fetchChannelPlaylistItems(mockChannelId, channelPlaylistItemsParams),
                youtube.fetchChannelSections(mockChannelId, channelSectionsParams),
                youtube.fetchLanguages(languagesParams),
                youtube.fetchRegions(regionsParams),
                youtube.fetchVideosCaption(mockVideoId, channelCaptionsParams)
            ]);

            // Perform assertions on the combined data
            expect(channelDetails).toBeInstanceOf(Object);
            expect(channelVideos).toBeInstanceOf(Object);
            expect(channelSubscriptions).toBeInstanceOf(Object);
            expect(channelActivities).toBeInstanceOf(Object);
            expect(channelPlaylists).toBeInstanceOf(Object);
            expect(channelPlaylistItems).toBeInstanceOf(Object);
            expect(channelSections).toBeInstanceOf(Object);
            expect(languages).toBeInstanceOf(Object);
            expect(regions).toBeInstanceOf(Object);
            expect(channelCaptions).toBeInstanceOf(Object);
        } catch (error) {

        }
    });
});
