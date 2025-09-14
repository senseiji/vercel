import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-semibold mb-4 text-center">Building Careers in AI Cloud</h1>
      <p className="text-lg text-[var(--muted)] mb-6 text-center">
        We teach young and old alike to master new technologies through one-on-one attention and hands-on learning. 
        Our personalized approach ensures every student gains practical skills and confidence in AI and cloud computing.
      </p>

      {/* Featured Courses */}
      <div className="mb-6 -mx-4 px-2">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Courses</h2>
        <div className="grid gap-3 lg:grid-cols-2 2xl:grid-cols-3">
          <div className="card">
            <Link href="/courses/agentic-design-patterns">
              <h3 className="text-2xl font-semibold mb-2 text-[var(--accent)] hover:underline cursor-pointer">Agentic Patterns</h3>
            </Link>
            <div className="mb-4">
              <Image
                src="/images/courses/ai_agents.png"
                alt="AI Agents Course"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="mb-3 text-[var(--muted)]">
              Master the art of building intelligent, autonomous systems that can reason, plan, and act independently.
            </p>
            <div className="mb-3">
              <span className="inline-block bg-[var(--accent)] text-[#0b0f17] px-2 py-1 rounded text-xs font-semibold mr-2">Advanced</span>
              <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-2 py-1 rounded text-xs">12 weeks</span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-3">
              Based on{" "}
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
              <Link className="btn bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17]" href="/courses/agentic-design-patterns">More Info</Link>
            </div>
          </div>

          <div className="card">
            <Link href="/courses/build-llm-from-scratch">
              <h3 className="text-2xl font-semibold mb-2 text-[var(--accent)] hover:underline cursor-pointer">Build LLM from Scratch</h3>
            </Link>
            <div className="mb-4">
              <Image
                src="/images/courses/llm-from-scratch.png"
                alt="Build LLM from Scratch Course"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="mb-3 text-[var(--muted)]">
              Learn how to create, train, and tweak large language models (LLMs) by building one from the ground up! 
              Master the complete process from initial design and creation, to pretraining on a general corpus, and fine-tuning for specific tasks.
            </p>
            <div className="mb-3">
              <span className="inline-block bg-[var(--accent)] text-[#0b0f17] px-2 py-1 rounded text-xs font-semibold mr-2">Advanced</span>
              <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-2 py-1 rounded text-xs mr-2">16 weeks</span>
              <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-xs">Coming Soon</span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-3">
              Based on{" "}
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
            <div className="flex space-x-3">
              <button className="btn opacity-50 cursor-not-allowed" disabled>Coming 2025</button>
              <Link className="btn bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17]" href="/courses/build-llm-from-scratch">More Info</Link>
            </div>
          </div>

          <div className="card">
            <Link href="/courses/ai-content-creation-pipeline">
              <h3 className="text-2xl font-semibold mb-2 text-[var(--accent)] hover:underline cursor-pointer">AI Content Creation</h3>
            </Link>
            <div className="mb-4">
              <Image
                src="/images/courses/ai-pipeline.png"
                alt="AI Content Creation Pipeline"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="mb-3 text-[var(--muted)]">
              Master the complete AI-powered content creation workflow from concept to final video. Learn to use ChatGPT, Midjourney, Photoshop, video generation tools, and professional editing software in a seamless pipeline.
            </p>
            <div className="mb-3">
              <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold mr-2">Intermediate</span>
              <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-2 py-1 rounded text-xs mr-2">10 weeks</span>
              <span className="inline-block bg-orange-500 text-white px-2 py-1 rounded text-xs">Coming Soon</span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-3">
              Complete pipeline: Moodboard → Image Generation → Video Creation → Professional Editing
            </p>
            <p className="text-sm text-[var(--muted)] mb-3">
              Based on{" "}
              <a 
                href="https://www.youtube.com/watch?v=b29YE7mQTvA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                AI Content Creation Pipeline Tutorial
              </a>
            </p>
            <div className="flex space-x-3">
              <button className="btn opacity-50 cursor-not-allowed" disabled>Coming 2025</button>
              <Link className="btn bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17]" href="/courses/ai-content-creation-pipeline">More Info</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Methodology Section */}
      <div className="card mb-6">
        <h2 className="text-3xl font-semibold mb-4 text-center">How We Teach</h2>
        <p className="text-lg text-[var(--muted)] mb-6 text-center">
          Our unique blend of theory and practice ensures you don't just understand concepts—you master them.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Lectures</h3>
            <p className="text-[var(--muted)] text-sm">
              Engaging presentations that connect theory to real-world applications
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">In-Depth Articles</h3>
            <p className="text-[var(--muted)] text-sm">
              Comprehensive written materials that you can reference anytime
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Hands-On Coding</h3>
            <p className="text-[var(--muted)] text-sm">
              Build real projects and implement algorithms from scratch
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[var(--accent)] rounded-full flex items-center justify-center">
              <span className="text-2xl">❓</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Live Q&A</h3>
            <p className="text-[var(--muted)] text-sm">
              Get your questions answered by experts in real-time
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose ML Academy */}
      <div className="card mb-6">
        <h2 className="text-2xl font-semibold mb-4">Why Choose ML Academy?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">Learn by Doing</h3>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>• Build real projects, not just follow tutorials</li>
              <li>• Implement algorithms from first principles</li>
              <li>• Work on industry-relevant problems</li>
              <li>• Deploy your models to production</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">Comprehensive Support</h3>
            <ul className="space-y-2 text-[var(--muted)]">
              <li>• Expert instructors with industry experience</li>
              <li>• Active community of learners and practitioners</li>
              <li>• Regular live sessions and office hours</li>
              <li>• Personalized feedback on your projects</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
