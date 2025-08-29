export default function Projects() {
  const projects = [
    {
      title: 'Video-Guided Instruction Retrieval and Answering',
      description: 'Efficient and high-quality RAG system that leverages pre-trained video-focused models',
      technologies: ["PyTorch", "Hugging Face Transformers", "LangGraph", "LangChain", "Vector Database", "Django"],
      link: '#'
    },
    {
      title: 'Machine Learning Pipeline',
      description: 'Automated ML pipeline for predictive analytics',
      technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes'],
      link: '#'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for business intelligence',
      technologies: ['D3.js', 'Python', 'PostgreSQL'],
      link: '#'
    }
  ];

  return (
    <div className="py-12 md:pl-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white rounded-md text-sm transition-colors cursor-pointer">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-gray-900 hover:text-gray-700 font-medium">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
