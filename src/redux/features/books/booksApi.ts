import { apiSlice } from "../api/apiSlice"
import type { Book , BaseResponse } from "../../../types/bookTypes"

type UpdateResponse = {
  success: boolean;
  message: string;
  data: Book;
};


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

    addBook: builder.mutation({
    query: (bookData) => ({
      url: "/api/books",
      method: "POST",
      body: bookData,
    }),
     invalidatesTags: ["Books"]
    }),
    updateBook: builder.mutation<UpdateResponse, { id: string; data: Partial<Book> }>({
    query: ({ id, data }) => ({
      url: `/api/books/${id}`,
      method: "PUT",
      body: data,
    }),
    invalidatesTags: ["Books"]
  }),
  }),
  
})

export const { useGetBooksQuery , useDeleteBookMutation , useAddBookMutation , useUpdateBookMutation } = booksApi

