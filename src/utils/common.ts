import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./base.util";
export type * from "src/types/global.type";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
