import { match } from "ts-pattern";
import React from "react";
import type { RoleKey } from "src/types/global.type";
import * as common from "src/configs/common.config";

type RoleContainerProps = React.PropsWithChildren<{
  expectedRole: RoleKey[];
  role: RoleKey;
}>;

export const RoleContainer = ({ children, expectedRole, role }: RoleContainerProps) => {
  return match(expectedRole.includes(role))
    .with(true, () => children)
    .otherwise(() => null);
};

type CommonRoleContainer = Pick<RoleContainerProps, "children" | "role">;

export const DevRoleContainer = ({ children, role }: CommonRoleContainer) => {
  return match(role)
    .with(common.role.developer, () => children)
    .otherwise(() => null);
};

export const UserRoleContainer = ({ children, role }: CommonRoleContainer) => {
  return match(role)
    .with(common.role.user, () => children)
    .otherwise(() => null);
};
