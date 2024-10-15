/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  response: string[];
  maxTimePerChar?: number; // Maximum time per character in milliseconds
}

const TypingEffect: React.FC<TypingEffectProps> = ({ response, maxTimePerChar=50 }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentChunkIndex, setCurrentChunkIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [currentSpeed, setCurrentSpeed] = useState<number>(maxTimePerChar);
  const [segments, setSegments] = useState<any[] | null>(null);
  const segmenterRef = useRef<Intl.Segmenter | null>(null);

  useEffect(() => {
    const currentChunk = response[currentChunkIndex];
    if (!currentChunk) return;

    const segments = Array.from(segmenterRef.current!.segment(currentChunk));

    setSegments(segments);

  }, [response])
  

  useEffect(() => {
    if (!segmenterRef.current) {
      segmenterRef.current = new Intl.Segmenter('en', { granularity: 'word' });
    }
  }, []);

  useEffect(() => {
    if (currentChunkIndex >= response.length) return;

    if (!segments) return;

    // console.log('segments', segmenterRef.current!.segment(currentChunk));
    
    if (currentCharIndex >= segments.length) {
      setCurrentChunkIndex(prevIndex => prevIndex + 1);
      setCurrentCharIndex(0);
      return;
    }

    const remainingChars = segments.length - currentCharIndex;
    const remainingChunks = response.length - currentChunkIndex;
    const totalRemainingChars = remainingChars + response.slice(currentChunkIndex + 1).join('').length;
    
    const adjustedSpeed = Math.min(maxTimePerChar, (maxTimePerChar * totalRemainingChars) / (remainingChunks * 1000));

    const timer = setTimeout(() => {
      setDisplayedText(prevText => prevText + segments[currentCharIndex].segment);
      setCurrentCharIndex(prevIndex => prevIndex + 1);
    }, 10);

    return () => {
      console.log('clearing timer');
      clearTimeout(timer)
    };
  }, [response, currentChunkIndex, currentCharIndex, maxTimePerChar, segments]);

  return <div className='w-full'>{displayedText}</div>;
};

export default TypingEffect;