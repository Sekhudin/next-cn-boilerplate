"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
} from "src/shared/ui/sidebar";
import { Separator } from "src/shared/ui/separator";
import DashboardSidebarHeader from "./header/sidebar.header";
import DashboardInsetHeader from "./header/inset.header";
import BasicGroupMenu from "./group-menu/basic.group-menu";
import { useDashboardWidth } from "../hooks/use-dashboard-width.hook";

const client = new QueryClient();
const DashboardComponent = ({ children }: React.PropsWithChildren) => {
  const dashboard = useDashboardWidth();

  return (
    <QueryClientProvider client={client}>
      <SidebarProvider className="relative w-dvw">
        <Sidebar className="sticky top-0" collapsible="none">
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
        </Sidebar>

        <SidebarInset className="bg-pink-300">
          <DashboardInsetHeader />
          <div className="relative min-h-screen flex flex-1 flex-col items-center select-none bg-muted dark:bg-background">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default DashboardComponent;
