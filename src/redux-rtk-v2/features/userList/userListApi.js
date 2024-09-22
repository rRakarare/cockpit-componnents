import { jwtExpMsg } from "@/config-v2/constants";;
import { apiSlice } from "../api/apiSlice";
import toast from "react-hot-toast";
import { userLoggedOut } from "../auth/authSlice";

export const userListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserLists: builder.query({
      query: () => "userList",
      keepUnusedDataFor: 600,
      providesTags: ["UserLists"],
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
    createUserList: builder.mutation({
      query: (data) => ({
        url: "userList",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["UserLists"],
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
    deleteUserList: builder.mutation({
      query: (data) => ({
        url: `userList/${data.listId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["UserLists"],
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
  }),
});

export const {
  useGetUserListsQuery,
  useCreateUserListMutation,
  useDeleteUserListMutation,
} = userListApi;
