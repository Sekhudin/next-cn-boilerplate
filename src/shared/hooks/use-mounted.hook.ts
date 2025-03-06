"use client";
import React from "react";

/**
 * Custom hook to run when mounted
 * @param callback - The callback to run when the component is mounted
 * @returns { void } - void
 */
export const useMounted = (callback: React.EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(callback, []);
};
