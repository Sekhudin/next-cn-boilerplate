import type React from "react";
import type { NextFont, NextFontWithVariable } from "next/dist/compiled/@next/font";

export type Font = NextFont | NextFontWithVariable;
export type Props<T extends Record<string, unknown> = Record<string, unknown>> = {
  className?: string;
} & T;
export type LayoutProps = Readonly<{ children: React.ReactNode }>;
