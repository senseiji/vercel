import Link from "next/link";
import Image from "next/image";

export default function AgenticDesignPatterns() {
  return (
    <main>
      <h1 className="text-4xl font-semibold mb-4">Agentic Design Patterns</h1>
      <p className="text-lg text-[var(--muted)] mb-6">
        Build, publish, and evolve your agentic systems guide. Master the art of creating intelligent, autonomous systems that can reason, plan, and act independently.
      </p>

      {/* Course Banner Image */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/banners/growtika-nGoCBxiaRO0-unsplash.jpg"
          alt="Agentic Design Patterns Course"
          width={960}
          height={400}
          className="w-full h-64 md:h-80 object-cover"
          priority
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-2">Course Introduction (PDF)</h2>
          <p className="mb-3 text-[var(--muted)]">Download or view the comprehensive course introduction and syllabus.</p>
          <a className="btn" href="/Introduction.pdf" target="_blank" rel="noreferrer">Open PDF</a>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-2">Course Chapters</h2>
          <p className="mb-3 text-[var(--muted)]">Browse individual pattern chapters and hands-on exercises.</p>
          <Link className="btn" href="/chapters">View Chapters</Link>
        </div>
      </div>

      <div className="card mt-6">
        <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--accent)]">Core Concepts</h3>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>• Agent architecture and design principles</li>
              <li>• Autonomous decision-making systems</li>
              <li>• Planning and reasoning algorithms</li>
              <li>• Multi-agent coordination patterns</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--accent)]">Practical Skills</h3>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>• Building intelligent agents from scratch</li>
              <li>• Implementing real-world agentic systems</li>
              <li>• Performance optimization techniques</li>
              <li>• Production deployment strategies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card mt-6">
        <h2 className="text-xl font-semibold mb-2">Course Structure</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-[#0b0f17] mt-1">1</div>
            <div>
              <h3 className="font-semibold">Foundations & Theory</h3>
              <p className="text-[var(--muted)] text-sm">Understanding agent architectures and design principles</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-[#0b0f17] mt-1">2</div>
            <div>
              <h3 className="font-semibold">Hands-on Implementation</h3>
              <p className="text-[var(--muted)] text-sm">Building your first agentic systems with guided coding sessions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-[#0b0f17] mt-1">3</div>
            <div>
              <h3 className="font-semibold">Advanced Patterns</h3>
              <p className="text-[var(--muted)] text-sm">Complex multi-agent systems and real-world applications</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-sm font-bold text-[#0b0f17] mt-1">4</div>
            <div>
              <h3 className="font-semibold">Capstone Project</h3>
              <p className="text-[var(--muted)] text-sm">Deploy a production-ready agentic system</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-6">
        <h2 className="text-xl font-semibold mb-2">How to Access Course Materials</h2>
        <ol className="list-decimal ml-6 space-y-2 text-[var(--muted)]">
          <li>Download the course introduction PDF above</li>
          <li>Browse through the chapter materials and exercises</li>
          <li>Join our interactive coding sessions and Q&A discussions</li>
          <li>Complete hands-on projects to reinforce your learning</li>
        </ol>
      </div>
    </main>
  );
}