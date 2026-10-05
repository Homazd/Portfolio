import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center px-6 sm:px-16">
      <p className="display text-[clamp(7rem,28vw,16rem)] text-plum">404</p>
      <h1 className="mt-2 text-3xl font-extrabold">There&apos;s no page at this address</h1>
      <p className="mt-3 max-w-[50ch] text-lg text-muted">
        The link may be mistyped, or the page may have moved.
      </p>
      <Link href="/" className="nb-btn mt-8 bg-butter text-on-color">
        Go to the home page
      </Link>
    </main>
  );
}
