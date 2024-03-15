import { MetaResponse } from '../common/interfaces';
type FacebookPageDetailsMethod = (pageId: string) => Promise<MetaResponse>;
export declare class FacebookPageDetails {
    private accessToken;
    constructor(accessToken: string);
    /**
     * Fetch data from the API with access token validation.
     *
     * @param pageId - The ID of the Facebook page.
     * @param fields - The fields to request from the API.
     * @returns A promise with the API response or an error object.
     */
    private fetchData;
    /**
     * Factory function to generate dynamic methods for fetching Facebook page details.
     *
     * @param fields - The fields to request from the API.
     * @returns A dynamically generated method for fetching Facebook page details.
     */
    private generateMethod;
    /**
     * Fetch basic details of a Facebook page.
     */
    fetchPageBasicDetails: FacebookPageDetailsMethod;
    /**
     * Fetch followers count of a Facebook page.
     */
    fetchPageFollowersCount: FacebookPageDetailsMethod;
    /**
     * Fetch about information of a Facebook page.
     */
    fetchPageAbout: FacebookPageDetailsMethod;
    /**
     * Fetch bio information of a Facebook page.
     */
    fetchPageBio: FacebookPageDetailsMethod;
    /**
     * Fetch Access Token of a Facebook page.
     */
    fetchPageAccessToken: FacebookPageDetailsMethod;
    /**
     * Fetch contact address of a Facebook creator.
     */
    fetchPageContactAddress: FacebookPageDetailsMethod;
    /**
     * Fetch category of a Facebook page.
     */
    fetchPageCategory: FacebookPageDetailsMethod;
    /**
     * Fetch link of a Facebook page.
     */
    fetchPageLink: FacebookPageDetailsMethod;
    /**
     * Fetch fan count of a Facebook page.
     */
    fetchPageFanCount: FacebookPageDetailsMethod;
    /**
     * Fetch awards of a Facebook page.
     */
    fetchPageAwards: FacebookPageDetailsMethod;
    /**
     * Fetch category list of a Facebook page.
     */
    fetchPageCategoryList: FacebookPageDetailsMethod;
    /**
     * Fetch Instagram user ID connected to a Facebook page.
     */
    fetchInstagramUserId: FacebookPageDetailsMethod;
    /**
     * Fetch ad campaign details of a Facebook page.
     */
    fetchPageAdCampaign: FacebookPageDetailsMethod;
    /**
     * Fetch affiliation information of a Facebook page.
     */
    fetchPageAffiliation: FacebookPageDetailsMethod;
    /**
     * Fetch Facebook App ID associated with a Facebook page.
     */
    fetchPageAppId: FacebookPageDetailsMethod;
    /**
     * Fetch artists liked by a Facebook page.
     */
    fetchPageArtistWeLike: FacebookPageDetailsMethod;
    /**
     * Fetch attire information of a Facebook page.
     */
    fetchPageAttire: FacebookPageDetailsMethod;
    /**
     * Fetch band interests of a Facebook page.
     */
    fetchPageBandInterests: FacebookPageDetailsMethod;
    /**
     * Fetch band members of a Facebook page.
     */
    fetchPageBandMembers: FacebookPageDetailsMethod;
    /**
     * Fetch birthday information of a Facebook page.
     */
    fetchPageBirthday: FacebookPageDetailsMethod;
    /**
     * Fetch booking agent details of a Facebook page.
     */
    fetchPageBookingAgent: FacebookPageDetailsMethod;
    /**
     * Fetch the date when a Facebook page was created.
     */
    fetchPageBuilt: FacebookPageDetailsMethod;
    /**
     * Fetch business details of a Facebook page.
     */
    fetchPageBusiness: FacebookPageDetailsMethod;
    /**
     * Fetch whether checking in is allowed on a Facebook page.
     */
    fetchPageCanCheckIn: FacebookPageDetailsMethod;
    /**
     * Fetch whether posting on a Facebook page is allowed.
     */
    fetchPageCanPost: FacebookPageDetailsMethod;
    /**
     * Fetch check-in information of a Facebook page.
     */
    fetchPageCheckins: FacebookPageDetailsMethod;
    /**
     * Fetch the company overview of a Facebook page.
     */
    fetchPageCompanyOverview: FacebookPageDetailsMethod;
    /**
     * Fetch the number of page likes from specific countries.
     */
    fetchPageCountryPageLikes: FacebookPageDetailsMethod;
    /**
     * Fetch the cover photo details of a Facebook page.
     */
    fetchPageCoverPhoto: FacebookPageDetailsMethod;
    /**
     * Fetch delivery and pickup options information of a Facebook page.
     */
    fetchPageDeliveryAndPickupOptionInfo: FacebookPageDetailsMethod;
    /**
     * Fetch the description of a Facebook page.
     */
    fetchPageDescription: FacebookPageDetailsMethod;
    /**
     * Fetch the HTML-formatted description of a Facebook page.
     */
    fetchPageDescriptionHtml: FacebookPageDetailsMethod;
    /**
     * Fetch differently open offerings of a Facebook page.
     */
    fetchPageDifferentlyOpenOfferings: FacebookPageDetailsMethod;
    /**
     * Fetch the display subtext of a Facebook page.
     */
    fetchPageDisplaySubtext: FacebookPageDetailsMethod;
    /**
     * Fetch the link to check if the viewer has permission on Instagram.
     */
    fetchPageViewerPermissionLink: FacebookPageDetailsMethod;
    /**
     * Fetches data related to the founded category.
     *
     */
    fetchPageFounded: FacebookPageDetailsMethod;
    /**
     * Fetches data related to the features category.
     *
     */
    fetchPageFeatures: FacebookPageDetailsMethod;
    /**
     * Fetches data related to the foodStyle category.
     *
     */
    fetchPageFoodStyle: FacebookPageDetailsMethod;
    /**
     * Fetches data related to fantasyGames.
     *
     */
    fetchFantasyGames: FacebookPageDetailsMethod;
    /**
     * Fetches featured videos data.
     *
     */
    fetchPageFeaturedVideos: FacebookPageDetailsMethod;
    /**
     * Method: fetchPageEmails
     * Description: Fetches emails for the page.
     */
    fetchPageEmails: FacebookPageDetailsMethod;
    /**
     * Method: fetchPageEvents
     * Description: Fetches events for the page.
     */
    fetchPageEvents: FacebookPageDetailsMethod;
    /**
     * Method: fetchPageEngagement
     * Description: Fetches engagement data for the page.
     */
    fetchPageEngagement: FacebookPageDetailsMethod;
    /**
     * Method: fetchPageGenre
     * Description: Fetches genre information for the page.
     */
    fetchPageGenre: FacebookPageDetailsMethod;
    /**
     * Method: fetchPageGroups
     * Description: Fetches groups associated with the page.
     */
    fetchPageGroups: FacebookPageDetailsMethod;
    /**
     * Method: fetchPageGeneralInfo
     * Description: Fetches general information for the page.
     */
    fetchPageGeneralInfo: FacebookPageDetailsMethod;
    /**
     * Method: fetchPageGlobalBrandRootId
     * Description: Fetches the root ID of the global brand for the page.
     */
    fetchPageGlobalBrandRootId: FacebookPageDetailsMethod;
    /**
     * Method: fetchPageGlobalBrandPageName
     * Description: Fetches the page name associated with the global brand.
     */
    fetchPageGlobalBrandPageName: FacebookPageDetailsMethod;
    /**
     * Fetches data related to active hours of a page.
     * @type {Function}
     */
    fetchPageActiveHours: FacebookPageDetailsMethod;
    /**
     * Fetches data related to the hometown of a page.
     * @type {Function}
     */
    fetchPageHometown: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page has added the app.
     * @type {Function}
     */
    fetchPageHasAddedApp: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page has a WhatsApp number.
     * @type {Function}
     */
    fetchPageHasWhatsAppNumber: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page has a WhatsApp Business number.
     * @type {Function}
     */
    fetchPageHasWhatsAppBusinessNumber: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page has transitioned to a new page experience.
     * @type {Function}
     */
    fetchPageHasTransitionedToNewPageExperience: FacebookPageDetailsMethod;
    /**
     * Fetches the ID of a page.
     * @type {Function}
     */
    fetchPageId: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is a chain.
     * @type {Function}
     */
    fetchPageIsChain: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is owned.
     * @type {Function}
     */
    fetchPageIsOwned: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is published.
     * @type {Function}
     */
    fetchPageIsPublished: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is unclaimed.
     * @type {Function}
     */
    fetchPageIsUnclaimed: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is always open.
     * @type {Function}
     */
    fetchPageIsAlwaysOpen: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is a community page.
     * @type {Function}
     */
    fetchPageIsCommunityPage: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is permanently closed.
     * @type {Function}
     */
    fetchPageIsPermanentlyClosed: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is subscribed to webhooks.
     * @type {Function}
     */
    fetchPageIsWebhooksSubscribed: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is a Messenger Platform bot.
     * @type {Function}
     */
    fetchPageIsMessengerPlatformBot: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is eligible for branded content.
     * @type {Function}
     */
    fetchPageIsEligibleForBrandedContent: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the Messenger bot Get Started is enabled for the page.
     * @type {Function}
     */
    fetchPageIsMessengerBotGetStartedEnabled: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page is eligible to disable Connect Instagram button for non-page admin AM Web.
     * @type {Function}
     */
    fetchPageIsEligibleForDisableConnectIgBtnForNonPageAdminAmWeb: FacebookPageDetailsMethod;
    /**
     * Fetches the impressum of a page.
     * @type {Function}
     */
    fetchPageImpressum: FacebookPageDetailsMethod;
    /**
     * Fetches data related to the influences of a page.
     * @type {Function}
     */
    fetchPageInfluences: FacebookPageDetailsMethod;
    /**
     * Fetches pages liked by the current page.
     * @type {Function}
     */
    fetchPagesLikedByPage: FacebookPageDetailsMethod;
    /**
     * Fetches the location data of the page.
     * @type {Function}
     */
    fetchPageLocation: FacebookPageDetailsMethod;
    /**
     * Fetches data related to whether the page has accepted leaden terms of service.
     * @type {Function}
     */
    fetchPageLeadenTosAccepted: FacebookPageDetailsMethod;
    /**
     * Fetches data related to the user accepting leaden terms of service on the page.
     * @type {Function}
     */
    fetchPageLeadenTosAcceptingUser: FacebookPageDetailsMethod;
    /**
     * Fetches data related to the time of leaden terms of service acceptance by the page.
     * @type {Function}
     */
    fetchPageLeadenTosAcceptanceTime: FacebookPageDetailsMethod;
    /**
     * Fetches data related to the page's MPG (Miles Per Gallon) information.
     * @type {Function}
     */
    fetchPageMPG: FacebookPageDetailsMethod;
    /**
     * Fetches the number of members associated with the page.
     * @type {Function}
     */
    fetchPageMembers: FacebookPageDetailsMethod;
    /**
     * Fetches the mission statement of the page.
     * @type {Function}
     */
    fetchPageMission: FacebookPageDetailsMethod;
    /**
     * Fetches the review status of the page's merchant.
     * @type {Function}
     */
    fetchPageMerchantReviewStatus: FacebookPageDetailsMethod;
    /**
     * Fetches default icebreakers for Messenger ads associated with the page.
     * @type {Function}
     */
    fetchPageMessengerAdsDefaultIceBreakers: FacebookPageDetailsMethod;
    /**
     * Fetches the type of quick replies used in Messenger ads associated with the page.
     * @type {Function}
     */
    fetchPageMessengerAdsQuickRepliesType: FacebookPageDetailsMethod;
    /**
     * Fetches default quick replies for Messenger ads associated with the page.
     * @type {Function}
     */
    fetchPageMessengerAdsDefaultQuickReplies: FacebookPageDetailsMethod;
    /**
     * Fetches the name of the page.
     * @type {Function}
     */
    fetchPageName: FacebookPageDetailsMethod;
    /**
     * Fetches the network information related to the page.
     * @type {Function}
     */
    fetchPageNetwork: FacebookPageDetailsMethod;
    /**
     * Fetches the count of new likes received by the page.
     * @type {Function}
     */
    fetchPageNewLikeCount: FacebookPageDetailsMethod;
    /**
     * Fetches the name of the page with a location descriptor.
     * @type {Function}
     */
    fetchPageNameWithLocationDescriptor: FacebookPageDetailsMethod;
    /**
     * Fetches the overall star rating of the page.
     * @type {Function}
     */
    fetchPageOverallStarRating: FacebookPageDetailsMethod;
    /**
     * Fetches information about the page's eligibility for offers.
     * @type {Function}
     */
    fetchPageOfferEligibility: FacebookPageDetailsMethod;
    /**
     * Fetches information about the parking facilities associated with the page.
     * @type {Function}
     */
    fetchPageParking: FacebookPageDetailsMethod;
    /**
     * Fetches the price range information associated with the page.
     * @type {Function}
     */
    fetchPagePriceRange: FacebookPageDetailsMethod;
    /**
     * Fetches information about the entity that produced the page.
     * @type {Function}
     */
    fetchPageProducedBy: FacebookPageDetailsMethod;
    /**
     * Fetches the plot outline associated with the page.
     * @type {Function}
     */
    fetchPagePlotOutline: FacebookPageDetailsMethod;
    /**
     * Fetches personal information associated with the page.
     * @type {Function}
     */
    fetchPagePersonalInfo: FacebookPageDetailsMethod;
    /**
     * Fetches contact information for press-related inquiries.
     * @type {Function}
     */
    fetchPagePressContact: FacebookPageDetailsMethod;
    /**
     * Fetches information about pickup options associated with the page.
     * @type {Function}
     */
    fetchPagePickUpOptions: FacebookPageDetailsMethod;
    /**
     * Fetches information about public transit options associated with the page.
     * @type {Function}
     */
    fetchPagePublicTransit: FacebookPageDetailsMethod;
    /**
     * Fetches information about payment options accepted by the page.
     * @type {Function}
     */
    fetchPagePaymentOptions: FacebookPageDetailsMethod;
    /**
     * Fetches the URL to the privacy information associated with the page.
     * @type {Function}
     */
    fetchPagePrivacyInfoUrl: FacebookPageDetailsMethod;
    /**
     * Fetches personal interests associated with the page.
     * @type {Function}
     */
    fetchPagePersonalInterests: FacebookPageDetailsMethod;
    /**
     * Fetches safety information related to pharmaceuticals associated with the page.
     * @type {Function}
     */
    fetchPagePharmaSafetyInfo: FacebookPageDetailsMethod;
    /**
     * Fetches information about the page's eligibility for promotions.
     * @type {Function}
     */
    fetchPagePromotionEligible: FacebookPageDetailsMethod;
    /**
     * Fetches the reason for the page's ineligibility for promotions.
     * @type {Function}
     */
    fetchPagePromotionIneligibleReason: FacebookPageDetailsMethod;
    /**
     * Fetches the current profile picture of the page.
     * @type {Function}
     */
    fetchPagePicture: FacebookPageDetailsMethod;
    /**
     * Fetches information about products associated with the page.
     * @type {Function}
     */
    fetchPageProducts: FacebookPageDetailsMethod;
    /**
     * Fetches the access token associated with the page.
     * @type {Function}
     */
    fetchPageToken: FacebookPageDetailsMethod;
    /**
     * Fetches the type of place associated with the page.
     * @type {Function}
     */
    fetchPagePlaceType: FacebookPageDetailsMethod;
    /**
     * Fetches the count of ratings for the page.
     * @function
     * @returns {RatingCount} - Number of ratings received by the page.
     */
    fetchPageRatingCount: FacebookPageDetailsMethod;
    /**
     * Fetches the record label associated with the page.
     * @function
     * @returns {RecordLabelInfo} - Details about the record label.
     */
    fetchPageRecordLabel: FacebookPageDetailsMethod;
    /**
     * Fetches the release date information for the page.
     * @function
     * @returns {ReleaseDate} - Date when the page was released.
     */
    fetchPageReleaseDate: FacebookPageDetailsMethod;
    /**
     * Fetches the season information applicable to TV shows associated with the page.
     * @function
     * @returns {SeasonInfo} - Details about the TV show season.
     */
    fetchPageSeason: FacebookPageDetailsMethod;
    /**
     * Fetches the studio information applicable to film production associated with the page.
     * @function
     * @returns {StudioInfo} - Details about the film production studio.
     */
    fetchPageStudio: FacebookPageDetailsMethod;
    /**
     * Fetches the air schedule of the TV show applicable to TV shows associated with the page.
     * @function
     * @returns {ScheduleInfo} - Details about the TV show air schedule.
     */
    fetchPageSchedule: FacebookPageDetailsMethod;
    /**
     * Fetches the single-line address associated with the page.
     * @function
     * @returns {SingleLineAddress} - Single-line address information.
     */
    fetchPageSingleLineAddress: FacebookPageDetailsMethod;
    /**
     * Fetches the store location descriptor for location pages associated with the page.
     * @function
     * @returns {StoreLocationDescriptor} - Descriptor for the store location.
     */
    fetchPageStoreLocationDescriptor: FacebookPageDetailsMethod;
    /**
     * Fetches whether the page supports a donate button in live videos.
     * @function
     * @returns {boolean} - Indicates whether the page supports the donate button in live videos.
     */
    fetchPageSupportsDonateButtonInLiveVideo: FacebookPageDetailsMethod;
    /**
     * Fetches the temporary status information associated with the page.
     * @function
     * @returns {TemporaryStatusInfo} - Information about the temporary status of the page.
     */
    fetchPageTemporaryStatus: FacebookPageDetailsMethod;
    /**
     * Fetches the count of people talking about the page.
     * @function
     * @returns {TalkingAboutCount} - Number of people talking about the page.
     */
    fetchPageTalkingAboutCount: FacebookPageDetailsMethod;
    /**
     * Fetches the username associated with the page.
     * @function
     * @returns {UsernameInfo} - Username information of the page.
     */
    fetchPageUsername: FacebookPageDetailsMethod;
    /**
     * Fetches VoIP (Voice over Internet Protocol) information associated with the page.
     * @function
     * @returns {VoipInfo} - VoIP information related to the page.
     */
    fetchPageVoipInfo: FacebookPageDetailsMethod;
    /**
     * Fetches the verification status of the page.
     * @function
     * @returns {VerificationStatus} - Verification status of the page.
     */
    fetchPageVerificationStatus: FacebookPageDetailsMethod;
    /**
     * Fetches the WhatsApp number associated with the page.
     * @function
     * @returns {WhatsAppNumberInfo} - WhatsApp number information of the page.
     */
    fetchPageWhatsAppNumber: FacebookPageDetailsMethod;
    /**
     * Fetches the count of "were here" for the page.
     * @function
     * @returns {WereHereCount} - Number of "were here" check-ins for the page.
     */
    fetchPageWereHereCount: FacebookPageDetailsMethod;
    /**
     * Fetches the welcome message flows associated with the page.
     * @function
     * @returns {WelcomeMessageFlows} - Welcome message flows of the page.
     */
    fetchPageWelcomeMessageFlows: FacebookPageDetailsMethod;
    /**
     * Fetches the website associated with the page.
     * @function
     * @returns {WebsiteInfo} - Website information of the page.
     */
    fetchPageWebsite: FacebookPageDetailsMethod;
    /**
     * Fetches information about the authorship of the page content.
     * @function
     * @returns {WrittenByInfo} - Information about the authorship of the page content.
     */
    fetchPageWrittenBy: FacebookPageDetailsMethod;
}
export {};
