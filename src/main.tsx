import UzinBanner from "./components-v2/custom/unsorted/uzin/banner";
import Root from "./root-v2";
import { createRoot } from "react-dom/client";

// eslint-disable-next-line react-refresh/only-export-components
const RootChanger = () => {
  return (
    <>
    <div className="h-topbar absolute top-0 right-2 p-4">
    <UzinBanner className="h-full" />
    </div>
      
      <Root />
    </>
  );
};

createRoot(document.getElementById("root")!).render(<RootChanger />);
