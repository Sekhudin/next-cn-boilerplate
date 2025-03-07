"use client";
import * as React from "react";
import NextLink, { LinkProps } from "next/link";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";
import { cn } from "src/utils/common";

export interface LinkButtonProps
  extends React.PropsWithChildren<LinkProps>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <NextLink className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
LinkButton.displayName = "LinkButton";

export { LinkButton, NextLink };
