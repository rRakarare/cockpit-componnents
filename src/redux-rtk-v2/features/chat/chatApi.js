import { apiSlice } from "../api/apiSlice";
import toast from "react-hot-toast";
import { chatLogs, setRefresh } from "./chatSlice";
import { jwtExpMsg } from "@/config-v2/constants";;
import { userLoggedOut } from "../auth/authSlice";

export const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // all all chats endpoint here
    getChatsByAuthId: builder.query({
      query: (data) => {
        // The limit should be decided by client depending on viewport size
        // In case of a mobile app should proabably be less maybe 10
        return `chat/authenticated-id?page=${data.page}&limit=30`;
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 600,
      providesTags: ["Chats"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(chatLogs({ data: result.data.data, page: arg.page }));
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    // chat endpoint here
    createChat: builder.mutation({
      query: (data) => ({
        url: "chat",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Chats", "Profile"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          // toast.success(result.data.message);
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    // update chat endpoint here
    updateChat: builder.mutation({
      query: (data) => ({
        url: "chat",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Chats", "Profile"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          // toast.success(result.data.message);
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    // Add a mutation for deleting a chat
    deleteChat: builder.mutation({
      query: (data) => ({
        url: `chat/?params=${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chats"],
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          dispatch(setRefresh(true));
          const result = await queryFulfilled;
          toast.success(result.data.message);
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    // copy chat endpoint here
    copyChat: builder.mutation({
      query: (data) => ({
        url: "chat/copy",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Chats"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          dispatch(setRefresh(true));
          await queryFulfilled;
          // toast.success(result.data.message);
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    deleteChatMessages: builder.mutation({
      query: (data) => ({
        url: `chat/messages/${data.chatId}/${data.index}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["Chats"],
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled;
          // toast.success(result.data.message);
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),
  }),
});

export const {
  useCreateChatMutation,
  useGetChatsByAuthIdQuery,
  useDeleteChatMutation,
  useUpdateChatMutation,
  useCopyChatMutation,
  useDeleteChatMessagesMutation,
} = chatApi;
