"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleParams = void 0;
exports.GoogleParams = {
    // Parameters for retrieving content details of a YouTube resource
    contentDetails: 'contentDetails',
    // Parameters for retrieving snippet information of a YouTube resource
    snippet: 'snippet',
    // Parameters for retrieving statistics of a YouTube resource
    statistics: 'statistics',
    // Placeholder for when the parameter ID is blank
    ifParamIdIsBlank: '',
    // Parameters for retrieving the ID of a YouTube resource
    id: 'id',
    // Parameters for retrieving file details of a YouTube resource
    fileDetails: 'fileDetails',
    // Parameters for retrieving player information of a YouTube resource
    player: 'player',
    // Parameters for retrieving processing details of a YouTube resource
    processingDetails: 'processingDetails',
    // Parameters for retrieving recording details of a YouTube resource
    recordingDetails: 'recordingDetails',
    // Parameters for retrieving the status of a YouTube resource
    status: 'status',
    // Parameters for retrieving suggestions for a YouTube resource
    suggestions: 'suggestions',
    // Parameters for retrieving topic details of a YouTube resource
    topicDetails: 'topicDetails',
    // Parameters for retrieving audit details of a YouTube resource
    auditDetails: 'auditDetails',
    // Parameters for retrieving branding settings of a YouTube resource
    brandingSettings: 'brandingSettings',
    // Parameters for retrieving content owner details of a YouTube resource
    contentOwnerDetails: 'contentOwnerDetails',
    // Parameters for retrieving localization details of a YouTube resource
    localizations: 'localizations',
    // Parameters for retrieving subscriber snippet information of a YouTube resource
    subscriberSnippet: 'subscriberSnippet',
    // Function to limit the number of items retrieved
    limit: (postLimit) => postLimit,
    // Parameters for identifying different types of YouTube resources
    paramIdentifier: {
        // Parameters for retrieving channel information
        channels: 'channels',
        // Parameters for performing a search
        search: 'search',
        // Parameters for retrieving video information
        videos: 'videos',
        // Parameters for retrieving activity information
        activities: 'activities',
        // Parameters for retrieving caption information
        captions: 'captions',
        // Parameters for retrieving channel section information
        channelSections: 'channelSections',
        // Parameters for retrieving i18n language information
        i18nLanguages: 'i18nLanguages',
        // Parameters for retrieving i18n region information
        i18nRegions: 'i18nRegions',
        // Parameters for retrieving playlist information
        playlists: 'playlists',
        // Parameters for retrieving playlist item information
        playlistItems: 'playlistItems',
        // Parameters for retrieving subscription information
        subscriptions: 'subscriptions',
    },
};
