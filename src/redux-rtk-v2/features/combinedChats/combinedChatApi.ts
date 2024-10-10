
import { apiSlice } from "../api/apiSlice";
import { ApiResponse } from "@/redux-rtk-v2/types/api";

import { ChatType } from "@/redux-rtk-v2/types/chats/chats";


export const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllChatsByAuthId: builder.query<ChatType, {page:number}>({
      query: ({page}) => {
        return `chat/authenticated-id?page=${page}&limit=30`;
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),

    getChatById: builder.query<ApiResponse<ChatType>, {id:string|undefined, type:string}>({
      query: ({id, type}) => {
        return `chat/${id}/${type}`;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },

    })
  }),

})


export const {
  useGetAllChatsByAuthIdQuery,
  useGetChatByIdQuery
} = chatApi;
