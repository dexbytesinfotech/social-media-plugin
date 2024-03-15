import { Actions, Repositories, Resources } from './enums/generals';
interface RequestBody {
  resource: Resources;
  module: Repositories;
  action: Actions;
  payload: any;
}

export class SMPFactory {
  private requestBody: RequestBody;

  constructor(requestBody: RequestBody) {
    this.requestBody = requestBody;
  }

  public async operate() {
    try {
      const application: any = await import(`./repositories/${this.requestBody.resource}/${this.requestBody.module}`);
      const repo = new application.Repository(this.requestBody.payload);
      const response = await repo[this.requestBody.action]();
      return response;
    } catch (err) {
      return err;
    }
  }
}
