import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getYYYYMMDDNow() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");

  return `${y}${m}${d}`;
}

export function removeYYYYMMDDFromFileName(fileName) {
  const regex = /^\d{8}-/; // Matches YYYYMMDD- at the start of the string
  return fileName.replace(regex, ""); // Removes the matched part
}
