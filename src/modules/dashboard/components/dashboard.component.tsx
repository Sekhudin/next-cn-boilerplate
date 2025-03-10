"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
} from "src/shared/ui/sidebar";
import { Separator } from "src/shared/ui/separator";
import DashboardSidebarHeader from "./header/sidebar.header";
import DashboardInsetHeader from "./header/inset.header";
import BasicGroupMenu from "./group-menu/basic.group-menu";
import { useDashboardWidth } from "../hooks/use-dashboard-width.hook";
import CommonContainer from "src/shared/components/containers/common.container";

const client = new QueryClient();
const DashboardComponent = ({ children }: React.PropsWithChildren) => {
  const dashboard = useDashboardWidth();

  return (
    <QueryClientProvider client={client}>
      <SidebarProvider
        style={dashboard.styleVarCSS}
        onMouseMove={dashboard.onMouseMove}
        onMouseUp={dashboard.onMouseUp}
      >
        <Sidebar>
          <DashboardSidebarHeader />
          <Separator />
          <SidebarContent>
            <BasicGroupMenu label="Basic Features" />
          </SidebarContent>
          <SidebarRail
            onClick={() => {}}
            onMouseDown={dashboard.onMouseDown}
            onMouseUp={dashboard.onMouseUp}
          />
          <SidebarFooter>footer</SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <DashboardInsetHeader />
          <CommonContainer>{children}</CommonContainer>
        </SidebarInset>
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default DashboardComponent;
