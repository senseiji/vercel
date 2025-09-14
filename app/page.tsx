import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-semibold mb-4">Agentic Design Patterns</h1>
      <p className="text-lg text-[var(--muted)] mb-6">
        Build, publish, and evolve your agentic systems guide. Hosted on Vercel, authored in Markdown/TSX, and open to add interactive demos.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-2">Read the Introduction (PDF)</h2>
          <p className="mb-3 text-[var(--muted)]">Download or view your current Introduction PDF.</p>
          <a className="btn" href="/Introduction.pdf" target="_blank" rel="noreferrer">Open PDF</a>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-2">Chapters</h2>
          <p className="mb-3 text-[var(--muted)]">Browse individual pattern pages and chapter stubs.</p>
          <Link className="btn" href="/chapters">View Chapters</Link>
        </div>
      </div>

      <div className="card mt-6">
        <h2 className="text-xl font-semibold mb-2">How to update content</h2>
        <ol className="list-decimal ml-6 space-y-2 text-[var(--muted)]">
          <li>Replace <code>/public/Introduction.pdf</code> with a new export of your intro.</li>
          <li>Edit chapter stubs under <code>/app/chapters</code> or add more pages.</li>
          <li>Commit to GitHub; Vercel auto-deploys a new version.</li>
        </ol>
      </div>
    </main>
  );
}
