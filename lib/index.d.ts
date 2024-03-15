import { Actions, Repositories, Resources } from './enums/generals';
interface RequestBody {
    resource: Resources;
    module: Repositories;
    action: Actions;
    payload: any;
}
export declare class SMPFactory {
    private requestBody;
    constructor(requestBody: RequestBody);
    operate(): Promise<any>;
}
export {};
