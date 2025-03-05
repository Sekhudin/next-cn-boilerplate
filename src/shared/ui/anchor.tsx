import * as React from "react";
import { cn } from "src/utils/common";

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(({ className, ...props }, ref) => {
  return (
    <a className={cn("underline font-medium underline-offset-4", className)} ref={ref} {...props} />
  );
});
Anchor.displayName = "Anchor";

export { Anchor };
