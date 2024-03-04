# @dexbytes/social-media-plugin
# Google-Meta-Integration

## Overview

## Google Platform

### Classes

1. **Google**
   - `Youtube(accessToken: string): IYoutubeRepository`: Factory method to create a new instance of the Youtube repository. It initializes a Youtube object with the provided access token.
   - `AccessToken(clientId: string, clientSecret: string, redirectUri: string): GoogleTokenGenerator`: Factory method to create a new instance of GoogleTokenGenerator. It encapsulates the creation logic for easy instantiation.
   - `AuthUrlGenerator(clientId: string, redirectUri: string, scope: string): GoogleAuthUrlGenerator`: Factory method to create a new instance of GoogleAuthUrlGenerator. It encapsulates the creation logic for easy instantiation.

### Modules

- `youtube.ChannelDetails`: Contains the `Youtube` class, implementing the `IYoutubeRepository` interface.

- `common`: Contains utility classes (`GoogleAuthUrlGenerator` and `GoogleTokenGenerator`) for generating authentication URLs and handling access tokens.

## Meta Platform

### Classes

2. **Meta**
   - `FacebookPageMedia(accessToken: string): IFacebookPageMediaRepository`: Factory method to create a new instance of the FacebookPageMedia repository.
   - `FacebookPageDetails(accessToken: string): IFacebookPageDetailsRepository`: Factory method to create a new instance of the FacebookPageDetails repository.
   - `InstagramAccountDetails(accessToken: string): IInstagramAccountDetailsRepository`: Factory method to create a new instance of the InstagramAccountDetails repository.
   - `InstagramAccountMedia(accessToken: string): IInstagramAccountMediaRepository`: Factory method to create a new instance of the InstagramAccountMedia repository.
   - `GenerateMetaAuthUrl(clientId:string,redirectUri:string, permissions:string[]): GenerateMetaAuthUrl`: Factory method to create a new instance of the GenerateMetaAuthUrl class for generating the OAuth URL.
   - `createMetaLongLivedAccessToken(clientId: string, clientSecret: string, exchangeToken: string): MetaLongLivedAccessToken`: Factory method to create a new instance of the MetaLongLivedAccessToken class for obtaining a long-lived access token.

### Modules

- `facebook`: Contains `FacebookPageDetails` and `FacebookPageMedia` classes.
- `instagram`: Contains `InstagramAccountDetails` and `InstagramAccountMedia` classes.
- `common`: Contains utility classes (`GenerateMetaAuthUrl` and `MetaLongLivedAccessToken`) for generating OAuth URLs and handling access tokens.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Use the provided factory methods to create instances of the desired repositories and utility classes.

Feel free to explore and customize the code as needed for your application's integration with Google and Meta platforms. If you encounter any issues or have questions, please refer to the documentation for each platform's API and the code comments for additional guidance.

## Contributing


## License

This code is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it in accordance with the terms specified in the license.