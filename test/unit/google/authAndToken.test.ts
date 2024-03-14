// Importing the required classes from the Google authentication module
import { SMPFactory } from '../../../src/index'
import { Actions, Repositories, Resources } from '../../../src/enums/generals';

// Mocking the GoogleTokenGenerator class to avoid actual API calls during tests
jest.mock('../../../src/resources/google/common/google.TokenGenerator', () => {
    return {
        GoogleTokenGenerator: jest.fn().mockImplementation(() => {
            return {
                getToken: jest.fn().mockResolvedValue({}),
                refreshAccessToken: jest.fn().mockResolvedValue({})
            };
        })
    };
});

// Mocking the GoogleAuthUrlGenerator class to avoid actual API calls during tests
jest.mock('../../../src/resources/google/common/google.AuthUrlGenereator', () => {
    return {
        GoogleAuthUrlGenerator: jest.fn().mockImplementation(() => {
            return {
                getAuthorizationUrl: jest.fn().mockResolvedValue({})
            };
        })
    };
});

describe("get auth url for google ", () => {
    let factory: SMPFactory;
    const clientId = "abcdefghijklmnopqrstuvwxyz.google.com";
    const redirectUri = "https://abc.com";
    const scope = "abc.youtube";


    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.auth,
            action: Actions.generateAuthUrl,
            payload: {
                clientId,
                redirectUri,
                scope
            }
        })
    });
    it('Should successfully return auth url', async () => {
        const url = await factory.operate();
        expect(url).toBeInstanceOf(Object);
    });

})


describe("get accessToken for google ", () => {
    let factory: SMPFactory;
    const clientId = "abcdefghijklmnopqrstuvwxyz.google.com";
    const redirectUri = "https://abc.com";
    const code = "abc.youtube";
    const clientSecret = 'abc12abc1234abc233';
    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.auth,
            action: Actions.generateToken,
            payload: {
                clientId,
                redirectUri,
                clientSecret,
                code
            }
        })
    });
    it('Should successfully return auth token ', async () => {
        const token = await factory.operate();
        expect(token).toBeInstanceOf(Object);
    });

})

describe("get accessToken for google  with help og refresh token ", () => {
    let factory: SMPFactory;
    const clientId = "abcdefghijklmnopqrstuvwxyz.google.com";
    const redirectUri = "https://abc.com";
    const refreshToken = "abc.youturifkdfhvdfvdnkvnviknvxckvxdbe";
    const clientSecret = 'abc12abc1234abc233';
    beforeEach(() => {
        factory = new SMPFactory({
            resource: Resources.google,
            module: Repositories.auth,
            action: Actions.refreshAccessToken,
            payload: {
                clientId,
                redirectUri,
                clientSecret,
                refreshToken
            }
        })
    });
    it('Should successfully return auth token ', async () => {
        const token = await factory.operate();
        expect(token).toBeInstanceOf(Object);
    });

})



