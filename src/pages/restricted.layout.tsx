import DashboardComponent from "src/modules/dashboard/components/dashboard.component";
import type { LayoutProps } from "src/types/global.type";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <DashboardComponent>{children}</DashboardComponent>
    </div>
  );
};

export default Layout;
