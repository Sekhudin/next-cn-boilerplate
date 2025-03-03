import { cn } from "src/utils/common";
import type { LayoutProps, Props } from "src/types/global.type";

const Layout = ({ children, className }: Props<LayoutProps>) => (
  <main className={cn("", className)}>{children}</main>
);

export default Layout;
