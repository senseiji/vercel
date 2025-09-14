import { Metadata } from "next";
import Image from "next/image";
import DisqusComments from "../../components/DisqusComments";

export const metadata: Metadata = {
  title: "AI Content Creation Pipeline - ML Academy",
  description: "Master the complete AI-powered content creation workflow from concept to final video. Learn to use ChatGPT, Midjourney, Photoshop, video generation tools, and professional editing software.",
  keywords: "AI content creation, ChatGPT, Midjourney, video generation, content pipeline, AI tools, creative workflow, automation",
};

export default function AIContentCreationPipeline() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Image
              src="/images/courses/ai-pipeline.png"
              alt="AI Content Creation Pipeline Course"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-4">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">Coming Soon</span>
            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Intermediate Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            AI Content Creation Pipeline
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master the complete AI-powered content creation workflow from concept to final video. Learn to use ChatGPT, Midjourney, 
            Photoshop, video generation tools, and professional editing software in a seamless pipeline.
          </p>
        </header>

        {/* Course Content */}
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Pipeline Workflow
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Moodboard Creation</h3>
                  <p className="text-gray-700">AI-powered inspiration gathering and concept development using advanced prompting techniques</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Generation</h3>
                  <p className="text-gray-700">Master ChatGPT + Midjourney integration for creating stunning visual content</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Editing</h3>
                  <p className="text-gray-700">Advanced image editing and enhancement techniques using Photoshop and AI tools</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Video Creation</h3>
                  <p className="text-gray-700">Transform static content into dynamic videos using Veo 3 and Hailu AI</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold">5</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Final Production</h3>
                  <p className="text-gray-700">Professional editing with After Effects & DaVinci Resolve for broadcast-quality results</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Tools & Software Covered
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Generation Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• ChatGPT for content ideation</li>
                  <li>• Midjourney for image generation</li>
                  <li>• Veo 3 for video creation</li>
                  <li>• Hailu AI for motion graphics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Software</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Adobe Photoshop</li>
                  <li>• Adobe After Effects</li>
                  <li>• DaVinci Resolve</li>
                  <li>• Various workflow automation tools</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Course Structure
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 1-2: Foundation & Planning</h3>
                <p className="text-gray-700">Content strategy, moodboard creation, and project planning methodologies</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 3-5: AI Generation Mastery</h3>
                <p className="text-gray-700">Advanced prompting, ChatGPT integration, and Midjourney workflows</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 6-7: Image Enhancement</h3>
                <p className="text-gray-700">Professional Photoshop techniques and AI-assisted editing workflows</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800">Weeks 8-10: Video Production</h3>
                <p className="text-gray-700">Video generation, motion graphics, and final production techniques</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Who Should Take This Course
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Perfect For</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Content creators and marketers</li>
                  <li>• Graphic designers expanding to AI</li>
                  <li>• Social media managers</li>
                  <li>• Freelancers and agencies</li>
                  <li>• Video production professionals</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Prerequisites</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Basic computer skills</li>
                  <li>• Creative mindset</li>
                  <li>• Willingness to learn new tools</li>
                  <li>• No prior AI experience needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Based on{" "}
                <a 
                  href="https://www.youtube.com/watch?v=b29YE7mQTvA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  YouTube Tutorial: AI Content Creation Pipeline
                </a>
              </p>
              <div className="space-y-3">
                <p className="text-lg font-medium text-gray-800">Duration: 10 weeks • Tools Covered: 8+ Professional Applications</p>
                <p className="text-gray-600">Sign up for updates to be notified when registration opens.</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Disqus Comments */}
        <DisqusComments
          url="https://mlacademy.io/courses/ai-content-creation-pipeline"
          identifier="ai-content-creation-pipeline"
          title="AI Content Creation Pipeline"
        />
      </div>
    </div>
  );
}