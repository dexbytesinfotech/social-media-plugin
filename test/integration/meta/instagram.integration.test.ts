// instagram_integration.test.ts

import { SMPFactory } from '../../../src/index';
import { Actions, Repositories, Resources } from '../../../src/enums/generals';
import { InstagramBasicDetailsParams, InstagramMediaParams } from '../../../src/resources/meta/common/interfaces';

// Mock Instagram classes to avoid actual API calls during tests
jest.mock('../../../src/resources/meta/instagram/instagram.Media', () => {
    return {
        InstagramAccountMedia: jest.fn().mockImplementation(() => {
            return {
                fetchAccountMedia: jest.fn().mockResolvedValue({}),
                fetchAccountStories: jest.fn().mockResolvedValue({}),
                fetchAccountLiveMedia: jest.fn().mockResolvedValue({}),
            };
        }),
    };
});

jest.mock('../../../src/resources/meta/instagram/instagram.Details', () => {
    return {
        InstagramAccountDetails: jest.fn().mockImplementation(() => {
            return {
                fetchAccountDetails: jest.fn().mockResolvedValue({}),
            };
        }),
    };
});

describe('Integration Tests for Instagram', () => {
    describe('Instagram Account Details Operation', () => {
        let factory: SMPFactory;
        const userId = 'mockUserId';
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

        it('Should execute Instagram account details operation successfully', async () => {
            try {
                const details = await factory.operate();
                expect(details).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
                fail(error);
            }
        });
    });

    describe('Instagram Account Media Operations', () => {
        let factory: SMPFactory;
        const userId = 'mockuserId';
        const accessToken = 'mockAccessToken';

        it('Should execute Instagram media operation successfully', async () => {
            const params: InstagramMediaParams = { id: true };
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

            try {
                const media = await factory.operate();
                expect(media).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
                fail(error);
            }
        });

        it('Should execute Instagram live media operation successfully', async () => {
            const params: InstagramMediaParams = { id: true };
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

            try {
                const liveMedia = await factory.operate();
                expect(liveMedia).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
                fail(error);
            }
        });

        it('Should execute Instagram stories operation successfully', async () => {
            const params: InstagramMediaParams = { id: true };
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

            try {
                const stories = await factory.operate();
                expect(stories).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
                fail(error);
            }
        });
    });
});
