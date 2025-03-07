import React from "react";
import { match, P } from "ts-pattern";
import { ChevronRightIcon } from "lucide-react";
import { NextLink } from "src/shared/ui/link-button";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "src/shared/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "src/shared/ui/collapsible";
import { DevRoleContainer } from "src/shared/components/containers/role.container";
import BasicRecursiveMenuSub from "./menu-sub/basic-recursive.menu-sub";
import { cn, Props } from "src/utils/common";
import * as sidebar from "src/configs/sidebar.config";

const BasicGroupMenu = ({ className, label }: Props<{ label: string }>) => {
  return (
    <SidebarGroup className={cn("", className)}>
      <SidebarGroupLabel className="first-letter:uppercase text-primary">{label}</SidebarGroupLabel>
      <SidebarMenu>
        {sidebar.basicGroupMenu.map((menu) => (
          <React.Fragment key={menu.id}>
            {match(menu.items)
              .with(P.not(P.nullish), (menuItems) => (
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuItem>
                      <SidebarMenuButton size="default">
                        {menu.icon && <menu.icon />}
                        <span className="first-letter:uppercase">{menu.title}</span>
                        <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <BasicRecursiveMenuSub menu={menuItems} />
                  </CollapsibleContent>
                </Collapsible>
              ))
              .otherwise(() => (
                <SidebarMenuItem>
                  <SidebarMenuButton size="default" tooltip={menu.title} asChild>
                    <NextLink href={menu.url ?? ""}>
                      {menu.icon && <menu.icon />}
                      <span className="first-letter:uppercase">{menu.title}</span>
                    </NextLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </React.Fragment>
        ))}

        <DevRoleContainer role="developer">
          {sidebar.developerGroupMenu.map((menu) => (
            <React.Fragment key={menu.id}>
              {match(menu.items)
                .with(P.not(P.nullish), (menuItems) => (
                  <Collapsible className="group/collapsible">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuItem>
                        <SidebarMenuButton size="default">
                          {menu.icon && <menu.icon />}
                          <span className="first-letter:uppercase">{menu.title}</span>
                          <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <BasicRecursiveMenuSub menu={menuItems} />
                    </CollapsibleContent>
                  </Collapsible>
                ))
                .otherwise(() => (
                  <SidebarMenuItem>
                    <SidebarMenuButton size="default" tooltip={menu.title} asChild>
                      <NextLink href={menu.url ?? ""}>
                        {menu.icon && <menu.icon />}
                        <span className="first-letter:uppercase">{menu.title}</span>
                      </NextLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </React.Fragment>
          ))}
        </DevRoleContainer>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default BasicGroupMenu;
