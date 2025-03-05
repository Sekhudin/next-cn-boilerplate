import { AxiosInstance } from "axios";

export abstract class ClientService {
  private static instance: any;
  public abstract readonly client: AxiosInstance;

  protected constructor() {
    if ((this.constructor as any).instance) {
      throw new Error(
        `${this.constructor.name} is a singleton class and cannot be instantiated multiple times.`,
      );
    }
    (this.constructor as any).instance = this;
  }

  static getInstance<T>(this: new () => T): T {
    if (!(this as any).instance) {
      (this as any).instance = new this();
    }
    return (this as any).instance;
  }
}
