import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="space-y-8 animate-slideIn">
      <div className="flex items-center gap-4 mb-8">
        <Mail className="w-10 h-10 text-green-400 animate-bounce" />
        <h2 className="text-4xl lg:text-5xl font-bold">Let's Connect</h2>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 transform hover:scale-105">
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed text-center">
            I'm always excited to connect with fellow engineers and explore new opportunities.
            Let's build something amazing together!
          </p>
          
          <div className="space-y-4">
            {[
              { icon: <Linkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/rithwikchittineni' },
              { icon: <Github />, label: 'GitHub', href: 'https://github.com/RVC13850' },
              { icon: <Mail />, label: 'Email', href: 'mailto:rithwikchittineni@gmail.com' }
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform flex-shrink-0">
                  {React.cloneElement(contact.icon, { className: 'w-6 h-6' })}
                </div>
                <span className="text-lg">{contact.label}</span>
                <ExternalLink className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}