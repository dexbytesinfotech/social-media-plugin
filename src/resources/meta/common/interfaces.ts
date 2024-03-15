/**
 * Interface for the structure of a response containing data and events.
 */
export interface MetaResponse {
  /** The data part of the response. */
  data: any;
  /** The events part of the response. */
  events: any;
}

// Interface representing the structure for return messages
export interface ReturnMessage {
  error: boolean; // Boolean indicating whether the operation resulted in an error
  message: string; // String containing a descriptive message related to the operation
}

/**
 * Interface for parameters related to video data.
 */
export interface VideoParams {
  /** Whether to include the description in the response. */
  description?: boolean;
  /** Whether to include ad breaks in the response. */
  adBreaks?: boolean;
  /** Whether to include back-dated time in the response. */
  backDatedTime?: boolean;
  /** Whether to include content category in the response. */
  contentCategory?: boolean;
  /** Whether to include content tags in the response. */
  contentTags?: boolean;
  /** Limit the number of items returned. */
  limit?: number;
  /** Whether to include back-dated time granularity in the response. */
  backDatedTimeGranularity?: boolean;
  /** Whether to include custom labels in the response. */
  customLabels?: boolean;
  /** Whether to include created time in the response. */
  createdTime?: boolean;
  /** Whether to include embed HTML in the response. */
  embedHtml?: boolean;
  /** Whether to include embeddable information in the response. */
  embeddable?: boolean;
  /** Whether to include event information in the response. */
  event?: boolean;
  /** Whether to include format information in the response. */
  formate?: boolean;
  /** Whether to include 'from' information in the response. */
  from?: boolean;
  /** Whether to include icon information in the response. */
  icon?: boolean;
  /** Whether to include ID information in the response. */
  id?: boolean;
  /** Whether to include crosspost video information in the response. */
  isCrosspostVideo?: boolean;
  /** Whether to include episode information in the response. */
  isEpisode?: boolean;
  /** Whether to include crossposting eligibility information in the response. */
  isCrosspostingEligible?: boolean;
  /** Whether to include Instagram eligibility information in the response. */
  isInstagramEligible?: boolean;
  /** Whether to include length information in the response. */
  length?: boolean;
  /** Whether to include live status information in the response. */
  liveStatus?: boolean;
  /** Whether to include thumbnails in the response. */
  thumbnails?: boolean;
  /** Whether to include poll settings in the response. */
  pollSettings?: boolean;
  /** Whether to include place information in the response. */
  place?: boolean;
  /** Whether to include post ID information in the response. */
  postId?: boolean;
  /** Whether to include post views information in the response. */
  postViews?: boolean;
  /** Whether to include privacy information in the response. */
  privacy?: boolean;
  /** Whether to include source information in the response. */
  source?: boolean;
  /** Whether to include published information in the response. */
  published?: boolean;
  /** Whether to include status information in the response. */
  status?: boolean;
  /** Whether to include title information in the response. */
  title?: boolean;
  /** Whether to include universal video ID information in the response. */
  universalVideoId?: boolean;
  /** Whether to include updated time information in the response. */
  updatedTime?: boolean;
  /** Whether to include views information in the response. */
  views?: boolean;
  /** Whether to include captions in the response. */
  captions?: boolean;
  /** Whether to include polls in the response. */
  polls?: boolean;
  /** Whether to include picture information in the response. */
  picture?: boolean;
  /** Whether to include permalink URL in the response. */
  permaLinkUrl?: boolean;
  /** Whether to include likes information in the response. */
  likes?: boolean;
  /** Whether to include tags in the response. */
  tags?: boolean;
  /** Whether to include sponsor tags in the response. */
  sponsorTags?: boolean;
  /** Whether to include collaborators information in the response. */
  collaborators?: boolean;
  /** Whether to include scheduled publish time information in the response. */
  scheduledPublishTime?: boolean;
  /** Whether to include comments in the response. */
  comments?: boolean;
  /** Whether to include premiere living rooms status information in the response. */
  premiereLivingRoomsStatus?: boolean;
  /** Whether to include crosspost shared pages information in the response. */
  crosspostSharedPages?: boolean;
  /** Whether to include video insights in the response. */
  videoInsights?: boolean;
}

/**
 * Interface for parameters related to photo data.
 */
export interface PhotoParams {
  /** Limit the number of items returned. */
  limit?: number;
  /** Whether to include album information in the response. */
  album?: boolean;
  /** Whether to include images in the response. */
  images?: boolean;
  /** Whether to include icon information in the response. */
  icon?: boolean;
  /** Whether to include alt text in the response. */
  altText?: boolean;
  /** Whether to include back-dated time in the response. */
  backdatedTime?: boolean;
  /** Whether to include custom alt text in the response. */
  altTextCustom?: boolean;
  /** Whether to include back-dated time granularity in the response. */
  backDatedTimeGranularity?: boolean;
  /** Whether to include back-dated capability in the response. */
  canBackdated?: boolean;
  /** Whether to include delete capability in the response. */
  canDelete?: boolean;
  /** Whether to include tag capability in the response. */
  canTag?: boolean;
  /** Whether to include link information in the response. */
  link?: boolean;
  /** Whether to include name information in the response. */
  name?: boolean;
  /** Whether to include name tags in the response. */
  nameTags?: boolean;
  /** Whether to include page story ID in the response. */
  pageStoryId?: boolean;
  /** Whether to include webp images in the response. */
  webpImages?: boolean;
  /** Whether to include picture information in the response. */
  picture?: boolean;
  /** Whether to include created time in the response. */
  createdTime?: boolean;
  /** Whether to include events in the response. */
  events?: boolean;
  /** Whether to include 'from' information in the response. */
  from?: boolean;
  /** Whether to include height information in the response. */
  height?: boolean;
  /** Whether to include width information in the response. */
  width?: boolean;
  /** Whether to include ID information in the response. */
  id?: boolean;
  /** Whether to include place information in the response. */
  place?: boolean;
  /** Whether to include target information in the response. */
  target?: boolean;
  /** Whether to include updated time in the response. */
  updatedTime?: boolean;
  /** Whether to include comments in the response. */
  comments?: boolean;
  /** Whether to include likes in the response. */
  likes?: boolean;
  /** Whether to include sponsor tags in the response. */
  sponsorsTag?: boolean;
  /** Whether to include create time in the response. */
  createTime?: boolean;
  /** Whether to include cover information in the response. */
  cover?: boolean;
}

/**
 * Interface for parameters related to media data, common for posts and feed.
 */
export interface MediaParams {
  /** Limit the number of items returned. */
  limit?: number;
  /** Whether to include likes in the response. */
  likes?: boolean;
  /** Whether to include comments in the response. */
  comments?: boolean;
  /** Whether to include coordinates in the response. */
  coordinates?: boolean;
  /** Whether to include full picture in the response. */
  fullPicture?: boolean;
  /** Whether to include admin creator information in the response. */
  adminCreator?: boolean;
  /** Whether to include dimensions in the response. */
  dimensions?: boolean;
  /** Whether to include width information in the response. */
  width?: boolean;
  /** Whether to include height information in the response. */
  height?: boolean;
  /** Whether to include Instagram eligibility information in the response. */
  instagramEligibility?: boolean;
  /** Whether to include actions in the response. */
  actions?: boolean;
  /** Whether to include subscribed information in the response. */
  subscribed?: boolean;
  /** Whether to include shares in the response. */
  shares?: boolean;
  /** Whether to include story information in the response. */
  story?: boolean;
  /** Whether to include status type in the response. */
  statusType?: boolean;
  /** Whether to include properties in the response. */
  properties?: boolean;
  /** Whether to include call to action in the response. */
  callToAction?: boolean;
  /** Whether to include can reply privately information in the response. */
  canReplyPrivately?: boolean;
  /** Whether to include child attachments in the response. */
  childAttachments?: boolean;
  /** Whether to include reactions in the response. */
  reactions?: boolean;
  /** Whether to include back-dated time in the response. */
  backdatedTime?: boolean;
  /** Whether to include via information in the response. */
  via?: boolean;
  /** Whether to include multi-share optimized information in the response. */
  multiShareOptimized?: boolean;
  /** Whether to include parent ID in the response. */
  parentId?: boolean;
  /** Whether to include privacy information in the response. */
  privacy?: boolean;
  /** Whether to include place information in the response. */
  place?: boolean;
  /** Whether to include target information in the response. */
  target?: boolean;
  /** Whether to include message tags in the response. */
  messageTags?: boolean;
  /** Whether to include is spherical information in the response. */
  isSpherical?: boolean;
  /** Whether to include messages in the response. */
  messages?: boolean;
  /** Whether to include shared posts in the response. */
  sharedPosts?: boolean;
  /** Whether to include permalink URL in the response. */
  permalinkUrl?: boolean;
  /** Whether to include promotable ID in the response. */
  promotableId?: boolean;
  /** Whether to include attachment information in the response. */
  attachment?: boolean;
  /** Whether to include expanded width information in the response. */
  expandedWidth?: boolean;
  /** Whether to include targeting information in the response. */
  targeting?: boolean;
  /** Whether to include multi-share end card information in the response. */
  multiShareEndCard?: boolean;
  /** Whether to include create time in the response. */
  createTime?: boolean;
  /** Whether to include application information in the response. */
  application?: boolean;
  /** Whether to include 'to' information in the response. */
  to?: boolean;
  /** Whether to include events in the response. */
  events?: boolean;
  /** Whether to include 'from' information in the response. */
  from?: boolean;
  /** Whether to include icon information in the response. */
  icon?: boolean;
  /** Whether to include feed targeting information in the response. */
  feedTargeting?: boolean;
  /** Whether to include is hidden information in the response. */
  isHidden?: boolean;
  /** Whether to include is published information in the response. */
  isPublished?: boolean;
  /** Whether to include is expired information in the response. */
  isExpired?: boolean;
  /** Whether to include is popular information in the response. */
  isPopular?: boolean;
  /** Whether to include scheduled publish time in the response. */
  scheduledPublishTime?: boolean;
  /** Whether to include updated time in the response. */
  updatedTime?: boolean;
  /** Whether to include timeline visibility information in the response. */
  timelineVisibility?: boolean;
  /** Whether to include dynamic posts in the response. */
  dynamicPosts?: boolean;
  /** Whether to include promotion status in the response. */
  promotionStatus?: boolean;
  /** Whether to include story tags in the response. */
  storyTags?: boolean;
  /** Whether to include video buying eligibility in the response. */
  videoBuyingEligibility?: boolean;
  /** Whether to include is eligible for promotion information in the response. */
  isEligibleForPromotion?: boolean;
  /** Whether to include is inline created information in the response. */
  isInlineCreated?: boolean;
  /** Whether to include sponsor tag in the response. */
  sponsorTag?: boolean;
  /** Whether to include expanded height information in the response. */
  expandedHeight?: boolean;
  /** Whether to include Instagram eligibility information in the response. */
  isInstagramEligible?: boolean;
  /** Whether to include ID information in the response. */
  id?: boolean;
  /** Whether to include album information in the response. */
  album?: boolean;
  /** Whether to include images in the response. */
  images?: boolean;
  /** Whether to include alt text in the response. */
  altText?: boolean;
  /** Whether to include custom alt text in the response. */
  altTextCustom?: boolean;
  /** Whether to include back-dated time granularity in the response. */
  backDatedTimeGranularity?: boolean;
  /** Whether to include back-dated capability in the response. */
  canBackdated?: boolean;
  /** Whether to include delete capability in the response. */
  canDelete?: boolean;
  /** Whether to include tag capability in the response. */
  canTag?: boolean;
  /** Whether to include link information in the response. */
  name?: boolean;
  /** Whether to include name tags in the response. */
  nameTags?: boolean;
  /** Whether to include page story ID in the response. */
  pageStoryId?: boolean;
  /** Whether to include webp images in the response. */
  webpImages?: boolean;
  /** Whether to include picture information in the response. */
  picture?: boolean;
}

/**
 * Interface for parameters related to event data.
 */
export interface EventsParams {
  /** Limit the number of items returned. */
  limit?: number;
  /** Whether to include attending count in the response. */
  attendingCount?: boolean;
  /** Whether to include guest invite capability in the response. */
  canGuestInvite?: boolean;
  /** Whether to include category information in the response. */
  category?: boolean;
  /** Whether to include cover information in the response. */
  cover?: boolean;
  /** Whether to include declined count in the response. */
  declinedCount?: boolean;
  /** Whether to include created time in the response. */
  createdTime?: boolean;
  /** Whether to include discount code enabled information in the response. */
  discountCodeEnabled?: boolean;
  /** Whether to include end time in the response. */
  endTime?: boolean;
  /** Whether to include description in the response. */
  description?: boolean;
  /** Whether to include guest list enabled information in the response. */
  guestListEnabled?: boolean;
  /** Whether to include event times in the response. */
  eventTimes?: boolean;
  /** Whether to include ID information in the response. */
  id?: boolean;
  /** Whether to include canceled status in the response. */
  isCanceled?: boolean;
  /** Whether to include interested count in the response. */
  intrestedCount?: boolean;
  /** Whether to include draft status in the response. */
  isDraft?: boolean;
  /** Whether to include online status in the response. */
  isOnline?: boolean;
  /** Whether to include page ownership information in the response. */
  isPageOwned?: boolean;
  /** Whether to include maybe count in the response. */
  maybeCount?: boolean;
  /** Whether to include name information in the response. */
  name?: boolean;
  /** Whether to include online event format in the response. */
  onlineEventFormate?: boolean;
  /** Whether to include online event third-party URL in the response. */
  onlineEventThirdPartyUrl?: boolean;
  /** Whether to include owner information in the response. */
  owner?: boolean;
  /** Whether to include place information in the response. */
  place?: boolean;
  /** Whether to include scheduled publish time in the response. */
  shcheduledPublishTime?: boolean;
  /** Whether to include start time in the response. */
  startTime?: boolean;
  /** Whether to include ticket URI in the response. */
  ticketUri?: boolean;
  /** Whether to include ticket URI start sales time in the response. */
  ticketUriStartSalesTime?: boolean;
  /** Whether to include ticketing privacy URI in the response. */
  ticketingPrivacyUri?: boolean;
  /** Whether to include ticketing term URI in the response. */
  ticketingTermUri?: boolean;
  /** Whether to include timezone information in the response. */
  timezone?: boolean;
  /** Whether to include type information in the response. */
  type?: boolean;
  /** Whether to include updated time in the response. */
  updatedTime?: boolean;
  /** Whether to include comments in the response. */
  comments?: boolean;
  /** Whether to include no reply count in the response. */
  noreplyCount?: boolean;
  /** Whether to include feed information in the response. */
  feed?: boolean;
  /** Whether to include photos in the response. */
  photos?: boolean;
  /** Whether to include picture information in the response. */
  picture?: boolean;
  /** Whether to include live videos in the response. */
  liveVidoes?: boolean;
  /** Whether to include roles in the response. */
  roles?: boolean;
  /** Whether to include ticket tiers in the response. */
  ticketTiers?: boolean;
  /** Whether to include videos in the response. */
  Videos?: boolean;
}

/**
 * Interface for parameters related to Instagram basic details.
 */
export interface InstagramBasicDetailsParams {
  /** Whether to include followers count in the response. */
  followersCount?: boolean;
  /** Whether to include follows count in the response. */
  followsCount?: boolean;
  /** Whether to include biography in the response. */
  biography?: boolean;
  /** Whether to include media count in the response. */
  mediaCount?: boolean;
  /** Whether to include profile picture in the response. */
  profilePicture?: boolean;
  /** Whether to include website information in the response. */
  website?: boolean;
}

/**
 * Interface for parameters related to Instagram media data.
 */
export interface InstagramMediaParams {
  /** Limit the number of items returned. */
  limit?: number;
  /** Whether to include media URL in the response. */
  mediaUrl?: boolean;
  /** Whether to include caption in the response. */
  caption?: boolean;
  /** Whether to include comments count in the response. */
  commentsCount?: boolean;
  /** Whether to include ID information in the response. */
  id?: boolean;
  /** Whether to include Instagram ID in the response. */
  igId?: boolean;
  /** Whether to include comment enabled status in the response. */
  isCommentEnabled?: boolean;
  /** Whether to include shared to feed status in the response. */
  isSharedToFeed?: boolean;
  /** Whether to include like count in the response. */
  likeCount?: boolean;
  /** Whether to include media product type in the response. */
  mediaProductType?: boolean;
  /** Whether to include media type in the response. */
  mediaType?: boolean;
  /** Whether to include owner information in the response. */
  owner?: boolean;
  /** Whether to include permalink in the response. */
  permalink?: boolean;
  /** Whether to include shortcode in the response. */
  shortcode?: boolean;
  /** Whether to include thumbnail URL in the response. */
  thumbnailUrl?: boolean;
  /** Whether to include timestamp in the response. */
  timestamp?: boolean;
  /** Whether to include username in the response. */
  username?: boolean;
  /** Whether to include branded content partner promote information in the response. */
  brandedContentPartnerPromote?: boolean;
  /** Whether to include children in the response. */
  children?: boolean;
  /** Whether to include comments in the response. */
  comments?: boolean;
  /** Whether to include collaborators in the response. */
  collaborators?: boolean;
  /** Whether to include product tags in the response. */
  productTags?: boolean;
}

/**
 * Interface for common parameters related to Instagram data.
 */
export interface CommonInstagramParams {
  /** Limit the number of items returned. */
  limit?: number;
  /** Whether to include media URL in the response. */
  mediaUrl?: boolean;
  /** Whether to include caption in the response. */
  caption?: boolean;
  /** Whether to include comments count in the response. */
  commentsCount?: boolean;
  /** Whether to include ID information in the response. */
  id?: boolean;
  /** Whether to include Instagram ID in the response. */
  igId?: boolean;
  /** Whether to include comment enabled status in the response. */
  isCommentEnabled?: boolean;
  /** Whether to include shared to feed status in the response. */
  isSharedToFeed?: boolean;
  /** Whether to include like count in the response. */
  likeCount?: boolean;
  /** Whether to include media product type in the response. */
  mediaProductType?: boolean;
  /** Whether to include media type in the response. */
  mediaType?: boolean;
  /** Whether to include owner information in the response. */
  owner?: boolean;
  /** Whether to include permalink in the response. */
  permalink?: boolean;
  /** Whether to include shortcode in the response. */
  shortcode?: boolean;
  /** Whether to include thumbnail URL in the response. */
  thumbnailUrl?: boolean;
  /** Whether to include timestamp in the response. */
  timestamp?: boolean;
  /** Whether to include username in the response. */
  username?: boolean;
  /** Whether to include branded content partner promote information in the response. */
  brandedContentPartnerPromote?: boolean;
  /** Whether to include children in the response. */
  children?: boolean;
  /** Whether to include comments in the response. */
  comments?: boolean;
  /** Whether to include collaborators in the response. */
  collaborators?: boolean;
  /** Whether to include product tags in the response. */
  productTags?: boolean;
  /** Whether to include followers count in the response. */
  followersCount?: boolean;
  /** Whether to include follows count in the response. */
  followsCount?: boolean;
  /** Whether to include biography in the response. */
  biography?: boolean;
  /** Whether to include media count in the response. */
  mediaCount?: boolean;
  /** Whether to include profile picture in the response. */
  profilePicture?: boolean;
  /** Whether to include website information in the response. */
  website?: boolean;
}

/**
 * Interface for common parameters related to Facebook data.
 */
export interface CommonFacebookParams {
  /** Whether to include ad breaks in the response. */
  adBreaks?: boolean;
  /** Whether to include back-dated time in the response. */
  backDatedTime?: boolean;
  /** Whether to include content category in the response. */
  contentCategory?: boolean;
  /** Whether to include content tags in the response. */
  contentTags?: boolean;
  /** Whether to include custom labels in the response. */
  customLabels?: boolean;
  /** Whether to include embed HTML in the response. */
  embedHtml?: boolean;
  /** Whether to include embeddable information in the response. */
  embeddable?: boolean;
  /** Whether to include event information in the response. */
  event?: boolean;
  /** Whether to include format information in the response. */
  formate?: boolean;
  /** Whether to include crosspost video information in the response. */
  isCrosspostVideo?: boolean;
  /** Whether to include episode information in the response. */
  isEpisode?: boolean;
  /** Whether to include crossposting eligibility information in the response. */
  isCrosspostingEligible?: boolean;
  /** Whether to include length information in the response. */
  length?: boolean;
  /** Whether to include live status information in the response. */
  liveStatus?: boolean;
  /** Whether to include thumbnails in the response. */
  thumbnails?: boolean;
  /** Whether to include poll settings in the response. */
  pollSettings?: boolean;
  /** Whether to include post ID information in the response. */
  postId?: boolean;
  /** Whether to include post views information in the response. */
  postViews?: boolean;
  /** Whether to include source information in the response. */
  source?: boolean;
  /** Whether to include published information in the response. */
  published?: boolean;
  /** Whether to include status information in the response. */
  status?: boolean;
  /** Whether to include title information in the response. */
  title?: boolean;
  /** Whether to include universal video ID information in the response. */
  universalVideoId?: boolean;
  /** Whether to include views information in the response. */
  views?: boolean;
  /** Whether to include captions in the response. */
  captions?: boolean;
  /** Whether to include polls in the response. */
  polls?: boolean;
  /** Whether to include permalink URL in the response. */
  permaLinkUrl?: boolean;
  /** Whether to include tags in the response. */
  tags?: boolean;
  /** Whether to include sponsor tags in the response. */
  sponsorTags?: boolean;
  /** Whether to include collaborators information in the response. */
  collaborators?: boolean;
  /** Whether to include premiere living rooms status information in the response. */
  premiereLivingRoomsStatus?: boolean;
  /** Whether to include crosspost shared pages information in the response. */
  crosspostSharedPages?: boolean;
  /** Whether to include video insights in the response. */
  videoInsights?: boolean;
  /** Whether to include sponsors tag in the response. */
  sponsorsTag?: boolean;
  /** Whether to include likes in the response. */
  likes?: boolean;
  /** Whether to include coordinates in the response. */
  coordinates?: boolean;
  /** Whether to include full picture in the response. */
  fullPicture?: boolean;
  /** Whether to include admin creator information in the response. */
  adminCreator?: boolean;
  /** Whether to include dimensions in the response. */
  dimensions?: boolean;
  /** Whether to include width information in the response. */
  width?: boolean;
  /** Whether to include height information in the response. */
  height?: boolean;
  /** Whether to include Instagram eligibility information in the response. */
  instagramEligibility?: boolean;
  /** Whether to include actions in the response. */
  actions?: boolean;
  /** Whether to include subscribed information in the response. */
  subscribed?: boolean;
  /** Whether to include shares in the response. */
  shares?: boolean;
  /** Whether to include story information in the response. */
  story?: boolean;
  /** Whether to include status type in the response. */
  statusType?: boolean;
  /** Whether to include properties in the response. */
  properties?: boolean;
  /** Whether to include call to action in the response. */
  callToAction?: boolean;
  /** Whether to include can reply privately information in the response. */
  canReplyPrivately?: boolean;
  /** Whether to include child attachments in the response. */
  childAttachments?: boolean;
  /** Whether to include reactions in the response. */
  reactions?: boolean;
  /** Whether to include back-dated time in the response. */
  backdatedTime?: boolean;
  /** Whether to include via information in the response. */
  via?: boolean;
  /** Whether to include multi-share optimized information in the response. */
  multiShareOptimized?: boolean;
  /** Whether to include parent ID in the response. */
  parentId?: boolean;
  /** Whether to include privacy information in the response. */
  privacy?: boolean;
  /** Whether to include target information in the response. */
  target?: boolean;
  /** Whether to include message tags in the response. */
  messageTags?: boolean;
  /** Whether to include is spherical information in the response. */
  isSpherical?: boolean;
  /** Whether to include messages in the response. */
  messages?: boolean;
  /** Whether to include shared posts in the response. */
  sharedPosts?: boolean;
  /** Whether to include permalink URL in the response. */
  permalinkUrl?: boolean;
  /** Whether to include promotable ID in the response. */
  promotableId?: boolean;
  /** Whether to include attachment information in the response. */
  attachment?: boolean;
  /** Whether to include expanded width information in the response. */
  expandedWidth?: boolean;
  /** Whether to include targeting information in the response. */
  targeting?: boolean;
  /** Whether to include multi-share end card information in the response. */
  multiShareEndCard?: boolean;
  /** Whether to include create time in the response. */
  createTime?: boolean;
  /** Whether to include application information in the response. */
  application?: boolean;
  /** Whether to include 'to' information in the response. */
  to?: boolean;
  /** Whether to include events in the response. */
  events?: boolean;
  /** Whether to include 'from' information in the response. */
  from?: boolean;
  /** Whether to include icon information in the response. */
  icon?: boolean;
  /** Whether to include feed targeting information in the response. */
  feedTargeting?: boolean;
  /** Whether to include is hidden information in the response. */
  isHidden?: boolean;
  /** Whether to include is published information in the response. */
  isPublished?: boolean;
  /** Whether to include is expired information in the response. */
  isExpired?: boolean;
  /** Whether to include is popular information in the response. */
  isPopular?: boolean;
  /** Whether to include scheduled publish time in the response. */
  scheduledPublishTime?: boolean;
  /** Whether to include timeline visibility information in the response. */
  timelineVisibility?: boolean;
  /** Whether to include dynamic posts in the response. */
  dynamicPosts?: boolean;
  /** Whether to include promotion status in the response. */
  promotionStatus?: boolean;
  /** Whether to include story tags in the response. */
  storyTags?: boolean;
  /** Whether to include video buying eligibility in the response. */
  videoBuyingEligibility?: boolean;
  /** Whether to include is eligible for promotion information in the response. */
  isEligibleForPromotion?: boolean;
  /** Whether to include is inline created information in the response. */
  isInlineCreated?: boolean;
  /** Whether to include sponsor tag in the response. */
  sponsorTag?: boolean;
  /** Whether to include expanded height information in the response. */
  expandedHeight?: boolean;
  /** Whether to include Instagram eligibility information in the response. */
  isInstagramEligible?: boolean;
  /** Whether to include album information in the response. */
  album?: boolean;
  /** Whether to include images in the response. */
  images?: boolean;
  /** Whether to include alt text in the response. */
  altText?: boolean;
  /** Whether to include custom alt text in the response. */
  altTextCustom?: boolean;
  /** Whether to include back-dated time granularity in the response. */
  backDatedTimeGranularity?: boolean;
  /** Whether to include back-dated capability in the response. */
  canBackdated?: boolean;
  /** Whether to include delete capability in the response. */
  canDelete?: boolean;
  /** Whether to include tag capability in the response. */
  canTag?: boolean;
  /** Whether to include link information in the response. */
  link?: boolean;
  /** Whether to include name tags in the response. */
  nameTags?: boolean;
  /** Whether to include page story ID in the response. */
  pageStoryId?: boolean;
  /** Whether to include webp images in the response. */
  webpImages?: boolean;
  /** Limit the number of items returned. */
  limit?: number;
  /** Whether to include attending count in the response. */
  attendingCount?: boolean;
  /** Whether to include guest invite capability in the response. */
  canGuestInvite?: boolean;
  /** Whether to include category information in the response. */
  category?: boolean;
  /** Whether to include cover information in the response. */
  cover?: boolean;
  /** Whether to include declined count in the response. */
  declinedCount?: boolean;
  /** Whether to include created time in the response. */
  createdTime?: boolean;
  /** Whether to include discount code enabled information in the response. */
  discountCodeEnabled?: boolean;
  /** Whether to include end time in the response. */
  endTime?: boolean;
  /** Whether to include description in the response. */
  description?: boolean;
  /** Whether to include guest list enabled information in the response. */
  guestListEnabled?: boolean;
  /** Whether to include event times in the response. */
  eventTimes?: boolean;
  /** Whether to include ID information in the response. */
  id?: boolean;
  /** Whether to include canceled status in the response. */
  isCanceled?: boolean;
  /** Whether to include interested count in the response. */
  intrestedCount?: boolean;
  /** Whether to include draft status in the response. */
  isDraft?: boolean;
  /** Whether to include online status in the response. */
  isOnline?: boolean;
  /** Whether to include page ownership information in the response. */
  isPageOwned?: boolean;
  /** Whether to include maybe count in the response. */
  maybeCount?: boolean;
  /** Whether to include name information in the response. */
  name?: boolean;
  /** Whether to include online event format in the response. */
  onlineEventFormate?: boolean;
  /** Whether to include online event third-party URL in the response. */
  onlineEventThirdPartyUrl?: boolean;
  /** Whether to include owner information in the response. */
  owner?: boolean;
  /** Whether to include place information in the response. */
  place?: boolean;
  /** Whether to include scheduled publish time in the response. */
  shcheduledPublishTime?: boolean;
  /** Whether to include start time in the response. */
  startTime?: boolean;
  /** Whether to include ticket URI in the response. */
  ticketUri?: boolean;
  /** Whether to include ticket URI start sales time in the response. */
  ticketUriStartSalesTime?: boolean;
  /** Whether to include ticketing privacy URI in the response. */
  ticketingPrivacyUri?: boolean;
  /** Whether to include ticketing term URI in the response. */
  ticketingTermUri?: boolean;
  /** Whether to include timezone information in the response. */
  timezone?: boolean;
  /** Whether to include type information in the response. */
  type?: boolean;
  /** Whether to include updated time in the response. */
  updatedTime?: boolean;
  /** Whether to include comments in the response. */
  comments?: boolean;
  /** Whether to include no reply count in the response. */
  noreplyCount?: boolean;
  /** Whether to include feed information in the response. */
  feed?: boolean;
  /** Whether to include photos in the response. */
  photos?: boolean;
  /** Whether to include picture information in the response. */
  picture?: boolean;
  /** Whether to include live videos in the response. */
  liveVidoes?: boolean;
  /** Whether to include roles in the response. */
  roles?: boolean;
  /** Whether to include ticket tiers in the response. */
  ticketTiers?: boolean;
  /** Whether to include videos in the response. */
  Videos?: boolean;
}
