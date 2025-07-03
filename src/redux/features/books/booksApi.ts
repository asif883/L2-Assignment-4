import { apiSlice } from "../api/apiSlice"
import type { Book , BaseResponse } from "../../../types/bookTypes"

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<BaseResponse<Book[]>, void>({
      query: () => '/api/books',
      providesTags: ["Books"], 
    }),
    deleteBook: builder.mutation<{ success: boolean; message: string }, string>({
    query: (id) => ({
      url: `/api/books/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["Books"], 
    }),

  }),
  
})

export const { useGetBooksQuery , useDeleteBookMutation } = booksApi

