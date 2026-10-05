"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { sendMessage, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle" };

// The form always sits on a white card, so it uses fixed light colors in both themes.
const input =
  "w-full rounded-xl border-3 border-black bg-white px-4 py-3 text-black outline-none placeholder:text-neutral-500 focus:shadow-[4px_4px_0_var(--plum)]";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5 text-black">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input id="name" name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="Jane Doe" className={input} />
        </Field>
        <Field label="Your email" htmlFor="email">
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="jane@company.com" className={input} />
        </Field>
      </div>
      <Field label="Subject" htmlFor="subject" optional>
        <input id="subject" name="subject" maxLength={150} placeholder="New website for our clinic" className={input} />
      </Field>
      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="What are you working on, and how can I help?"
          className={`${input} resize-y`}
        />
      </Field>

      {/* Honeypot field — hidden from people, attractive to bots */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status !== "idle" && (
        <div
          role="status"
          className={`rounded-xl border-3 border-black p-4 ${state.status === "success" ? "bg-mint" : "bg-red-200"}`}
        >
          <p className="flex items-center gap-2 font-bold">
            {state.status === "success" && <CheckCircle2 className="size-5" />}
            {state.message}
          </p>
          {state.errors && (
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {state.errors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="nb-btn w-full border-black bg-plum text-white sm:w-auto"
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-bold">
        {label} {optional && <span className="font-normal text-neutral-600">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
