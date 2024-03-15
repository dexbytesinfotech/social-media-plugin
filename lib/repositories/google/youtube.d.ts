declare class YoutubeRepo {
    private payload;
    constructor(payload: any);
    channelDetails(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
    channelSubscriptions(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
    channelPlaylists(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
    channelPlaylistItems(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
    channelSections(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
    languages(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
    regions(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
    channelVideos(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
    channelVideoDetails(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
    channelActivities(): Promise<import("../../resources/google/common/interfaces").GoogleResponse>;
}
export { YoutubeRepo as Repository };
