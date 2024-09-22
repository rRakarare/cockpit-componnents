import { apiSlice } from "../api/apiSlice";
import { jwtExpMsg, ToastHeading } from "@/config-v2/constants";
import { userLoggedOut } from "../auth/authSlice";
import { assistantChatLogs } from "./assistantChatSlice";
import { toast } from "@/lib-v2/hooks/use-toast";

export const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // all all chats endpoint here
    getAssistantChatsByAuthId: builder.query({
      query: () => "assistant/authenticated-id",
      keepUnusedDataFor: 600,
      providesTags: ["AssistantChats"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(assistantChatLogs(result.data.data));
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast({title: ToastHeading.ERROR, description: error.error.data.message});
        }
      },
    }),

    getAssistantFile: builder.mutation({
      query: (fileId) => ({
        url: `assistant/file/${fileId}`,
        method: "POST",
      }),
      keepUnusedDataFor: 600,
      providesTags: ["AssistantChats"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast({title: ToastHeading.ERROR, description: error.error.data.message});
        }
      },
    }),

    // chat endpoint here
    createAssistantChat: builder.mutation({
      query: (data) => ({
        url: "assistant",
        method: "POST",
        body: data,
        "Content-Type": "multipart/form-data",
      }),
      invalidatesTags: ["AssistantChats"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          // toast.success(result.data.message);
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast({title: ToastHeading.ERROR, description: error.error.data.message});
        }
      },
    }),
  }),
});

export const {
  useGetAssistantChatsByAuthIdQuery,
  useCreateAssistantChatMutation,
  useGetAssistantFileMutation,
} = chatApi;
