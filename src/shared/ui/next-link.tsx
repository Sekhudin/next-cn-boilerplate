"use client";
import * as React from "react";
import Link, { LinkProps } from "next/link";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";
import { cn } from "src/utils/common";

export interface NextLinkProps
  extends React.PropsWithChildren<LinkProps>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <Link className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
NextLink.displayName = "NextLink";

export { NextLink };
