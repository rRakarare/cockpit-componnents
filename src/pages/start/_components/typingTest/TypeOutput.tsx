/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from '@/components-v2/ui/button';
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TypingEffectProps {
  response: string[];
}

interface Task {
  id: number;
  execute: () => Promise<string>;
}

const createTask = (chunk: string, segmenter: Intl.Segmenter, setText: React.Dispatch<React.SetStateAction<string>>, delay: number) => {
  return () => new Promise<string>((resolve) => {
    
    const words = Array.from(segmenter.segment(chunk)).map(item => item.segment)
    console.log({chunk, words})
    const addWords = async () => {
      for (const word of words) {
        await new Promise<void>(resolve => {
          setTimeout(() => {
            setText(prevText => {
              const newText = prevText + word;
              return newText;
            });
            resolve();
          }, delay);
        });
      }
      resolve("");
    };

    addWords();

  })
}


const useTypedText = (response: string[]) => {

  const segmenter = new Intl.Segmenter('de', { granularity: 'word' });

  const [chunkIndex, setChunkIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([])
  const [results, setResults] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const nextTaskIdRef = useRef(1)


  const addTask = useCallback((chunk:string) => {
    const delay = 5
    const newTask: Task = {
      id: nextTaskIdRef.current,
      execute: createTask(chunk, segmenter, setText, delay)
    }
    setTasks(prevTasks => [...prevTasks, newTask])
    nextTaskIdRef.current += 1
  }, [])

  const processTasks = useCallback(async () => {
    if (isProcessing || tasks.length === 0) return
    setIsProcessing(true)

    const currentTask = tasks[0]
    try {
      const result = await currentTask.execute()
      setResults(prevResults => [...prevResults, result])
      setTasks(prevTasks => prevTasks.slice(1))

    } catch (error) {
      console.error("Task failed:", error)
    }

    setIsProcessing(false)
  }, [tasks, isProcessing, results.length])

  useEffect(() => {
    if (!isProcessing && tasks.length > 0) {
      processTasks()
    }
  }, [isProcessing, tasks, processTasks])

  useEffect(() => {
    if (response.length > 0) {
      addTask(response[chunkIndex])
      setChunkIndex(prevIndex => prevIndex + 1)
    }
  }, [response])

  
  return {text}


}

const TypingEffect: React.FC<TypingEffectProps> = ({ response }) => {
  
  const {text} =  useTypedText(response);

  return     <div className="w-full h-full bg-red-500 flex flex-col justify-between ">
  <div className="m-4 overflow-y-scroll inline-block">
      {text}
  </div>
  <Button>Test</Button>
</div>

};

export default TypingEffect;