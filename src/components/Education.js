export default function Education() {
  const education = [
    {
      university: 'Arizona State University',
      degree: 'Masters of Science in Computer Science',
      graduation: 'Expected Graduation: 12/2025',
      gpa: 'GPA: 3.62/4.0',
      focusAreas: ['Vision-Language', "Generative AI", "Retrieval-Augmented Generation"]
    },
    {
      university: 'Ahmedabad University',
      degree: 'Bachelor of Technology in Computer Science',
      graduation: 'Graduated: 06/2023',
      gpa: 'GPA: 3.48/4.0',
      focusAreas: ["Machine Learning", "Computer Vision", "Data Science"]
    }
  ];

  return (
    <div className="py-12 md:pl-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900">{edu.university}</h3>
            <p className="text-gray-700 mt-1">{edu.degree}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
              <span>{edu.graduation}</span>
              <span className="font-medium">{edu.gpa}</span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Focus Areas:</p>
              <div className="flex flex-wrap gap-2">
                {edu.focusAreas.map((area) => (
                  <span key={area} className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white rounded-md text-sm transition-colors cursor-pointer">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
