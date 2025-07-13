import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={24} />,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams"
    },
    {
      icon: <Coffee className="text-amber-600" size={24} />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about technology and innovation, I strive to create impactful solutions
            that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience
                building web applications and mobile solutions. My journey began with
                a Computer Science degree, and I've been continuously learning and
                evolving with the rapidly changing tech landscape.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud technologies,
                and creating seamless user experiences. When I'm not coding, you can
                find me contributing to open-source projects, writing technical blogs,
                or exploring the latest in AI and machine learning.
              </p>
              <p>
                I believe in writing clean, maintainable code and following best
                practices. I'm always excited to take on new challenges and work
                with teams that share the same passion for excellence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;