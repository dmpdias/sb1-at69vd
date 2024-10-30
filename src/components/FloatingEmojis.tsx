import React from 'react';

const FloatingEmojis = () => {
  const emojis = ['😂', '🤣', '😊', '😄', '😆', '😅'];
  
  return (
    <>
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="floating-emoji text-4xl"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `${Math.random() * -20}s`
          }}
        >
          {emoji}
        </div>
      ))}
    </>
  );
};

export default FloatingEmojis;