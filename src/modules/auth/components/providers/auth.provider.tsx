import React from "react";
import type { LayoutProps } from "src/types/global.type";

export const AuthProvider = ({ children }: LayoutProps) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthProvider;
