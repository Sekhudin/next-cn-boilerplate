import DashboardComponent from "src/modules/dashboard/components/dashboard.component";
import type { LayoutProps } from "src/types/global.type";

const Layout = ({ children }: LayoutProps) => {
  return <DashboardComponent>{children}</DashboardComponent>;
};

export default Layout;
