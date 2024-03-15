import { CommonFacebookParams } from '../common/interfaces';
import { MetaParams } from '../common/parameters.meta';

/**
 * Builds a string representing a set of fields to be used in a query or request,
 * based on the provided parameters.
 * @param field - The main field to be included in the query.
 * @param params - An object containing boolean flags for each field that can be included.
 * @returns A string representing the fields to be included in the query.
 */
export function buildFields(field: string, params: CommonFacebookParams): string {
  // Destructure the params object to extract its properties with default values of false.
  const {
    Videos = false,
    actions = false,
    adBreaks = false,
    adminCreator = false,
    album = false,
    altText = false,
    altTextCustom = false,
    application = false,
    attachment = false,
    attendingCount = false,
    backDatedTime = false,
    backDatedTimeGranularity = false,
    backdatedTime = false,
    callToAction = false,
    canBackdated = false,
    canDelete = false,
    canGuestInvite = false,
    canReplyPrivately = false,
    canTag = false,
    captions = false,
    category = false,
    childAttachments = false,
    collaborators = false,
    comments = false,
    contentCategory = false,
    contentTags = false,
    coordinates = false,
    cover = false,
    createTime = false,
    createdTime = false,
    crosspostSharedPages = false,
    customLabels = false,
    declinedCount = false,
    description = false,
    dimensions = false,
    discountCodeEnabled = false,
    dynamicPosts = false,
    embedHtml = false,
    embeddable = false,
    endTime = false,
    event = false,
    eventTimes = false,
    events = false,
    expandedHeight = false,
    expandedWidth = false,
    feed = false,
    feedTargeting = false,
    formate = false,
    from = false,
    fullPicture = false,
    guestListEnabled = false,
    height = false,
    icon = false,
    id = false,
    images = false,
    instagramEligibility = false,
    intrestedCount = false,
    isCanceled = false,
    isCrosspostVideo = false,
    isCrosspostingEligible = false,
    isDraft = false,
    isEligibleForPromotion = false,
    isEpisode = false,
    isExpired = false,
    isHidden = false,
    isInlineCreated = false,
    isInstagramEligible = false,
    isOnline = false,
    isPageOwned = false,
    isPopular = false,
    isPublished = false,
    isSpherical = false,
    length = false,
    likes = false,
    limit = false,
    link = false,
    liveStatus = false,
    liveVidoes = false,
    maybeCount = false,
    messageTags = false,
    messages = false,
    multiShareEndCard = false,
    multiShareOptimized = false,
    name = false,
    nameTags = false,
    noreplyCount = false,
    onlineEventFormate = false,
    onlineEventThirdPartyUrl = false,
    owner = false,
    pageStoryId = false,
    parentId = false,
    permaLinkUrl = false,
    permalinkUrl = false,
    photos = false,
    picture = false,
    place = false,
    pollSettings = false,
    polls = false,
    postId = false,
    postViews = false,
    premiereLivingRoomsStatus = false,
    privacy = false,
    promotableId = false,
    promotionStatus = false,
    properties = false,
    published = false,
    reactions = false,
    roles = false,
    scheduledPublishTime = false,
    sharedPosts = false,
    shares = false,
    shcheduledPublishTime = false,
    source = false,
    sponsorTag = false,
    sponsorTags = false,
    sponsorsTag = false,
    startTime = false,
    status = false,
    statusType = false,
    story = false,
    storyTags = false,
    subscribed = false,
    tags = false,
    target = false,
    targeting = false,
    thumbnails = false,
    ticketTiers = false,
    ticketUri = false,
    ticketUriStartSalesTime = false,
    ticketingPrivacyUri = false,
    ticketingTermUri = false,
    timelineVisibility = false,
    timezone = false,
    title = false,
    to = false,
    type = false,
    universalVideoId = false,
    updatedTime = false,
    via = false,
    videoBuyingEligibility = false,
    videoInsights = false,
    views = false,
    webpImages = false,
    width = false,
  } = params;

  // Initialize the fields array with the main post field
  const fieldsArray: string[] = [field];

  // Check if a limit is specified and add it to the fields array
  if (limit) {
    fieldsArray.push(MetaParams.media.limit(limit));
  }

  // Initialize an array to store nested sub-fields
  const subFieldsArray: string[] = [];

  if (collaborators) {
    subFieldsArray.push(MetaParams.media.collaborators);
  }
  if (tags) {
    subFieldsArray.push(MetaParams.media.tags);
  }
  if (contentCategory) {
    subFieldsArray.push(MetaParams.media.contentCategory);
  }
  if (contentTags) {
    subFieldsArray.push(MetaParams.media.contentTags);
  }
  if (customLabels) {
    subFieldsArray.push(MetaParams.media.customLabels);
  }
  if (published) {
    subFieldsArray.push(MetaParams.media.published);
  }
  if (title) {
    subFieldsArray.push(MetaParams.media.title);
  }
  if (universalVideoId) {
    subFieldsArray.push(MetaParams.media.universalVideoId);
  }
  if (embedHtml) {
    subFieldsArray.push(MetaParams.media.embedHtml);
  }
  if (thumbnails) {
    subFieldsArray.push(MetaParams.media.thumbnails);
  }
  if (pollSettings) {
    subFieldsArray.push(MetaParams.media.pollSetting);
  }
  if (embeddable) {
    subFieldsArray.push(MetaParams.media.embeddable);
  }
  if (postId) {
    subFieldsArray.push(MetaParams.media.postId);
  }
  if (postViews) {
    subFieldsArray.push(MetaParams.media.postViews);
  }
  if (status) {
    subFieldsArray.push(MetaParams.media.status);
  }
  if (event) {
    subFieldsArray.push(MetaParams.media.event);
  }
  if (createdTime) {
    subFieldsArray.push(MetaParams.media.createdTime);
  }
  if (captions) {
    subFieldsArray.push(MetaParams.media.captions);
  }
  if (formate) {
    subFieldsArray.push(MetaParams.media.format);
  }
  if (liveStatus) {
    subFieldsArray.push(MetaParams.media.liveStatus);
  }
  if (source) {
    subFieldsArray.push(MetaParams.media.source);
  }
  if (webpImages) {
    subFieldsArray.push(MetaParams.media.webpImages);
  }
  if (pageStoryId) {
    subFieldsArray.push(MetaParams.media.pageStoryId);
  }
  if (link) {
    subFieldsArray.push(MetaParams.media.link);
  }
  if (canTag) {
    subFieldsArray.push(MetaParams.media.canTag);
  }
  if (canDelete) {
    subFieldsArray.push(MetaParams.media.canDelete);
  }
  if (videoInsights) {
    subFieldsArray.push(MetaParams.media.videoInsights);
  }
  if (crosspostSharedPages) {
    subFieldsArray.push(MetaParams.media.crosspostSharedPage);
  }
  if (backDatedTimeGranularity) {
    subFieldsArray.push(MetaParams.media.backdateTimeGranularity);
  }
  if (canBackdated) {
    subFieldsArray.push(MetaParams.media.canBackdated);
  }
  if (length) {
    subFieldsArray.push(MetaParams.media.length);
  }
  if (altTextCustom) {
    subFieldsArray.push(MetaParams.media.altTextCustom);
  }
  if (altText) {
    subFieldsArray.push(MetaParams.media.altText);
  }
  if (images) {
    subFieldsArray.push(MetaParams.media.images);
  }
  if (nameTags) {
    subFieldsArray.push(MetaParams.media.nameTags);
  }
  if (album) {
    subFieldsArray.push(MetaParams.media.album);
  }
  if (endTime) {
    subFieldsArray.push(MetaParams.events.endTime);
  }
  if (description) {
    subFieldsArray.push(MetaParams.events.description);
  }
  if (declinedCount) {
    subFieldsArray.push(MetaParams.events.declinedCount);
  }
  if (guestListEnabled) {
    subFieldsArray.push(MetaParams.events.guestListEnabled);
  }
  if (name) {
    subFieldsArray.push(MetaParams.events.name);
  }
  if (onlineEventFormate) {
    subFieldsArray.push(MetaParams.events.onlineEventFormate);
  }
  if (onlineEventThirdPartyUrl) {
    subFieldsArray.push(MetaParams.events.onlineEventThirdPartyUrl);
  }
  if (isCrosspostVideo) {
    subFieldsArray.push(MetaParams.media.isCrosspostVideo);
  }
  if (isEpisode) {
    subFieldsArray.push(MetaParams.media.isEpisode);
  }
  if (isCrosspostingEligible) {
    subFieldsArray.push(MetaParams.media.isCrosspostingEligible);
  }
  if (noreplyCount) {
    subFieldsArray.push(MetaParams.events.noreplyCount);
  }
  if (eventTimes) {
    subFieldsArray.push(MetaParams.events.eventTimes);
  }
  if (isCanceled) {
    subFieldsArray.push(MetaParams.events.isCanceled);
  }
  if (intrestedCount) {
    subFieldsArray.push(MetaParams.events.interestedCount);
  }
  if (liveVidoes) {
    subFieldsArray.push(MetaParams.events.canGuestsInvite);
  }
  if (canGuestInvite) {
    subFieldsArray.push(MetaParams.events.liveVideos);
  }
  if (photos) {
    subFieldsArray.push(MetaParams.events.photos);
  }
  if (picture) {
    subFieldsArray.push(MetaParams.events.picture);
  }
  if (isDraft) {
    subFieldsArray.push(MetaParams.events.isDraft);
  }
  if (feed) {
    subFieldsArray.push(MetaParams.events.feed);
  }
  if (type) {
    subFieldsArray.push(MetaParams.events.type);
  }
  if (owner) {
    subFieldsArray.push(MetaParams.events.owner);
  }
  if (startTime) {
    subFieldsArray.push(MetaParams.events.startTime);
  }
  if (ticketUri) {
    subFieldsArray.push(MetaParams.events.ticketUri);
  }
  if (ticketUriStartSalesTime) {
    subFieldsArray.push(MetaParams.events.ticketUriStartSalesTime);
  }
  if (timezone) {
    subFieldsArray.push(MetaParams.events.timezone);
  }
  if (ticketingPrivacyUri) {
    subFieldsArray.push(MetaParams.events.ticketingPrivacyUri);
  }
  if (ticketingTermUri) {
    subFieldsArray.push(MetaParams.events.ticketingTermUri);
  }
  if (roles) {
    subFieldsArray.push(MetaParams.events.roles);
  }
  if (ticketTiers) {
    subFieldsArray.push(MetaParams.events.ticketTiers);
  }
  if (Videos) {
    subFieldsArray.push(MetaParams.events.videos);
  }
  if (cover) {
    subFieldsArray.push(MetaParams.events.cover);
  }
  if (category) {
    subFieldsArray.push(MetaParams.events.category);
  }
  if (attendingCount) {
    subFieldsArray.push(MetaParams.events.attendingCount);
  }
  if (isInstagramEligible) {
    subFieldsArray.push(MetaParams.media.isInstagramEligible);
  }
  if (attendingCount) {
    subFieldsArray.push(MetaParams.events.attendingCount);
  }
  if (isPageOwned) {
    subFieldsArray.push(MetaParams.events.isPageOwned);
  }
  //  conditions for including specific sub-fields based on parameters
  if (adminCreator) {
    subFieldsArray.push(MetaParams.media.adminCreator);
  }
  if (maybeCount) {
    subFieldsArray.push(MetaParams.events.maybeCount);
  }
  if (isOnline) {
    subFieldsArray.push(MetaParams.events.isOnline);
  }
  if (dimensions) {
    subFieldsArray.push(MetaParams.media.dimensions);
  }
  if (height) {
    subFieldsArray.push(MetaParams.media.height);
  }
  if (width) {
    subFieldsArray.push(MetaParams.media.width);
  }
  if (instagramEligibility) {
    subFieldsArray.push(MetaParams.media.instagramEligibility);
  }
  if (actions) {
    subFieldsArray.push(MetaParams.media.actions);
  }
  if (subscribed) {
    subFieldsArray.push(MetaParams.media.subscribed);
  }
  if (shares) {
    subFieldsArray.push(MetaParams.media.shares);
  }
  if (story) {
    subFieldsArray.push(MetaParams.media.story);
  }
  if (polls) {
    subFieldsArray.push(MetaParams.media.polls);
  }
  if (statusType) {
    subFieldsArray.push(MetaParams.media.statusType);
  }
  if (properties) {
    subFieldsArray.push(MetaParams.media.properties);
  }
  if (callToAction) {
    subFieldsArray.push(MetaParams.media.callToAction);
  }
  if (canReplyPrivately) {
    subFieldsArray.push(MetaParams.media.canReplyPrivately);
  }
  if (childAttachments) {
    subFieldsArray.push(MetaParams.media.childAttachments);
  }
  if (reactions) {
    subFieldsArray.push(MetaParams.media.reactions);
  }
  if (backdatedTime) {
    subFieldsArray.push(MetaParams.media.backdatedTime);
  }
  if (via) {
    subFieldsArray.push(MetaParams.media.via);
  }
  if (multiShareOptimized) {
    subFieldsArray.push(MetaParams.media.multiShareOptimized);
  }
  if (parentId) {
    subFieldsArray.push(MetaParams.media.parentId);
  }
  if (privacy) {
    subFieldsArray.push(MetaParams.media.privacy);
  }
  if (place) {
    subFieldsArray.push(MetaParams.media.place);
  }
  if (views) {
    subFieldsArray.push(MetaParams.media.views);
  }
  if (target) {
    subFieldsArray.push(MetaParams.media.target);
  }
  if (messageTags) {
    subFieldsArray.push(MetaParams.media.messageTags);
  }
  if (isSpherical) {
    subFieldsArray.push(MetaParams.media.isSpherical);
  }
  if (messages) {
    subFieldsArray.push(MetaParams.media.message);
  }
  if (sharedPosts) {
    subFieldsArray.push(MetaParams.media.sharedPosts);
  }
  if (permalinkUrl || permaLinkUrl) {
    subFieldsArray.push(MetaParams.media.permalinkURL);
  }
  if (likes) {
    subFieldsArray.push(MetaParams.media.likes);
  }
  if (comments) {
    subFieldsArray.push(MetaParams.media.comments);
  }
  if (premiereLivingRoomsStatus) {
    subFieldsArray.push(MetaParams.media.premierLivingRoomStatus);
  }
  if (coordinates) {
    subFieldsArray.push(MetaParams.media.coordinates);
  }
  if (fullPicture) {
    subFieldsArray.push(MetaParams.media.fullPicture);
  }
  if (promotableId) {
    subFieldsArray.push(MetaParams.media.promotableId);
  }
  if (attachment) {
    subFieldsArray.push(MetaParams.media.attachment);
  }
  if (expandedWidth) {
    subFieldsArray.push(MetaParams.media.expandedWidth);
  }
  if (expandedHeight) {
    subFieldsArray.push(MetaParams.media.expandedHeight);
  }
  if (targeting) {
    subFieldsArray.push(MetaParams.media.targeting);
  }
  if (multiShareEndCard) {
    subFieldsArray.push(MetaParams.media.multiShareEndCard);
  }
  if (createTime) {
    subFieldsArray.push(MetaParams.media.createdTime);
  }
  if (discountCodeEnabled) {
    subFieldsArray.push(MetaParams.events.discountCodeEnabled);
  }
  if (application) {
    subFieldsArray.push(MetaParams.media.application);
  }
  if (to) {
    subFieldsArray.push(MetaParams.media.to);
  }
  if (events) {
    subFieldsArray.push(MetaParams.media.events);
  }
  if (from) {
    subFieldsArray.push(MetaParams.media.from);
  }
  if (icon) {
    subFieldsArray.push(MetaParams.media.icon);
  }
  if (feedTargeting) {
    subFieldsArray.push(MetaParams.media.feedTargeting);
  }
  if (isHidden) {
    subFieldsArray.push(MetaParams.media.isHidden);
  }
  if (isPublished) {
    subFieldsArray.push(MetaParams.media.isPublished);
  }
  if (isExpired) {
    subFieldsArray.push(MetaParams.media.isExpired);
  }
  if (isPopular) {
    subFieldsArray.push(MetaParams.media.isPopular);
  }
  if (scheduledPublishTime || shcheduledPublishTime) {
    subFieldsArray.push(MetaParams.media.scheduledPublishTime);
  }
  if (updatedTime) {
    subFieldsArray.push(MetaParams.media.updatedTime);
  }
  if (timelineVisibility) {
    subFieldsArray.push(MetaParams.media.timelineVisibility);
  }
  if (dynamicPosts) {
    subFieldsArray.push(MetaParams.media.dynamicPosts);
  }
  if (promotionStatus) {
    subFieldsArray.push(MetaParams.media.promotionStatus);
  }
  if (storyTags) {
    subFieldsArray.push(MetaParams.media.storyTags);
  }
  if (videoBuyingEligibility) {
    subFieldsArray.push(MetaParams.media.videoBuyingEligibility);
  }
  if (isEligibleForPromotion) {
    subFieldsArray.push(MetaParams.media.isEligibleForPromotion);
  }
  if (isInlineCreated) {
    subFieldsArray.push(MetaParams.media.isInlineCreated);
  }
  if (sponsorTag || sponsorTags || sponsorsTag) {
    subFieldsArray.push(MetaParams.media.sponsorTag);
  }
  if (id) {
    subFieldsArray.push(MetaParams.media.id);
  }
  if (adBreaks) {
    subFieldsArray.push(MetaParams.media.adBreaks);
  }
  if (backDatedTime) {
    subFieldsArray.push(MetaParams.media.backdatedTime);
  }
  // Check if there are any sub-fields to include, and wrap them in curly braces if necessary

  // After all conditions are checked, if there are any sub-fields to include,
  // they are wrapped in curly braces and added to the fieldsArray.
  if (subFieldsArray.length > 0) {
    fieldsArray.push(`{${subFieldsArray.join(',')}}`);
  }

  // Join the fields array into a single string and return it.
  // This string represents the fields to be included in the query.
  return fieldsArray.join('');
}
