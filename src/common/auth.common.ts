

export type Platform = 'Meta' | 'Google';
export const createPlatformInstance = async (
  platform: Platform,
  clientId: string,
  redirectUri: string,
  permissions?: string[] | string,
): Promise<any> => {
  try {
    const modulePath = `../resources/${platform.toLowerCase()}`;

    const { AuthUrlGenerator, TokenGenerator } = await import(/* webpackChunkName: "resources" */ modulePath);

    switch (platform) {
      case 'Meta':
        const { Google, Meta } = await import(/* webpackChunkName: "resources" */ modulePath);
        return {
          authUrlGenerator: new Meta.MetaGenerateMetaAuthUrl(clientId, redirectUri, permissions as string[]),
          longLivedAccessToken: Meta.MetaLongLivedAccessToken(clientId, 'client-secret', 'exchange-token'), // Replace 'client-secret' and 'exchange-token' with actual values
        };
      case 'Google':
        return {
          authUrlGenerator: new AuthUrlGenerator(clientId, redirectUri, permissions as string),
          tokenGenerator: new TokenGenerator(clientId, 'client-secret', redirectUri), // Replace 'client-secret' with actual value
        };
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }
  } catch (error) {
    return null;
  }
};
