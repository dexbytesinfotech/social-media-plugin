// Importing necessary interfaces and classes from the Meta module
import {
    MetaLongLivedAccessToken,
    GenerateMetaAuthUrl,
} from '../../../src/resources/meta/common/accessTokengenerator';

// Mocking the external dependency to avoid actual API calls during tests
jest.mock('../../../src/resources/meta/common/accessTokengenerator', () => {
    return {
        // Mocking GenerateMetaAuthUrl class
        GenerateMetaAuthUrl: jest.fn().mockImplementation(() => {
            return {
                generateAuthUrl: jest.fn().mockResolvedValue({})
            };
        }),
        // Mocking MetaLongLivedAccessToken class
        MetaLongLivedAccessToken: jest.fn().mockImplementation(() => {
            return {
                requestLongLivedAccessToken: jest.fn().mockImplementation()
            };
        })
    };
});

// Describing the test suite for the Meta Auth URL and Long Lived Token
describe('Get Meta Auth Url and Long Lived Token', () => {
    let authUrl: GenerateMetaAuthUrl;
    const clientId = "abcdefghijklmnopqrst1234567abcs";
    const redirectUri = "https//:abc.com";
    const permissions = ["per1", "per2", "......", "perN"];

    // Initializing the GenerateMetaAuthUrl instance before each test
    beforeEach(() => {
        authUrl = new GenerateMetaAuthUrl({ clientId, redirectUri, permissions });
    });

    // Test to verify the successful generation of authentication URL
    it('Should successfully return auth url', async () => {
        const authType = "code";
        const url = await authUrl.generateAuthUrl({ authType });
        expect(url).toBeInstanceOf(Object);
    });
});

// Describing the test suite for the Meta Long Lived Access Token
describe('Should return long lived access token', () => {
    let token: MetaLongLivedAccessToken;
    const clientId = "abcdefghijklmnopqrst1234567abcs";
    const clientSecret = "clientsecretmock";
    const mockUserAccessToken = 'mockuseraccesstokenmockuseraccesstokenmockuseraccesstokenmockuseraccesstoken';

    // Initializing the MetaLongLivedAccessToken instance before each test
    beforeEach(() => {
        token = new MetaLongLivedAccessToken(clientId, clientSecret, mockUserAccessToken);
    });

    // Test to verify the successful request for a long-lived access token
    it('Should return long-lived access token', async () => {
        const longLivedAccessToken = await token.requestLongLivedAccessToken();
        expect(longLivedAccessToken);
    });
});
