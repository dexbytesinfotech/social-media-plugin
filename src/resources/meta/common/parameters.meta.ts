export const MetaParams = {
  /*
   * META FACEBOOK  PARAMETERS
   *
   */
  facebookPageId: 'accounts{id,name}', // Retrieve the ID and name of connected Facebook pages
  connectedInstagramAccount: 'connected_instagram_account', // Retrieve connected Instagram account details
  facebookPageBasics: 'id,name,followers_count,about,phone,category,fan_count,link,emails,connected_instagram_account', // Retrieve basic details of a Facebook page (ID and name)
  followersCount: 'followers_count', // Retrieve the count of followers for a Facebook page
  about: 'about', // Retrieve the about information of a Facebook page
  bio: 'bio', // Retrieve the bio information of a Facebook page
  accessToken: 'access_token', // Retrieve the access token of a Facebook page
  contactAddress: 'contact_address', // Retrieve the contact address of a Facebook creator
  phone: 'phone', // Retrieve the phone number of a Facebook page
  category: 'category', // Retrieve the category of a Facebook page
  link: 'link', // Retrieve the link of a Facebook page
  fanCount: 'fan_count', // Retrieve the count of fans for a Facebook page
  awards: 'awards', // Retrieve awards information of a Facebook page
  categoryList: 'category_list', // Retrieve the category list of a Facebook page
  me: 'me', // Retrieve information about the current user
  adCampaign: 'ad_campaign', // Retrieve information about an ad campaign
  affilation: 'affilation', // Retrieve affiliation information
  appId: 'app_id', // Retrieve the App ID associated with a page
  artistWeLike: 'artist_we_like', // Retrieve information about artists liked by a page
  attire: 'attire', // Retrieve information about attire
  bandInterests: 'band_interests', // Retrieve band interests information
  bandMembers: 'band_members', // Retrieve information about band members
  birthday: 'birthday', // Retrieve the birthday information
  bookingAgent: 'booking_agent', // Retrieve information about the booking agent
  built: 'built', // Retrieve information about when a structure was built
  business: 'business', // Retrieve business information
  canCheckIn: 'can_checkin', // Retrieve information about whether check-in is allowed
  canPost: 'can_post', // Retrieve information about whether posting is allowed
  checkins: 'checkins', // Retrieve check-in information
  companyOverview: 'company_overview', // Retrieve company overview information
  countryPageLikes: 'country_page_likes', // Retrieve country page likes information
  cover: 'cover', // Retrieve cover photo information
  deliverAndPickupOptionsInfo: 'delivery_and_pickup_options_info', // Retrieve delivery and pickup options information
  description: 'description', // Retrieve general description information
  descriptionHtml: 'description_html', // Retrieve HTML version of the general description
  differentlyOpenOfferings: 'differently_open_offerings', // Retrieve information about differently open offerings
  displaySubtext: 'display_subtext', // Retrieve display subtext information
  doesViewerHavePagePermissionLinkIg: 'does_viewer_have_page_permission_link_ig', // Retrieve information about page permissions
  emails: 'emails', // Retrieve email addresses associated with the page
  events: {
    events: 'events', // Retrieve event details
    limit: (postLimit: number) => `.limit(${postLimit})`, // Limit the number of events retrieved
    attendingCount: 'attending_count', // Retrieve the count of attendees for an event
    canGuestsInvite: 'can_guests_invite', // Check if guests can invite others to the event
    category: 'category', // Retrieve the category of the event
    cover: 'cover', // Retrieve the cover photo of the event
    declinedCount: 'declined_count', // Retrieve the count of declined invitations for an event
    createdTime: 'created_count', // Retrieve the creation time of the event
    discountCodeEnabled: 'discount_code_enabled', // Check if a discount code is enabled for the event
    endTime: 'end_time', // Retrieve the end time of the event
    description: 'description', // Retrieve the description of the event
    guestListEnabled: 'guest_list_enabled', // Check if a guest list is enabled for the event
    eventTimes: 'event_times', // Retrieve the times of the event
    id: 'id', // Retrieve the ID of the event
    isCanceled: 'is_canceled', // Check if the event is canceled
    interestedCount: 'interested_count', // Retrieve the count of interested users for an event
    isDraft: 'is_draft', // Check if the event is a draft
    isOnline: 'is_online', // Check if the event is online
    isPageOwned: 'is_page_owned', // Check if the event is owned by the page
    maybeCount: 'maybe_count', // Retrieve the count of maybe responses for an event
    name: 'name', // Retrieve the name of the event
    onlineEventFormate: 'online_event_formate', // Retrieve the format of the online event
    onlineEventThirdPartyUrl: 'online_event_third_party_url', // Retrieve the third-party URL for the online event
    owner: 'owner', // Retrieve the owner of the event
    place: 'place', // Retrieve the place of the event
    scheduledPublishTime: 'shceduled_publish_time', // Retrieve the scheduled publish time of the event
    startTime: 'start_time', // Retrieve the start time of the event
    ticketUri: 'ticket_uri', // Retrieve the ticket URI for the event
    ticketUriStartSalesTime: 'ticket_uri_start_sales_time', // Retrieve the start sales time for the ticket URI
    ticketingPrivacyUri: 'ticketing_privacy_uri', // Retrieve the privacy URI for ticketing
    ticketingTermUri: 'ticketing_term_uri', // Retrieve the terms URI for ticketing
    timezone: 'timezone', // Retrieve the timezone of the event
    type: 'type', // Retrieve the type of the event
    updatedTime: 'updated_time', // Retrieve the last update time of the event
    comments: 'comments', // Retrieve comments on the event
    noreplyCount: 'noreply_count', // Retrieve the count of no-reply responses for an event
    feed: 'feed', // Retrieve the feed of the event
    photos: 'photos', // Retrieve photos associated with the event
    picture: 'picture', // Retrieve the picture of the event
    liveVideos: 'live_videos', // Retrieve live videos associated with the event
    roles: 'roles', // Retrieve roles associated with the event
    ticketTiers: 'ticket_tiers', // Retrieve ticket tiers for the event
    videos: 'videos', // Retrieve videos associated with the event
  },
  engagement: 'engagement', // Retrieve engagement metrics for the page
  founded: 'founded', // Retrieve the founding date of the page
  foodStyle: 'food_style', // Retrieve the food style of the page
  features: 'features', // Retrieve features of the page
  fantasyGames: 'fantasy_games', // Retrieve information about fantasy games associated with the page
  featuredVideo: 'featured_video', // Retrieve the featured video of the page
  genre: 'genre', // Retrieve the genre of the page
  groups: 'groups', // Retrieve groups associated with the page
  genralInfo: 'genral_info', // Retrieve general information about the page
  generalManager: 'general_manager', // Retrieve the general manager of the page
  globalBrandRootId: 'global_brand_root_id', // Retrieve the global brand root ID of the page
  globalBrandPageName: 'global_brand_page_name', // Retrieve the global brand page name of the page
  hours: 'hours', // Retrieve the hours of operation for the page
  hometown: 'hometown', // Retrieve the hometown of the page
  hasLeadAccess: 'has_lead_access', // Check if the page has lead access
  hasAddedApp: 'has_added_app', // Check if the page has added an app
  hasWhatsAppNumber: 'has_whatsapp_number', // Check if the page has a WhatsApp number
  hasWhatsAppBusinessNumber: 'has_whatsapp_business_number', // Check if the page has a WhatsApp business number
  hasTransitionedToNewPageExperience: 'has_transitioned_to_new_page_experience', // Check if the page has transitioned to the new page experience
  id: 'id', // Retrieve the ID of the page
  isChain: 'is_chain', // Check if the page is part of a chain
  isOwned: 'is_owned', // Check if the page is owned
  isPublished: 'is_published', // Check if the page is published
  isUnclaimed: 'is_unclaimed', // Check if the page is unclaimed
  isAlwaysOpen: 'is_always_open', // Check if the page is always open
  isCommunityPage: 'is_community_page', // Check if the page is a community page
  isPermanentlyClosed: 'is_permanently_closed', // Check if the page is permanently closed
  isWebHooksSubscribed: 'is_webhooks_subscribed', // Check if the page is subscribed to webhooks
  isMessengerPlateformBot: 'is_messenger_platform_bot', // Check if the page is a Messenger platform bot
  isEligibleForBrandedContent: 'is_eligible_for_branded_content', // Check if the page is eligible for branded content
  isMessengerBotGetStartedEnabled: 'is_messenger_bot_get_started_enabled', // Check if the Messenger bot get started feature is enabled
  isEligibleForDisableConnectIgBtnForNonPageAdminAmWeb:
    'is_eligible_for_disable_connect_ig_btn_for_non_page_admin_am_web', // Check if the page is eligible to disable the connect Instagram button for non-page admins on the web
  impressum: 'impressum', // Retrieve the impressum of the page
  influences: 'influlences', // Retrieve influences of the page
  indexedVideos: 'indexed_videos', // Retrieve indexed videos of the page
  imageCopyright: 'image_copyright', // Retrieve image copyright information of the page
  instagramAccounts: 'instagram_accounts', // Retrieve Instagram accounts associated with the page
  instagramBusinessAccount: 'instagram_business_account', // Retrieve the Instagram business account of the page
  likes: 'likes', // Retrieve likes of the page
  location: 'location', // Retrieve the location of the page
  locations: 'locations', // Retrieve locations associated with the page
  liveVideos: 'live_videos', // Retrieve live videos of the page
  leadenTosAccepted: 'leaden_tos_accepted', // Retrieve the Leadgen terms of service accepted status
  leadenTosAcceptingUser: 'leaden_tos_accepting-user', // Retrieve the user who accepted the Leadgen terms of service
  leadenTosAcceptanceTime: 'leaden_tos_acceptance_time', // Retrieve the acceptance time of the Leadgen terms of service
  leadenForms: 'leaden_forms', // Retrieve Leadgen forms of the page
  mpg: 'mpg', // Retrieve the miles per gallon (MPG) of the page
  members: 'members', // Retrieve members of the page
  mission: 'mission', // Retrieve the mission of the page
  merchantId: 'merchant_id', // Retrieve the merchant ID of the page
  messengerProfile: 'messenger_profile', // Retrieve the Messenger profile of the page
  mediaFingerprints: 'media_fingerprints', // Retrieve media fingerprints of the page
  messengerLeadForms: 'messenger_lead_forms', // Retrieve Messenger lead forms of the page
  merchantReviewStatus: 'merchnat_review_status', // Retrieve the merchant review status of the page
  messagingFeatureReview: 'messaging_feature_status', // Retrieve the messaging feature review status of the page
  messengerAdsQuickRepliesType: 'messenger_ads_quick_replies_type', // Retrieve the type of quick replies for Messenger ads
  messengerAdsDefaultIcebreakers: 'messenger_ads_default_icebreakers', // Retrieve default icebreakers for Messenger ads
  messengerAdsDefaultQuickReplies: 'messenger_ads_default_quick_replies', // Retrieve default quick replies for Messenger ads
  name: 'name', // Retrieve the name of the page
  network: 'network', // Retrieve the network of the page
  newLikeCount: 'new_like_count', // Retrieve the new like count of the page
  nameWithLocationDescriptor: 'name_with_location_descriptor', // Retrieve the name with location descriptor of the page
  overallStarRating: 'overall_star_rating', // Retrieve the overall star rating of the page
  offerEligible: 'offer_eligible', // Check if the page is eligible for offers
  media: {
    posts: 'posts', // Retrieve posts of the page
    feed: 'feed', // Retrieve the feed of the page
    photos: 'photos', // Retrieve photos of the page
    videos: 'videos', // Retrieve videos of the page
    // common parameters for feed, photos, posts, videos, and events
    limit: (postLimit: number) => `.limit(${postLimit})`, // Limit the number of items retrieved
    likes: 'likes.summary(true)', // Retrieve summary of likes for an item
    isInstagramEligible: 'is_instagram_eligible', // Check if the item is eligible for Instagram
    comments: 'comments.summary(true)', // Retrieve summary of comments for an item
    coordinates: 'coordinates', // Retrieve coordinates of an item
    fullPicture: 'full_picture', // Retrieve the full picture of an item
    adminCreator: 'admin_creator', // Retrieve the admin creator of an item
    dimensions: 'width,height', // Retrieve the dimensions (width and height) of an item
    instagramEligibility: 'instagram_eligibility', // Retrieve Instagram eligibility information for an item
    actions: 'actions', // Retrieve actions associated with an item
    subscribed: 'subscribed', // Check if the user is subscribed to an item
    shares: 'shares', // Retrieve shares of an item
    story: 'story', // Retrieve the story associated with an item
    statusType: 'status_type', // Retrieve the status type of an item
    properties: 'properties', // Retrieve properties of an item
    callToAction: 'call_to_action', // Retrieve the call to action of an item
    canReplyPrivately: 'can_reply_privately', // Check if the item allows private replies
    childAttachments: 'child_attachments', // Retrieve child attachments of an item
    reactions: 'reactions', // Retrieve reactions to an item
    backdatedTime: 'backdated_time', // Retrieve the backdated time of an item
    via: 'via', // Retrieve the via information of an item
    multiShareOptimized: 'multi_share_optimized', // Check if the item is optimized for multi-share
    parentId: 'parent_id', // Retrieve the parent ID of an item
    privacy: 'privacy', // Retrieve the privacy settings of an item
    place: 'place', // Retrieve the place associated with an item
    target: 'target', // Retrieve the target of an item
    messageTags: 'message_tags', // Retrieve message tags of an item
    isSpherical: 'is_spherical', // Check if the item is spherical
    message: 'message', // Retrieve the message of an item
    sharedPosts: 'shared_posts', // Retrieve shared posts of an item
    permalinkURL: 'permalink_url', // Retrieve the permalink URL of an item
    height: 'height', // Retrieve the height of an item
    width: 'width', // Retrieve the width of an item
    promotableId: 'promotable_id', // Retrieve the promotable ID of an item
    attachment: 'attachment', // Retrieve the attachment of an item
    expandedHeight: 'expanded_height', // Retrieve the expanded height of an item
    expandedWidth: 'expanded_width', // Retrieve the expanded width of an item
    targeting: 'targeting', // Retrieve targeting information of an item
    multiShareEndCard: 'multi_share_end_card', // Retrieve the multi-share end card of an item
    createdTime: 'created_time', // Retrieve the creation time of an item
    application: 'application', // Retrieve the application associated with an item
    to: 'to', // Retrieve the 'to' information of an item
    from: 'from', // Retrieve the 'from' information of an item
    icon: 'icon', // Retrieve the icon of an item
    isAppShare: 'is_app_share', // Check if the item is an app share
    feedTargeting: 'feed_targeting', // Retrieve feed targeting information of an item
    isHidden: 'is_hidden', // Check if the item is hidden
    isPublished: 'is_published', // Check if the item is published
    isExpired: 'is_expired', // Check if the item is expired
    isPopular: 'is_popular', // Check if the item is popular
    scheduledPublishTime: 'scheduled_publish_time', // Retrieve the scheduled publish time of an item
    updatedTime: 'updated_time', // Retrieve the last update time of an item
    timelineVisibility: 'timeline_visibility', // Retrieve the timeline visibility of an item
    dynamicPosts: 'dynamic_posts', // Retrieve dynamic posts of an item
    promotionStatus: 'promotion_status', // Retrieve the promotion status of an item
    storyTags: 'story_tags', // Retrieve story tags of an item
    videoBuyingEligibility: 'video_buying_eligibility', // Retrieve video buying eligibility information
    isEligibleForPromotion: 'is_eligible_for_promotion', // Check if the item is eligible for promotion
    isInlineCreated: 'is_inline_created', // Check if the item is inline created
    sponsorTag: 'sponsor_tag', // Retrieve the sponsor tag of an item
    id: 'id', // Retrieve the ID of an item
    // photos parameters
    album: 'album', // Retrieve the album of a photo
    images: 'images', // Retrieve images of a photo
    altText: 'alt_text', // Retrieve the alt text of a photo
    altTextCustom: 'alt_text_custom', // Retrieve the custom alt text of a photo
    backdateTimeGranularity: 'backdate_time_granularity', // Retrieve the backdate time granularity of a photo
    canBackdated: 'can_backdated', // Check if a photo can be backdated
    canDelete: 'can_delete', // Check if a photo can be deleted
    canTag: 'can_tag', // Check if a photo can be tagged
    link: 'link', // Retrieve the link of a photo
    name: 'name', // Retrieve the name of a photo
    nameTags: 'name_tags', // Retrieve name tags of a photo
    pageStoryId: 'page_story_id', // Retrieve the page story ID of a photo
    webpImages: 'webp_images', // Retrieve webp images of a photo
    picture: 'picture', // Retrieve the picture of a photo
    cover: 'cover', // Retrieve the cover of a photo
    // video parameters
    description: 'description', // Retrieve the description of a video
    adBreaks: 'ad_breaks', // Retrieve ad breaks of a video
    contentCategory: 'content_category', // Retrieve the content category of a video
    contentTags: 'content_tags', // Retrieve content tags of a video
    customLabels: 'custom_labels', // Retrieve custom labels of a video
    embedHtml: 'embed_html', // Retrieve the embed HTML of a video
    embeddable: 'embeddable', // Check if a video is embeddable
    event: 'event', // Retrieve the event associated with a video
    format: 'format', // Retrieve the format of a video
    isCrosspostVideo: 'is_crosspost_video', // Check if a video is a crosspost
    isEpisode: 'is_episode', // Check if a video is an episode
    isCrosspostingEligible: 'is_crossposting_eligible', // Check if a video is eligible for crossposting
    length: 'length', // Retrieve the length of a video
    liveStatus: 'live_status', // Retrieve the live status of a video
    thumbnails: 'thumbnails', // Retrieve thumbnails of a video
    pollSetting: 'poll_setting', // Retrieve poll settings of a video
    postId: 'post_id', // Retrieve the post ID of a video
    postViews: 'post_views', // Retrieve post views of a video
    source: 'source', // Retrieve the source of a video
    published: 'published', // Check if a video is published
    status: 'status', // Retrieve the status of a video
    title: 'title', // Retrieve the title of a video
    universalVideoId: 'universal_video_id', // Retrieve the universal video ID of a video
    views: 'views', // Retrieve views of a video
    captions: 'captions', // Retrieve captions of a video
    polls: 'polls', // Retrieve polls of a video
    tags: 'tags', // Retrieve tags of a video
    collaborators: 'collaborators', // Retrieve collaborators of a video
    premierLivingRoomStatus: 'premier_living_room_status', // Retrieve the premier living room status of a video
    crosspostSharedPage: 'crosspost_shared_pages', // Retrieve crosspost shared pages of a video
    videoInsights: 'video_insights', // Retrieve video insights of a video

    // events parameters
    events: 'events', // Retrieve events of the page
    attendingCount: 'attending_count', // Retrieve the count of attendees for an event
    canGuestsInvite: 'can_guests_invite', // Check if guests can invite others to the event
    category: 'category', // Retrieve the category of the event
    declinedCount: 'declined_count', // Retrieve the count of declined invitations for an event
    discountCodeEnabled: 'discount_code_enabled', // Check if a discount code is enabled for the event
    endTime: 'end_time', // Retrieve the end time of the event
    guestListEnabled: 'guest_list_enabled', // Check if a guest list is enabled for the event
    eventTimes: 'event_times', // Retrieve the times of the event
    isCanceled: 'is_canceled', // Check if the event is canceled
    interestedCount: 'interested_count', // Retrieve the count of interested users for an event
    isDraft: 'is_draft', // Check if the event is a draft
    isOnline: 'is_online', // Check if the event is online
    isPageOwned: 'is_page_owned', // Check if the event is owned by the page
    maybeCount: 'maybe_count', // Retrieve the count of maybe responses for an event
    onlineEventFormat: 'online_event_format', // Retrieve the format of the online event
    onlineEventThirdPartyUrl: 'online_event_third_party_url', // Retrieve the third-party URL for the online event
    owner: 'owner', // Retrieve the owner of the event
    startTime: 'start_time', // Retrieve the start time of the event
    ticketUri: 'ticket_uri', // Retrieve the ticket URI for the event
    ticketUriStartSalesTime: 'ticket_uri_start_sales_time', // Retrieve the start sales time for the ticket URI
    ticketingPrivacyUri: 'ticketing_privacy_uri', // Retrieve the privacy URI for ticketing
    ticketingTermUri: 'ticketing_term_uri', // Retrieve the terms URI for ticketing
    timezone: 'timezone', // Retrieve the timezone of the event
    type: 'type', // Retrieve the type of the event
    noreplyCount: 'noreply_count', // Retrieve the count of no-reply responses for an event
    liveVideos: 'live_videos', // Retrieve live videos associated with the event
    roles: 'roles', // Retrieve roles associated with the event
    ticketTiers: 'ticket_tiers', // Retrieve ticket tiers for the event
  },
  parking: 'parking', // Retrieve parking information for the page
  parentType: 'parent_type', // Retrieve the parent type of the page
  priceRange: 'price_range', // Retrieve the price range of the page
  producedBy: 'produced_by', // Retrieve the producer of the page
  plotOutline: 'plot_outline', // Retrieve the plot outline of the page
  personalInfo: 'personal_info', // Retrieve personal information of the page
  pressContact: 'press_contact', // Retrieve press contact information of the page
  pickupOptions: 'pickup_options', // Retrieve pickup options for the page
  publishedPosts: 'published_posts', // Retrieve published posts of the page
  paymentOptions: 'payment_options', // Retrieve payment options of the page
  privacyInfoUrl: 'privacy_info_url', // Retrieve the privacy information URL of the page
  productCatalogs: 'product_catalogs', // Retrieve product catalogs of the page
  personalInterests: 'personal_interests', // Retrieve personal interests of the page
  pharmaSafetyInfo: 'pharma_safety_info', // Retrieve pharmaceutical safety information of the page
  preferredAudience: 'preferred_audience', // Retrieve the preferred audience of the page
  promotionEligible: 'promotion_eligible', // Check if the page is eligible for promotion
  promotionIneligibleReason: 'promotion_ineligible_reason', // Retrieve the reason for promotion ineligibility
  pageBackendInstagramAccounts: 'page_backend_instagram_accounts', // Retrieve backend Instagram accounts of the page
  picture: 'picture', // Retrieve the picture of the page
  products: 'products', // Retrieve products of the page
  personas: 'personas', // Retrieve personas of the page
  pageToken: 'page_token', // Retrieve the page token
  placeType: 'place_type', // Retrieve the place type of the page
  publicTransit: 'public_transit', // Retrieve public transit information of the page
  roles: 'roles', // Retrieve roles of the page
  rating: 'rating', // Retrieve the rating of the page
  recipient: 'recipient', // Retrieve the recipient of the page
  ratingCount: 'rating_count', // Retrieve the rating count of the page
  recordLabel: 'record_label', // Retrieve the record label of the page
  releaseDate: 'release_date', // Retrieve the release date of the page
  rtbDynamicPosts: 'rtb_dynamic_posts', // Retrieve RTB dynamic posts of the page
  season: 'season', // Retrieve the season of the page
  studio: 'studio', // Retrieve the studio of the page
  stories: 'stories', // Retrieve stories of the page
  schedule: 'schedule', // Retrieve the schedule of the page
  starring: 'starring', // Retrieve the starring information of the page
  settings: 'settings', // Retrieve settings of the page
  startInfo: 'start_info', // Retrieve start information of the page
  storeCode: 'store_code', // Retrieve the store code of the page
  storeNumber: 'store_number', // Retrieve the store number of the page
  screenplayBy: 'screenplay_by', // Retrieve the screenplay information of the page
  subscribedApps: 'subscribed_apps', // Retrieve subscribed apps of the page
  shopSetupStatus: 'shop_setup_status', // Retrieve the shop setup status of the page
  singleLineAddress: 'single_line_address', // Retrieve the single line address of the page
  secondaryReceivers: 'secondary_receivers', // Retrieve secondary receivers of the page
  storeLocationDescriptor: 'store_location_description', // Retrieve the store location description of the page
  scheduledPosts: 'scheduled_posts', // Retrieve scheduled posts of the page
  supportsDonateButtonInLiveVideo: 'supports_donate_button_in_live_video', // Check if the page supports the donate button in live video
  tabs: 'tabs', // Retrieve tabs of the page
  tagged: 'tagged', // Retrieve tagged information of the page
  threads: 'threads', // Retrieve threads of the page
  temporaryStatus: 'temporary_status', // Retrieve the temporary status of the page
  talkingAboutCount: 'talking_about_count', // Retrieve the talking about count of the page
  username: 'username', // Retrieve the username of the page
  unreadMessageCount: 'unread_message_count', // Retrieve the unread message count of the page
  unseenMessageCount: 'unseen_message_count', // Retrieve the unseen message count of the page
  unreadNotifyCount: 'unread_notify_count', // Retrieve the unread notification count of the page
  videos: 'videos', // Retrieve videos of the page
  voipInfo: 'voip_info', // Retrieve VOIP information of the page
  videoLists: 'video_lists', // Retrieve video lists of the page
  videoReels: 'video_reels', // Retrieve video reels of the page
  verificationStatus: 'verification_status', // Retrieve the verification status of the page
  videoCopyrightRule: 'video_copyright_rule', // Retrieve the video copyright rule of the page
  whatsappNumber: 'whatsapp_number', // Retrieve the WhatsApp number of the page
  wereHereCount: 'were_here_count', // Retrieve the "were here" count of the page
  website: 'website', // Retrieve the website of the page
  welcomeMessageFlows: 'welcome_message_flows', // Retrieve welcome message flows of the page
  writtenBy: 'written_by', // Retrieve the written by information of the page
};

export const InstagramParams = {
  /*
   * META INSTAGRAM PARAMETERS
   *
   */
  id: 'id', // Retrieve the ID of the Instagram account
  username: 'username', // Retrieve the username of the Instagram account
  name: 'name', // Retrieve the name of the Instagram account
  followersCount: 'followers_count', // Retrieve the count of followers of the Instagram account
  followsCount: 'follows_count', // Retrieve the count of accounts the Instagram account follows
  biography: 'biography', // Retrieve the biography of the Instagram account
  mediaCount: 'media_count', // Retrieve the count of media items of the Instagram account
  profilePictureUrl: 'profile_picture_url', // Retrieve the URL of the profile picture of the Instagram account
  website: 'website', // Retrieve the website of the Instagram account
  media: {
    stories: 'stories', // Retrieve stories of the Instagram account
    liveMedia: 'live_media', // Retrieve live media of the Instagram account
    media: 'media', // Retrieve media items of the Instagram account
    limit: (postLimit: number) => `&limit=${postLimit}`, // Limit the number of media items retrieved
    mediaUrl: 'media_url', // Retrieve the URL of the media item
    caption: 'caption', // Retrieve the caption of the media item
    commentCount: 'comment_count', // Retrieve the count of comments on the media item
    id: 'id', // Retrieve the ID of the media item
    igId: 'ig_id', // Retrieve the Instagram ID of the media item
    isCommentEnabled: 'is_comment_enabled', // Check if comments are enabled on the media item
    isSharedToFeed: 'is_shared_to_feed', // Check if the media item is shared to the feed
    likeCount: 'like_count', // Retrieve the count of likes on the media item
    mediaProductType: 'media_product_type', // Retrieve the product type of the media item
    mediaType: 'media_type', // Retrieve the type of the media item
    owner: 'owner', // Retrieve the owner of the media item
    permalink: 'permalink', // Retrieve the permalink of the media item
    shortcode: 'shortcode', // Retrieve the shortcode of the media item
    thumbnail_url: 'thumbnail_url', // Retrieve the thumbnail URL of the media item
    timestamp: 'timestamp', // Retrieve the timestamp of the media item
    username: 'username', // Retrieve the username of the media item
    brandedContentPartnerPromote: 'branded_content_partner_promote', // Retrieve branded content partner promotion information
    children: 'children', // Retrieve child media items of the media item
    collaborators: 'collaborators', // Retrieve collaborators of the media item
    comments: 'comments', // Retrieve comments on the media item
    productTags: 'product_tags', // Retrieve product tags of the media item
  },
};
