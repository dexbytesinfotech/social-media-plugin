
import {
  YoutubeChannelDetailsParams,
  YoutubeChannelVideosParams,
  YoutubChannelSubscriptionsParams,
  YoutubeChannelActivitiesParams,
  YoutubeChannelPlaylistParams,
  YoutubeChannelPLaylistItemsParams,
  YoutubeChannelVideosDetailsParams,
  YoutubeChannelSectionsParams,
  CommonForYoutube
} from '../../../src/resources/google/common/interfaces';
import { SMPFactory } from '../../../src/index'
import { Actions, Repositories, Resources } from '../../../src/enums/generals';

 // Mocking the external dependency to avoid actual API calls during tests
jest.mock('../../../src/resources/google/youtube/youtube.ChannelDetails', () => {
  return {
    Youtube: jest.fn().mockImplementation(() => {
      return {
        // Mocking various methods of the Youtube class
        fetchChannelDetails: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchChannelVideos: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchChannelSubscriptions: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchChannelVideosDetails: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchChannelPlaylists: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchChannelPlaylistItems: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchChannelSections: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchLanguages: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchRegions: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchChannelActivities: jest.fn().mockResolvedValue({}), // Returns an empty object
        fetchVideosCaption: jest.fn().mockResolvedValue({}), // Returns an empty object
      };
    }),
  };
});

describe("get youtube channel details ", () => {
  let factory: SMPFactory;
  const channelId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "ya29.a0Ad52N3-_9vpTcuufLzAJidzeQ0Y3xv9WVKr1Xs5zXSV79D1vejjOL4qc2MSgM07kHLfiKOSqYbMvWT53VO0zbwmRRyMmUFsIfWoKorInrKuXVDpBZuz_kHhnVu5hMNGIAN3VbvzHVi_X-kEn5gXjX722vHHnQ6fOlyMMaCgYKAcwSARASFQHGX2Miv5uSyWNIDPi_QNd7FqA6xw0171"
  const params: YoutubeChannelDetailsParams = { id: true, auditDetails: true, statistics: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.channelDetails,
      payload: {
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return channel details', async () => {
    const details = await factory.operate();
    expect(details).toBeInstanceOf(Object);
    console.log(details)
  });

})

describe("get youtube channel subs ", () => {
  let factory: SMPFactory;
  const channelId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc"
  const params: YoutubChannelSubscriptionsParams = { id: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.channelSubscriptions,
      payload: {
        channelId,
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return channel subs', async () => {
    const subs = await factory.operate();
    expect(subs).toBeInstanceOf(Object);
  });

})

describe("get youtube channel playlist ", () => {
  let factory: SMPFactory;
  const channelId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc"
  const params: YoutubeChannelPlaylistParams = { id: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.channelPlaylists,
      payload: {
        channelId,
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return channel playlist', async () => {
    const playlists = await factory.operate();
    expect(playlists).toBeInstanceOf(Object);
  });

})

describe("get youtube channel playlist Items ", () => {
  let factory: SMPFactory;
  const playlistId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc"
  const params: YoutubeChannelPLaylistItemsParams = { id: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.channelPlaylistItems,
      payload: {
        playlistId,
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return channel playlist items', async () => {
    const playlistsData = await factory.operate();
    expect(playlistsData).toBeInstanceOf(Object);
  });

})

describe("get youtube channel sections ", () => {
  let factory: SMPFactory;
  const channelId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc"
  const params: YoutubeChannelSectionsParams = { id: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.channelSections,
      payload: {
        channelId,
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return channel sections', async () => {
    const sections = await factory.operate();
    expect(sections).toBeInstanceOf(Object);
  });

})

describe("get youtube languAGES ", () => {
  let factory: SMPFactory;
  const channelId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc"
  const params: YoutubeChannelSectionsParams = { id: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.languages,
      payload: {
        channelId,
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return channel languages', async () => {
    const languages = await factory.operate();
    expect(languages).toBeInstanceOf(Object);
  });

})


describe("get youtube regions ", () => {
  let factory: SMPFactory;
  const channelId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc"
  const params: CommonForYoutube = { id: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.regions,
      payload: {
        channelId,
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return regions', async () => {
    const regions = await factory.operate();
    expect(regions).toBeInstanceOf(Object);
  });
})

describe("get youtube channel videos ", () => {
  let factory: SMPFactory;
  const channelId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc"
  const params: YoutubeChannelVideosParams = { id: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.channelVideos,
      payload: {
        channelId,
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return channels videos', async () => {
    const videos = await factory.operate();
    expect(videos).toBeInstanceOf(Object);
  });
})


describe("get youtube channel videos details ", () => {
  let factory: SMPFactory;
  const videoId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc"
  const params: YoutubeChannelVideosDetailsParams = { fileDetails: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.channelVideoDetails,
      payload: {
        videoId,
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return channels videos details', async () => {
    const videos = await factory.operate();
    expect(videos).toBeInstanceOf(Object);
  });
})

describe("get youtube channel Activities ", () => {
  let factory: SMPFactory;
  const channelId = "oeivdjnhocqwddfklvADDFV"
  const accessesToken = "kvnckvdfvndkcnxxncxkcvnkvnc"
  const params: YoutubeChannelActivitiesParams = { id: true }


  beforeEach(() => {
    factory = new SMPFactory({
      resource: Resources.google,
      module: Repositories.youtube,
      action: Actions.channelActivities,
      payload: {
        channelId,
        accessesToken,
        params
      }
    })
  });
  it('Should successfully return channels activities', async () => {
    const videos = await factory.operate();
    expect(videos).toBeInstanceOf(Object);
  });
})

