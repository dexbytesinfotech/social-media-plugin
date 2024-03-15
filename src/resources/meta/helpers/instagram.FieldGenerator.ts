import { CommonInstagramParams } from '../common/interfaces';
import { InstagramParams } from '../common/parameters.meta';

/**
 * Determines the user limit based on the provided parameters.
 * @param params - The parameters object containing the limit value.
 * @returns The user limit as a number.
 */
export function userLimit(params: CommonInstagramParams): number {
  let userLimit = 0;
  const { limit = false } = params;
  if (limit) {
    userLimit = limit;
  }
  return userLimit;
}

/**
 * Builds a string of fields to be used in Instagram API requests based on the provided parameters.
 * @param params - The parameters object containing the fields to be included in the request.
 * @returns A string of comma-separated fields.
 */
export function buildFields(params: CommonInstagramParams): string {
  const {
    mediaUrl = false,
    brandedContentPartnerPromote = false,
    caption = false,
    children = false,
    collaborators = false,
    comments = false,
    commentsCount = false,
    id = false,
    igId = false,
    isCommentEnabled = false,
    isSharedToFeed = false,
    likeCount = false,
    mediaProductType = false,
    mediaType = false,
    owner = false,
    permalink = false,
    productTags = false,
    shortcode = false,
    thumbnailUrl = false,
    timestamp = false,
    username = false,
    biography = false,
    followersCount = false,
    followsCount = false,
    mediaCount = false,
    profilePicture = false,
    website = false,
  } = params;

  // Initialize the fields array with the main Media field
  const fieldsArray: any[] = [];

  //  conditions for including specific sub-fields based on parameters
  if (mediaUrl) {
    fieldsArray.push(InstagramParams.media.mediaUrl);
  }

  if (caption) {
    fieldsArray.push(InstagramParams.media.caption);
  }

  if (commentsCount) {
    fieldsArray.push(InstagramParams.media.commentCount);
  }

  if (id) {
    fieldsArray.push(InstagramParams.media.id);
  }

  if (igId) {
    fieldsArray.push(InstagramParams.media.igId);
  }

  if (isCommentEnabled) {
    fieldsArray.push(InstagramParams.media.isCommentEnabled);
  }

  if (isSharedToFeed) {
    fieldsArray.push(InstagramParams.media.isSharedToFeed);
  }

  if (likeCount) {
    fieldsArray.push(InstagramParams.media.likeCount);
  }

  if (mediaProductType) {
    fieldsArray.push(InstagramParams.media.mediaProductType);
  }

  if (mediaType) {
    fieldsArray.push(InstagramParams.media.mediaType);
  }

  if (owner) {
    fieldsArray.push(InstagramParams.media.owner);
  }

  if (permalink) {
    fieldsArray.push(InstagramParams.media.permalink);
  }

  if (shortcode) {
    fieldsArray.push(InstagramParams.media.shortcode);
  }

  if (thumbnailUrl) {
    fieldsArray.push(InstagramParams.media.thumbnail_url);
  }

  if (timestamp) {
    fieldsArray.push(InstagramParams.media.timestamp);
  }

  if (username) {
    fieldsArray.push(InstagramParams.media.username);
  }

  if (brandedContentPartnerPromote) {
    fieldsArray.push(InstagramParams.media.brandedContentPartnerPromote);
  }

  if (children) {
    fieldsArray.push(InstagramParams.media.children);
  }

  if (comments) {
    fieldsArray.push(InstagramParams.media.comments);
  }

  if (collaborators) {
    fieldsArray.push(InstagramParams.media.collaborators);
  }

  if (productTags) {
    fieldsArray.push(InstagramParams.media.productTags);
  }
  if (followersCount) {
    fieldsArray.push(InstagramParams.followersCount);
  }

  if (followsCount) {
    fieldsArray.push(InstagramParams.followsCount);
  }

  if (biography) {
    fieldsArray.push(InstagramParams.biography);
  }

  if (mediaCount) {
    fieldsArray.push(InstagramParams.mediaCount);
  }

  if (profilePicture) {
    fieldsArray.push(InstagramParams.profilePictureUrl);
  }

  if (website) {
    fieldsArray.push(InstagramParams.website);
  }

  return fieldsArray.join(',');
}
