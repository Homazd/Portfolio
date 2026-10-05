export function Heading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <h2 className="display text-6xl sm:text-8xl">{title}</h2>
      {intro && <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
