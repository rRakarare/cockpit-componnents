import { useState } from "react";
import Response from "./Response"
import TypeOutput from "./TypeOutput"

function Main() {

    const [response, setResponse] = useState<string[]>([])

    const addRandomSentence = () => {
        const words = ["lorem ", "ipsum ", "dolor ", "sit ", "amet ", "consectetur ", "adipiscing ", "elit ", "sed ", "do ", "eiusmod ", "tempor ", "incididunt ", "ut ", "labore ", "et ", "dolore ", "magna ", "aliqua"];
        const sentenceLength = Math.floor(Math.random() * 6) + 10; // Random length between 5 and 10
        const sentence = Array.from({ length: sentenceLength }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
        setResponse(prev => [...prev, sentence]);
    };


  return (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="max-w-5xl w-full bg-red-600 h-96 flex">
        <Response response={response} addRandomSentence={addRandomSentence} />
        <TypeOutput response={response}/>
        </div>

    </div>
  )
}

export default Main