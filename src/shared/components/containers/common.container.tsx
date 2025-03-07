import * as React from "react";
import { cn } from "src/utils/common";

interface CommonContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "main" | "div";
}
const CommonContainer = React.forwardRef<HTMLDivElement, CommonContainerProps>(
  ({ className, children, as, ...props }, ref) => {
    const Comp = as || "main";
    return (
      <Comp
        className={cn("w-full min-h-dvh xl:max-w-5xl px-4 md:px-8 pt-8", className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
CommonContainer.displayName = "CommonContainer";
export default CommonContainer;
