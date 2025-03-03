import CommonLayout from "src/shared/components/layouts/common.layout";
import type { LayoutProps } from "src/types/global.type";

export const Layout = ({ children }: LayoutProps) => (
  <CommonLayout className="">{children}</CommonLayout>
);

export default Layout;
