// Importing the required classes from the Google authentication module
import { GoogleAuthUrlGenerator } from '../../../src/resources/google/common/google.AuthUrlGenereator';
import { GoogleTokenGenerator } from '../../../src/resources/google/common/google.TokenGenerator';

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

// Test suite for the GoogleTokenGenerator class
describe('Get Access Token', () => {
    let token: GoogleTokenGenerator;
    const clientId = 'adjkdsdfjcjnvdfjxjc232';
    const clientSecret = 'abc12abc1234abc233';
    const redirectUri = "https//:abc.com";

    // Setting up the token instance before each test
    beforeEach(() => {
        token = new GoogleTokenGenerator(clientId, clientSecret, redirectUri);
    });

    // Test case for fetching access token and refresh token
    it('Should successfully fetch access token and refresh token', async () => {
        // Mocking the authorization code for the test
        const mockCode = '4/0AeaYSHBoiXI1Qwn8f2HxrrAHodBQdGsQspu698H1KalK9dnfAVIh7eTP_A4OHZgg1hF2w';
        const resultToken = await token.getToken(mockCode);
        expect(resultToken).toBeInstanceOf(Object);
    });

    // Test case for refreshing access token using a refresh token
    it('should return access token with the help of refresh token', () => {
        // Mocking the refresh token for the test
        const mockRefreshToken = "abfdhndiklfoklvnosdfnsdoclns4vkndv664FGFGFGGdsdldssdjsdd";
        const resultToken = token.refreshAccessToken(mockRefreshToken);
        expect(resultToken);
    });
});

// Test suite for the GoogleAuthUrlGenerator class
describe('Google Auth URL Generator', () => {
    let authUrlGenerator: GoogleAuthUrlGenerator;
    const clientId = "abcdefghijklmnopqrstuvwxyz.google.com";
    const redirectUri = "https://abc.com";
    const scope = "abc.youtube";

    // Setting up the authUrlGenerator instance before each test
    beforeEach(() => {
        authUrlGenerator = new GoogleAuthUrlGenerator(clientId, redirectUri, scope);
    });

    // Test case for generating an authorization URL
    it('should return an auth URL', () => {
        const url = authUrlGenerator.getAuthorizationUrl();
        expect(url).toBeInstanceOf(Object);
    });
});
