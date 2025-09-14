export default function Blogs() {
  return (
    <main>
      <h1 className="text-4xl font-semibold mb-4">Blogs</h1>
      <p className="text-lg text-[var(--muted)] mb-6">
        Stay updated with the latest insights on machine learning, AI, and agentic systems.
      </p>
      
      <div className="space-y-6">
        <article className="card">
          <h2 className="text-2xl font-semibold mb-2">Getting Started with Agentic Design</h2>
          <p className="text-sm text-[var(--muted)] mb-3">Published on December 15, 2024</p>
          <p className="mb-3 text-[var(--muted)]">
            Learn the fundamental principles of designing intelligent agentic systems...
          </p>
          <a className="btn" href="#">Read More</a>
        </article>
        
        <article className="card">
          <h2 className="text-2xl font-semibold mb-2">Best Practices for ML Model Deployment</h2>
          <p className="text-sm text-[var(--muted)] mb-3">Published on December 10, 2024</p>
          <p className="mb-3 text-[var(--muted)]">
            Discover proven strategies for deploying machine learning models in production...
          </p>
          <a className="btn" href="#">Read More</a>
        </article>
      </div>
    </main>
  );
}