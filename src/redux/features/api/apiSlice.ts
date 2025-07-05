import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-server-mu-eight.vercel.app' }),
  tagTypes: ["Books", "BorrowSummary"],
  endpoints: () => ({}),
})
