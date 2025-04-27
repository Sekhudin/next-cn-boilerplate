import type { AxiosInstance } from "axios";
import { BaseService } from "src/shared/core/base.service";
import { SignUpDto } from "src/modules/auth/dto/signup.dto";
import { SignInDto } from "src/modules/auth/dto/signin.dto";
import * as backend from "src/shared/clients/backend.client";

class AuthService extends BaseService {
  public readonly client: AxiosInstance = backend.client;
  constructor() {
    super();
  }

  async me() {
    return true;
  }

  async signUp(body: SignUpDto) {
    return await this.client.post("/signup", body);
  }

  async signIn(body: SignInDto) {
    return await this.client.post("/signin", body);
  }

  async signOut() {
    return true;
  }
}

export const authService = AuthService.getInstance();
