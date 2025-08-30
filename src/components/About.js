export default function About() {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="md:col-span-1">
          <div className="text-center">
            {/* Profile Photo */}
            <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
              <img 
                src="/images/profile.jpeg" 
                alt="Sameep Vani" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sameep Vani</h2>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            
            {/* Contact Info */}
            <div className="inline-flex flex-col items-start text-left ml-10">
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Email:</span> svani@asu.edu
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Location:</span> San Francisco, California
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-6">
              <a href="https://github.com/sameepv21" className="text-gray-400 hover:text-gray-600 transition-colors duration-300" title="GitHub">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/sameep-vani" className="text-gray-400 hover:text-gray-600 transition-colors duration-300" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://x.com/SameepVani" className="text-gray-400 hover:text-gray-600 transition-colors duration-300" title="X (Twitter)">
                <span className="sr-only">X (Twitter)</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2H21.5l-7.47 8.54L22 22h-6.91l-5.4-7.13L3.5 22H.25l7.97-9.1L2 2h7.09l4.9 6.46L18.244 2zM16.9 20h2.15L7.2 4H4.9L16.9 20z"/>
                </svg>
              </a>
              <a href="https://scholar.google.com/citations?user=ovxmCmMAAAAJ&hl=en&oi=ao" className="text-gray-400 hover:text-gray-600 transition-colors duration-300" title="Google Scholar">
                <span className="sr-only">Google Scholar</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 32L0 160l256 128 208-104v144h48V160L256 32zm0 256l-160-80v96c0 53 71 96 160 96s160-43 160-96v-96l-160 80z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="md:col-span-2">
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-700 mb-4">
              I am a Master's student in Computer Science at Arizona State University with a strong focus on 
              Artificial Intelligence and Machine Learning, particularly in computer vision, natural language 
              processing, and video large language models. Alongside research, I have gained hands-on experience 
              as a Founding AI Engineer at a YC-backed startup, where I built agentic systems, backend 
              infrastructure, and end-to-end AI pipelines that delivered measurable business impact. My work 
              blends deep learning research with robust software engineering designing scalable APIs, integrating 
              production-ready pipelines, and fine-tuning models to solve complex, real-world problems.
            </p>
            <p className="text-gray-700 mb-4">
              Outside of work and research, I enjoy exploring new coffee spots, trying out unique ice cream flavors, 
              and discovering local food experiences. I am equally passionate about building strong connections with 
              people as I am about building intelligent systems, and I find inspiration in both everyday curiosity 
              and collaborative problem-solving.
            </p>
            <div className="mt-8">
              <a 
                href="/files/Sameep_Vani_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                View Resume →
              </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
