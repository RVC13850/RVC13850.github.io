import React from 'react';
import { Sparkles, Code, User } from 'lucide-react';
import ThreeDCube from '../components/ThreeDCube';
import TypingEffect from '../components/TypingEffect';
import SkillsCard from '../components/SkillsCard';
import AboutCard from '../components/AboutCard';

export default function AboutSection({ skills }) {
  return (
    <div className="space-y-12 animate-slideIn">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm animate-pulse">
          <Sparkles className="w-4 h-4" />
          Available for opportunities
        </div>
        
        {/* 3D Cube Hero */}
        <div className="flex justify-center mb-8">
          <ThreeDCube />
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientMove">
          Software Engineer
        </h1>
        
        <TypingEffect text="Building the future, one line at a time." />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SkillsCard skills={skills} />
        <AboutCard />
      </div>
    </div>
  );
}
