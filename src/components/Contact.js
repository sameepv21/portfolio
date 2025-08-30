export default function Contact() {
  return (
    <div className="py-12 md:pl-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
      
      <div>
        <p className="text-gray-600 mb-6">
          I'm always interested in hearing about new opportunities and collaborations. 
          Feel free to reach out if you'd like to connect!
        </p>
        
        <a href="mailto:svani@asu.edu" className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white rounded-md text-sm transition-colors duration-300">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Email Me</span>
        </a>
      </div>
    </div>
  );
}
