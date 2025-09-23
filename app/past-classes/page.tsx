import Link from "next/link";

const pastClasses = [
  {
    id: "sept-20-2025",
    classNumber: "Class 0",
    title: "Introduction to Agentic Design Patterns",
    date: "September 20, 2025",
    duration: "2 hours 15 mins",
    attendees: 32,
    description: "Welcome to our first class! Today we covered the fundamentals of AI agents and introduced the core concepts that will guide us through the next 12 weeks.",
    topics: [
      "What are AI agents and why they matter",
      "Fundamental agent architectures", 
      "Key components of agentic systems",
      "Real-world applications and use cases"
    ],
    hasPresentation: true,
    hasNotebook: true,
    hasQuiz: true,
    hasVideo: true,
    status: "completed",
    presentationLink: "/classes/sept-20-2025", // Internal class page
    notebookLink: "/classes/sept-20-2025"
  },
  {
    id: "sept-22-2025",
    classNumber: "Class 1",
    title: "Prompt Chaining for Agentic Design",
    date: "September 22, 2025",
    duration: "~2 hours",
    attendees: 0,
    description: "Day 1 dives into prompt chaining: why single prompts fail, how to build robust chains, and hands-on use cases. Includes slides, Colab notebook, quiz, and recording.",
    topics: [
      "Why single prompts fail for complex tasks",
      "Building robust prompt chains",
      "Structured outputs (JSON) between steps",
      "Seven use cases with runnable scaffolds"
    ],
  hasPresentation: true,
  hasNotebook: true,
  hasQuiz: true,
  hasVideo: true,
  status: "completed",
  presentationLink: "https://docs.google.com/presentation/d/1V1RHVM1X_6W5VregAgxXJxjCNV32m9HWiuer1E-Io5U/edit?usp=drive_link",
  notebookLink: "https://colab.research.google.com/drive/1_KL-hzucqPDgqTaYexRQyyHHCC71tskZ",
  homeworkLink: "https://colab.research.google.com/drive/1Yliia9XFS3uOxkgwdcMPfybt8e10gUCt",
  videoLink: "https://www.youtube.com/watch?v=4FY3_pjdZ0g"
  }
];

export default function PastClasses() {
  const completedClasses = pastClasses.filter(cls => cls.status === "completed");

  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-4">Past Class Recordings</h1>
        <p className="text-lg text-[var(--muted)] mb-6">
          Access recordings, materials, and resources from all completed classes. Each class includes presentation slides, 
          interactive notebooks, quizzes, and full video recordings with dedicated discussion sections.
        </p>
        
        <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-2xl">📚</div>
          <div>
            <h3 className="font-semibold text-blue-900">Complete Learning Materials</h3>
            <p className="text-blue-800 text-sm">
              Each class includes slides, Jupyter notebooks, knowledge quizzes, and full recordings with individual comment sections.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card text-center">
          <div className="text-2xl font-bold text-[var(--accent)]">{completedClasses.length}</div>
          <div className="text-sm text-[var(--muted)]">Classes Completed</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-[var(--accent)]">
            {completedClasses.reduce((total, cls) => total + cls.attendees, 0)}
          </div>
          <div className="text-sm text-[var(--muted)]">Total Attendees</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-[var(--accent)]">
            {completedClasses.filter(cls => cls.hasVideo).length}
          </div>
          <div className="text-sm text-[var(--muted)]">Video Recordings</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-[var(--accent)]">
            {completedClasses.filter(cls => cls.hasNotebook).length}
          </div>
          <div className="text-sm text-[var(--muted)]">Interactive Notebooks</div>
        </div>
      </div>

      {/* Classes List */}
      <div className="space-y-6">
        {completedClasses.length === 0 ? (
          <div className="card text-center py-12">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">No Classes Yet</h3>
            <p className="text-[var(--muted)] mb-4">
              Past class recordings will appear here once classes have been completed.
            </p>
            <Link href="/courses/agentic-design-patterns" className="btn">
              View Course Details
            </Link>
          </div>
        ) : (
          completedClasses.map((classItem) => (
            <div key={classItem.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                {/* Class Info */}
                <div className="flex-1 mb-4 md:mb-0 md:mr-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-semibold text-[var(--accent)]">
                      {classItem.classNumber}
                    </h2>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Completed
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)] mb-3">
                    <span>📅 {classItem.date}</span>
                    <span>⏱️ {classItem.duration}</span>
                    <span>👥 {classItem.attendees} attendees</span>
                  </div>
                  
                  <p className="text-[var(--muted)] mb-4">{classItem.description}</p>
                  
                  {/* Topics Covered */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Topics Covered:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-[var(--muted)]">
                      {classItem.topics.map((topic, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[var(--accent)] mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Available Materials */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {classItem.hasPresentation && (
                      <a
                        href={classItem.presentationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs underline hover:text-blue-900"
                      >
                        📊 Slides
                      </a>
                    )}
                    {classItem.hasNotebook && (
                      <a
                        href={classItem.notebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs underline hover:text-orange-900"
                      >
                        📓 Notebook
                      </a>
                    )}
                    {classItem.homeworkLink && (
                      <a
                        href={classItem.homeworkLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded text-xs underline hover:text-green-900"
                      >
                        🏠 Homework
                      </a>
                    )}
                    {classItem.hasQuiz && (
                      <span className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                        📝 Quiz
                      </span>
                    )}
                    {classItem.hasVideo && (
                      <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                        🎥 Recording
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex-shrink-0">
                  <Link 
                    href={`/classes/${classItem.id}`}
                    className="btn bg-[var(--accent)] text-[#0b0f17] hover:bg-[var(--accent)]/90 px-6 py-3 text-lg font-semibold"
                  >
                    Access Class Materials →
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link 
            href="/courses/agentic-design-patterns"
            className="btn bg-gray-600 text-white hover:bg-gray-700"
          >
            ← Back to Course
          </Link>
          <div className="text-center">
            <p className="text-[var(--muted)] mb-1">Need help?</p>
            <Link 
              href="/about" 
              className="text-[var(--accent)] hover:underline font-medium"
            >
              Contact Support
            </Link>
          </div>
          <Link 
            href="/schedule"
            className="btn bg-[var(--accent)] text-[#0b0f17] hover:bg-[var(--accent)]/90"
          >
            View Schedule →
          </Link>
        </div>
      </div>
    </main>
  );
}