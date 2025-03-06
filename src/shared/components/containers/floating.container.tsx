import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "src/utils/common";

export const floatinContainerVariants = cva("fixed z-50", {
  variants: {
    direction: {
      horizontal: "flex gap-x-2",
      vertical: "flex flex-col gap-y-2",
    },
    position: {
      bottomRight: "bottom-10 right-10",
      botttomLeft: "bottom-10 left-10",
      topRight: "top-10 right-10",
      topLeft: "top-10 left-10",
    },
  },
  defaultVariants: {
    direction: "horizontal",
    position: "bottomRight",
  },
});

export interface FloatingContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof floatinContainerVariants> {}

const FloatingContainer = React.forwardRef<HTMLDivElement, FloatingContainerProps>(
  ({ className, direction, position, children, ...props }, ref) => {
    return (
      <div
        className={cn(floatinContainerVariants({ className, direction, position }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
FloatingContainer.displayName = "FloatingContainer";
export default FloatingContainer;
