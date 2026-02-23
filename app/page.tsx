"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const heroSlides = [
    {
      badge: "✨ Join thousands of professionals who've transformed their careers",
      headline: "Learn AI Skills That",
      highlightText: " Actually Matter",
      description: "Skip the theory overload. Learn by building real AI systems that solve actual problems. From zero to production-ready in weeks, not years.",
      metrics: [
        { value: "94%", label: "Career advancement within 6 months" },
        { value: "$35k", label: "Average salary increase" },
        { value: "12 weeks", label: "From beginner to job-ready" }
      ],
      primaryCTA: { text: "Start Your AI Journey →", href: "/courses/agentic-design-patterns" },
      secondaryCTA: { text: "View Schedule", href: "https://gdg.community.dev/events/details/google-gdg-cloud-san-jose-presents-learn-to-build-ai-agents/" }
    },
    {
      badge: "🚀 From zero to AI expert in record time",
      headline: "Build Production-Ready",
      highlightText: " AI Systems",
      description: "Stop watching tutorials. Start building real AI agents, custom language models, and automated systems that companies actually deploy.",
      metrics: [
        { value: "500+", label: "Students placed in AI roles" },
        { value: "89%", label: "Complete all projects" },
        { value: "3 months", label: "Average time to first AI job" }
      ],
      primaryCTA: { text: "Build Your First Agent →", href: "/courses/agentic-design-patterns" },
      secondaryCTA: { text: "See Student Projects", href: "/courses" }
    },
    {
      badge: "💼 Career transformation guaranteed",
      headline: "Master AI",
      highlightText: " Like a Pro",
      description: "Learn from engineers at OpenAI, Google, and Meta. Build a portfolio that gets you hired at top AI companies.",
      metrics: [
        { value: "Top 10", label: "AI companies hire our grads" },
        { value: "$120k", label: "Average starting salary" },
        { value: "95%", label: "Job placement rate" }
      ],
      primaryCTA: { text: "Start Learning Today →", href: "/courses/agentic-design-patterns" },
      secondaryCTA: { text: "Meet Instructors", href: "/about" }
    },
    {
      badge: "🎯 Real projects, real results",
      headline: "Build AI Apps That",
      highlightText: " Actually Work",
      description: "Create chatbots, recommendation engines, and automation tools. Deploy to production and showcase your skills to employers.",
      metrics: [
        { value: "50+", label: "Real-world projects to build" },
        { value: "100%", label: "Hands-on learning" },
        { value: "24/7", label: "Expert support" }
      ],
      primaryCTA: { text: "See Course Projects →", href: "/courses" },
      secondaryCTA: { text: "Try Free Preview", href: "/courses/agentic-design-patterns" }
    },
    {
      badge: "⚡ Fast-track to AI mastery",
      headline: "Launch Your",
      highlightText: " AI Career",
      description: "No PhD required. No endless theory. Just practical skills that get you hired at AI-first companies in months, not years.",
      metrics: [
        { value: "6x", label: "Faster than traditional courses" },
        { value: "$50k+", label: "Salary increase potential" },
        { value: "Live", label: "Expert mentorship" }
      ],
      primaryCTA: { text: "Begin Transformation →", href: "/courses/agentic-design-patterns" },
      secondaryCTA: { text: "Success Stories", href: "/#success-stories" }
    }
  ];

  useEffect(() => {
    if (!isPaused && isClient && typeof window !== 'undefined') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(timer);
    }
  }, [heroSlides.length, isPaused, isClient]);

  const currentHero = heroSlides[currentSlide];

  if (!isClient) {
    // Return a loading state or the first slide during SSR
    return (
      <main>
        <div className="text-center mb-16 relative overflow-hidden">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-[var(--accent)] text-[#0b0f17] rounded-full text-sm font-semibold mb-6">
              ✨ Join thousands of professionals who've transformed their careers
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Learn AI Skills That
            <span className="text-[var(--accent)]"> Actually Matter</span>
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
            Skip the theory overload. Learn by building real AI systems that solve actual problems. From zero to production-ready in weeks, not years.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Carousel Section */}
      <div className="text-center mb-16 relative overflow-hidden">
        <div 
          className="transition-all duration-700 ease-in-out"
          style={{ opacity: 1 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-[var(--accent)] text-[#0b0f17] rounded-full text-sm font-semibold mb-6 transition-all duration-500">
              {currentHero.badge}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-500">
            {currentHero.headline}
            <span className="text-[var(--accent)]">{currentHero.highlightText}</span>
          </h1>
          <p className="text-xl text-[var(--muted)] mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-500">
            {currentHero.description}
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 max-w-4xl mx-auto">
            {currentHero.metrics.map((metric, index) => (
              <div key={index} className="text-center transition-all duration-500 transform">
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">{metric.value}</div>
                <div className="text-[var(--muted)]">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              className="btn text-lg px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent)]/90 transition-colors" 
              href={currentHero.primaryCTA.href}
              prefetch={false}
            >
              {currentHero.primaryCTA.text}
            </Link>
            <Link 
              className="btn bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17] text-lg px-8 py-4 transition-colors" 
              href={currentHero.secondaryCTA.href}
              prefetch={false}
            >
              {currentHero.secondaryCTA.text}
            </Link>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[var(--accent)] scale-110' 
                    : 'bg-[var(--muted)]/30 hover:bg-[var(--muted)]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Trusted by professionals at</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-[var(--muted)] opacity-70">
            <span className="text-lg font-medium">Google</span>
            <span className="text-lg font-medium">Microsoft</span>
            <span className="text-lg font-medium">Amazon</span>
            <span className="text-lg font-medium">Tesla</span>
            <span className="text-lg font-medium">OpenAI</span>
            <span className="text-lg font-medium">Apple</span>
            <span className="text-lg font-medium">Meta</span>
            <span className="text-lg font-medium">Netflix</span>
            <span className="text-lg font-medium">Salesforce</span>
            <span className="text-lg font-medium">Uber</span>
            <span className="text-lg font-medium">Airbnb</span>
            <span className="text-lg font-medium">Oracle</span>
            <span className="text-lg font-medium">Nvidia</span>
            <span className="text-lg font-medium">Adobe</span>
            <span className="text-lg font-medium">Intel</span>
            <span className="text-lg font-medium">Cisco</span>
            <span className="text-lg font-medium">VMware</span>
            <span className="text-lg font-medium">Stripe</span>
            <span className="text-lg font-medium">Zoom</span>
            <span className="text-lg font-medium">Snowflake</span>
          </div>
        </div>
      </div>

      {/* Course Outcomes - Fast.ai Inspired Practical Focus */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What You'll Actually Build</h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Real projects that demonstrate your skills to employers and solve actual business problems.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="card border-l-4 border-[var(--accent)] hover:shadow-xl transition-shadow">
            <Link href="/courses/agentic-design-patterns" prefetch={false}>
              <h3 className="text-2xl font-bold mb-3 text-[var(--accent)] hover:underline cursor-pointer">
                AI Agent Systems
              </h3>
            </Link>
            <div className="mb-4">
              <Image
                src="/images/courses/ai_agents.webp"
                alt="AI Agents Course"
                width={400}
                height={200}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                quality={70}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-[var(--muted)] mb-4 text-lg">
              Build autonomous systems that think, plan, and execute complex tasks without human intervention.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-[var(--accent)]">You'll Create:</h4>
              <ul className="text-[var(--muted)] space-y-1">
                <li>• Multi-agent customer service system</li>
                <li>• Automated code review bot</li>
                <li>• Smart trading algorithm</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Available Now</span>
              <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-sm">12 weeks</span>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <Link 
                className="btn !bg-green-600 hover:!bg-green-700 !text-white flex-1 text-center" 
                href="/schedule"
                prefetch={false}
              >
                Register Now →
              </Link>
              <Link className="btn bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17]" href="/courses/agentic-design-patterns" prefetch={false}>
                Details
              </Link>
            </div>
          </div>

          <div className="card border-l-4 border-purple-500 hover:shadow-xl transition-shadow opacity-90">
            <Link href="/courses/build-llm-from-scratch" prefetch={false}>
              <h3 className="text-2xl font-bold mb-3 text-purple-400 hover:underline cursor-pointer">
                Custom Language Models
              </h3>
            </Link>
            <div className="mb-4">
              <Image
                src="/images/courses/llm-from-scratch.webp"
                alt="Build LLM from Scratch Course"
                width={400}
                height={200}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                quality={70}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-[var(--muted)] mb-4 text-lg">
              Don't just use AI—understand it completely by building your own language model from scratch.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-purple-400">You'll Create:</h4>
              <ul className="text-[var(--muted)] space-y-1">
                <li>• Domain-specific chatbot</li>
                <li>• Code generation model</li>
                <li>• Custom fine-tuned assistant</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Coming Q4 2026</span>
              <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-sm">16 weeks</span>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button className="btn flex-1 opacity-60 cursor-not-allowed" disabled>
                Coming Soon
              </button>
              <Link className="btn bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white" href="/courses/build-llm-from-scratch" prefetch={false}>
                Preview
              </Link>
            </div>
          </div>

          <div className="card border-l-4 border-blue-500 hover:shadow-xl transition-shadow opacity-90">
            <Link href="/courses/ai-content-creation-pipeline" prefetch={false}>
              <h3 className="text-2xl font-bold mb-3 text-blue-400 hover:underline cursor-pointer">
                AI Content Pipeline
              </h3>
            </Link>
            <div className="mb-4">
              <Image
                src="/images/courses/ai-pipeline.webp"
                alt="AI Content Creation Pipeline"
                width={400}
                height={200}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                quality={70}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-[var(--muted)] mb-4 text-lg">
              Automate creative workflows from concept to final video using cutting-edge AI tools.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-blue-400">You'll Create:</h4>
              <ul className="text-[var(--muted)] space-y-1">
                <li>• Automated video production system</li>
                <li>• AI-powered social media manager</li>
                <li>• Brand content generator</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Coming Q4 2026</span>
              <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-sm">10 weeks</span>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button className="btn flex-1 opacity-60 cursor-not-allowed" disabled>
                Coming Soon
              </button>
              <Link className="btn bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white" href="/courses/ai-content-creation-pipeline" prefetch={false}>
                Preview
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            className="btn bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17] text-lg px-8 py-4" 
            href="/courses"
            prefetch={false}
          >
            View All Courses →
          </Link>
        </div>
      </div>

      {/* Fast.ai Inspired Learning Philosophy */}
      <div className="mb-20" id="success-stories">
        <div className="card bg-gradient-to-r from-[var(--card)] to-[var(--card)]/50 border-[var(--accent)]/20">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Learn By Doing, Not Memorizing</h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
              We believe the best way to learn AI is to build real systems that solve actual problems. 
              No fluff, no endless theory—just practical skills you can use immediately.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">�</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build First, Theory Second</h3>
              <p className="text-[var(--muted)]">
                Start building on day one. Learn concepts as you need them to solve real problems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Projects</h3>
              <p className="text-[var(--muted)]">
                Every project mirrors actual industry challenges. Build a portfolio while you learn.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Production Ready</h3>
              <p className="text-[var(--muted)]">
                Deploy your models to the cloud. Learn DevOps and MLOps from day one.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-[var(--muted)]">
                Learn from practitioners who've built AI systems at scale in top companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories & Testimonials */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Real students, real career transformations, real impact.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card border-l-4 border-green-500">
            <div className="mb-4">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  S
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-[var(--muted)] text-sm">Data Analyst → ML Engineer</p>
                </div>
              </div>
              <p className="text-[var(--muted)] italic mb-3">
                "Built my first production ML system in week 8. Got promoted to Senior ML Engineer 3 months after graduating."
              </p>
              <div className="text-sm text-green-400 font-semibold">
                💰 +$45k salary increase
              </div>
            </div>
          </div>
          
          <div className="card border-l-4 border-blue-500">
            <div className="mb-4">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <h4 className="font-semibold">Marcus Johnson</h4>
                  <p className="text-[var(--muted)] text-sm">Software Dev → AI Product Lead</p>
                </div>
              </div>
              <p className="text-[var(--muted)] italic mb-3">
                "The hands-on approach was perfect. I was building real AI agents while my peers were still reading papers."
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                🚀 Launched AI startup
              </div>
            </div>
          </div>
          
          <div className="card border-l-4 border-purple-500">
            <div className="mb-4">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">Aisha Patel</h4>
                  <p className="text-[var(--muted)] text-sm">Marketing → AI Consultant</p>
                </div>
              </div>
              <p className="text-[var(--muted)] italic mb-3">
                "From zero coding background to building custom LLMs. Now I consult Fortune 500 companies on AI strategy."
              </p>
              <div className="text-sm text-purple-400 font-semibold">
                🏢 6-figure consulting business
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mb-16">
        <div className="card bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent)]/5 border-[var(--accent)]/30">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who've already made the leap. 
            Your AI journey starts with a single step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              className="btn text-lg px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent)]/90 transition-colors" 
              href="/courses/agentic-design-patterns"
              prefetch={false}
            >
              Start Learning Today →
            </Link>
            <Link 
              className="btn bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17] text-lg px-8 py-4 transition-colors" 
              href="/about"
              prefetch={false}
            >
              Meet the Instructors
            </Link>
          </div>
          
          <p className="text-sm text-[var(--muted)] mt-6">
            ✅ 30-day money-back guarantee &nbsp;&nbsp;•&nbsp;&nbsp; ✅ Live support &nbsp;&nbsp;•&nbsp;&nbsp; ✅ Lifetime access
          </p>
        </div>
      </div>
    </main>
  );
}
