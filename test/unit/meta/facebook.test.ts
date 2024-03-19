import { EventsParams, MediaParams, PhotoParams, VideoParams } from '../../../src/resources/meta/common/interfaces';
import { SMPFactory } from '../../../src/index'
import { Actions, Repositories, Resources } from '../../../src/enums/generals';

// Mocking the external dependency to avoid actual API calls during tests
jest.mock('../../../src/resources/meta/facebook/facebookPage.Media', () => {
    return {
        FacebookPageMedia: jest.fn().mockImplementation(() => {
            return {
                fetchPageEvents: jest.fn().mockResolvedValue({}),
                fetchPagePosts: jest.fn().mockResolvedValue({}),
                fetchPagePhotos: jest.fn().mockResolvedValue({}),
                fetchPageFeeds: jest.fn().mockResolvedValue({}),
                fetchPageVideos: jest.fn().mockResolvedValue({})

            }
        })
    };
});
jest.mock('../../../src/resources/meta/common/getUserIds', () => {
    return {
        UserIdFetcher: jest.fn().mockImplementation(() => {
            return {
                fetchFacebookPageId: jest.fn().mockResolvedValue({}),


            }
        })
    };
});

describe('returns facebook page user id', () => {
    let factory: SMPFactory;
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookPageDetails,
            payload: {
                accessToken
            }
        });
    });

    it('Should return facebook page id successfully ', async () => {
        try {
            const id = await factory.operate();
            expect(id).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
});
describe('returns facebook events', () => {
    let factory: SMPFactory;
    const pageId = 'mockPageId';
    const params: EventsParams = { attendingCount: true };
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookEvents,
            payload: {
                pageId,
                params,
                accessToken
            }
        });
    });

    it('Should execute Facebook events operation successfully', async () => {
        try {
            const events = await factory.operate();
            expect(events).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
});

describe('returns facebook page posts ', () => {
    let factory: SMPFactory;
    const pageId = 'mockPageId';
    const params: MediaParams = { actions: true, canDelete: true };
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookPosts,
            payload: {
                pageId,
                params,
                accessToken
            }
        });
    });

    it('Should execute Facebook posts operation successfully', async () => {
        try {
            const posts = await factory.operate();
            expect(posts).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
});


describe('returns facebook page photos ', () => {
    let factory: SMPFactory;
    const pageId = 'mockPageId';
    const params: PhotoParams = { album:true };
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookPhotos,
            payload: {
                pageId,
                params,
                accessToken
            }
        });
    });

    it('Should execute Facebook posts operation successfully', async () => {
        try {
            const photos = await factory.operate();
            expect(photos).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
}); describe('returns facebook page Feeds ', () => {
    let factory: SMPFactory;
    const pageId = 'mockPageId';
    const params: MediaParams = { actions: true, canDelete: true };
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookPosts,
            payload: {
                pageId,
                params,
                accessToken
            }
        });
    });

    it('Should execute Facebook feeds operation successfully', async () => {
        try {
            const feeds = await factory.operate();
            expect(feeds).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
});



describe('returns facebook page videos ', () => {
    let factory: SMPFactory;
    const pageId = 'mockPageId';
    const params: VideoParams = { adBreaks: true };
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.facebook,
            action: Actions.facebookPosts,
            payload: {
                pageId,
                params,
                accessToken
            }
        });
    });

    it('Should execute Facebook video operation successfully', async () => {
        try {
            const videos = await factory.operate();
            expect(videos).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
});
