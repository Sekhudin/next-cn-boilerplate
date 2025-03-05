import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";
import { cn } from "src/utils/common";

export interface AnchorButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const AnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <a className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
AnchorButton.displayName = "AnchorButton";

export { AnchorButton };
