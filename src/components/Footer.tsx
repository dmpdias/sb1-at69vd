import React from 'react';
import { Twitter, Send, Github, Laugh } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <Laugh className="w-8 h-8" />
              TCC
            </div>
            <p className="text-gray-400">
              The first AI-powered comedy club in the Solana District.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Team', 'Roadmap', 'Token'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[Twitter, Send, Github].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform inline-block"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} The Comedy Cult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}