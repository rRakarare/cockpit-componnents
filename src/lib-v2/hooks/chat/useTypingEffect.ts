/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const convertToText = async (
  segments: string[],
  setText: React.Dispatch<React.SetStateAction<string>>,
  setSegments: React.Dispatch<React.SetStateAction<string[]>>,
  delay: number
) => {
  for (const segment of segments) {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        setText((prevText) => {
          const newText = prevText + segment;
          return newText;
        });
        setSegments((prev) => prev.slice(1));

        resolve();
      }, delay);
    });
  }
  
};

export const useTypingEffect = (response: string[]|null) => {
  const segmenter = new Intl.Segmenter("de", { granularity: "word" });

  const [chunkIndex, setChunkIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [segments, setSegments] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [delay, setDelay] = useState<number>(20);

  const processSegment = async () => {
    if (isProcessing || segments.length === 0) return;
    setIsProcessing(true);

    await convertToText(segments, setText, setSegments, delay);

    setIsProcessing(false);
  };

  useEffect(() => {
    if (segments.length > 0) {
      setIsTyping(true);
    } else {
        setIsTyping(false);
    }
  }, [isProcessing])
  

  useEffect(() => {
    if (!isProcessing && segments.length > 0) {
      processSegment();
    }
  }, [segments]);

  useEffect(() => {
    if (response && response.length > 0) {
      const newSegments = Array.from(
        segmenter.segment(response[chunkIndex])
      ).map((item) => item.segment);
      setSegments((prev) => {
        const allSegments = [...prev, ...newSegments];
        const timeToFinish = 1000
        const maxTimePerSegment = 20
        const timePerSegment = Math.min(timeToFinish / allSegments.length, maxTimePerSegment)
        setDelay(timePerSegment)
        return [...allSegments]
      });
      setChunkIndex((prev) => prev + 1);
    }
  }, [response]);

  return { typedText: text, isTyping };
};