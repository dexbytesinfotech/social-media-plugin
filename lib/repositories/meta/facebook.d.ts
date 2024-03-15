declare class Facebook {
    private payload;
    constructor(payload: any);
    facebookPageDetails(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
    facebookPageToken(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
    facebookPageId(): Promise<{
        id: string;
        name: string;
    }[]>;
    facebookEvents(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
    facebookPosts(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
    facebookPhotos(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
    facebookFeeds(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
    facebookVideos(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
}
export { Facebook as Repository };
