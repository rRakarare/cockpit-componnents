import Layout from "./components/custom/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
