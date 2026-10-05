import "server-only";
import type { Locale } from "@/i18n/config";
import type { Portfolio, Project } from "./types";

export const API_URL = process.env.API_URL ?? "http://localhost:4000/api";

/** Content is cached for 60 seconds, then refreshed in the background. */
const REVALIDATE_SECONDS = 60;

async function request<T>(path: string, locale: Locale): Promise<T | null> {
  const separator = path.includes("?") ? "&" : "?";
  const res = await fetch(`${API_URL}${path}${separator}lang=${locale}`, {
    next: { revalidate: REVALIDATE_SECONDS, tags: ["portfolio"] },
  });
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`API request to ${path} failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function getPortfolio(locale: Locale): Promise<Portfolio> {
  const data = await request<Portfolio>("/portfolio", locale);
  if (!data) throw new Error("Portfolio data not found");
  return data;
}

export function getProject(slug: string, locale: Locale): Promise<Project | null> {
  return request<Project>(`/projects/${encodeURIComponent(slug)}`, locale);
}
