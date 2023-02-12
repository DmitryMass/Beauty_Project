import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005/procedure';

export const visitMasterApi = createApi({
  reducerPath: 'visitMasterApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    fetchVisitMaster: build.mutation<any, FormData>({
      query: (body) => ({
        url: '/procedure',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useFetchVisitMasterMutation } = visitMasterApi;