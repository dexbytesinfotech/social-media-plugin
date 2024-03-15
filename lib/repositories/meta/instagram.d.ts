declare class Instagram {
    private payload;
    constructor(payload: any);
    instagramDetails(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
    instagramMedia(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
    instagramStories(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
    instagramLiveMedia(): Promise<import("../../resources/meta/common/interfaces").MetaResponse>;
}
export { Instagram as Repository };
