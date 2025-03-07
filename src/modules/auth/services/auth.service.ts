import type { AxiosInstance } from "axios";
import { ClientService } from "src/shared/core/client.service";
import type { SignUpDto } from "../dto/signup.dto";
import type { SignInDto } from "../dto/signin.dto";
import * as backend from "src/shared/clients/backend.client";

class AuthService extends ClientService {
  public readonly client: AxiosInstance = backend.client;
  constructor() {
    super();
  }

  async signUp(body: SignUpDto) {
    return await this.client.post("/signup", body);
  }

  async signIn(body: SignInDto) {
    return await this.client.post("/signin", body);
  }

  async signOut() {
    return await this.client.get("/signout");
  }
}

export const authService = AuthService.getInstance();
