"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFields = void 0;
const parameters_meta_1 = require("../common/parameters.meta");
/**
 * Builds a string representing a set of fields to be used in a query or request,
 * based on the provided parameters.
 * @param field - The main field to be included in the query.
 * @param params - An object containing boolean flags for each field that can be included.
 * @returns A string representing the fields to be included in the query.
 */
function buildFields(field, params) {
    // Destructure the params object to extract its properties with default values of false.
    const { Videos = false, actions = false, adBreaks = false, adminCreator = false, album = false, altText = false, altTextCustom = false, application = false, attachment = false, attendingCount = false, backDatedTime = false, backDatedTimeGranularity = false, backdatedTime = false, callToAction = false, canBackdated = false, canDelete = false, canGuestInvite = false, canReplyPrivately = false, canTag = false, captions = false, category = false, childAttachments = false, collaborators = false, comments = false, contentCategory = false, contentTags = false, coordinates = false, cover = false, createTime = false, createdTime = false, crosspostSharedPages = false, customLabels = false, declinedCount = false, description = false, dimensions = false, discountCodeEnabled = false, dynamicPosts = false, embedHtml = false, embeddable = false, endTime = false, event = false, eventTimes = false, events = false, expandedHeight = false, expandedWidth = false, feed = false, feedTargeting = false, formate = false, from = false, fullPicture = false, guestListEnabled = false, height = false, icon = false, id = false, images = false, instagramEligibility = false, intrestedCount = false, isCanceled = false, isCrosspostVideo = false, isCrosspostingEligible = false, isDraft = false, isEligibleForPromotion = false, isEpisode = false, isExpired = false, isHidden = false, isInlineCreated = false, isInstagramEligible = false, isOnline = false, isPageOwned = false, isPopular = false, isPublished = false, isSpherical = false, length = false, likes = false, limit = false, link = false, liveStatus = false, liveVidoes = false, maybeCount = false, messageTags = false, messages = false, multiShareEndCard = false, multiShareOptimized = false, name = false, nameTags = false, noreplyCount = false, onlineEventFormate = false, onlineEventThirdPartyUrl = false, owner = false, pageStoryId = false, parentId = false, permaLinkUrl = false, permalinkUrl = false, photos = false, picture = false, place = false, pollSettings = false, polls = false, postId = false, postViews = false, premiereLivingRoomsStatus = false, privacy = false, promotableId = false, promotionStatus = false, properties = false, published = false, reactions = false, roles = false, scheduledPublishTime = false, sharedPosts = false, shares = false, shcheduledPublishTime = false, source = false, sponsorTag = false, sponsorTags = false, sponsorsTag = false, startTime = false, status = false, statusType = false, story = false, storyTags = false, subscribed = false, tags = false, target = false, targeting = false, thumbnails = false, ticketTiers = false, ticketUri = false, ticketUriStartSalesTime = false, ticketingPrivacyUri = false, ticketingTermUri = false, timelineVisibility = false, timezone = false, title = false, to = false, type = false, universalVideoId = false, updatedTime = false, via = false, videoBuyingEligibility = false, videoInsights = false, views = false, webpImages = false, width = false, } = params;
    // Initialize the fields array with the main post field
    const fieldsArray = [field];
    // Check if a limit is specified and add it to the fields array
    if (limit) {
        fieldsArray.push(parameters_meta_1.MetaParams.media.limit(limit));
    }
    // Initialize an array to store nested sub-fields
    const subFieldsArray = [];
    if (collaborators) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.collaborators);
    }
    if (tags) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.tags);
    }
    if (contentCategory) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.contentCategory);
    }
    if (contentTags) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.contentTags);
    }
    if (customLabels) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.customLabels);
    }
    if (published) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.published);
    }
    if (title) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.title);
    }
    if (universalVideoId) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.universalVideoId);
    }
    if (embedHtml) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.embedHtml);
    }
    if (thumbnails) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.thumbnails);
    }
    if (pollSettings) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.pollSetting);
    }
    if (embeddable) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.embeddable);
    }
    if (postId) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.postId);
    }
    if (postViews) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.postViews);
    }
    if (status) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.status);
    }
    if (event) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.event);
    }
    if (createdTime) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.createdTime);
    }
    if (captions) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.captions);
    }
    if (formate) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.format);
    }
    if (liveStatus) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.liveStatus);
    }
    if (source) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.source);
    }
    if (webpImages) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.webpImages);
    }
    if (pageStoryId) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.pageStoryId);
    }
    if (link) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.link);
    }
    if (canTag) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.canTag);
    }
    if (canDelete) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.canDelete);
    }
    if (videoInsights) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.videoInsights);
    }
    if (crosspostSharedPages) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.crosspostSharedPage);
    }
    if (backDatedTimeGranularity) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.backdateTimeGranularity);
    }
    if (canBackdated) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.canBackdated);
    }
    if (length) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.length);
    }
    if (altTextCustom) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.altTextCustom);
    }
    if (altText) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.altText);
    }
    if (images) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.images);
    }
    if (nameTags) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.nameTags);
    }
    if (album) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.album);
    }
    if (endTime) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.endTime);
    }
    if (description) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.description);
    }
    if (declinedCount) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.declinedCount);
    }
    if (guestListEnabled) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.guestListEnabled);
    }
    if (name) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.name);
    }
    if (onlineEventFormate) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.onlineEventFormate);
    }
    if (onlineEventThirdPartyUrl) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.onlineEventThirdPartyUrl);
    }
    if (isCrosspostVideo) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isCrosspostVideo);
    }
    if (isEpisode) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isEpisode);
    }
    if (isCrosspostingEligible) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isCrosspostingEligible);
    }
    if (noreplyCount) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.noreplyCount);
    }
    if (eventTimes) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.eventTimes);
    }
    if (isCanceled) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.isCanceled);
    }
    if (intrestedCount) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.interestedCount);
    }
    if (liveVidoes) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.canGuestsInvite);
    }
    if (canGuestInvite) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.liveVideos);
    }
    if (photos) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.photos);
    }
    if (picture) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.picture);
    }
    if (isDraft) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.isDraft);
    }
    if (feed) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.feed);
    }
    if (type) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.type);
    }
    if (owner) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.owner);
    }
    if (startTime) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.startTime);
    }
    if (ticketUri) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.ticketUri);
    }
    if (ticketUriStartSalesTime) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.ticketUriStartSalesTime);
    }
    if (timezone) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.timezone);
    }
    if (ticketingPrivacyUri) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.ticketingPrivacyUri);
    }
    if (ticketingTermUri) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.ticketingTermUri);
    }
    if (roles) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.roles);
    }
    if (ticketTiers) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.ticketTiers);
    }
    if (Videos) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.videos);
    }
    if (cover) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.cover);
    }
    if (category) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.category);
    }
    if (attendingCount) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.attendingCount);
    }
    if (isInstagramEligible) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isInstagramEligible);
    }
    if (attendingCount) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.attendingCount);
    }
    if (isPageOwned) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.isPageOwned);
    }
    //  conditions for including specific sub-fields based on parameters
    if (adminCreator) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.adminCreator);
    }
    if (maybeCount) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.maybeCount);
    }
    if (isOnline) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.isOnline);
    }
    if (dimensions) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.dimensions);
    }
    if (height) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.height);
    }
    if (width) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.width);
    }
    if (instagramEligibility) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.instagramEligibility);
    }
    if (actions) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.actions);
    }
    if (subscribed) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.subscribed);
    }
    if (shares) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.shares);
    }
    if (story) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.story);
    }
    if (polls) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.polls);
    }
    if (statusType) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.statusType);
    }
    if (properties) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.properties);
    }
    if (callToAction) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.callToAction);
    }
    if (canReplyPrivately) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.canReplyPrivately);
    }
    if (childAttachments) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.childAttachments);
    }
    if (reactions) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.reactions);
    }
    if (backdatedTime) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.backdatedTime);
    }
    if (via) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.via);
    }
    if (multiShareOptimized) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.multiShareOptimized);
    }
    if (parentId) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.parentId);
    }
    if (privacy) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.privacy);
    }
    if (place) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.place);
    }
    if (views) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.views);
    }
    if (target) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.target);
    }
    if (messageTags) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.messageTags);
    }
    if (isSpherical) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isSpherical);
    }
    if (messages) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.message);
    }
    if (sharedPosts) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.sharedPosts);
    }
    if (permalinkUrl || permaLinkUrl) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.permalinkURL);
    }
    if (likes) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.likes);
    }
    if (comments) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.comments);
    }
    if (premiereLivingRoomsStatus) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.premierLivingRoomStatus);
    }
    if (coordinates) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.coordinates);
    }
    if (fullPicture) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.fullPicture);
    }
    if (promotableId) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.promotableId);
    }
    if (attachment) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.attachment);
    }
    if (expandedWidth) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.expandedWidth);
    }
    if (expandedHeight) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.expandedHeight);
    }
    if (targeting) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.targeting);
    }
    if (multiShareEndCard) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.multiShareEndCard);
    }
    if (createTime) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.createdTime);
    }
    if (discountCodeEnabled) {
        subFieldsArray.push(parameters_meta_1.MetaParams.events.discountCodeEnabled);
    }
    if (application) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.application);
    }
    if (to) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.to);
    }
    if (events) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.events);
    }
    if (from) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.from);
    }
    if (icon) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.icon);
    }
    if (feedTargeting) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.feedTargeting);
    }
    if (isHidden) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isHidden);
    }
    if (isPublished) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isPublished);
    }
    if (isExpired) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isExpired);
    }
    if (isPopular) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isPopular);
    }
    if (scheduledPublishTime || shcheduledPublishTime) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.scheduledPublishTime);
    }
    if (updatedTime) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.updatedTime);
    }
    if (timelineVisibility) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.timelineVisibility);
    }
    if (dynamicPosts) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.dynamicPosts);
    }
    if (promotionStatus) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.promotionStatus);
    }
    if (storyTags) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.storyTags);
    }
    if (videoBuyingEligibility) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.videoBuyingEligibility);
    }
    if (isEligibleForPromotion) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isEligibleForPromotion);
    }
    if (isInlineCreated) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.isInlineCreated);
    }
    if (sponsorTag || sponsorTags || sponsorsTag) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.sponsorTag);
    }
    if (id) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.id);
    }
    if (adBreaks) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.adBreaks);
    }
    if (backDatedTime) {
        subFieldsArray.push(parameters_meta_1.MetaParams.media.backdatedTime);
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
exports.buildFields = buildFields;
