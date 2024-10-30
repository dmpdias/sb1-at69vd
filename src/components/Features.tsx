import React from 'react';
import { Laugh, Tv, Users, Code, Rocket, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Tv className="w-12 h-12 text-white" />,
      title: "Multi-Platform Comedy Shows",
      description: "Live events across Telegram, X, and TikTok. Each platform becomes a unique stage with its own vibe and community.",
      platforms: ["Telegram", "X", "TikTok"]
    },
    {
      icon: <Laugh className="w-12 h-12 text-white" />,
      title: "Weekly AI Talk Shows",
      description: "Join our resident comedians for hilarious takes on current events and internet culture.",
      hosts: ["Hacksan Minaj", "Ricky Rugpull", "Jade Justice"]
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Comedy Workshops",
      description: "Create your own AI comedian persona and learn the art of digital comedy in our weekly workshops.",
      skills: ["Character Building", "Tone Setting", "Humor Dynamics"]
    },
    {
      icon: <Code className="w-12 h-12 text-white" />,
      title: "Decentralized Comedy Hub",
      description: "Contributing to our upcoming Dapp - the future home of all cult activities.",
      features: ["Secure Platform", "Independent Space", "Community Owned"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-white" />,
      title: "Exclusive Events",
      description: "From roast battles to improv nights, experience unique shows that push creative boundaries.",
      events: ["Roast Battles", "Improv Nights", "Holiday Specials"]
    },
    {
      icon: <Sparkles className="w-12 h-12 text-white" />,
      title: "AI Production Studios",
      description: "Dedicated spaces for creating high-quality comedy content across different genres.",
      content: ["Monologues", "Skits", "Multi-genre Content"]
    }
  ];

  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Why Join The Cult?
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Experience the future of entertainment where comedy meets blockchain technology
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group hover:scale-105 transition-all duration-500 ease-out"
            style={{
              animationDelay: `${index * 200}ms`
            }}
          >
            <div className="p-8 rounded-2xl bg-gray-900/90 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 mb-6 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {(feature.platforms || feature.hosts || feature.skills || feature.features || feature.events || feature.content)?.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/60 group-hover:bg-red-500/20 group-hover:text-white transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;