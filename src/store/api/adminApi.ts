import { IGroup, IGroupmembers } from '@/types/admin';
import { IEmployee } from '@/types/employee';
import { IServices } from '@/types/services';
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
    deleteGroupMembers: build.mutation<{ msg: string }, string>({
      query: (id) => ({
        url: `/members/${id}`,
        method: 'DELETE',
      }),
    }),
    getGroup: build.query<IGroup, { id: string }>({
      query: ({ id }) => ({
        url: `/group/${id}`,
      }),
    }),
    deleteGroup: build.mutation<any, string>({
      query: (id) => ({
        url: `/group/${id}`,
        method: 'DELETE',
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
    getOneEmployee: build.query<IEmployee, string>({
      query: (id) => ({
        url: `/employee/${id}`,
      }),
    }),
    deleteEmployee: build.mutation<{ msg: string }, string>({
      query: (id) => ({
        url: `/employee/${id}`,
        method: 'DELETE',
      }),
    }),
    editEmployee: build.mutation<any, any>({
      query: (body) => ({
        url: `/employee/${body.id}`,
        method: 'PUT',
        body: body.data,
      }),
    }),

    updateEmployeeSchedule: build.mutation<any, any>({
      query: (body) => ({
        url: `/employee/schedule/${body.id}`,
        method: 'PUT',
        body: body.data,
      }),
    }),
    setEmployeeSchedule: build.mutation<any, any>({
      query: (body) => ({
        url: `/employee/schedule/${body.id}`,
        method: 'POST',
        body: body.data,
      }),
    }),
    deleteEmployeeSchedule: build.mutation({
      query: (body) => ({
        url: `/employee/schedule/${body.id}`,
        method: 'DELETE',
        body: body.data,
      }),
    }),
    createServicesApi: build.mutation<IServices[], FormData>({
      query: (body) => ({
        url: '/services',
        method: 'POST',
        body,
      }),
    }),
    getServicesApi: build.query<IServices[], any>({
      query: () => ({
        url: '/services',
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
  useDeleteEmployeeMutation,
  useDeleteGroupMembersMutation,
  useLazyGetOneEmployeeQuery,
  useUpdateEmployeeScheduleMutation,
  useSetEmployeeScheduleMutation,
  useGetOneEmployeeQuery,
  useDeleteEmployeeScheduleMutation,
  useCreateServicesApiMutation,
  useGetServicesApiQuery,
  useDeleteGroupMutation,
  useEditEmployeeMutation,
} = adminApi;
