// Importing enums and interfaces from respective files
import { Actions, Repositories, Resources } from './enums/generals';
import {
  EventsParams,
  PhotoParams,
  VideoParams,
  MediaParams,
  InstagramBasicDetailsParams,
  InstagramMediaParams
} from './resources/meta/common/interfaces';
import {
  YoutubChannelSubscriptionsParams,
  YoutubeChannelActivitiesParams,
  YoutubeChannelPLaylistItemsParams,
  YoutubeChannelVideosCaptions,
  YoutubeChannelVideosParams,
  YoutubeChannelDetailsParams,
  YoutubeChannelPlaylistParams,
  YoutubeChannelVideosDetailsParams,
  YoutubeChannelSectionsParams,
  StaticGoogleParam
} from './resources/google/common/interfaces';

// Exporting imported enums and interfaces
export {
  Actions,
  Repositories,
  Resources,
  EventsParams,
  PhotoParams,
  VideoParams,
  MediaParams,
  InstagramBasicDetailsParams,
  InstagramMediaParams,
  YoutubChannelSubscriptionsParams,
  YoutubeChannelActivitiesParams,
  YoutubeChannelPLaylistItemsParams,
  YoutubeChannelVideosCaptions,
  YoutubeChannelVideosParams,
  YoutubeChannelDetailsParams,
  YoutubeChannelPlaylistParams,
  YoutubeChannelVideosDetailsParams,
  YoutubeChannelSectionsParams,
  StaticGoogleParam
}

// Interface defining the structure of the request body
interface RequestBody {
  resource: Resources;
  module: Repositories;
  action: Actions;
  payload: any;
}

// SMPFactory class responsible for operating on requests
export class SMPFactory {
  private requestBody: RequestBody;

  constructor(requestBody: RequestBody) {
    this.requestBody = requestBody;
  }

  // Method to perform the requested operation asynchronously
  public async operate() {
    try {
      // Dynamically importing the repository based on the resource and module
      const application: any = await import(`./repositories/${this.requestBody.resource}/${this.requestBody.module}`);
      
      // Instantiating the repository with payload
      const repo = new application.Repository(this.requestBody.payload);
      
      // Invoking the requested action on the repository
      const response = await repo[this.requestBody.action]();
      
      // Returning the response
      return response;
    } catch (err) {
      // Returning error if any
      return err;
    }
  }
}
