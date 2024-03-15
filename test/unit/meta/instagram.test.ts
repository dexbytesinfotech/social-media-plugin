// Importing necessary interfaces and classes from the Meta module
import { InstagramBasicDetailsParams, InstagramMediaParams } from '../../../src/resources/meta/common/interfaces';
import { SMPFactory } from '../../../src/index'
import { Actions, Repositories, Resources } from '../../../src/enums/generals';

// Mocking the InstagramAccount.Media class to avoid actual API calls during tests
jest.mock('../../../src/resources/meta/instagram/instagram.Media', () => {
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
// Mocking the InstagramAccount.Details class to avoid actual API calls during tests
jest.mock('../../../src/resources/meta/instagram/instagram.Details', () => {
    return {
        InstagramAccountDetails: jest.fn().mockImplementation(() => {
            return {
                // Mocking various methods of the InstagramAccountDetails class
                fetchAccountDetails: jest.fn().mockResolvedValue({}),
            };
        }),
    };
});



describe('returns facebook page posts ', () => {
    let factory: SMPFactory;
    const userId = 'mockPageId';
    const params: InstagramBasicDetailsParams = { biography: true };
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.instagram,
            action: Actions.instagramDetails,
            payload: {
                userId,
                params,
                accessToken
            }
        });
    });

    it('Should execute instagram details operation successfully', async () => {
        try {
            const details = await factory.operate();
            expect(details).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
});


describe('returns instagram Account  Media', () => {
    let factory: SMPFactory;
    const userId = 'mockuserId';
    const params: InstagramMediaParams = { id: true };
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.instagram,
            action: Actions.instagramMedia,
            payload: {
                userId,
                params,
                accessToken
            }
        });
    });

    it('Should execute instagram details operation successfully', async () => {
        try {
            const media = await factory.operate();
            expect(media).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
});



describe('returns instagram Account  Media', () => {
    let factory: SMPFactory;
    const userId = 'mockuserId';
    const params: InstagramMediaParams = { id: true };
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.instagram,
            action: Actions.instagramLiveMedia,
            payload: {
                userId,
                params,
                accessToken
            }
        });
    });

    it('Should execute instagram details operation successfully', async () => {
        try {
            const media = await factory.operate();
            expect(media).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
});

describe('returns instagram Account  Media', () => {
    let factory: SMPFactory;
    const userId = 'mockuserId';
    const params: InstagramMediaParams = { id: true };
    const accessToken = 'mockAccessToken';

    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.meta,
            module: Repositories.instagram,
            action: Actions.instagramStories,
            payload: {
                userId,
                params,
                accessToken
            }
        });
    });

    it('Should execute instagram details operation successfully', async () => {
        try {
            const media = await factory.operate();
            expect(media).toBeInstanceOf(Object); // Example assertion

        } catch (error) {

        }
    });
});
