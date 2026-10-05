"use server";

import { headers } from "next/headers";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { API_URL } from "@/lib/api";

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: string[];
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const lang = String(formData.get("lang") ?? "");
  const t = getDictionary(hasLocale(lang) ? lang : defaultLocale).form;

  const payload = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    website: String(formData.get("website") ?? ""),
  };

  // Same rules as the API, checked here so errors appear in the visitor's language.
  const errors: string[] = [];
  if (payload.name.length < 2 || payload.name.length > 100) errors.push(t.errors.name);
  if (!EMAIL.test(payload.email) || payload.email.length > 200) errors.push(t.errors.email);
  if (payload.subject.length > 150) errors.push(t.errors.subject);
  if (payload.message.length < 10 || payload.message.length > 5000) errors.push(t.errors.message);
  if (errors.length) return { status: "error", message: t.checkForm, errors };

  // Forward the visitor's IP so the API's rate limit applies per visitor.
  const h = await headers();
  const clientIp = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? h.get("x-real-ip") ?? "";

  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(clientIp && { "X-Forwarded-For": clientIp }),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (res.ok) return { status: "success", message: t.sent };
    if (res.status === 429) return { status: "error", message: t.tooMany };
    return { status: "error", message: t.checkForm };
  } catch {
    return { status: "error", message: t.unavailable };
  }
}
