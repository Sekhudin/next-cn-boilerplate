import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export type * from "src/types/global.type";
export * from "./base";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
