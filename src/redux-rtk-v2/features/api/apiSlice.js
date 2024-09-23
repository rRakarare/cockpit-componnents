import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: "include",
  }),
  tagTypes: [
    "Users",
    "User",
    "Profile",
    "Categories",
    "Category",
    "CardTemps",
    "CardTemp",
    "Company",
    "Prompts",
    "Prompt",
    "AllChats",
    "Chat",
    "Chats",
    "ImageChats",
    "ImageChat",
    "DataChats",
    "DataChat",
    "UserList",
    "AssistantChats",
    "AssistantChat",
    "ChatPrompts",
  ],
  endpoints: () => ({}),
});
