import React, { useState } from 'react';
import { Coins, Users, Lock, Zap, Copy, ExternalLink, Building2, AlertCircle } from 'lucide-react';

export default function TokenSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "GsEbfbyjjnYZGMSkXhoxrqTyrzdYC5AFcCisS51JEGEE";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tokenInfo = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "The Currency of Comedy",
      description: "Access exclusive events, roast nights, and workshops. Your all-access pass to the cult's entertainment.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Create Your AI Comedian",
      description: "Train and customize your own AI comedian. Let it perform at our events and become part of the show!",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Community Control",
      description: "Shape future events, suggest show themes, and vote on who gets roasted next.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Crowdfunding Our Dream",
      description: "Help us build our Dapp - a censorship-free comedy haven in the Solana District.",
    }
  ];

  return (
    <div className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-4xl font-bold mb-4 text-white">
              $TCC – The Comedy Cult's Token of 
            </span>
            <div className="relative inline-flex ml-2">
              <span className="text-4xl font-bold text-white opacity-20">Humor</span>
              <span className="text-4xl font-bold text-white opacity-40 absolute left-0">Hope</span>
              <span className="text-4xl font-bold text-white absolute left-0">HODL</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            The "official" (and we use that term loosely) currency of The Comedy Cult
          </p>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-lg text-gray-300">
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-white/10">
              <Coins className="w-5 h-5 text-yellow-500" />
              <span>1B Total Supply</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-white/10">
              <AlertCircle className="w-5 h-5 text-green-500" />
              <span>0% Tax (because taxes aren't funny)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1470&h=850" 
              alt="Comedy Club" 
              className="w-full h-full object-cover rounded-2xl border border-white/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Our Humble Abode</h3>
              <p className="text-gray-300">Help us upgrade from "charmingly rustic" to "intentionally aesthetic"</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 group hover:border-white/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Contract Address</h3>
                <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
                  Solana
                </div>
              </div>
              <div className="flex items-center gap-4">
                <code className="flex-1 bg-black/50 p-3 rounded-lg text-yellow-500 font-mono text-sm overflow-hidden overflow-ellipsis group-hover:bg-black/70 transition-colors">
                  {contractAddress}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:scale-110"
                >
                  {copied ? (
                    <span className="text-green-400">Copied!</span>
                  ) : (
                    <Copy className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-400 italic">
                Yes, this is where the magic happens. Copy it carefully, or don't blame us for sending your $TCC to the void!
              </p>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-xl border border-white/20 flex items-center justify-center gap-2 transition-all group-hover:scale-105 group-hover:-rotate-1">
                  <span className="font-semibold text-white">DexScreener</span>
                  <ExternalLink className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-xl border border-white/20 flex items-center justify-center gap-2 transition-all group-hover:scale-105 group-hover:rotate-1">
                  <span className="font-semibold text-white">Buy $TCC</span>
                  <ExternalLink className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenInfo.map((info, index) => (
            <div 
              key={index} 
              className="group hover:scale-105 transition-all duration-500"
            >
              <div className="h-full p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 text-white group-hover:scale-110 transform transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{info.title}</h3>
                  <p className="text-gray-300">{info.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}