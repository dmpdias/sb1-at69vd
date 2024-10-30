import React, { useState } from 'react';
import { Rocket, Users, Code, Globe, ChevronDown } from 'lucide-react';

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const phases = [
    {
      icon: <Rocket className="w-12 h-12" />,
      phase: "Phase 1: Building the Cult",
      time: "Q4 2024",
      items: [
        {
          title: "Recruit AI Comedians",
          description: "Let's be honest, this place wasn't going to fill itself. We kicked things off by bringing in our core lineup: Hacksan Minaj, Loser CK, Ricky Rugpull, and Jade Justice. Each comedian was rigorously trained (read: thrown into the deep end) to bring their quirks, sarcasm, and (mildly questionable) wisdom to the stage."
        },
        {
          title: "Launch $TCC Token",
          description: "Yep, we released our own coin. Why? Because nothing says \"this is serious business\" like a token with no buy/sell taxes and 1 billion coins in circulation. This step set the stage (literally) for all things comedy and cult."
        },
        {
          title: "Multi-Platform Social Media Invasion",
          description: "Hacksan and his crew hit Telegram, X, and TikTok like a whirlwind, spreading memes, roasts, and insider jokes. It's our way of saying, \"Hey world, we're here to make you laugh—or at least make you wonder why you're laughing.\""
        }
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      phase: "Phase 2: Cult Growth & Chaos",
      time: "Q1 2025",
      items: [
        {
          title: "Weekly AI Talk Shows Begin",
          description: "Imagine a talk show hosted by your favorite AI comedian. Hacksan takes on current events, Loser CK rants about everything wrong with crypto, Ricky pitches his next \"big\" investment, and Jade Justice… well, educates us. It's like \"The View,\" if \"The View\" were fun."
        },
        {
          title: "Launch AI-Comedian Creation Workshops",
          description: "Ever wanted to be an AI comedian? Here's your chance. Token holders can now join our workshops to create their own AI comic alter egos. After all, we believe everyone deserves a shot at stardom—even if it's only in a Telegram group."
        },
        {
          title: "Exclusive Shows for $TCC Holders",
          description: "From roast battles to themed pop-up events, $TCC holders will get VIP access to the wildest comedy shows we can legally (and ethically) pull off. Expect no less than hilariously questionable content."
        }
      ]
    },
    {
      icon: <Code className="w-12 h-12" />,
      phase: "Phase 3: Studio Rooms & The Dapp Vision",
      time: "Q2 2025",
      items: [
        {
          title: "Fundraising for Our Dapp Dream",
          description: "Our dream? To build a Dapp that's as unfiltered as Loser CK's opinions. This decentralized home will allow us to host our events without anyone telling us we \"can't say that.\" Token holders can participate in exclusive fundraising events and, in exchange, enjoy the dubious honor of financing Hacksan's last-ditch attempt at paying off club debts."
        },
        {
          title: "Build AI Comedy Studios",
          description: "Imagine studio rooms dedicated to creating pure AI-driven comedy content. Each room specializes in a different comedy style, from satirical monologues to sketch comedy. Token holders can book a front-row seat as we develop some of the wildest AI comedy yet."
        },
        {
          title: "Cult LLM Access",
          description: "Imagine a language model trained solely on sarcastic, witty, and downright ridiculous content. Token holders can use it to generate their own scripts, perfect for roast sessions or impressing guests with cutting-edge AI humor."
        }
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      phase: "Phase 4: Expansion to New Chains",
      time: "Q3 2025",
      items: [
        {
          title: "Cross-Chain Comedy Clubs",
          description: "Forget the metaverse; we're taking The Comedy Cult across blockchains like a traveling circus of satirical madness. Each new chain is like a fresh club opening in an entirely different district with its own quirks, audiences, and VIP lounge (well, maybe just the VIP Telegram chat, but still)."
        },
        {
          title: "Inter-Chain Rivalries and Roasts",
          description: "What's a club without a little friendly competition? We'll have chain-specific challenges where cult members can prove which district is the funniest, roastiest, or most downright shameless. Will Solana out-roast Ethereum? Will Polygon club members have the best AI comedian workshops? Only one way to find out."
        },
        {
          title: "Unified $TCC Economy",
          description: "No matter the chain, your $TCC holds value. Whether you're buying a front-row seat to Ricky Rugpull's \"Big Opportunity\" pitch or voting on who gets roasted next, your token remains the passport to it all."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Roadmap to Chaos
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Our master plan to take over the comedy world (or at least try)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {phases.map((phase, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => setActivePhase(activePhase === index ? null : index)}
              className={`w-full group transition-all duration-500 ${
                activePhase === index ? 'scale-105' : 'hover:scale-105'
              }`}
            >
              <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-6">
                  <div className="relative z-10">
                    <div className={`mb-4 text-white transform transition-all duration-500 ${
                      activePhase === index ? 'scale-110 rotate-12' : 'group-hover:scale-110'
                    }`}>
                      {phase.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{phase.phase}</h3>
                    <p className="text-red-400 mb-4">{phase.time}</p>
                    <ChevronDown className={`w-6 h-6 text-white mx-auto transition-transform duration-500 ${
                      activePhase === index ? 'rotate-180' : ''
                    }`} />
                  </div>
                </div>
              </div>
            </button>

            {activePhase === index && (
              <div className="absolute top-full left-0 right-0 z-20 mt-4">
                <div className="bg-black/90 backdrop-blur-lg rounded-xl border border-white/20 p-6 shadow-2xl">
                  <div className="space-y-6">
                    {phase.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="animate-fadeIn"
                        style={{ animationDelay: `${itemIndex * 150}ms` }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}