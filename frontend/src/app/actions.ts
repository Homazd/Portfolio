"use server";

import { headers } from "next/headers";
import { API_URL } from "@/lib/api";

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: string[];
}

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

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

    const body = await res.json().catch(() => ({}));

    if (res.ok) {
      return { status: "success", message: body.message ?? "Thank you — your message has been sent." };
    }
    if (res.status === 429) {
      return { status: "error", message: "Too many messages. Please try again in a minute." };
    }
    const errors = Array.isArray(body.message) ? body.message : body.message ? [body.message] : undefined;
    return { status: "error", message: "Please check the form and try again.", errors };
  } catch {
    return {
      status: "error",
      message: "The message service is unavailable right now. Please email me directly instead.",
    };
  }
}
