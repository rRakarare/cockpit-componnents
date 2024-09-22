import { toast } from "@/lib-v2/hooks/use-toast";
import { apiSlice } from "../api/apiSlice";
import { profileLog, userLoggedIn, userLoggedOut } from "./authSlice";
import { jwtExpMsg, ToastHeading } from "@/config-v2/constants";;

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // login endpoint here
    login: builder.mutation({
      query: (data) => ({
        url: "auth/signin",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          // setting logged data to redux state
          dispatch(
            userLoggedIn({
              user: result.data.data.user,
            }),
          );

          toast({title: ToastHeading.SUCCESS, description:result.data.message});
        } catch (error) {

          toast({title: ToastHeading.SUCCESS, description:error?.error?.data?.message});
        }
      },
    }),

    // logout endpoint here
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast({title: ToastHeading.SUCCESS, description:result.data.message});
        } catch (error) {
          toast({title: ToastHeading.SUCCESS, description:error?.error?.data?.message});
        }
      },
    }),
    // get profile endpoint here
    getProfile: builder.query({
      query: () => `auth/profile`,
      providesTags: ["Profile"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data.data }));
        } catch (error) {
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast({title: ToastHeading.SUCCESS, description:error.error.data.message});
        }
      },
    }),

    // update user profile
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "auth/profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(profileLog({ user: result.data.data }));
          toast({title: ToastHeading.SUCCESS, description:result.data.message});
        } catch (error) {
          console.log(error, "Auth api error");
          if (error.error.data.message === jwtExpMsg) {
            dispatch(userLoggedOut());
          }
          toast({title: ToastHeading.SUCCESS, description:error.error.data.message});
        }
      },
    }),

    createNewUser: builder.mutation({
      query: (data) => ({
        url: "auth/user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users", "Company"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast({title: ToastHeading.SUCCESS, description:result.data.message});
        } catch (error) {
          toast({title: ToastHeading.SUCCESS, description:error.error.data.message});
        }
      },
    }),
    deleteUser: builder.mutation({
      query: (data) => ({
        url: `auth/user/${data.userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users", "Company"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast({title: ToastHeading.SUCCESS, description:result.data.message});
        } catch (error) {
          toast({title: ToastHeading.SUCCESS, description:error.error.data.message});
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useCreateNewUserMutation,
  useDeleteUserMutation,
} = authApi;
