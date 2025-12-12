import React, { useState } from 'react';
import { Award, Github, Rocket } from 'lucide-react';

export default function ProjectsSection({ projects }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="space-y-8 animate-slideIn">
      <div className="flex items-center gap-4 mb-8">
        <Award className="w-10 h-10 text-blue-400 animate-bounce" />
        <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects</h2>
      </div>
      
      <div className="relative" style={{ perspective: '2000px' }}>
        <div className="relative h-[600px] flex items-center justify-center">
          {projects.map((project, idx) => {
            const offset = idx - currentProjectIndex;
            const isActive = offset === 0;
            
            return (
              <div
                key={idx}
                className="absolute w-full max-w-2xl transition-all duration-700 ease-out px-4 lg:px-0"
                style={{
                  transform: `
                    translateX(${offset * 100}%)
                    translateZ(${isActive ? '0px' : '-400px'})
                    rotateY(${offset * -25}deg)
                    scale(${isActive ? 1 : 0.7})
                  `,
                  opacity: Math.abs(offset) <= 1 ? 1 : 0,
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 10 : Math.abs(offset) === 1 ? 5 : 0,
                }}
              >
                <div
                  className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-700/50 shadow-2xl"
                  style={{
                    background: isActive ? project.gradient : 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
                    borderColor: isActive ? 'transparent' : '#374151'
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <Rocket className={`w-8 h-8 flex-shrink-0 ${isActive ? 'text-white animate-bounce' : 'text-gray-500'}`} />
                  </div>
                  
                  <p className="text-gray-200 text-base lg:text-lg mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-sm"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevProject}
            className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <span className="text-2xl">←</span>
          </button>
          <div className="flex items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProjectIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentProjectIndex 
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextProject}
            className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
