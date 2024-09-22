import { apiSlice } from "../api/apiSlice";
import toast from "react-hot-toast";
import { jwtExpMsg } from "@/config-v2/constants";;
import { userLoggedOut } from "../auth/authSlice";

export const promptApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPrompts: builder.query({
      query: (data) => ({
        url: `prompt/?searchTerm=${data.searchTerm}&page=${data.page}&limit=20&category=${data.activeCategory}&subCategory=${data.activeSubCategory}&library=${data.libraryType}`,
        method: "GET",
      }),
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        if (!previousArg || currentArg.page == 0) {
          return true;
        }
        return currentArg.page !== previousArg.page;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems, { arg }) => {
        // If it's the first page, replace the current cache data with the new items
        if (arg.page === 0) {
          currentCache.data = [...newItems.data];
        } else {
          const newIds = newItems.data.map((item) => item._id);

          // Merge current cache data with new items
          const mergedData = currentCache.data.map((item) => {
            // Find the index of the current item in the new items list
            const newItemIndex = newIds.indexOf(item._id);
            if (newItemIndex > -1) {
              return newItems.data[newItemIndex];
            }
            return item;
          });

          // Add new items to the merged data that are not already in the current cache
          newItems.data.forEach((newItem) => {
            if (!currentCache.data.some((item) => item._id === newItem._id)) {
              mergedData.push(newItem);
            }
          });

          currentCache.data = mergedData;
        }
      },
      keepUnusedDataFor: 600,
      providesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    getPromptsByUser: builder.query({
      query: (data) => ({
        url: `prompt/by-auth-user?searchTerm=${data.searchTerm}&page=${data.page}&limit=20&category=${data.activeCategory}&subCategory=${data.activeSubCategory}&library=${data.libraryType}`,
        method: "GET",
      }),
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        if (!previousArg || currentArg.page == 0) {
          return true;
        }
        return currentArg.page !== previousArg.page;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems, { arg }) => {
        // If it's the first page, replace the current cache data with the new items
        if (arg.page === 0) {
          currentCache.data = [...newItems.data];
        } else {
          const newIds = newItems.data.map((item) => item._id);

          // Merge current cache data with new items
          const mergedData = currentCache.data.map((item) => {
            // Find the index of the current item in the new items list
            const newItemIndex = newIds.indexOf(item._id);
            if (newItemIndex > -1) {
              return newItems.data[newItemIndex];
            }
            return item;
          });

          // Add new items to the merged data that are not already in the current cache
          newItems.data.forEach((newItem) => {
            if (!currentCache.data.some((item) => item._id === newItem._id)) {
              mergedData.push(newItem);
            }
          });

          currentCache.data = mergedData;
        }
      },
      keepUnusedDataFor: 600,
      providesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    getLikedPromptsByUser: builder.query({
      query: (data) => ({
        url: `prompt/like?searchTerm=${data.searchTerm}&page=${data.page}&limit=20&category=${data.activeCategory}&subCategory=${data.activeSubCategory}&library=${data.libraryType}`,
        method: "GET",
      }),
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        if (!previousArg || currentArg.page == 0) {
          return true;
        }
        return currentArg.page !== previousArg.page;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 0) {
          currentCache.data = [...newItems.data];
        } else {
          const newIds = newItems.data.map((item) => item._id);

          // Merge current cache data with new items
          const mergedData = currentCache.data.map((item) => {
            // Find the index of the current item in the new items list
            const newItemIndex = newIds.indexOf(item._id);
            if (newItemIndex > -1) {
              return newItems.data[newItemIndex];
            }
            return item;
          });

          // Add new items to the merged data that are not already in the current cache
          newItems.data.forEach((newItem) => {
            if (!currentCache.data.some((item) => item._id === newItem._id)) {
              mergedData.push(newItem);
            }
          });

          currentCache.data = mergedData;
        }
      },
      keepUnusedDataFor: 600,
      providesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    getListPromptsByUser: builder.query({
      query: (data) => ({
        url: `prompt/list/${data.listId}?searchTerm=${data.searchTerm}&library=${data.libraryType}`,
        method: "GET",
      }),
      providesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    getChatPrompts: builder.query({
      query: () => ({
        url: `prompt/chat-prompts`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: ["ChatPrompts"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    createPrompt: builder.mutation({
      query: (data) => ({
        url: "prompt",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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

    likePrompt: builder.mutation({
      query: (data) => ({
        url: "prompt/like",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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

    addPromptToList: builder.mutation({
      query: (data) => ({
        url: "prompt/list",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Prompts", "UserLists"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
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

    updatePrompt: builder.mutation({
      query: ({ data }) => ({
        url: "prompt",
        method: "PUT",
        body: data,
      }),
      // invalidatesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const { customSuccessMessage } = arg;
        try {
          const result = await queryFulfilled;
          if (customSuccessMessage) {
            toast.success(customSuccessMessage);
          } else {
            toast.success(result.data.message);
          }
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast.error(error.error.data.message);
        }
      },
    }),

    // Add a mutation for deleting a prompt
    deletePrompt: builder.mutation({
      query: (data) => ({
        url: `prompt/?params=${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Prompts"],
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
  useGetPromptsQuery,
  useGetPromptsByUserQuery,
  useCreatePromptMutation,
  useUpdatePromptMutation,
  useDeletePromptMutation, // Add the delete mutation to the exported functions
  useLikePromptMutation,
  useAddPromptToListMutation,
  useGetLikedPromptsByUserQuery,
  useGetListPromptsByUserQuery,
  useGetChatPromptsQuery,
} = promptApi;
