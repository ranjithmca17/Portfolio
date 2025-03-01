import React, { useState, useEffect } from 'react';
import './Mouse.css';

const BubbleAnimation = ({ theme }) => {
  const [bubbles, setBubbles] = useState([]);

  // Function to generate a random bubble
  const createBubble = () => {
    const size = Math.floor(Math.random() * 50 + 20); // Random size between 20px and 70px
    const left = Math.random() * window.innerWidth; // Random horizontal position
    const animationDuration = Math.random() * 6 + 4; // Random duration between 4s and 10s

    return {
      id: Math.random().toString(36).substr(2, 9), // Unique ID for each bubble
      size,
      left,
      animationDuration,
    };
  };

  // Initialize bubbles
  useEffect(() => {
    const initialBubbles = Array.from({ length: 30 }, () => createBubble());
    setBubbles(initialBubbles);
  }, []);

  // Determine bubble color based on theme
  const bubbleColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}px`,
            animationDuration: `${bubble.animationDuration}s`,
            backgroundColor: bubbleColor, // Apply color based on theme
          }}
        ></div>
      ))}
    </div>
  );
};

export default BubbleAnimation;
