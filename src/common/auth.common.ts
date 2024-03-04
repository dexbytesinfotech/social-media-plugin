
// // type Platform = 'Meta' | 'Google';

import { Meta } from "../resources/meta";

// import { Meta } from "../resources/meta";

// // /**
// //  * Combined factory class for Meta and Google platforms.
// //  * This class provides methods for creating instances of repositories, tokens, and auth URLs based on the specified platform.
// //  */
// // export class auth {
// //     /**
// //      * Creates a new instance of the specified token generator based on the platform.
// //      * @param {Platform} platform - The platform name ('Meta' or 'Google').
// //      * @param {string} clientId - The client ID required for token generation.
// //      * @param {string} clientSecret - The client secret required for token generation.
// //      * @param {string} redirectUri - The redirect URI for token generation.
// //      * @returns {Promise<any>} - A promise resolving to an instance of the specified token generator.
// //      */
// //     static async createTokenGenerator(platform: Platform, clientId: string, clientSecret: string, redirectUri: string): Promise<any> {
// //         try {
// //             const module = await import(`../resources/${platform.toLowerCase()}`);
// //             return module.createMetaLongLivedAccessToken(clientId, clientSecret, redirectUri);
// //         } catch (error) {
// //             throw new Error(`Unsupported platform: ${platform}`);
// //         }
// //     }

// //     /**
// //      * Creates a new instance of the specified auth URL generator based on the platform.
// //      * @param {Platform} platform - The platform name ('Meta' or 'Google').
// //      * @param {string} clientId - The client ID required for auth URL generation.
// //      * @param {string} redirectUri - The redirect URI for auth URL generation.
// //      * @param {string} scope - The scope of access requested by the application.
// //      * @returns {Promise<any>} - A promise resolving to an instance of the specified auth URL generator.
// //      */
// //     static async createAuthUrlGenerator(platform: Platform, clientId: string, redirectUri: string, scope: string): Promise<any> {
// //         try {
// //             const module = await import(`../resources/${platform.toLowerCase()}`);
// //             return module.GenerateMetaAuthUrl(clientId, redirectUri, [scope]); // You can modify parameters based on Meta requirements
// //         } catch (error) {
// //             throw new Error(`Unsupported platform: ${platform}`);
// //         }
// //     }
// // }

// type Platform = 'Meta' | 'Google';

// /**
//  * Combined factory class for Meta and Google platforms.
//  * This class provides methods for creating instances of repositories, tokens, and auth URLs based on the specified platform.
//  */
// export class auth {
//     /**
//      * Creates a new instance of the specified generator based on the platform.
//      * @param {Platform} platform - The platform name ('Meta' or 'Google').
//      * @param {string} clientId - The client ID required for generator.
//      * @param {string} clientSecret - The client secret required for generator.
//      * @param {string} redirectUri - The redirect URI for generator.
//      * @param {string} scope - The scope of access requested by the application.
//      * @param {boolean} isTokenGenerator - Whether to create a token generator (true) or auth URL generator (false).
//      * @returns {Promise<any>} - A promise resolving to an instance of the specified generator.
//      */
    
//     static async createGenerator(platform: Platform, clientId: string, clientSecret: string, redirectUri: string, scope: string, isTokenGenerator: boolean): Promise<any> {
//         try {
//             const module = await import(`../resources/${platform.toLowerCase()}`);
//             console.log('=================>',module)
//             if (isTokenGenerator) {
//                 if (platform === 'Meta') {
//                     return module.createMetaLongLivedAccessToken(clientId, clientSecret, redirectUri);
//                 } else if (platform === 'Google') {
//                     return module.AccessToken(clientId, clientSecret, redirectUri);
//                 }
//             } else {
//                 if (platform === 'Meta') {
//                     return module.GenerateMetaAuthUrl(clientId, redirectUri, [scope]);
//                 } else if (platform === 'Google') {
//                     return module.AuthUrlGenerator(clientId, redirectUri, scope);
//                 }
//             }
//         } catch (error) {
//             console.log(error)
//             throw new Error(`Unsupported platform: ${platform}`);
//         }
//     }
// }



// const auth = async(type:string,params:any)=>{
// try{
//     const module =await import(`../resources/${type.toLocaleLowerCase()}`)
//     const platformClass = module.default;
//     return new platformClass(params)
// }catch(error) {
//     console.error(`Error creating product: ${error}`);
//     return null;

// }
// }

// const auth = async (type: string, params: any) => {
//     try {
//         const module = await import(`../resources/${type.toLowerCase()}`);
//         const platformClass = module.default;
//         return new platformClass(params);
//     } catch (error) {
//         console.error(`Error creating product: ${error}`);
//         return null;
//     }
// };

// type Platform = 'Meta' | 'Google';

// export class AuthFactory {
//     static async createGenerator(platform: Platform, clientId: string, clientSecret: string, redirectUri: string, scope: string, isTokenGenerator: boolean): Promise<any> {
//         try {
//             const platformInstance = await auth(platform, {
//                 clientId,
//                 clientSecret,
//                 redirectUri,
//                 scope,
//             });

//             if (isTokenGenerator) {
//                 return platformInstance.createTokenGenerator();
//             } else {
//                 return platformInstance.createAuthUrlGenerator();
//             }
//         } catch (error) {
//             console.log(error);
//             throw new Error(`Unsupported platform: ${platform}`);
//         }
//     }
// }

 export type Platform = 'Meta' | 'Google';
export const createPlatformInstance = async (platform: Platform, clientId: string, redirectUri: string, permissions?: string[] | string): Promise<any> => {
    try {
      const modulePath = `../resources/${platform.toLowerCase()}`;
  
      const { AuthUrlGenerator, TokenGenerator } = await import(/* webpackChunkName: "resources" */ modulePath);
  
      switch (platform) {
        case 'Meta':
          const { Google, Meta } = await import(/* webpackChunkName: "resources" */ modulePath);
          return {
            authUrlGenerator: new Meta.MetaGenerateMetaAuthUrl(clientId, redirectUri, permissions as string[]),
            longLivedAccessToken: Meta. MetaLongLivedAccessToken(clientId, 'client-secret', 'exchange-token'), // Replace 'client-secret' and 'exchange-token' with actual values
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
      console.error(`Error creating platform instance: ${error}`);
      return null;
    }
  };
  