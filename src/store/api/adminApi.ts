import { IGroup, IGroupmembers } from '@/types/admin';
import { IEmployee } from '@/types/employee';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005/admin';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    createGroupReq: build.mutation<IGroup, FormData>({
      query: (body) => ({
        url: '/study',
        method: 'POST',
        body: body,
      }),
    }),
    getGroups: build.query<IGroup[], any>({
      query: (body) => ({
        url: '/groups',
      }),
    }),
    getMembers: build.query<IGroupmembers[], any>({
      query: (body) => ({
        url: '/members',
      }),
    }),
    getGroup: build.query<IGroup, { id: string }>({
      query: ({ id }) => ({
        url: `/group/${id}`,
      }),
    }),
    createEmployee: build.mutation<IEmployee[], FormData>({
      query: (body) => ({
        url: '/employee',
        method: 'POST',
        body,
      }),
    }),
    getEmployees: build.query<IEmployee[], string>({
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
