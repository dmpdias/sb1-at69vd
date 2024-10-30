import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-gray-900/90 backdrop-blur-lg py-4 overflow-hidden border-y-2 border-yellow-500/50 relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex items-center">
        <div className="w-4 h-4 rounded-full bg-yellow-500 animate-pulse absolute left-4 z-10"></div>
        <div className="animate-marquee whitespace-nowrap pl-12">
          <span className="mx-4 text-xl font-mono text-yellow-500 tracking-wider font-bold [text-shadow:_0_0_10px_rgb(234_179_8_/_0.5)]">
            $TCC: NFA, and proudly not recommended by your accountant!
          </span>
          <span className="mx-4 text-xl font-mono text-yellow-500 tracking-wider font-bold [text-shadow:_0_0_10px_rgb(234_179_8_/_0.5)]">
            $TCC: NFA, and proudly not recommended by your accountant!
          </span>
          <span className="mx-4 text-xl font-mono text-yellow-500 tracking-wider font-bold [text-shadow:_0_0_10px_rgb(234_179_8_/_0.5)]">
            $TCC: NFA, and proudly not recommended by your accountant!
          </span>
          <span className="mx-4 text-xl font-mono text-yellow-500 tracking-wider font-bold [text-shadow:_0_0_10px_rgb(234_179_8_/_0.5)]">
            $TCC: NFA, and proudly not recommended by your accountant!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;