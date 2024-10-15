import { Button } from "@/components-v2/ui/button";
import { useEffect, useState } from "react";

type ResponseProps = {
    response: string[];
    addRandomSentence: () => void;
}

function Response({ response, addRandomSentence }: ResponseProps) {

  const [displayedResponse, setDisplayedResponse] = useState<string>();
  const [index, setIndex] = useState<number>(0);
  

  useEffect(() => {
    if(response.length > 0) {
        setDisplayedResponse(prev => prev + response[index]);
        setIndex(prev => prev + 1);
    }
  }, [response])
  


  return (
    <div className="w-full h-full bg-blue-500 flex flex-col justify-between ">
        <div className="m-4 overflow-y-scroll inline-block">
            {displayedResponse}
        </div>
        <Button onClick={addRandomSentence}>Add Random Sentence</Button>
    </div>
  )
}

export default Response