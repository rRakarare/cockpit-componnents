import { apiSlice } from "../api/apiSlice";
import toast from "react-hot-toast";
import { jwtExpMsg } from "@/config-v2/constants";;
import { userLoggedOut } from "../auth/authSlice";
import { dataChatLogs } from "./dataChatSlice";

export const DataChatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // all all chats endpoint here
    getDataChatsByAuthId: builder.query({
      query: (data) => `data/authenticated-id?model=${data}`,
      keepUnusedDataFor: 600,
      providesTags: ["DataChats"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(dataChatLogs(result.data.data));
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    // chat endpoint here
    createDataChat: builder.mutation({
      query: (data) => ({
        url: "data",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["DataChats"],
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

    deleteDataChatMessages: builder.mutation({
      query: (data) => ({
        url: `data/messages/${data.chatId}/${data.index}`,
        method: "DELETE",
      }),
      // invalidatesTags: ["DataChats"],
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

    // Add a mutation for deleting a chat
    deleteDataChat: builder.mutation({
      query: (data) => ({
        url: `data/?params=${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DataChats"],
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
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
  }),
});

export const {
  useCreateDataChatMutation,
  useGetDataChatsByAuthIdQuery,
  useDeleteDataChatMessagesMutation,
  useDeleteDataChatMutation,
} = DataChatApi;
