import { notFound } from "next/navigation";

const CONTENT: Record<string, { title: string; body: string }> = {
  "prompt-chaining": {
    title: "Prompt Chaining",
    body: `Pattern overview, use cases, and runnable snippets go here.`,
  },
  "tool-use": {
    title: "Tool Use",
    body: `How agents call external tools/APIs safely and reliably.`,
  },
  "routing": {
    title: "Routing",
    body: `Direct a query to the right agent, tool, or prompt chain.`,
  },
  "reflection": {
    title: "Reflection",
    body: `Self-review, critique, and iterative improvement strategies.`,
  },
  "memory": {
    title: "Memory",
    body: `Persist and retrieve relevant state across interactions.`,
  },
  "multi-agent-collaboration": {
    title: "Multi-Agent Collaboration",
    body: `Orchestrate roles, tasks, and communication between agents.`,
  },
  "self-correction": {
    title: "Self-Correction",
    body: `Detect errors, repair outputs, and retry with guardrails.`,
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CONTENT).map((slug) => ({ slug }));
}

export default function PatternPage({ params }: { params: { slug: string } }) {
  const data = CONTENT[params.slug];
  if (!data) return notFound();

  return (
    <main>
      <h1 className="text-3xl font-semibold mb-2">{data.title}</h1>
      <p className="text-[var(--muted)] mb-4">Starter content — replace with your real chapter.</p>
      <div className="card whitespace-pre-wrap">{data.body}</div>
    </main>
  );
}
