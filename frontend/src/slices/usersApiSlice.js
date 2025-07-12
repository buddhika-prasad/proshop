import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      /*************  ✨ Windsurf Command ⭐  *************/
      /**
       * Logs out the user.
       *
       * @memberof usersApiSlice.endpoints
       *
       * @param {object} data - Data to be sent with the request.
       *
       * @return {object} - The response object.
       */
      /*******  239ea41c-41a5-48fe-be65-28720bdf5e01  *******/ query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  usersApiSlice;
