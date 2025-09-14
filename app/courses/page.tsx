import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses - ML Academy",
  description: "Discover our comprehensive machine learning and AI courses designed to advance your skills through hands-on learning. From agentic design to LLM development and AI content creation.",
  keywords: "AI courses, machine learning courses, agentic design, LLM training, AI content creation, deep learning, computer vision, NLP",
};

export default function Courses() {
  return (
    <main>
      <h1 className="text-4xl font-semibold mb-4">Our Courses</h1>
      <p className="text-lg text-[var(--muted)] mb-6">
        Discover our comprehensive machine learning and AI courses designed to advance your skills through hands-on learning.
      </p>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {/* Featured Course - Agentic Design Patterns */}
        <div className="card">
          <h2 className="text-2xl font-semibold mb-3">Agentic Design Patterns</h2>
          <div className="mb-4">
            <span className="inline-block bg-[var(--accent)] text-[#0b0f17] px-3 py-1 rounded-full text-sm font-semibold mr-2">Available Now</span>
            <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-sm">Advanced Level</span>
          </div>
          <div className="mb-4">
            <Image
              src="/images/courses/ai_agents.png"
              alt="Agentic Design Patterns Course"
              width={500}
              height={250}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <p className="mb-4 text-[var(--muted)]">
            Master the art of building intelligent, autonomous systems that can reason, plan, and act independently. 
            This comprehensive course covers everything from basic agent architectures to complex multi-agent systems.
          </p>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">What's Included:</h3>
            <ul className="text-sm text-[var(--muted)] space-y-1">
              <li>• 12 weeks of structured learning</li>
              <li>• Interactive lectures and live Q&A sessions</li>
              <li>• Hands-on coding exercises and projects</li>
              <li>• Access to course materials and resources</li>
              <li>• Community support and expert guidance</li>
            </ul>
          </div>
          
          <p className="text-sm text-[var(--muted)] mb-4">
            <strong>Based on:</strong>{" "}
            <a 
              href="https://www.amazon.com/Agentic-Design-Patterns-Hands-Intelligent/dp/3032014018/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              "Agentic Design Patterns: Hands-On with Intelligent Systems"
            </a>
            {" "}by Antonio Gullí
          </p>
          
          <div className="flex space-x-3">
            <Link className="btn" href="/courses/agentic-design-patterns">Start Learning</Link>
            <a className="btn bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17]" href="/Introduction.pdf" target="_blank" rel="noreferrer">Course Intro PDF</a>
          </div>
        </div>

        {/* Build LLM from Scratch */}
        <div className="card">
          <h2 className="text-2xl font-semibold mb-3">Build LLM from Scratch</h2>
          <div className="mb-4">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Coming Soon</span>
            <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-sm">Advanced Level</span>
          </div>
          <div className="mb-4">
            <Image
              src="/images/courses/llm-from-scratch.png"
              alt="Build LLM from Scratch Course"
              width={500}
              height={250}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <p className="mb-4 text-[var(--muted)]">
            Learn how to create, train, and tweak large language models (LLMs) by building one from the ground up! 
            Master the complete process from initial design and creation, to pretraining on a general corpus, and fine-tuning for specific tasks.
          </p>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">What You'll Learn:</h3>
            <ul className="text-sm text-[var(--muted)] space-y-1">
              <li>• Plan and code all the parts of an LLM</li>
              <li>• Prepare datasets suitable for LLM training</li>
              <li>• Fine-tune LLMs for text classification</li>
              <li>• Use human feedback to ensure instruction following</li>
              <li>• Load pretrained weights into an LLM</li>
            </ul>
          </div>
          
          <p className="text-sm text-[var(--muted)] mb-4">
            <strong>Based on:</strong>{" "}
            <a 
              href="https://www.amazon.com/Build-Large-Language-Model-Scratch/dp/1633437167/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              "Build a Large Language Model (From Scratch)"
            </a>
            {" "}by Sebastian Raschka
          </p>
          
          <button className="btn opacity-50 cursor-not-allowed" disabled>Coming 2025</button>
        </div>

        {/* AI Content Creation Pipeline */}
        <div className="card">
          <h2 className="text-2xl font-semibold mb-3">AI Content Creation Pipeline</h2>
          <div className="mb-4">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Coming Soon</span>
            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Intermediate Level</span>
          </div>
          <div className="mb-4">
            <Image
              src="/images/courses/ai-pipeline.png"
              alt="AI Content Creation Pipeline Course"
              width={500}
              height={250}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <p className="mb-4 text-[var(--muted)]">
            Master the complete AI-powered content creation workflow from concept to final video. Learn to use ChatGPT, Midjourney, Photoshop, video generation tools, and professional editing software in a seamless pipeline.
          </p>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Pipeline Workflow:</h3>
            <ul className="text-sm text-[var(--muted)] space-y-1">
              <li>• Moodboard creation with AI-powered inspiration</li>
              <li>• Image generation using ChatGPT + Midjourney</li>
              <li>• Professional image editing in Photoshop</li>
              <li>• Video creation with Veo 3 and Hailu AI</li>
              <li>• Advanced editing with After Effects & DaVinci Resolve</li>
            </ul>
          </div>
          
          <p className="text-sm text-[var(--muted)] mb-4">
            <strong>Duration:</strong> 10 weeks • <strong>Tools Covered:</strong> 8+ Professional Applications
          </p>
          
          <p className="text-sm text-[var(--muted)] mb-4">
            <strong>Based on:</strong>{" "}
            <a 
              href="https://www.youtube.com/watch?v=b29YE7mQTvA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              YouTube Tutorial: AI Content Creation Pipeline
            </a>
          </p>
          
          <button className="btn opacity-50 cursor-not-allowed" disabled>Coming 2025</button>
        </div>

        {/* Natural Language Processing */}
        <div className="card">
          <div className="mb-4">
            <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-sm">Coming Soon</span>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Natural Language Processing</h2>
          <p className="mb-4 text-[var(--muted)]">
            Dive deep into language models, transformers, and modern NLP techniques. Build applications that understand and generate human language.
          </p>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Planned Content:</h3>
            <ul className="text-sm text-[var(--muted)] space-y-1">
              <li>• Text preprocessing and tokenization</li>
              <li>• Transformer architectures and attention</li>
              <li>• Large language model fine-tuning</li>
              <li>• Sentiment analysis and text classification</li>
              <li>• Building conversational AI systems</li>
            </ul>
          </div>
          
          <button className="btn opacity-50 cursor-not-allowed" disabled>Coming 2025</button>
        </div>
      </div>

      <div className="card mt-8">
        <h2 className="text-2xl font-semibold mb-4">Why Our Courses Work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold mb-2">Project-Based Learning</h3>
            <p className="text-[var(--muted)] text-sm">Every concept is reinforced through hands-on projects that mirror real-world challenges.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-semibold mb-2">Expert Guidance</h3>
            <p className="text-[var(--muted)] text-sm">Learn from industry practitioners who bring real experience to every lesson.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold mb-2">Career Ready</h3>
            <p className="text-[var(--muted)] text-sm">Build a portfolio of projects that demonstrate your skills to potential employers.</p>
          </div>
        </div>
      </div>
    </main>
  );
}