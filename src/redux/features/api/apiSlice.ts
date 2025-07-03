import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://l2-assignment-3-flame.vercel.app' }),
  tagTypes: ["Books"],
  endpoints: () => ({}),
})
