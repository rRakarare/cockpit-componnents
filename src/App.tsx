import Layout from "./components/custom/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Library from "./pages/Library";
import AllChats from "./pages/AllChats";
import Media from "./pages/Media";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/library" element={<Library />} />
          <Route path="/allChats" element={<AllChats />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
