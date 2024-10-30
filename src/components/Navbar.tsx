import React from 'react';
import { Menu, X, Laugh } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="relative">
      <div className="bg-gray-900/90 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="flex items-center gap-2 text-2xl font-bold text-white hover:scale-110 transition-transform duration-300 inline-block">
                <Laugh className="w-8 h-8 text-white" />
                TCC
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {['About', 'Team', 'Roadmap', 'Token'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-200 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
                <button className="group px-6 py-2 rounded-xl bg-white text-gray-900 hover:bg-gray-200 transition-all duration-300 font-semibold hover:scale-105 hover:-rotate-2 transform">
                  <span className="inline-block group-hover:animate-pulse">
                    Connect Wallet
                  </span>
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-200 transition-colors duration-300 hover:rotate-180 transform"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute w-full bg-gray-900/90 backdrop-blur-lg rounded-b-2xl border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['About', 'Team', 'Roadmap', 'Token'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 px-4 py-2 rounded-xl bg-white text-gray-900 hover:bg-gray-200 transition-all duration-300 font-semibold hover:scale-105">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}