import { User, Linkedin, Github, Mail } from 'lucide-react';
import utdLogo from '../assets/utdLogo.png';


export default function AboutCard() {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <User className="w-6 h-6 text-purple-400" />
        About Me
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Computer Science student at The University of Texas at Dallas, passionate about building 
        impactful software solutions. Experienced in full-stack development, cloud technologies, 
        and AI/ML applications.
      </p>
      
      <div className="mb-6 p-5 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-14 h-14 bg-white rounded-lg p-1.5 shadow-lg">
           <img 
                        src={utdLogo} 
                        alt="UTD Logo" 
                        className="w-full h-full rounded object-contain"
                      />
                    </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-blue-400 mb-1">Education</h4>
            <p className="text-white font-semibold text-base">The University of Texas at Dallas</p>
            <p className="text-gray-400 text-sm">B.S. in Computer Science</p>
            <p className="text-gray-500 text-xs mt-0.5">August 2023 – December 2026</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">Connect</h4>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://linkedin.com/in/rithwikchittineni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 group text-sm"
          >
            <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/RVC13850"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 group text-sm"
          >
            <Github className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:rithwikchittineni@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 hover:bg-gray-700/50 transition-all duration-300 group text-sm"
          >
            <Mail className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}