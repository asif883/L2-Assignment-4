export interface Book {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  _id: string;
}

export type BaseResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};