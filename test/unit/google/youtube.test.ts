// Importing necessary interfaces and the Youtube class from the YouTube module
import {
  YoutubeChannelDetailsParams,
  YoutubeChannelVideosParams,
  YoutubChannelSubscriptionsParams,
  YoutubeChannelActivitiesParams,
  YoutubeChannelPlaylistParams,
  YoutubeChannelPLaylistItemsParams,
  YoutubeChannelVideosDetailsParams,
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
describe('Youtube Channel Details Fetcher', () => {
  let youtube: Youtube;
  const mockAccessToken = "abcfhnFHVD4jhvndfvdfnkvdfcsxs2344kvckvfkvvcvk c";

  // Initializing the Youtube instance before each test
  beforeEach(() => {
    youtube = new Youtube(mockAccessToken);
  });

  // Test to verify fetching basic details of a channel
  it('should successfully fetch basic details of the channel', async () => {
    // Mocking parameters for the test
    const mockParams: YoutubeChannelDetailsParams = { statistics: true, snippet: true, auditDetails: true, brandingSettings: true, contentDetails: true, contentOwnerDetails: true, id: true, localizations: true, status: true, topicDetails: true };
    const result = await youtube.fetchChannelDetails(mockParams);
    expect(result).toBeInstanceOf(Object); // Assuming GoogleResponse is an object, adjust accordingly
  });

  // Test to verify fetching videos of a channel
  it('should successfully fetch videos of the channel', async () => {
    // Mocking parameters and channel ID for the test
    const mockParams: YoutubeChannelVideosParams = { id: true, limit: 10, snippet: true };
    const mockChannelId = 'wwXCEddfvnDSaasWW';
    const result = await youtube.fetchChannelVideos(mockChannelId, mockParams);
    expect(result).toBeInstanceOf(Object);
  });

  // Test to verify fetching channel subscriptions
  it('should successfully fetch channel subscriptions', async () => {
    // Mocking parameters and channel ID for the test
    const mockParams: YoutubChannelSubscriptionsParams = { contentDetails: true, limit: 10, id: true, snippet: true, subscriberSnippet: true };
    const mockChannelId = 'wwXCEddfvnDSaasWW';
    const result = await youtube.fetchChannelSubscriptions(mockChannelId, mockParams);
    expect(result).toBeInstanceOf(Object);
  });

  // Test to verify fetching video details
  it('should successfully fetch videos details', async () => {
    // Mocking parameters and video ID for the test
    const mockParams: YoutubeChannelVideosDetailsParams = { contentDetails: true, fileDetails: true, player: true, processingDetails: true, recordingDetails: true, snippet: true, statistics: true, status: true, suggestions: true, topicDetails: true };
    const mockVideoId = "avcfvgjnSFDWQXad";
    const result = await youtube.fetchChannelVideosDetails(mockVideoId, mockParams);
    expect(result).toBeInstanceOf(Object);
  });

  // Test to verify fetching channel playlists
  it('should successfully fetch channel playlists', async () => {
    // Mocking parameters and channel ID for the test
    const mockParams: YoutubeChannelPlaylistParams = { contentDetails: true, id: true, localization: true, player: true, snippet: true, status: true };
    const mockChannelId = 'wwXCEddfvnDSaasWW';
    const result = await youtube.fetchChannelPlaylists(mockChannelId, mockParams);
    expect(result).toBeInstanceOf(Object);
  });

  // Test to verify fetching channel playlist items
  it('should successfully fetch channel playlist items', async () => {
    // Mocking parameters and playlist ID for the test
    const mockParams: YoutubeChannelPLaylistItemsParams = { snippet: true, status: true, id: true, limit: 20 };
    const mockPlaylistId = 'PLwwXCEddfvnDSaasfidcdcWW';
    const result = await youtube.fetchChannelPlaylistItems(mockPlaylistId, mockParams);
    expect(result).toBeInstanceOf(Object);
  });

  // Test to verify fetching channel sections
  it('should successfully fetch channel sections', async () => {
    // Mocking parameters and channel ID for the test
    const mockParams: YoutubeChannelSectionsParams = { snippet: true, id: true, contentDetails: true };
    const mockChannelId = 'wwXCEddfvnDSaasWW';
    const result = await youtube.fetchChannelSections(mockChannelId, mockParams);
    expect(result).toBeInstanceOf(Object);
  });

  // Test to verify fetching YouTube languages
  it('should successfully fetch YouTube languages', async () => {
    // Mocking parameters for the test
    const mockParams: staticGoogleParam = { snippet: true };
    const result = await youtube.fetchLanguages(mockParams);
    expect(result).toBeInstanceOf(Object);
  });

  // Test to verify fetching YouTube regions
  it('should successfully fetch YouTube regions', async () => {
    // Mocking parameters for the test
    const mockParams: staticGoogleParam = { snippet: true };
    const result = await youtube.fetchRegions(mockParams);
    expect(result).toBeInstanceOf(Object);
  });

  // Test to verify fetching channel activities
  it('should successfully fetch channel activities', async () => {
    // Mocking parameters and channel ID for the test
    const mockParams: YoutubeChannelActivitiesParams = { snippet: true, id: true, contentDetails: true, limit: 20 };
    const mockChannelId = 'wwXCEddfvnDSaasWW';
    const result = await youtube.fetchChannelActivities(mockChannelId, mockParams);
    expect(result).toBeInstanceOf(Object);
  });

  // Test to verify fetching channel captions
  it('should successfully fetch channel captions', async () => {
    // Mocking parameters and video ID for the test
    const mockParams: YoutubeChannelVideosCaptions = { snippet: true, id: true };
    const mockVideoId = 'wwXCEddfvnDSaasWW';
    const result = await youtube.fetchVideosCaption(mockVideoId, mockParams);
    expect(result).toBeInstanceOf(Object);
  });
});
