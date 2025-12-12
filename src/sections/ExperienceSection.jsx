import React from 'react';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection({ experience }) {
  return (
    <div className="space-y-8 animate-slideIn">
      <div className="flex items-center gap-4 mb-8">
        <Briefcase className="w-10 h-10 text-purple-400 animate-bounce" />
        <h2 className="text-4xl lg:text-5xl font-bold">Experience</h2>
      </div>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
        
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-20 animate-slideInRight"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="absolute left-5 top-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-gray-950 animate-pulse" />
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 group">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-blue-400 text-sm lg:text-base">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-gray-400 bg-gray-800 px-4 py-2 rounded-full text-sm lg:text-base whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}