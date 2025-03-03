"use client";
import React from "react";
import { toast } from "sonner";

/**
 * useClipboard, handle copy action to clipboard
 * @param value - value to copy
 */

type ReturnUseClipboard = [boolean, handler: (value?: string | number) => void];
export const useClipboard = (value: string | number = "", delay = 1500): ReturnUseClipboard => {
  const [isCopied, setCopied] = React.useState(false);

  const copyHandler = React.useCallback(
    (overrideValue?: string | number) => {
      if (isCopied) return;
      const valueToCopy = overrideValue || value;
      navigator.clipboard.writeText(valueToCopy.toString());
      const toastID = toast.success("Text copied!");
      setCopied(true);
      setTimeout(() => {
        toast.dismiss(toastID);
        setCopied(false);
      }, delay);
    },
    [isCopied, value, delay],
  );

  return [isCopied, copyHandler];
};
