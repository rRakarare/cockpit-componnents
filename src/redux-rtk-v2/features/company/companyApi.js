import { jwtExpMsg } from "@/config-v2/constants";;
import { apiSlice } from "../api/apiSlice";
import toast from "react-hot-toast";
import { userLoggedOut } from "../auth/authSlice";

export const companyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (data) => `/company/users/${data.companyId}`,
      keepUnusedDataFor: 600,
      providesTags: ["Company"],
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
    getCompany: builder.query({
      query: (data) => `/company/${data.companyId}`,
      keepUnusedDataFor: 600,
      providesTags: ["Company"],
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
    updateCompany: builder.mutation({
      query: ({ data, companyId }) => ({
        url: `/company/${companyId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Company"],
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
  useGetAllUsersQuery,
  useUpdateCompanyMutation,
  useGetCompanyQuery,
} = companyApi;
