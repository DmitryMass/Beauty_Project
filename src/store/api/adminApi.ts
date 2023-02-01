import { IGroup } from './../../types/admin';
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
  }),
});

export const {
  useCreateGroupReqMutation,
  useGetGroupsQuery,
  useGetMembersQuery,
} = adminApi;
