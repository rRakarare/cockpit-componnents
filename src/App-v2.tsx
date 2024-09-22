import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Chat,
  Assistants,
  Chats,
  DataChat,
  Prompt,
  Login,
  Media,
  Projects,
  Start,
  ChatId,
  DataChatId,
  MediaId,
} from "./pages";
import MainLayout from "./components-v2/layout/layout";
import Protected from "./components-v2/custom/auth/AuthCheck";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Start />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:id" element={<ChatId />} />
            <Route path="/assistants" element={<Assistants />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/data-chat" element={<DataChat />} />
            <Route path="/data-chat/:id" element={<DataChatId />} />
            <Route path="/prompt/:id?" element={<Prompt />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/:id" element={<MediaId />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<>notFound</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
