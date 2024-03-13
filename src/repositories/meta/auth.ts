import { MetaLongLivedAccessToken, GenerateMetaAuthUrl } from "../../resources/meta/common/accessTokengenerator";
class MetaAuth {

    private payload: any;

    constructor(payload: any) {
        this.payload = payload;
    }

    async generateAuthUrl() {
        
        const { clientId, redirectUri, permissions } = this.payload;
        const authUrl = new GenerateMetaAuthUrl( clientId, redirectUri, permissions );

        return authUrl.generateAuthUrl("code");
    }

    async generateToken() {
        const { clientId, clientSecret, userAccessToken } = this.payload;
        const token = new MetaLongLivedAccessToken(clientId, clientSecret, userAccessToken);
        const longLivedAccessToken = await token.requestLongLivedAccessToken();
        return longLivedAccessToken;
    }

}

export { MetaAuth as Repository };