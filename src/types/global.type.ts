import type React from "react";
import type { ExternalToast } from "sonner";
import type { LucideIcon } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import type { NextFont, NextFontWithVariable } from "next/dist/compiled/@next/font";

export type Font = NextFont | NextFontWithVariable;
export type Props<T extends Record<string, unknown> = Record<string, unknown>> = {
  className?: string;
} & T;
export type LayoutProps = Readonly<{ children: React.ReactNode }>;
export type PageParams<T extends string = string> = {
  params: Record<T, string>;
};
export interface PageProps<T extends string, S extends string = string> extends PageParams<T> {
  searchParams: Record<S, string>;
}

type GenerateMetadataCB<TParams extends string = string, TQuery extends string = string> = (
  props: PageProps<TParams, TQuery>,
  parent: ResolvingMetadata,
) => Promise<Metadata>;

export type { Metadata };
export type InitMetadata = (metadata: Metadata) => Metadata;
export type GenerateMetadata = <TParams extends string = string, TQuery extends string = string>(
  cb: GenerateMetadataCB<TParams, TQuery>,
) => (props: PageProps<TParams, TQuery>, parent: ResolvingMetadata) => Promise<Metadata>;

export type ToastLevel = "success" | "info" | "warning" | "error";
export type ToastTitle = (() => React.ReactNode) | React.ReactNode;
export type ToastNotification = {
  level: ToastLevel;
  title: ToastTitle;
  data?: ExternalToast;
};

export type RoleKey = "user" | "developer";
export type Role = Record<RoleKey, RoleKey>;

export type SidebarGroupMenu = {
  id?: string;
  title: string;
  icon?: LucideIcon;
  url?: string;
  isActive?: boolean;
  items?: (Required<
    Omit<SidebarGroupMenu[number], "id" | "icon" | "isActive" | "items" | "url">
  > &
    Pick<SidebarGroupMenu[number], "id" | "items" | "url" | "icon">)[];
}[];
