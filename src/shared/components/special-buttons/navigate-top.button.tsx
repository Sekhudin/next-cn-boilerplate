"use client";
import * as React from "react";
import { ArrowUpToLineIcon } from "lucide-react";
import { cn } from "src/utils/common";
import { Button, ButtonProps } from "src/shared/ui/button";

const NavigateTopButton = React.forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "children" | "asChild" | "onClick">
>(({ className, ...props }, ref) => {
  return (
    <Button
      className={cn("size-10 rounded-full", className)}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      ref={ref}
      {...props}
    >
      <ArrowUpToLineIcon />
    </Button>
  );
});

NavigateTopButton.displayName = "NavigateTopButton";
export default NavigateTopButton;
