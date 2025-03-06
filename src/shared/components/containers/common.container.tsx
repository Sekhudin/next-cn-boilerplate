import * as React from "react";
import { cn } from "src/utils/common";

const CommonContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("w-full min-h-dvh xl:max-w-5xl px-4 md:px-8 pt-10", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
CommonContainer.displayName = "CommonContainer";
export default CommonContainer;
