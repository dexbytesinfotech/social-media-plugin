import { MetaResponse } from '../common/interfaces';
import { MetaParams } from '../common/parameters.meta';
import { fetchDataWithValidation } from '../common/dataValidator';

// Define a type for the dynamically generated methods
type FacebookPageDetailsMethod = (pageId: string) => Promise<MetaResponse>;

// Class for handling Facebook page details
export class FacebookPageDetails {
  private accessToken: string;

  // Constructor to initialize the class with an access token
  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  /**
   * Fetch data from the API with access token validation.
   *
   * @param pageId - The ID of the Facebook page.
   * @param fields - The fields to request from the API.
   * @returns A promise with the API response or an error object.
   */
  private async fetchData<T>(pageId: string, fields: string): Promise<T> {
    return await fetchDataWithValidation<T>(this.accessToken, pageId, fields);
  }

  /**
   * Factory function to generate dynamic methods for fetching Facebook page details.
   *
   * @param fields - The fields to request from the API.
   * @returns A dynamically generated method for fetching Facebook page details.
   */
  private generateMethod(fields: string): FacebookPageDetailsMethod {
    return async (pageId: string): Promise<MetaResponse> => {
      return this.fetchData<MetaResponse>(pageId, fields);
    };
  }

  // Generate dynamic methods for each meta key
  /**
   * Fetch basic details of a Facebook page.
   */
  fetchPageBasicDetails = this.generateMethod(MetaParams.facebookPageBasics);

  /**
   * Fetch followers count of a Facebook page.
   */
  fetchPageFollowersCount = this.generateMethod(MetaParams.followersCount);

  /**
   * Fetch about information of a Facebook page.
   */
  fetchPageAbout = this.generateMethod(MetaParams.about);

  /**
   * Fetch bio information of a Facebook page.
   */
  fetchPageBio = this.generateMethod(MetaParams.bio);

  /**
   * Fetch Access Token of a Facebook page.
   */
  fetchPageAccessToken = this.generateMethod(MetaParams.accessToken);

  /**
   * Fetch contact address of a Facebook creator.
   */
  fetchPageContactAddress = this.generateMethod(MetaParams.contactAddress);

  /**
   * Fetch category of a Facebook page.
   */
  fetchPageCategory = this.generateMethod(MetaParams.category);

  /**
   * Fetch link of a Facebook page.
   */
  fetchPageLink = this.generateMethod(MetaParams.link);

  /**
   * Fetch fan count of a Facebook page.
   */
  fetchPageFanCount = this.generateMethod(MetaParams.fanCount);

  /**
   * Fetch awards of a Facebook page.
   */
  fetchPageAwards = this.generateMethod(MetaParams.awards);

  /**
   * Fetch category list of a Facebook page.
   */
  fetchPageCategoryList = this.generateMethod(MetaParams.categoryList);

  /**
   * Fetch Instagram user ID connected to a Facebook page.
   */
  fetchInstagramUserId = this.generateMethod(MetaParams.connectedInstagramAccount);

  /**
   * Fetch ad campaign details of a Facebook page.
   */
  fetchPageAdCampaign = this.generateMethod(MetaParams.adCampaign);

  /**
   * Fetch affiliation information of a Facebook page.
   */
  fetchPageAffiliation = this.generateMethod(MetaParams.affilation);

  /**
   * Fetch Facebook App ID associated with a Facebook page.
   */
  fetchPageAppId = this.generateMethod(MetaParams.appId);

  /**
   * Fetch artists liked by a Facebook page.
   */
  fetchPageArtistWeLike = this.generateMethod(MetaParams.artistWeLike);

  /**
   * Fetch attire information of a Facebook page.
   */
  fetchPageAttire = this.generateMethod(MetaParams.attire);

  /**
   * Fetch band interests of a Facebook page.
   */
  fetchPageBandInterests = this.generateMethod(MetaParams.bandInterests);

  /**
   * Fetch band members of a Facebook page.
   */
  fetchPageBandMembers = this.generateMethod(MetaParams.bandMembers);

  /**
   * Fetch birthday information of a Facebook page.
   */
  fetchPageBirthday = this.generateMethod(MetaParams.birthday);

  /**
   * Fetch booking agent details of a Facebook page.
   */
  fetchPageBookingAgent = this.generateMethod(MetaParams.bookingAgent);

  /**
   * Fetch the date when a Facebook page was created.
   */
  fetchPageBuilt = this.generateMethod(MetaParams.built);

  /**
   * Fetch business details of a Facebook page.
   */
  fetchPageBusiness = this.generateMethod(MetaParams.business);
  /**
   * Fetch whether checking in is allowed on a Facebook page.
   */
  fetchPageCanCheckIn = this.generateMethod(MetaParams.canCheckIn);

  /**
   * Fetch whether posting on a Facebook page is allowed.
   */
  fetchPageCanPost = this.generateMethod(MetaParams.canPost);

  /**
   * Fetch check-in information of a Facebook page.
   */
  fetchPageCheckins = this.generateMethod(MetaParams.checkins);

  /**
   * Fetch the company overview of a Facebook page.
   */
  fetchPageCompanyOverview = this.generateMethod(MetaParams.companyOverview);

  /**
   * Fetch the number of page likes from specific countries.
   */
  fetchPageCountryPageLikes = this.generateMethod(MetaParams.countryPageLikes);

  /**
   * Fetch the cover photo details of a Facebook page.
   */
  fetchPageCoverPhoto = this.generateMethod(MetaParams.cover);

  /**
   * Fetch delivery and pickup options information of a Facebook page.
   */
  fetchPageDeliveryAndPickupOptionInfo = this.generateMethod(MetaParams.deliverAndPickupOptionsInfo);

  /**
   * Fetch the description of a Facebook page.
   */
  fetchPageDescription = this.generateMethod(MetaParams.description);

  /**
   * Fetch the HTML-formatted description of a Facebook page.
   */
  fetchPageDescriptionHtml = this.generateMethod(MetaParams.descriptionHtml);

  /**
   * Fetch differently open offerings of a Facebook page.
   */
  fetchPageDifferentlyOpenOfferings = this.generateMethod(MetaParams.differentlyOpenOfferings);

  /**
   * Fetch the display subtext of a Facebook page.
   */
  fetchPageDisplaySubtext = this.generateMethod(MetaParams.displaySubtext);

  /**
   * Fetch the link to check if the viewer has permission on Instagram.
   */
  fetchPageViewerPermissionLink = this.generateMethod(MetaParams.doesViewerHavePagePermissionLinkIg);

  /**
   * Fetches data related to the founded category.
   *
   */
  fetchPageFounded = this.generateMethod(MetaParams.founded);

  /**
   * Fetches data related to the features category.
   *
   */
  fetchPageFeatures = this.generateMethod(MetaParams.features);

  /**
   * Fetches data related to the foodStyle category.
   *
   */
  fetchPageFoodStyle = this.generateMethod(MetaParams.foodStyle);

  /**
   * Fetches data related to fantasyGames.
   *
   */
  fetchFantasyGames = this.generateMethod(MetaParams.fantasyGames);

  /**
   * Fetches featured videos data.
   *
   */
  fetchPageFeaturedVideos = this.generateMethod(MetaParams.featuredVideo);

  /**
   * Method: fetchPageEmails
   * Description: Fetches emails for the page.
   */
  fetchPageEmails = this.generateMethod(MetaParams.emails);

  /**
   * Method: fetchPageEvents
   * Description: Fetches events for the page.
   */
  fetchPageEvents = this.generateMethod(MetaParams.events.events);

  /**
   * Method: fetchPageEngagement
   * Description: Fetches engagement data for the page.
   */
  fetchPageEngagement = this.generateMethod(MetaParams.engagement);

  /**
   * Method: fetchPageGenre
   * Description: Fetches genre information for the page.
   */
  fetchPageGenre = this.generateMethod(MetaParams.genre);

  /**
   * Method: fetchPageGroups
   * Description: Fetches groups associated with the page.
   */
  fetchPageGroups = this.generateMethod(MetaParams.groups);

  /**
   * Method: fetchPageGeneralInfo
   * Description: Fetches general information for the page.
   */
  fetchPageGeneralInfo = this.generateMethod(MetaParams.genralInfo);

  /**
   * Method: fetchPageGlobalBrandRootId
   * Description: Fetches the root ID of the global brand for the page.
   */
  fetchPageGlobalBrandRootId = this.generateMethod(MetaParams.globalBrandRootId);

  /**
   * Method: fetchPageGlobalBrandPageName
   * Description: Fetches the page name associated with the global brand.
   */
  fetchPageGlobalBrandPageName = this.generateMethod(MetaParams.globalBrandPageName);

  /**
   * Fetches data related to active hours of a page.
   * @type {Function}
   */
  fetchPageActiveHours = this.generateMethod(MetaParams.hours);

  /**
   * Fetches data related to the hometown of a page.
   * @type {Function}
   */
  fetchPageHometown = this.generateMethod(MetaParams.hometown);

  /**
   * Fetches data related to whether the page has added the app.
   * @type {Function}
   */
  fetchPageHasAddedApp = this.generateMethod(MetaParams.hasAddedApp);

  /**
   * Fetches data related to whether the page has a WhatsApp number.
   * @type {Function}
   */
  fetchPageHasWhatsAppNumber = this.generateMethod(MetaParams.hasWhatsAppNumber);

  /**
   * Fetches data related to whether the page has a WhatsApp Business number.
   * @type {Function}
   */
  fetchPageHasWhatsAppBusinessNumber = this.generateMethod(MetaParams.hasWhatsAppBusinessNumber);

  /**
   * Fetches data related to whether the page has transitioned to a new page experience.
   * @type {Function}
   */
  fetchPageHasTransitionedToNewPageExperience = this.generateMethod(MetaParams.hasTransitionedToNewPageExperience);

  /**
   * Fetches the ID of a page.
   * @type {Function}
   */
  fetchPageId = this.generateMethod(MetaParams.id);

  /**
   * Fetches data related to whether the page is a chain.
   * @type {Function}
   */
  fetchPageIsChain = this.generateMethod(MetaParams.isChain);

  /**
   * Fetches data related to whether the page is owned.
   * @type {Function}
   */
  fetchPageIsOwned = this.generateMethod(MetaParams.isOwned);

  /**
   * Fetches data related to whether the page is published.
   * @type {Function}
   */
  fetchPageIsPublished = this.generateMethod(MetaParams.isPublished);

  /**
   * Fetches data related to whether the page is unclaimed.
   * @type {Function}
   */
  fetchPageIsUnclaimed = this.generateMethod(MetaParams.isUnclaimed);

  /**
   * Fetches data related to whether the page is always open.
   * @type {Function}
   */
  fetchPageIsAlwaysOpen = this.generateMethod(MetaParams.isAlwaysOpen);

  /**
   * Fetches data related to whether the page is a community page.
   * @type {Function}
   */
  fetchPageIsCommunityPage = this.generateMethod(MetaParams.isCommunityPage);

  /**
   * Fetches data related to whether the page is permanently closed.
   * @type {Function}
   */
  fetchPageIsPermanentlyClosed = this.generateMethod(MetaParams.isPermanentlyClosed);

  /**
   * Fetches data related to whether the page is subscribed to webhooks.
   * @type {Function}
   */
  fetchPageIsWebhooksSubscribed = this.generateMethod(MetaParams.isWebHooksSubscribed);

  /**
   * Fetches data related to whether the page is a Messenger Platform bot.
   * @type {Function}
   */
  fetchPageIsMessengerPlatformBot = this.generateMethod(MetaParams.isMessengerPlateformBot);

  /**
   * Fetches data related to whether the page is eligible for branded content.
   * @type {Function}
   */
  fetchPageIsEligibleForBrandedContent = this.generateMethod(MetaParams.isEligibleForBrandedContent);

  /**
   * Fetches data related to whether the Messenger bot Get Started is enabled for the page.
   * @type {Function}
   */
  fetchPageIsMessengerBotGetStartedEnabled = this.generateMethod(MetaParams.isMessengerBotGetStartedEnabled);

  /**
   * Fetches data related to whether the page is eligible to disable Connect Instagram button for non-page admin AM Web.
   * @type {Function}
   */
  fetchPageIsEligibleForDisableConnectIgBtnForNonPageAdminAmWeb = this.generateMethod(
    MetaParams.isEligibleForDisableConnectIgBtnForNonPageAdminAmWeb,
  );

  /**
   * Fetches the impressum of a page.
   * @type {Function}
   */
  fetchPageImpressum = this.generateMethod(MetaParams.impressum);

  /**
   * Fetches data related to the influences of a page.
   * @type {Function}
   */
  fetchPageInfluences = this.generateMethod(MetaParams.influences);

  /**
   * Fetches pages liked by the current page.
   * @type {Function}
   */
  fetchPagesLikedByPage = this.generateMethod(MetaParams.likes);

  /**
   * Fetches the location data of the page.
   * @type {Function}
   */
  fetchPageLocation = this.generateMethod(MetaParams.location);

  /**
   * Fetches data related to whether the page has accepted leaden terms of service.
   * @type {Function}
   */
  fetchPageLeadenTosAccepted = this.generateMethod(MetaParams.leadenTosAccepted);

  /**
   * Fetches data related to the user accepting leaden terms of service on the page.
   * @type {Function}
   */
  fetchPageLeadenTosAcceptingUser = this.generateMethod(MetaParams.leadenTosAcceptingUser);

  /**
   * Fetches data related to the time of leaden terms of service acceptance by the page.
   * @type {Function}
   */
  fetchPageLeadenTosAcceptanceTime = this.generateMethod(MetaParams.leadenTosAcceptanceTime);

  /**
   * Fetches data related to the page's MPG (Miles Per Gallon) information.
   * @type {Function}
   */
  fetchPageMPG = this.generateMethod(MetaParams.mpg);

  /**
   * Fetches the number of members associated with the page.
   * @type {Function}
   */
  fetchPageMembers = this.generateMethod(MetaParams.members);

  /**
   * Fetches the mission statement of the page.
   * @type {Function}
   */
  fetchPageMission = this.generateMethod(MetaParams.mission);

  /**
   * Fetches the review status of the page's merchant.
   * @type {Function}
   */
  fetchPageMerchantReviewStatus = this.generateMethod(MetaParams.merchantReviewStatus);

  /**
   * Fetches default icebreakers for Messenger ads associated with the page.
   * @type {Function}
   */
  fetchPageMessengerAdsDefaultIceBreakers = this.generateMethod(MetaParams.messengerAdsDefaultIcebreakers);

  /**
   * Fetches the type of quick replies used in Messenger ads associated with the page.
   * @type {Function}
   */
  fetchPageMessengerAdsQuickRepliesType = this.generateMethod(MetaParams.messengerAdsQuickRepliesType);

  /**
   * Fetches default quick replies for Messenger ads associated with the page.
   * @type {Function}
   */
  fetchPageMessengerAdsDefaultQuickReplies = this.generateMethod(MetaParams.messengerAdsDefaultQuickReplies);

  /**
   * Fetches the name of the page.
   * @type {Function}
   */
  fetchPageName = this.generateMethod(MetaParams.name);

  /**
   * Fetches the network information related to the page.
   * @type {Function}
   */
  fetchPageNetwork = this.generateMethod(MetaParams.network);

  /**
   * Fetches the count of new likes received by the page.
   * @type {Function}
   */
  fetchPageNewLikeCount = this.generateMethod(MetaParams.newLikeCount);

  /**
   * Fetches the name of the page with a location descriptor.
   * @type {Function}
   */
  fetchPageNameWithLocationDescriptor = this.generateMethod(MetaParams.nameWithLocationDescriptor);
  /**
   * Fetches the overall star rating of the page.
   * @type {Function}
   */
  fetchPageOverallStarRating = this.generateMethod(MetaParams.overallStarRating);

  /**
   * Fetches information about the page's eligibility for offers.
   * @type {Function}
   */
  fetchPageOfferEligibility = this.generateMethod(MetaParams.offerEligible);

  /**
   * Fetches information about the parking facilities associated with the page.
   * @type {Function}
   */
  fetchPageParking = this.generateMethod(MetaParams.parking);

  /**
   * Fetches the price range information associated with the page.
   * @type {Function}
   */
  fetchPagePriceRange = this.generateMethod(MetaParams.priceRange);

  /**
   * Fetches information about the entity that produced the page.
   * @type {Function}
   */
  fetchPageProducedBy = this.generateMethod(MetaParams.producedBy);

  /**
   * Fetches the plot outline associated with the page.
   * @type {Function}
   */
  fetchPagePlotOutline = this.generateMethod(MetaParams.plotOutline);

  /**
   * Fetches personal information associated with the page.
   * @type {Function}
   */
  fetchPagePersonalInfo = this.generateMethod(MetaParams.personalInfo);

  /**
   * Fetches contact information for press-related inquiries.
   * @type {Function}
   */
  fetchPagePressContact = this.generateMethod(MetaParams.pressContact);

  /**
   * Fetches information about pickup options associated with the page.
   * @type {Function}
   */
  fetchPagePickUpOptions = this.generateMethod(MetaParams.pickupOptions);

  /**
   * Fetches information about public transit options associated with the page.
   * @type {Function}
   */
  fetchPagePublicTransit = this.generateMethod(MetaParams.publicTransit);

  /**
   * Fetches information about payment options accepted by the page.
   * @type {Function}
   */
  fetchPagePaymentOptions = this.generateMethod(MetaParams.paymentOptions);

  /**
   * Fetches the URL to the privacy information associated with the page.
   * @type {Function}
   */
  fetchPagePrivacyInfoUrl = this.generateMethod(MetaParams.privacyInfoUrl);

  /**
   * Fetches personal interests associated with the page.
   * @type {Function}
   */
  fetchPagePersonalInterests = this.generateMethod(MetaParams.personalInterests);

  /**
   * Fetches safety information related to pharmaceuticals associated with the page.
   * @type {Function}
   */
  fetchPagePharmaSafetyInfo = this.generateMethod(MetaParams.pharmaSafetyInfo);

  /**
   * Fetches information about the page's eligibility for promotions.
   * @type {Function}
   */
  fetchPagePromotionEligible = this.generateMethod(MetaParams.promotionEligible);

  /**
   * Fetches the reason for the page's ineligibility for promotions.
   * @type {Function}
   */
  fetchPagePromotionIneligibleReason = this.generateMethod(MetaParams.promotionIneligibleReason);

  /**
   * Fetches the current profile picture of the page.
   * @type {Function}
   */
  fetchPagePicture = this.generateMethod(MetaParams.picture);

  /**
   * Fetches information about products associated with the page.
   * @type {Function}
   */
  fetchPageProducts = this.generateMethod(MetaParams.products);

  /**
   * Fetches the access token associated with the page.
   * @type {Function}
   */
  fetchPageToken = this.generateMethod(MetaParams.pageToken);

  /**
   * Fetches the type of place associated with the page.
   * @type {Function}
   */
  fetchPagePlaceType = this.generateMethod(MetaParams.placeType);

  /**
   * Fetches the count of ratings for the page.
   * @function
   * @returns {RatingCount} - Number of ratings received by the page.
   */
  fetchPageRatingCount = this.generateMethod(MetaParams.ratingCount);

  /**
   * Fetches the record label associated with the page.
   * @function
   * @returns {RecordLabelInfo} - Details about the record label.
   */
  fetchPageRecordLabel = this.generateMethod(MetaParams.recordLabel);

  /**
   * Fetches the release date information for the page.
   * @function
   * @returns {ReleaseDate} - Date when the page was released.
   */
  fetchPageReleaseDate = this.generateMethod(MetaParams.releaseDate);

  /**
   * Fetches the season information applicable to TV shows associated with the page.
   * @function
   * @returns {SeasonInfo} - Details about the TV show season.
   */
  fetchPageSeason = this.generateMethod(MetaParams.season);

  /**
   * Fetches the studio information applicable to film production associated with the page.
   * @function
   * @returns {StudioInfo} - Details about the film production studio.
   */
  fetchPageStudio = this.generateMethod(MetaParams.studio);

  /**
   * Fetches the air schedule of the TV show applicable to TV shows associated with the page.
   * @function
   * @returns {ScheduleInfo} - Details about the TV show air schedule.
   */
  fetchPageSchedule = this.generateMethod(MetaParams.schedule);

  /**
   * Fetches the single-line address associated with the page.
   * @function
   * @returns {SingleLineAddress} - Single-line address information.
   */
  fetchPageSingleLineAddress = this.generateMethod(MetaParams.singleLineAddress);

  /**
   * Fetches the store location descriptor for location pages associated with the page.
   * @function
   * @returns {StoreLocationDescriptor} - Descriptor for the store location.
   */
  fetchPageStoreLocationDescriptor = this.generateMethod(MetaParams.storeLocationDescriptor);

  /**
   * Fetches whether the page supports a donate button in live videos.
   * @function
   * @returns {boolean} - Indicates whether the page supports the donate button in live videos.
   */
  fetchPageSupportsDonateButtonInLiveVideo = this.generateMethod(MetaParams.supportsDonateButtonInLiveVideo);

  /**
   * Fetches the temporary status information associated with the page.
   * @function
   * @returns {TemporaryStatusInfo} - Information about the temporary status of the page.
   */
  fetchPageTemporaryStatus = this.generateMethod(MetaParams.temporaryStatus);

  /**
   * Fetches the count of people talking about the page.
   * @function
   * @returns {TalkingAboutCount} - Number of people talking about the page.
   */
  fetchPageTalkingAboutCount = this.generateMethod(MetaParams.talkingAboutCount);

  /**
   * Fetches the username associated with the page.
   * @function
   * @returns {UsernameInfo} - Username information of the page.
   */
  fetchPageUsername = this.generateMethod(MetaParams.username);

  /**
   * Fetches VoIP (Voice over Internet Protocol) information associated with the page.
   * @function
   * @returns {VoipInfo} - VoIP information related to the page.
   */
  fetchPageVoipInfo = this.generateMethod(MetaParams.voipInfo);

  /**
   * Fetches the verification status of the page.
   * @function
   * @returns {VerificationStatus} - Verification status of the page.
   */
  fetchPageVerificationStatus = this.generateMethod(MetaParams.verificationStatus);

  /**
   * Fetches the WhatsApp number associated with the page.
   * @function
   * @returns {WhatsAppNumberInfo} - WhatsApp number information of the page.
   */
  fetchPageWhatsAppNumber = this.generateMethod(MetaParams.whatsappNumber);

  /**
   * Fetches the count of "were here" for the page.
   * @function
   * @returns {WereHereCount} - Number of "were here" check-ins for the page.
   */
  fetchPageWereHereCount = this.generateMethod(MetaParams.wereHereCount);

  /**
   * Fetches the welcome message flows associated with the page.
   * @function
   * @returns {WelcomeMessageFlows} - Welcome message flows of the page.
   */
  fetchPageWelcomeMessageFlows = this.generateMethod(MetaParams.welcomeMessageFlows);

  /**
   * Fetches the website associated with the page.
   * @function
   * @returns {WebsiteInfo} - Website information of the page.
   */
  fetchPageWebsite = this.generateMethod(MetaParams.website);

  /**
   * Fetches information about the authorship of the page content.
   * @function
   * @returns {WrittenByInfo} - Information about the authorship of the page content.
   */
  fetchPageWrittenBy = this.generateMethod(MetaParams.writtenBy);
}
