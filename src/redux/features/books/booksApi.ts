import { apiSlice } from "../api/apiSlice";
import type { Book, BaseResponse } from "../../../types/bookTypes";

type UpdateResponse = {
  success: boolean;
  message: string;
  data: Book;
};

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<BaseResponse<Book[]>, void>({
      query: () => "/api/books",
      providesTags: ["Books"],
    }),

    deleteBook: builder.mutation<{ success: boolean; message: string }, string>({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),

    addBook: builder.mutation<UpdateResponse, Partial<Book>>({
      query: (bookData) => ({
        url: "/api/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["Books"],
    }),

    updateBook: builder.mutation<UpdateResponse, { id: string; data: Partial<Book> }>({
      query: ({ id, data }) => ({
        url: `/api/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    borrowBook: builder.mutation<
      { message: string },
      { bookId: string; quantity: number; dueDate: string }
    >({
      query: ({ bookId, quantity, dueDate }) => ({
        url: `/api/borrow/${bookId}`,
        method: "POST",
        body: { quantity, dueDate },
      }),
      invalidatesTags: ["Books", "BorrowSummary"],
    }),

    getBorrowSummary: builder.query<
      {
        data: {
          title: string;
          isbn: string;
          totalQuantity: number;
        }[];
      },
      void
    >({
      query: () => "/api/borrow/summary",
      providesTags: ["BorrowSummary"],
    }),
      getBookById: builder.query<BaseResponse<Book>, string>({
      query: (id) => `/api/books/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Books", id }],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useDeleteBookMutation,
  useAddBookMutation,
  useUpdateBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
  useGetBookByIdQuery
} = booksApi;
