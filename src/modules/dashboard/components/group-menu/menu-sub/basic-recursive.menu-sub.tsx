"use client";
import React from "react";
import { match, P } from "ts-pattern";
import { ChevronRightIcon } from "lucide-react";
import { NextLink } from "src/shared/ui/link-button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "src/shared/ui/collapsible";
import { SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "src/shared/ui/sidebar";
import type { SidebarGroupMenu, Props } from "src/types/global.type";

export type BasicRecursiveMenuSubProps = Props<{
  menu: Pick<SidebarGroupMenu[number], "items">["items"];
}>;
const BasicRecursiveMenuSub = ({ menu }: BasicRecursiveMenuSubProps) => {
  return (
    <SidebarMenuSub>
      {menu?.map((menuSub) => (
        <React.Fragment key={menuSub.title}>
          {match(menuSub.items)
            .with(P.not(P.nullish), (menuSubItems) => (
              <Collapsible className="group">
                <CollapsibleTrigger asChild>
                  <SidebarMenuSubItem className="cursor-pointer">
                    <SidebarMenuSubButton>
                      {menuSub.icon && <menuSub.icon />}
                      <span className="first-letter:uppercase truncate">{menuSub.title}</span>
                      <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-90" />
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <BasicRecursiveMenuSub menu={menuSubItems} />
                </CollapsibleContent>
              </Collapsible>
            ))
            .otherwise(() => (
              <SidebarMenuSubItem>
                <SidebarMenuSubButton size="md" asChild>
                  <NextLink href={menuSub.url ?? ""}>
                    {menuSub.icon && <menuSub.icon />}
                    <span className="first-letter:uppercase truncate">{menuSub.title}</span>
                  </NextLink>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
        </React.Fragment>
      ))}
    </SidebarMenuSub>
  );
};

export default BasicRecursiveMenuSub;
