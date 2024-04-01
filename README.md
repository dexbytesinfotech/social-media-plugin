This npm package is designed to simplify the process of fetching data from various platforms such as YouTube, Facebook, and Instagram. Leveraging access tokens, developers can seamlessly integrate this package into their projects to access platform data securely and efficiently. Additionally, the package facilitates the generation of access tokens, streamlining the setup process for users.

### Getting Started

Before using this package, developers must obtain developer accounts on the desired platforms. This involves registering as a developer and acquiring necessary credentials, including API keys and secrets. These credentials serve as the foundation for accessing platform data securely.

To utilize @dexbytes/social-media-plugin effectively:
You can also refer to our example repositiory https://github.com/dexbytesinfotech/smp-examples.git

### Setup

1. **Installation**: Install the package using npm or yarn:

   ```
   npm install @dexbytes/social-media-plugin
   ```

   or

   ```
   yarn add @dexbytes/social-media-plugin
   ```

2. **Generating Access Tokens**: Utilize the provided functionality to generate access tokens for the target platforms. This step is crucial for authenticating requests and accessing platform data.

3. **Configuration**: Set up the package by providing the obtained developer credentials for each platform. This ensures that the package can authenticate requests and access the desired data seamlessly.

### Usage

Once the package is installed and configured, developers can start leveraging its capabilities to access data from supported platforms. This involves making API requests using the provided methods and handling the retrieved data accordingly within their applications.

Certainly! Here's a more detailed README.md file for your package:

````markdown
# @dexbytes/social-media-plugin

## Introduction

The @dexbytes/social-media-plugin is a comprehensive TypeScript package designed to streamline interactions with the YouTube API. It provides a set of classes and methods for fetching various details and data from YouTube channels, playlists, videos, and more.

## Usage

To get started, import the necessary classes and interfaces from the package:

```typescript
import {
  SMPFactory,
  Actions,
  Repositories,
  Resources,
  YoutubeChannelDetailsParams,
  YoutubeChannelVideosParams,
  // Import other necessary interfaces
} from '@dexbytes/social-media-plugin';
```

### Fetching Channel Details

You can use the `SMPFactory` class to fetch details about a YouTube channel:

```typescript
const factory = new SMPFactory({
  resource: Resources.google,
  module: Repositories.youtube,
  action: Actions.channelDetails,
  payload: {
    accessesToken: 'your_access_token',
    params: { id: true, auditDetails: true, statistics: true },
  },
});

const channelDetails = await factory.operate();
console.log(channelDetails);
```

### Retrieving Channel Subscriptions

To retrieve a channel's subscriptions, use the `SMPFactory` class with appropriate parameters:

```typescript
const factory = new SMPFactory({
  resource: Resources.google,
  module: Repositories.youtube,
  action: Actions.channelSubscriptions,
  payload: {
    channelId: 'your_channel_id',
    accessesToken: 'your_access_token',
    params: { id: true },
  },
});

const subscriptions = await factory.operate();
console.log(subscriptions);
```

### Generating Authentication URL for Google

You can generate an authentication URL for Google using the following code:

```typescript
const factory = new SMPFactory({
  resource: Resources.google,
  module: Repositories.auth,
  action: Actions.generateAuthUrl,
  payload: {
    clientId: 'your_client_id',
    redirectUri: 'your_redirect_uri',
    scope: 'scopes_required',
  },
});

const authUrl = await factory.operate();
console.log(authUrl);
```

````typescript
const factory = new SMPFactory({
  resource: Resources.meta,
  module: Repositories.facebook,
  action: Actions.facebookPosts,
  payload: {
    // Set appropriate parameters
  }
});

const posts = await factory.operate();
console.log(posts);````

For more examples and detailed documentation, please refer to the [API Reference](API_REFERENCE.md).

## Features
YouTube API Integration: Fetch channel details, videos, playlists, and more.
Facebook API Integration: Retrieve page details, posts, photos, videos, events, etc.
Instagram API Integration: Get account details, media, stories, live media, etc.
- **Channel Details:** Fetch detailed information about a YouTube channel.
- **Channel Subscriptions:** Retrieve a channel's subscriptions.
- **Channel Playlists:** Get a list of playlists associated with a channel.
- **Channel Playlist Items:** Fetch items within a specific playlist.
- **Channel Sections:** Retrieve a channel's sections (e.g., playlists, channels).
- **Channel Videos:** Get a list of videos uploaded to a channel.
- **Channel Video Details:** Fetch details of a specific video.
- **Channel Activities:** Retrieve a channel's recent activities.
- **Google Authentication:** Generate authentication URL and obtain access tokens.



### License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT), granting developers the freedom to use, modify, and distribute the software within their projects.



````By incorporating this npm package into your projects, accessing data from platforms like YouTube, Facebook, and Instagram becomes more accessible and streamlined. Whether you are a seasoned developer or just getting started, this package simplifies the integration process and enhances the functionality of your applications.
````
