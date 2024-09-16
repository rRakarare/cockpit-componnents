import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Chat,
  Assistants,
  Chats,
  DataChat,
  Library,
  Login,
  Media,
  Projects,
  Start,
  ChatId,
  DataChatId,
  MediaId,
} from "./pages";
import MainLayout from "./components/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Start/>} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:id" element={<ChatId />} />
          <Route path="/assistants" element={<Assistants />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/data-chat" element={<DataChat />} />
          <Route path="/data-chat/:id" element={<DataChatId />} />
          <Route path="/library" element={<Library />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:id" element={<MediaId />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<>notFound</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
