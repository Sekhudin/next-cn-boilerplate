"use client";
import React from "react";
import { Badge } from "src/shared/ui/badge";
import { SidebarHeader } from "src/shared/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "src/shared/ui/avatar";
import { Favicon } from "src/shared/public/brand";
import * as env from "src/configs/env.config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/shared/ui/dialog";
import { Input } from "src/shared/ui/input";
import { AnchorButton } from "src/shared/ui/anchor-button";
import { cn, Props } from "src/utils/common";

const DashboardSidebarHeader = ({ className }: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <SidebarHeader className={cn("", className)}>
      <div className="flex items-center gap-x-2 my-2">
        <AnchorButton
          className="size-10 rounded-full hover:bg-transparent"
          href="/"
          variant="ghost"
        >
          <Avatar>
            <AvatarImage src={Favicon.src} />
            <AvatarFallback>KB</AvatarFallback>
          </Avatar>
        </AnchorButton>
        <span className="flex items-start gap-x-1 capitalize">
          <span className="text-xl font-bold">{env.app.name}</span>
          <Badge className="size-fit ml-auto px-1 py-0 font-light shadow-none">
            {env.app.version}
          </Badge>
        </span>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="relative">
          <span className="absolute inset-0 bg-transparent dark:bg-transparent" />
          <Input className="select-none bg-secondary/90" type="text" placeholder="Search menu" />
        </DialogTrigger>

        <DialogContent className="w-11/12 md:w-full md:max-w-2xl lg:max-w-3xl top-[30%]">
          <DialogHeader>
            <DialogTitle>Search Menu</DialogTitle>
            <DialogDescription>Search specific menu based on given name</DialogDescription>
          </DialogHeader>
          content
        </DialogContent>
      </Dialog>
    </SidebarHeader>
  );
};

export default DashboardSidebarHeader;
