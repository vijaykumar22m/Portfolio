import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 100k+ daily users",
        "Mentored junior developers and established coding standards",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with product team to deliver features ahead of schedule"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: [
        "Built responsive web applications using React and TypeScript",
        "Optimized application performance improving load times by 40%",
        "Worked closely with UI/UX designers to implement pixel-perfect designs",
        "Participated in agile development process and sprint planning"
      ],
      technologies: ["React", "TypeScript", "Redux", "Sass", "Jest"]
    },
    {
      title: "Web Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: [
        "Developed custom WordPress themes and plugins for clients",
        "Created responsive websites following modern web standards",
        "Integrated third-party APIs and payment gateways",
        "Provided technical support and maintenance for client websites"
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex flex-col lg:text-right text-sm text-gray-600">
                  <div className="flex items-center lg:justify-end mb-1">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </div>
                  <div className="flex items-center lg:justify-end">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;