"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlatformInstance = void 0;
const createPlatformInstance = async (platform, clientId, redirectUri, permissions) => {
    try {
        const modulePath = `../resources/${platform.toLowerCase()}`;
        const { AuthUrlGenerator, TokenGenerator } = await Promise.resolve(`${modulePath}`).then(s => __importStar(require(s)));
        switch (platform) {
            case 'Meta':
                const { Google, Meta } = await Promise.resolve(`${modulePath}`).then(s => __importStar(require(s)));
                return {
                    authUrlGenerator: new Meta.MetaGenerateMetaAuthUrl(clientId, redirectUri, permissions),
                    longLivedAccessToken: Meta.MetaLongLivedAccessToken(clientId, 'client-secret', 'exchange-token'), // Replace 'client-secret' and 'exchange-token' with actual values
                };
            case 'Google':
                return {
                    authUrlGenerator: new AuthUrlGenerator(clientId, redirectUri, permissions),
                    tokenGenerator: new TokenGenerator(clientId, 'client-secret', redirectUri), // Replace 'client-secret' with actual value
                };
            default:
                throw new Error(`Unsupported platform: ${platform}`);
        }
    }
    catch (error) {
        return null;
    }
};
exports.createPlatformInstance = createPlatformInstance;
