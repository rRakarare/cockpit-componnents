import { apiSlice } from "../api/apiSlice";
import toast from "react-hot-toast";
import { jwtExpMsg } from "@/config-v2/constants";;
import { userLoggedOut } from "../auth/authSlice";
import { imageChatLogs } from "./imageChatSlice";

export const ImageChatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // all all chats endpoint here
    getImageChatsByAuthId: builder.query({
      query: () => "image/authenticated-id",
      keepUnusedDataFor: 600,
      providesTags: ["ImageChats"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(imageChatLogs(result.data.data));
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    // chat endpoint here
    createImageChat: builder.mutation({
      query: (data) => ({
        url: "image",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ImageChats", "Profile"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          // toast.success(result.data.message);
        } catch (error) {
          console.log(error, "Create Image error");
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    // Add a mutation for deleting a chat
    deleteImageChat: builder.mutation({
      query: (data) => ({
        url: `image/?params=${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ImageChats"],
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
  useCreateImageChatMutation,
  useGetImageChatsByAuthIdQuery,
  useDeleteImageChatMutation,
} = ImageChatApi;
