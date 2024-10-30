import { env } from "@/env";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBaseUrl = () =>
  env.NODE_ENV === "development"
    ? `http://localhost:3000`
    : `https://${env.BASE_URL}`;

export function getApiUrl() {
  if (typeof window !== "undefined") return "";

  return `${getBaseUrl()}/api/trpc`;
}
