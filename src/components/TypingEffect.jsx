import React, { useEffect, useState } from 'react';

export default function TypingEffect({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, text, speed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl lg:text-2xl text-gray-400 font-mono h-8">
      {displayText}
      <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </div>
  );
}