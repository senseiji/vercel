import Link from "next/link";

export default function Courses() {
  return (
    <main>
      <h1 className="text-4xl font-semibold mb-4">Our Courses</h1>
      <p className="text-lg text-[var(--muted)] mb-6">
        Discover our comprehensive machine learning and AI courses designed to advance your skills through hands-on learning.
      </p>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <div className="card">
          <div className="mb-4">
            <span className="inline-block bg-[var(--accent)] text-[#0b0f17] px-3 py-1 rounded-full text-sm font-semibold mr-2">Featured</span>
            <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-sm">Advanced Level</span>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Agentic Design Patterns</h2>
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
          
          <div className="flex space-x-3">
            <Link className="btn" href="/courses/agentic-design-patterns">View Course</Link>
            <a className="btn bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0f17]" href="/Introduction.pdf" target="_blank" rel="noreferrer">Course Intro PDF</a>
          </div>
        </div>
        
        <div className="card">
          <div className="mb-4">
            <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-sm">Coming Soon</span>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Deep Learning Fundamentals</h2>
          <p className="mb-4 text-[var(--muted)]">
            Build a solid foundation in deep learning with neural networks, backpropagation, and modern architectures. 
            Learn to implement networks from scratch and use popular frameworks.
          </p>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Planned Content:</h3>
            <ul className="text-sm text-[var(--muted)] space-y-1">
              <li>• Neural network fundamentals</li>
              <li>• CNN and RNN architectures</li>
              <li>• Training optimization techniques</li>
              <li>• Transfer learning and fine-tuning</li>
              <li>• Real-world project implementations</li>
            </ul>
          </div>
          
          <button className="btn opacity-50 cursor-not-allowed" disabled>Coming 2025</button>
        </div>

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

        <div className="card">
          <div className="mb-4">
            <span className="inline-block bg-[var(--card)] text-[var(--muted)] px-3 py-1 rounded-full text-sm">Coming Soon</span>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Computer Vision Mastery</h2>
          <p className="mb-4 text-[var(--muted)]">
            Learn to build systems that can see and understand visual data. From image classification to object detection and beyond.
          </p>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Planned Content:</h3>
            <ul className="text-sm text-[var(--muted)] space-y-1">
              <li>• Image processing fundamentals</li>
              <li>• Convolutional neural networks</li>
              <li>• Object detection and segmentation</li>
              <li>• Generative models for images</li>
              <li>• Real-time video analysis</li>
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