import { IGroup, IGroupmembers } from '@/types/admin';
import { IEmployee } from '@/types/employee';
import { IServices } from '@/types/services';
import { IVacancy } from '@/types/vacancies';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005/admin';

// ***********************************************************
export const adminApi = createApi({
  reducerPath: 'adminApi',
  tagTypes: ['Employee', 'Services'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    createEmployee: build.mutation<IEmployee[], FormData>({
      query: (body) => ({
        url: '/employee',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Employee', id: 'employeeList' }],
    }),
    getEmployees: build.query<IEmployee[], void>({
      query: () => ({
        url: '/employee',
      }),
      providesTags: (result: any | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Employee', id })),
              { type: 'Employee', id: 'employeeList' },
            ]
          : [{ type: 'Employee', id: 'employeeList' }],
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
      invalidatesTags: [{ type: 'Employee', id: 'employeeList' }],
    }),
    editEmployee: build.mutation<any, { id: string; data: FormData }>({
      query: (body) => ({
        url: `/employee/${body.id}`,
        method: 'PUT',
        body: body.data,
      }),
      invalidatesTags: [{ type: 'Employee', id: 'employeeList' }],
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
      invalidatesTags: [{ type: 'Services', id: 'servicesList' }],
    }),
    getServicesApi: build.query<IServices[], any>({
      query: () => ({
        url: '/services',
      }),
      providesTags: (result: any | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Services', id })),
              { type: 'Services', id: 'servicesList' },
            ]
          : [{ type: 'Services', id: 'servicesList' }],
    }),
    getOneService: build.query<IServices, string>({
      query: (id) => ({
        url: `/services/${id}`,
      }),
    }),
    editService: build.mutation<any, { id: string; data: FormData }>({
      query: (body) => ({
        url: `/services/${body.id}`,
        method: 'PUT',
        body: body.data,
      }),
      invalidatesTags: [{ type: 'Services', id: 'servicesList' }],
    }),
    deleteService: build.mutation<any, string>({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Services', id: 'servicesList' }],
    }),
  }),
});

// ***********************************************************
export const adminGroupApi = createApi({
  reducerPath: 'adminGroupApi',
  tagTypes: ['Group'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    createGroupReq: build.mutation<IGroup, FormData>({
      query: (body) => ({
        url: '/study',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: [{ type: 'Group', id: 'groupList' }],
    }),
    getGroups: build.query<IGroup[], any>({
      query: () => ({
        url: '/groups',
      }),
      providesTags: (result: any | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Group', id })),
              { type: 'Group', id: 'groupList' },
            ]
          : [{ type: 'Group', id: 'groupList' }],
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
      invalidatesTags: [{ type: 'Group', id: 'groupList' }],
    }),
  }),
});

// ***********************************************************
export const adminGroupMembersApi = createApi({
  reducerPath: 'adminGroupMembersApi',
  tagTypes: ['GroupMembers'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getMembers: build.query<IGroupmembers[], any>({
      query: () => ({
        url: '/members',
      }),
      providesTags: (result: any | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'GroupMembers', id })),
              { type: 'GroupMembers', id: 'groupMembersList' },
            ]
          : [{ type: 'GroupMembers', id: 'groupMembersList' }],
    }),
    deleteGroupMembers: build.mutation<{ msg: string }, string>({
      query: (id) => ({
        url: `/members/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'GroupMembers', id: 'groupMembersList' }],
    }),
  }),
});

// ***********************************************************
export const adminVacancyApi = createApi({
  reducerPath: 'adminVacancyApi',
  tagTypes: ['Job'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    createVacancy: build.mutation({
      query: (body) => ({
        url: '/job',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Job', id: 'jobList' }],
    }),
    getAllVacancies: build.query<IVacancy[], any>({
      query: () => ({
        url: '/job',
      }),
      providesTags: (result: any | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Job', id })),
              { type: 'Job', id: 'jobList' },
            ]
          : [{ type: 'Job', id: 'jobList' }],
    }),
    deleteVacancy: build.mutation({
      query: (id) => ({
        url: `/job/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Job', id: 'jobList' }],
    }),
  }),
});

export const { useGetMembersQuery, useDeleteGroupMembersMutation } =
  adminGroupMembersApi;

export const {
  useCreateGroupReqMutation,
  useGetGroupsQuery,
  useGetGroupQuery,
  useDeleteGroupMutation,
} = adminGroupApi;

export const {
  useCreateVacancyMutation,
  useDeleteVacancyMutation,
  useGetAllVacanciesQuery,
} = adminVacancyApi;

export const {
  useUpdateEmployeeScheduleMutation,
  useSetEmployeeScheduleMutation,
  useDeleteEmployeeScheduleMutation,
  useCreateServicesApiMutation,
  useGetServicesApiQuery,
  useGetOneServiceQuery,
  useEditServiceMutation,
  useDeleteServiceMutation,
  useCreateEmployeeMutation,
  useGetEmployeesQuery,
  useDeleteEmployeeMutation,
  useLazyGetOneEmployeeQuery,
  useGetOneEmployeeQuery,
  useEditEmployeeMutation,
} = adminApi;
