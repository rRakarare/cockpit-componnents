import { StrictMode } from "react";
import App from "./App-v2.tsx";
import "./index-v2.css";
import { ThemeProvider } from "./components-v2/layout/_components/theme-provider.tsx";
import { Provider } from "react-redux";
import { store } from "@/redux-rtk-v2/app/store.js";
import { Toaster } from "./components-v2/ui/toaster.tsx";


function Root() {
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
          <Toaster />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
}

export default Root;
