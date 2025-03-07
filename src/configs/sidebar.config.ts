import { LayoutDashboard } from "lucide-react";
import type { SidebarGroupMenu } from "src/types/global.type";

export const basicGroupMenu: SidebarGroupMenu = [
  {
    id: "/dashboard",
    title: "dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
];

export const developerGroupMenu: SidebarGroupMenu = [];
