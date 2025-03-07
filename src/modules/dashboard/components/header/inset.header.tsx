"use client";
import React from "react";
import { match } from "ts-pattern";
import { Separator } from "src/shared/ui/separator";
import { SidebarTrigger } from "src/shared/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "src/shared/ui/breadcrumb";
import { NextLink } from "src/shared/ui/link-button";
import ThemeToggle from "src/shared/components/toggles/theme.toggle";
import SignOutButton from "src/modules/auth/components/buttons/signout.button";
import { useNextPathname } from "src/shared/hooks/use-next-pathname.hook";
import { cn, Props } from "src/utils/common";
import * as env from "src/configs/env.config";

const route = (arr: string[], sliceIndex: number): string => {
  return "/".concat(arr.slice(0, sliceIndex + 1).join("/"));
};

const DashboardInsetHeader = ({ className }: Props) => {
  const pathname = useNextPathname();

  return (
    <header
      className={cn(
        `flex sticky z-50 top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4 lg:px-8`,
        className,
      )}
    >
      <div className="flex grow items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />

        <Breadcrumb className="select-none">
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink className="capitalize" asChild>
                <NextLink href="/dashboard">{env.app.name}</NextLink>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {pathname.list.map((pathnameItem, index) => (
              <React.Fragment key={index}>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  {match(pathnameItem)
                    .with(pathname.last, () => (
                      <BreadcrumbPage className="font-bold text-primary/90 dark:text-primary/80">
                        {pathnameItem}
                      </BreadcrumbPage>
                    ))
                    .otherwise(() => (
                      <BreadcrumbLink asChild>
                        <NextLink href={route(pathname.list, index)}>{pathnameItem}</NextLink>
                      </BreadcrumbLink>
                    ))}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex gap-2">
        <ThemeToggle />
        <SignOutButton className="rounded-full" />
      </div>
    </header>
  );
};

export default DashboardInsetHeader;
