import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="space-y-6">
        <section className="card">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
          
          {/* Venkatesh Tadinada */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6 mb-4">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <Image
                  src="/images/team/venkatesh.webp"
                  alt="Venkatesh Tadinada - Chief Instructor"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md mx-auto md:mx-0"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-[var(--accent)]">Venkatesh Tadinada - Chief Instructor</h3>
                <div className="text-[var(--muted)] space-y-4">
                  <p>
                    Venkatesh Tadinada is passionate about data. "In God we trust, all others bring data," said Edward Deming, 
                    a philosophy that drives his work with Fortune 100 companies. For the last 25 years, he has been at the 
                    forefront of data innovation, working across various domains and technologies with DATA as a central theme.
                  </p>
                  <p>
                    As a strategic AI consultant to Fortune 100 companies, Venkatesh defines and implements AI strategies that 
                    transform business operations. His journey from Data Warehouses to Data Mining, Business Intelligence, and 
                    now Machine Learning, Deep Learning & AI, positions him uniquely to architect enterprise-scale solutions.
                  </p>
                  <p>
                    His AI products and solutions are currently deployed across major corporations in the semiconductor and 
                    pharmaceutical industries, delivering measurable impact by saving millions of dollars and dramatically 
                    improving operational efficiencies. These implementations have revolutionized how these companies approach 
                    predictive analytics and decision-making processes.
                  </p>
                  <p>
                    Venkatesh has successfully co-founded and exited multiple startups, including a Business Intelligence 
                    platform for Enterprises and an Insurance sector product. With a Masters in Computer Science and an MBA, 
                    he combines deep technical expertise with strategic business acumen to deliver transformational results.
                  </p>
                  <p>
                    Beyond his consulting work, Venkatesh is passionate about education and knowledge transfer. He conducts 
                    advanced workshops in Machine Learning and AI strategy, sharing real-world insights from his Fortune 100 
                    implementations with aspiring data scientists and business leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Peeya Iwagoshi */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6 mb-4">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <Image
                  src="/images/team/peeya.webp"
                  alt="Peeya Iwagoshi - Co-Instructor"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md mx-auto md:mx-0"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-[var(--accent)]">Peeya Iwagoshi - Co-Instructor</h3>
                <div className="text-[var(--muted)] space-y-4">
                  <p>
                    Peeya brings complementary expertise to our teaching team, working alongside Venkatesh to deliver 
                    comprehensive machine learning education that combines theoretical foundations with practical applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>• Comprehensive ML and AI courses with hands-on approach</li>
            <li>• Real-world project implementations and case studies</li>
            <li>• Industry best practices from experienced practitioners</li>
            <li>• Community-driven learning environment</li>
            <li>• Regular updates with latest research and techniques</li>
            <li>• Direct mentorship from industry experts</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
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
                <li>• Expert instructors with 25+ years of experience</li>
                <li>• Active community of learners and practitioners</li>
                <li>• Regular live sessions and office hours</li>
                <li>• Personalized feedback on your projects</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-[var(--muted)]">
            Have questions or want to learn more? Reach out to us at{" "}
            <a href="mailto:info@mlacademy.io" className="text-[var(--accent)] hover:underline">
              info@mlacademy.io
            </a>
          </p>
          <p className="text-[var(--muted)] mt-3">
            Follow us on social media for the latest updates and insights in machine learning and AI.
          </p>
        </section>
      </div>
    </main>
  );
}