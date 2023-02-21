import { IGroup } from '@/types/admin';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = `${import.meta.env.VITE_SERVER}/training`;

export const studyApi = createApi({
  reducerPath: 'studyApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    registerClient: build.mutation<IGroup, FormData>({
      query: (body) => ({
        url: '/study',
        method: 'POST',
        body: body,
      }),
    }),
    cancelRegister: build.mutation<any, FormData>({
      query: (body) => ({
        url: '/study',
        method: 'DELETE',
        body,
      }),
    }),
  }),
});

export const { useRegisterClientMutation, useCancelRegisterMutation } =
  studyApi;
