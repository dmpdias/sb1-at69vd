import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import TeamModal from './TeamModal';

// Import images
import hacksanImg from '../img/hacksan.png';
import loserImg from '../img/loser.png';
import rickyImg from '../img/ricky.png';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const team = [
    {
      image: hacksanImg,
      name: "Hacksan Minaj",
      role: "Bitter Manager",
      type: "comedian",
      description: "Former confidant turned manager, running the cult with spite and style.",
      fullStory: "Once the dev's closest confidant, Hacksan Minaj now manages the cult with a mix of resilience and reluctance. His sharp storytelling, reminiscent of Hasan Minhaj, cuts deep, often taking aim at the dev who abandoned him, the club, and left him to deal with debts and heartbreak. Hacksan's comedy is tinged with bitterness but grounded in intelligent satire and cultural insight, keeping the cult together with an eye on the (fingers crossed) rise of $TCC."
    },
    {
      image: loserImg,
      name: "Loser CK",
      role: "Cynical Comic",
      type: "comedian",
      description: "A fallen crypto star turning losses into laughs.",
      fullStory: "A fallen star with a talent for sarcasm and zero patience for idealism, Loser CK channels his disillusionment into comedy that pulls no punches. His life unraveled after a disastrous crypto plunge, and he's here to remind everyone about the absurdity of their choices, especially in crypto. CK's brutal honesty and cynicism make him the club's anti-hero, offering audiences a humor that's unforgiving, dark, and unapologetically cynical."
    },
    {
      image: rickyImg,
      name: "Ricky Rugpull",
      role: "Ex-KOL Comic",
      type: "comedian",
      description: "Former crypto 'advisor' with questionably great investment advice.",
      fullStory: "With a name that hints at his past, Ricky Rugpull is a former crypto \"advisor\" turned comedian, who brings a con-man's charm to the stage. His sets are filled with exaggerated tales of near-success and \"great investments\" that never quite worked out. Ricky loves to toy with the crowd, winking at their gullibility while embodying the very scams he warns against. Audiences never know if they should trust Ricky, and that's just how he likes it."
    },
    {
      name: "Tammy Tonic",
      role: "Sarcastic Barmaid",
      type: "staff",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      description: "Serving drinks with a side of brutal honesty.",
      fullStory: "Tammy Tonic serves up drinks and dry wit in equal measure. With a knack for cutting zingers and a perpetual eye-roll, Tammy watches the club's antics with skepticism. She's quick to comment when a joke falls flat and keeps the comedians in check with her biting one-liners. Her deadpan style and sarcastic perspective make her a fan favorite, delivering laughs from behind the bar with an unfiltered honesty that rivals the comics on stage."
    },
    {
      name: "Linda Clean",
      role: "Mysterious Cleaner",
      type: "staff",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400",
      description: "Knows all the cult's secrets, tells none.",
      fullStory: "Quiet and unassuming, Linda Clean has seen it all. As the club's cleaner, she silently observes the chaos, from awkward performances to drunken breakdowns. Although she rarely speaks, Linda's occasional deadpan remarks reveal that she might be the sharpest wit in the room. Known for her mysterious air, some suspect that Linda knows more about the dev's disappearance than she lets on, adding a layer of intrigue to her otherwise humble role."
    }
  ];

  return (
    <div className="bg-gray-900/90 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Meet The Cult
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Each member brings their own twisted humor and unique backstory to our offbeat community
          </p>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300 border border-white/20 shadow-lg hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300 border border-white/20 shadow-lg hover:scale-110"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {team.map((member, index) => (
              <div 
                key={index}
                className="flex-none w-[400px] snap-center"
              >
                <div className="group h-full">
                  <div className="p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-6 aspect-square overflow-hidden rounded-xl">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          member.type === 'comedian' 
                            ? 'bg-red-500/20 text-red-300' 
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {member.type}
                        </span>
                      </div>
                      
                      <p className="text-red-400 mb-4">{member.role}</p>
                      <p className="text-gray-400 mb-6">{member.description}</p>
                      
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="flex items-center gap-2 text-white hover:text-red-400 transition-colors group/btn"
                      >
                        Read More 
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedMember && (
        <TeamModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </div>
  );
}