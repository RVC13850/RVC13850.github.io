import React from 'react';
import { Code } from 'lucide-react';

export default function SkillsCard({ skills }) {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Code className="w-6 h-6 text-blue-400" />
        Technical Skills
      </h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-blue-400 mb-3">Languages</h4>
          <div className="flex flex-wrap gap-3">
            {skills.languages.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm hover:bg-blue-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-purple-400 mb-3">Frameworks</h4>
          <div className="flex flex-wrap gap-3">
            {skills.frameworks.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm hover:bg-purple-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-3">Tools & Libraries</h4>
          <div className="flex flex-wrap gap-3">
            {[...skills.tools, ...skills.libraries].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-sm hover:bg-green-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}