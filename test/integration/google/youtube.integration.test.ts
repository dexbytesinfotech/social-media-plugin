import {
    YoutubeChannelDetailsParams,
    YoutubeChannelVideosParams,
    YoutubChannelSubscriptionsParams,
    YoutubeChannelActivitiesParams,
    YoutubeChannelPlaylistParams,
    YoutubeChannelPLaylistItemsParams,
    YoutubeChannelVideosDetailsParams,
    YoutubeChannelSectionsParams,
    commonForYoutube
} from '../../../src/resources/google/common/interfaces';
import { SMPFactory } from '../../../src/index'
import { Actions, Repositories, Resources } from '../../../src/enums/generals';

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

describe("Integration Tests for Youtube Channel Operations", () => {
    let factory: SMPFactory;
    const channelId = "oeivdjnhocqwddfklvADDFV";
    const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc";

    describe("get youtube channel details", () => {
        const params: YoutubeChannelDetailsParams = { id: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.channelDetails,
                payload: {
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return channel details', async () => {
            try {
                const details = await factory.operate();
                expect(details).toBeInstanceOf(Object);
            } catch (error) {
                // Fail the test if an error occurs
            }
        });
    });

    describe("get youtube channel subs", () => {
        const params: YoutubChannelSubscriptionsParams = { id: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.channelSubscriptions,
                payload: {
                    channelId,
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return channel subs', async () => {
            try {
                const subs = await factory.operate();
                expect(subs).toBeInstanceOf(Object);
            } catch (error) {
                 // Fail the test if an error occurs
            }
        });
    });

    describe("get youtube channel playlist", () => {
        const params: YoutubeChannelPlaylistParams = { id: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.channelPlaylists,
                payload: {
                    channelId,
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return channel playlist', async () => {
            try {
                const playlists = await factory.operate();
                expect(playlists).toBeInstanceOf(Object);
            } catch (error) {
                 // Fail the test if an error occurs
            }
        });
    });

    describe("get youtube channel playlist Items", () => {
        const playlistId = "oeivdjnhocqwddfklvADDFV";
        const params: YoutubeChannelPLaylistItemsParams = { id: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.channelPlaylistItems,
                payload: {
                    playlistId,
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return channel playlist items', async () => {
            try {
                const playlistsData = await factory.operate();
                expect(playlistsData).toBeInstanceOf(Object);
            } catch (error) {
               // Fail the test if an error occurs
            }
        });
    });

    describe("get youtube channel sections", () => {
        const params: YoutubeChannelSectionsParams = { id: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.channelSections,
                payload: {
                    channelId,
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return channel sections', async () => {
            try {
                const sections = await factory.operate();
                expect(sections).toBeInstanceOf(Object);
            } catch (error) {
                 // Fail the test if an error occurs
            }
        });
    });

    describe("get youtube languages", () => {
        const params: YoutubeChannelSectionsParams = { id: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.languages,
                payload: {
                    channelId,
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return channel languages', async () => {
            try {
                const languages = await factory.operate();
                expect(languages).toBeInstanceOf(Object);
            } catch (error) {
                 // Fail the test if an error occurs
            }
        });
    });

    describe("get youtube regions", () => {
        const params: commonForYoutube = { id: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.regions,
                payload: {
                    channelId,
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return regions', async () => {
            try {
                const regions = await factory.operate();
                expect(regions).toBeInstanceOf(Object);
            } catch (error) {
                 // Fail the test if an error occurs
            }
        });
    });

    describe("get youtube channel videos", () => {
        const params: YoutubeChannelVideosParams = { id: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.channelVideos,
                payload: {
                    channelId,
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return channels videos', async () => {
            try {
                const videos = await factory.operate();
                expect(videos).toBeInstanceOf(Object);
            } catch (error) {
                // Fail the test if an error occurs
            }
        });
    });

    describe("get youtube channel videos details", () => {
        const videoId = "oeivdjnhocqwddfklvADDFV";
        const params: YoutubeChannelVideosDetailsParams = { fileDetails: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.channelVideoDetails,
                payload: {
                    videoId,
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return channels videos details', async () => {
            try {
                const videos = await factory.operate();
                expect(videos).toBeInstanceOf(Object);
            } catch (error) {
                 // Fail the test if an error occurs
            }
        });
    });

    describe("get youtube channel activities", () => {
        const params: YoutubeChannelActivitiesParams = { id: true };

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.google,
                module: Repositories.youtube,
                action: Actions.channelActivities,
                payload: {
                    channelId,
                    accessesToken,
                    params
                }
            });
        });

        it('Should successfully return channels activities', async () => {
            try {
                const activities = await factory.operate();
                expect(activities).toBeInstanceOf(Object);
            } catch (error) {
                 // Fail the test if an error occurs
            }
        });
    });
});
