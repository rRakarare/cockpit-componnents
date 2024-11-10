import Root from "./root-v2";
import { createRoot } from "react-dom/client";

// eslint-disable-next-line react-refresh/only-export-components
const RootChanger = () => {
  return (
    <>      
      <Root />
    </>
  );
};

createRoot(document.getElementById("root")!).render(<RootChanger />);
