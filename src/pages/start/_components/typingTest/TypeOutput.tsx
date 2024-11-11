
import { Button } from "@/components-v2/ui/button";
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  response: string[];
}

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

const useTypedText = (response: string[]) => {
  const segmenter = new Intl.Segmenter("de", { granularity: "word" });

  const [chunkIndex, setChunkIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [segments, setSegments] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [delay, setDelay] = useState<number>(40);

  const processSegment = async () => {
    if (isProcessing || segments.length === 0) return;
    setIsProcessing(true);
    console.log("delay", delay);

    await convertToText(segments, setText, setSegments, delay);

    setIsProcessing(false);
  };

  useEffect(() => {
    if (!isProcessing && segments.length > 0) {
      processSegment();
    }
  }, [segments]);

  useEffect(() => {
    if (response.length > 0) {
      const newSegments = Array.from(
        segmenter.segment(response[chunkIndex])
      ).map((item) => item.segment);
      setSegments((prev) => {
        const allSegments = [...prev, ...newSegments];
        const timeToFinish = 2000
        const maxTimePerSegment = 20
        const timePerSegment = Math.min(timeToFinish / allSegments.length, maxTimePerSegment)
        setDelay(timePerSegment)
        return [...allSegments]
      });
      setChunkIndex((prev) => prev + 1);
    }
  }, [response]);

  return { text };
};

const TypingEffect: React.FC<TypingEffectProps> = ({ response }) => {
  const { text } = useTypedText(response);

  return (
    <div className="w-full h-full bg-red-500 flex flex-col justify-between ">
      <div className="m-4 overflow-y-scroll inline-block">{text}</div>
      <Button>Test</Button>
    </div>
  );
};

export default TypingEffect;
