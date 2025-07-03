import { apiSlice } from "../api/apiSlice"
import type { Book } from "../../../types/bookTypes"

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => '/api/books', 
    }),
  }),
})

export const { useGetBooksQuery } = booksApi
