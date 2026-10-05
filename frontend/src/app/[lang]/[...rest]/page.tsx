import { notFound } from "next/navigation";

// Any address that doesn't match a page shows the localized 404 from ../not-found.tsx.
export default function CatchAll() {
  notFound();
}
