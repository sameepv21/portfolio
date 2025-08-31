export default function Projects() {
  const projects = [
    {
      title: 'Video-Guided Instruction Retrieval and Answering',
      description: 'Efficient and high-quality RAG system that leverages pre-trained video-focused models',
      technologies: ["Hugging Face", "Transformers", "LangGraph", "LangChain", "Vector Database", "Django"],
      link: '#'
    },
    {
      title: 'TimeWarp',
      description: 'Harnessed synthetic preference data for improved event understanding in Video-LLMs',
      technologies: ['DPO', 'Research', 'In-Context Learning', "Inference", "Fine-Tuning"],
      link: 'https://github.com/sameepv21/TimeWarp'
    },
    {
      title: 'Symbolic Regression via ODEFormer',
      description: 'Transformers for symbolic regression in dynamical systems',
      technologies: ['Neural ODEs', 'Physics Informed Neural Networks', 'Kolmogorov Arnold Networks'],
      link: 'https://github.com/sameepv21/odeformer'
    },
    {
      title: 'Beyond Frames',
      description: 'Scene graph-based video question-answering system for intelligent road traffic analysis',
      technologies: ['Video Question Answering', 'Scene Graphs', 'Graph Neural Networks'],
      link: 'https://github.com/sameepv21/Beyond_Frames'
    },
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
            {project.link === '#' ? (
              <span className="text-gray-500 font-medium">
                Coming Soon
              </span>
            ) : (
              <a href={project.link} className="text-gray-900 hover:text-gray-700 font-medium">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
