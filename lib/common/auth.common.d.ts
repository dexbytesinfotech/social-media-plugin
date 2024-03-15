export type Platform = 'Meta' | 'Google';
export declare const createPlatformInstance: (platform: Platform, clientId: string, redirectUri: string, permissions?: string[] | string) => Promise<any>;
