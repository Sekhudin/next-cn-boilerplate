import React from "react";

const SIDEBAR_MIN_WIDTH = 320;
export const useDashboardWidth = () => {
  const [isResizing, setIsResizing] = React.useState(false);
  const [width, setWidth] = React.useState(SIDEBAR_MIN_WIDTH);

  const onMouseDown = React.useCallback(() => {
    setIsResizing(true);
  }, []);

  const onMouseUp = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const onMouseMove = React.useCallback(
    (e: any) => {
      if (isResizing) {
        const newWidth = e.clientX;
        setWidth(newWidth > SIDEBAR_MIN_WIDTH ? newWidth : SIDEBAR_MIN_WIDTH);
      }
    },
    [isResizing],
  );

  const styleVarCSS: React.CSSProperties = {
    "--sidebar-width": `${width}px`,
  } as React.CSSProperties;

  return { width, styleVarCSS, onMouseDown, onMouseUp, onMouseMove };
};
