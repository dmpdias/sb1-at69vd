import React from 'react';
import { Sparkles, ArrowRight, Laugh } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-bounce">
            <Laugh className="w-16 h-16 mx-auto mb-8 text-white hover:scale-125 transition-transform duration-300" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white hover:scale-105 transition-transform duration-300">
            The Comedy Cult
          </h1>
          <p className="text-2xl sm:text-3xl font-bold mb-4 text-gray-200">Where Comedy Meets Crypto</p>
          <p className="text-xl sm:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto">
            Join the first AI-powered comedy club in the Solana District. Stake tokens, enjoy shows, and earn while you laugh!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-lg font-semibold flex items-center justify-center gap-2 hover:scale-110 hover:-rotate-2 transform">
              Join The Cult 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="group px-8 py-4 rounded-full border-2 border-white hover:border-gray-200 transition-all duration-300 text-lg font-semibold hover:scale-110 hover:rotate-2 transform">
              <span className="text-white group-hover:text-gray-200 transition-colors duration-300">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}