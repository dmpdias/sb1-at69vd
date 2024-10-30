import React from 'react';
import { X } from 'lucide-react';

interface TeamModalProps {
  member: {
    name: string;
    role: string;
    type: string;
    image: string;
    description: string;
    fullStory: string;
  };
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-gray-900/90 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-white/20">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold text-white">{member.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  member.type === 'comedian' 
                    ? 'bg-red-500/20 text-red-300' 
                    : 'bg-blue-500/20 text-blue-300'
                }`}>
                  {member.type}
                </span>
              </div>
              
              <p className="text-xl text-red-400 mb-6">{member.role}</p>
              
              <div className="prose prose-invert">
                <p className="text-gray-300 whitespace-pre-line">{member.fullStory}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;