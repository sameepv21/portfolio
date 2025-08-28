export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack web application with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
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
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-indigo-600 hover:text-indigo-800 font-medium">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
