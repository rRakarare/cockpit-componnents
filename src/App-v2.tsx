import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Chat,
  Chats,
  DataChat,
  Prompt,
  PromptId,
  PromptCreate,
  Login,
  Media,
  Projects,
  ProjectId,
  Start,
  DataChatId,
  MediaId,
  ChatId,
} from "./pages";
import MainLayout from "./components-v2/custom/layout/layout";
import Protected from "./components-v2/custom/auth/AuthCheck";
import { hrefMap } from "./config-v2/links";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected />}>
          <Route element={<MainLayout />}>
            <Route path={`${hrefMap.start.href}`} element={<Start />} />
            <Route path={`${hrefMap.chat.href}`} element={<Chat />} />
            <Route path={`${hrefMap.chat.href}/:id`} element={<ChatId />} />
            <Route path={`${hrefMap.history.href}`} element={<Chats />} />
            <Route path={`${hrefMap.dataSilo.href}`} element={<DataChat />} />
            <Route path={`${hrefMap.dataSilo.href}/:id`} element={<DataChatId />} />
            <Route path={`${hrefMap.prompt.href}`} element={<Prompt />} />
            <Route path={`${hrefMap.prompt.href}/create`} element={<PromptCreate />} />
            <Route path={`${hrefMap.prompt.href}/:id`} element={<PromptId />} />

            <Route path={`${hrefMap.media.href}`} element={<Media />} />
            <Route path={`${hrefMap.media.href}/:id`} element={<MediaId />} />
            <Route path={`${hrefMap.project.href}`} element={<Projects />} />
            <Route path={`${hrefMap.project.href}/:id`} element={<ProjectId />} />
          </Route>
        </Route>
        <Route path={`${hrefMap.login.href}`} element={<Login />} />

        <Route path="/*" element={<>notFound</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
