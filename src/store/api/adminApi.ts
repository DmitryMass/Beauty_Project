import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005/admin';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    createGroupReq: build.mutation({
      query: (body) => ({
        url: '/study',
        method: 'POST',
        body: body,
      }),
    }),
    getGroups: build.query<any, any>({
      query: (body) => ({
        url: '/groups',
      }),
    }),
    getMembers: build.query<any, any>({
      query: (body) => ({
        url: '/members',
      }),
    }),
    getGroup: build.query({
      query: ({ id }) => ({
        url: `/group/${id}`,
      }),
    }),
    createEmployee: build.mutation({
      query: (body) => ({
        url: '/employee',
        method: 'POST',
        body,
      }),
    }),
    getEmployees: build.query({
      query: (body) => ({
        url: '/employee',
      }),
    }),
  }),
});

export const {
  useCreateGroupReqMutation,
  useGetGroupsQuery,
  useGetMembersQuery,
  useGetGroupQuery,
  useCreateEmployeeMutation,
  useGetEmployeesQuery,
} = adminApi;
