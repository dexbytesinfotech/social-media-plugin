export declare function makeInstagramApiRequest<T>(UserId: string, fields: string, limit: number, accessToken: string, urlParam: string): Promise<T>;
export declare function fetchInstagramUsersDataWithValidation<T>(accessToken: string, userId: string, limit: number, fields: string, urlParam: string): Promise<T>;
