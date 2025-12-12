import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sections = ['about', 'projects', 'experience', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/50 backdrop-blur-xl border-b border-gray-800/50 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => {
            setActiveSection('about');
            setMobileMenuOpen(false);
          }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
            <Terminal className="w-6 h-6" />
          </div>
          <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent truncate">
            Rithwik
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-1 bg-gray-800/50 rounded-full p-1">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                activeSection === section
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 p-4 space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
                setMobileMenuOpen(false);
              }}
              className={`w-full py-3 px-4 rounded-lg capitalize transition-all duration-300 text-left ${
                activeSection === section
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}