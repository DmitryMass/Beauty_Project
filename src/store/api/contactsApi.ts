import { IReview } from '@/types/review';
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

export const reviewsApi = createApi({
  reducerPath: 'reviewApi',
  tagTypes: ['ReviewMore', 'Reviews'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getReviewsPagination: build.query<
      { reviews: IReview[]; totalReviews: number },
      { page: number; limit?: number }
    >({
      query: ({ page = 1, limit = 4 }) => ({
        url: `/reviews?page=${page}&limit=${limit}`,
      }),
    }),
    getReviews: build.query<IReview[], void>({
      query: () => ({
        url: '/review',
      }),
      providesTags: (result: any | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Reviews', id })),
              { type: 'Reviews', id: 'reviewsList' },
            ]
          : [{ type: 'Reviews', id: 'reviewsList' }],
    }),
  }),
});

export const { useGetReviewsPaginationQuery, useGetReviewsQuery } = reviewsApi;

export const { useSendFeedbackMutation } = contactsApi;
