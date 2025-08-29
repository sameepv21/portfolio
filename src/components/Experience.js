export default function Experience() {
  const experiences = [
    { date: 'Aug 2025', title: 'Founding AI Engineer', company: 'Sphinx Labs (YC F24)' },
    { date: 'Jan 2022', title: 'Junior Developer', company: 'Tech Startup' },
    { date: 'Sep 2021', title: 'Intern', company: 'Software Inc' }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
      <div className="relative px-8">
        <div className="absolute left-8 right-8 top-3 h-0.5 bg-gray-300"></div>
        <div className="relative flex justify-between">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-6 h-6 bg-gray-900 rounded-full border-4 border-white shadow-sm"></div>
              <div className="mt-4 text-center">
                <p className="text-sm font-bold text-gray-900">{exp.date}</p>
                <p className="text-sm text-gray-700 mt-1">{exp.title}</p>
                <p className="text-xs text-gray-500">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
