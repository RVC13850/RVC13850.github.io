import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './sections/AboutSection.jsx';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection.jsx';
import { projects, skills, experience } from './data';
import './styles/animations.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      </div>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-12 relative z-10">
        {activeSection === 'about' && <AboutSection skills={skills} />}
        {activeSection === 'projects' && <ProjectsSection projects={projects} />}
        {activeSection === 'experience' && <ExperienceSection experience={experience} />}
        {activeSection === 'contact' && <ContactSection />}
      </div>
    </div>
  );
}