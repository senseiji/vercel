import Link from "next/link";

const patterns = [
  "prompt-chaining",
  "tool-use",
  "routing",
  "reflection",
  "memory",
  "multi-agent-collaboration",
  "self-correction",
  // Add the rest of your 21 patterns here
];

export default function Chapters() {
  return (
    <main>
      <h1 className="text-3xl font-semibold mb-4">Chapters</h1>
      <p className="text-[var(--muted)] mb-4">Starter stubs for your patterns. Add content in each page.</p>
      <ul className="grid md:grid-cols-2 gap-3">
        {patterns.map((slug) => (
          <li key={slug} className="card">
            <h2 className="text-xl font-semibold mb-2">{slug.replace(/-/g, " ")}</h2>
            <Link className="btn" href={`/patterns/${slug}`}>Open</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
