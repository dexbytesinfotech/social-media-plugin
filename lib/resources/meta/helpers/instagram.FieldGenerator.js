"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFields = exports.userLimit = void 0;
const parameters_meta_1 = require("../common/parameters.meta");
/**
 * Determines the user limit based on the provided parameters.
 * @param params - The parameters object containing the limit value.
 * @returns The user limit as a number.
 */
function userLimit(params) {
    let userLimit = 0;
    const { limit = false } = params;
    if (limit) {
        userLimit = limit;
    }
    return userLimit;
}
exports.userLimit = userLimit;
/**
 * Builds a string of fields to be used in Instagram API requests based on the provided parameters.
 * @param params - The parameters object containing the fields to be included in the request.
 * @returns A string of comma-separated fields.
 */
function buildFields(params) {
    const { mediaUrl = false, brandedContentPartnerPromote = false, caption = false, children = false, collaborators = false, comments = false, commentsCount = false, id = false, igId = false, isCommentEnabled = false, isSharedToFeed = false, likeCount = false, mediaProductType = false, mediaType = false, owner = false, permalink = false, productTags = false, shortcode = false, thumbnailUrl = false, timestamp = false, username = false, biography = false, followersCount = false, followsCount = false, mediaCount = false, profilePicture = false, website = false, } = params;
    // Initialize the fields array with the main Media field
    const fieldsArray = [];
    //  conditions for including specific sub-fields based on parameters
    if (mediaUrl) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.mediaUrl);
    }
    if (caption) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.caption);
    }
    if (commentsCount) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.commentCount);
    }
    if (id) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.id);
    }
    if (igId) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.igId);
    }
    if (isCommentEnabled) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.isCommentEnabled);
    }
    if (isSharedToFeed) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.isSharedToFeed);
    }
    if (likeCount) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.likeCount);
    }
    if (mediaProductType) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.mediaProductType);
    }
    if (mediaType) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.mediaType);
    }
    if (owner) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.owner);
    }
    if (permalink) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.permalink);
    }
    if (shortcode) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.shortcode);
    }
    if (thumbnailUrl) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.thumbnail_url);
    }
    if (timestamp) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.timestamp);
    }
    if (username) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.username);
    }
    if (brandedContentPartnerPromote) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.brandedContentPartnerPromote);
    }
    if (children) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.children);
    }
    if (comments) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.comments);
    }
    if (collaborators) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.collaborators);
    }
    if (productTags) {
        fieldsArray.push(parameters_meta_1.InstagramParams.media.productTags);
    }
    if (followersCount) {
        fieldsArray.push(parameters_meta_1.InstagramParams.followersCount);
    }
    if (followsCount) {
        fieldsArray.push(parameters_meta_1.InstagramParams.followsCount);
    }
    if (biography) {
        fieldsArray.push(parameters_meta_1.InstagramParams.biography);
    }
    if (mediaCount) {
        fieldsArray.push(parameters_meta_1.InstagramParams.mediaCount);
    }
    if (profilePicture) {
        fieldsArray.push(parameters_meta_1.InstagramParams.profilePictureUrl);
    }
    if (website) {
        fieldsArray.push(parameters_meta_1.InstagramParams.website);
    }
    return fieldsArray.join(',');
}
exports.buildFields = buildFields;
