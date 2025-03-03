import CommonLayout from "src/shared/components/layouts/common.layout";
import type { LayoutProps } from "src/types/global.type";

const Layout = ({ children }: LayoutProps) => {
  return <CommonLayout className="">{children}</CommonLayout>;
};

export default Layout;
