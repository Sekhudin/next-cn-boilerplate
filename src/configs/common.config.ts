import * as env from "./env.config";
import type { Role, RoleKey } from "src/types/global.type";

export const year = new Date().getFullYear();
export const copyrightText = `Copyright ${env.client.COMPANY_NAME} ©${year} - All rights reserved.`;

export const role: Role = {
  user: "user",
  developer: "developer",
};
export const roles: RoleKey[] = [role.user, role.developer];
