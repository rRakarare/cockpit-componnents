import { useState } from "react";
import Root from "./root-v2";
import { createRoot } from "react-dom/client";
import { Button } from "./components-v2/ui/button";

// eslint-disable-next-line react-refresh/only-export-components
const RootChanger = () => {
  const [root, setRoot] = useState(false);
  return (
    <>
      <Button className="absolute top-2 right-2" onClick={() => setRoot(!root)} size={"sm"}>
        {root ? "v1" : "v2"}
      </Button>
      {root ? <div>v1</div> : <Root /> }
    </>
  );
};

createRoot(document.getElementById("root")!).render(<RootChanger />);
