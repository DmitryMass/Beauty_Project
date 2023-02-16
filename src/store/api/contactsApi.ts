import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005/contacts';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    sendFeedback: build.mutation<any, FormData>({
      query: (body) => ({
        url: '/feedback',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSendFeedbackMutation } = contactsApi;
