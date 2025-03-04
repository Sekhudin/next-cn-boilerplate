import React from "react";
import { cn } from "src/utils/common";

export const Code = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...props}
    />
  ),
);
Code.displayName = "Code";

export const Small = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <small ref={ref} className={cn("text-sm font-medium leading-none", className)} {...props} />
  ),
);
Small.displayName = "Small";

export const Large = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
  ),
);
Large.displayName = "Large";

export const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.HTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
    {...props}
  />
));
Blockquote.displayName = "Blockquote";
