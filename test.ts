// New Database Model
// Combined Models of Chat, DataChat and ImageChat

type Content = {
  type: "text" | "image";
  content: string;
};


type Message = {
  content: Content[];
  role: "user" | "assistant";
  createdAt: Date;
};

type Project = {
  id: string;
  name: string;
  dataSource: string;
  chats : Chat[]; // type project-chat
  prompts: Prompt[];
}

type Chat = {
  id: string;
  type: "chat" | "data-chat" | "image-chat" | "project-chat";
  title: string;
  summary?: string;
  model: string;
  dataSilo?: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  projectId?: string;
};

// Endpoints for Chat

// 1) Get Single Item by ID (Check if user is authorized)
// 2) Del Single Item by ID (Check if user is authorized)
// 3) Put Single Item by ID (Check if user is authorized)
// 4) Create Single
// 5) Get Paginated Items by UserID with ability to filter by (title, type, dataSilo, projectId) through query. Return only (ID, Title, summary, Model Type, dataSilo, projectId, project, UpdatedAt)

// Streaming Chats

// We need ID after creating a new Chat so we can change URL. If you want to keep the logic and automatically create a new Chat item when no ChatID is send return the ChatID in the last response when Item is created with res.write(`KIChatID:${ID}`).


// Adjusted Prompt Model

type Prompt = {
  id: string;
  name: string;
  description: string;

  icon: string; // We handle this in Frontend
  color: string; // We handle this in Frontend

  categoryId?: string;
  model: string;

  dataSilo?: string;
  projectId?: string;

  companyId: string;
  library: string;

  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

// Endpoints for Prompt

// 1) Get Single Item by ID (Check if user is authorized) (include user object)
// 2) Del Single Item by ID (Check if user is authorized)
// 3) Put Single Item by ID (Check if user is authorized)
// 4) Create Single
// 5) Get Paginated Items by UserID with ability to filter by (name, categoryId, libraryId) through query. Return only (ID, name, description, icon color, updatedAt)


