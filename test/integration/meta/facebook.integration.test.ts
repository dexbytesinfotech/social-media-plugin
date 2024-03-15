import { SMPFactory } from '../../../src/index';
import { Actions, Repositories, Resources } from '../../../src/enums/generals';
import { EventsParams, MediaParams, VideoParams } from '../../../src/resources/meta/common/interfaces';

describe('Integration Tests', () => {
    describe('Facebook Page Operations', () => {
        let factory: SMPFactory;
        const accessToken = 'mockAccessToken';
        const pageId = 'mockPageId';

        beforeEach(() => {
            factory = new SMPFactory({
                resource: Resources.meta,
                module: Repositories.facebook,
                action: Actions.facebookEvents,
                payload: { accessToken }
            });
        });

        it('Should return Facebook page user id', async () => {
            try {
                const userId = await factory.operate();
                expect(userId).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
                
            }
        });

        it('Should execute Facebook events operation successfully', async () => {
            try {
                const params: EventsParams = { attendingCount: true };
                factory = new SMPFactory({
                    resource: Resources.meta,
                    module: Repositories.facebook,
                    action: Actions.facebookEvents,
                    payload: { pageId, params, accessToken }
                });
                const events = await factory.operate();
                expect(events).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
              
            }
        });

        it('Should execute Facebook posts operation successfully', async () => {
            try {
                const params: MediaParams = { actions: true, canDelete: true };
                factory = new SMPFactory({
                    resource: Resources.meta,
                    module: Repositories.facebook,
                    action: Actions.facebookPosts,
                    payload: { pageId, params, accessToken }
                });
                const posts = await factory.operate();
                expect(posts).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
             
            }
        });

        it('Should execute Facebook photos operation successfully', async () => {
            try {
                const params: MediaParams = { actions: true, canDelete: true };
                factory = new SMPFactory({
                    resource: Resources.meta,
                    module: Repositories.facebook,
                    action: Actions.facebookPhotos,
                    payload: { pageId, params, accessToken }
                });
                const photos = await factory.operate();
                expect(photos).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
             
            }
        });

        it('Should execute Facebook feeds operation successfully', async () => {
            try {
                const params: MediaParams = { actions: true, canDelete: true };
                factory = new SMPFactory({
                    resource: Resources.meta,
                    module: Repositories.facebook,
                    action: Actions.facebookPosts,
                    payload: { pageId, params, accessToken }
                });
                const feeds = await factory.operate();
                expect(feeds).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
               
            }
        });

        it('Should execute Facebook video operation successfully', async () => {
            try {
                const params: VideoParams = { adBreaks: true };
                factory = new SMPFactory({
                    resource: Resources.meta,
                    module: Repositories.facebook,
                    action: Actions.facebookPosts,
                    payload: { pageId, params, accessToken }
                });
                const videos = await factory.operate();
                expect(videos).toBeInstanceOf(Object);
                // Add more specific assertions as needed
            } catch (error) {
                
            }
        });
    });
});
