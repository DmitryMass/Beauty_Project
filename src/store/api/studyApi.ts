import { IGroup } from '@/types/admin';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005/training';

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
  }),
});

export const { useRegisterClientMutation } = studyApi;
