import type { AxiosInstance } from "axios";
import type { SignUpDto } from "../dto/signup.dto";
import type { SignInDto } from "../dto/signin.dto";
import * as backend from "src/shared/clients/backend.client";

class AuthService {
  public client: AxiosInstance;
  static instance: AuthService;
  static getInstance() {
    if (!this.instance) {
      AuthService.instance = new AuthService(backend.client);
    }
    return AuthService.instance;
  }

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async signUp(body: SignUpDto) {
    return await this.client.post("/signup", body);
  }

  async signIn(body: SignInDto) {
    return await this.client.post("/signin", body);
  }
}

export const authService = AuthService.getInstance();
