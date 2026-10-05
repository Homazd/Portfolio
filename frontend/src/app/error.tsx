"use client";

import { RefreshCw } from "lucide-react";

export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center px-6 sm:px-16">
      <h1 className="display text-6xl sm:text-8xl">This page didn&apos;t load</h1>
      <p className="mt-5 max-w-[50ch] text-lg text-muted">
        The content couldn&apos;t be loaded just now. Try again in a moment, or email me directly.
      </p>
      <button onClick={() => retry()} className="nb-btn mt-8 bg-plum text-plum-foreground">
        <RefreshCw className="size-4" /> Try again
      </button>
    </main>
  );
}
