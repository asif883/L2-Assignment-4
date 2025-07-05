import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../redux/features/books/booksApi";
import Loading from "./Shared/Loading";
import image from '../assets/book.jpg'
import { useState } from "react";
import BorrowModal from "./BorrowModal";
import type { Book } from "../types/bookTypes";
import '../CSS/font.css'

const SingleBook = () => {
    const { id } = useParams()
    const { data , isLoading } = useGetBookByIdQuery(id!)
    const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);

    if(isLoading) return <Loading/>
    
    const book = data?.data
    return (
        <div className="max-w-5xl mx-auto my-14">
            {selectedBook && (
            <BorrowModal
                book={selectedBook}
                onClose={() => setSelectedBook(undefined)}
            />
            )}
            <div className="border-y border-gray-300 py-8 flex flex-col md:flex-row items-center gap-8">
                <img className="w-[300px] h-[320px] object-center" src={image} alt="book" />
                <div>
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-2xl md:text-4xl font-semibold font">{book?.title}</h1>
                        <button
                            onClick={() => setSelectedBook(book)}
                            className="px-4 py-2 border text-white bg-[#ff5558] hover:bg-[#DE3241] cursor-pointer font-semibold"
                        >Borrow</button>
                    </div>
                    <p className="text-gray-700 font-medium mt-1"><strong>Author:</strong> {book?.author}</p>
                    <p className="text-gray-700 font-medium"><strong>Available Copies:</strong> {book?.copies}</p>
                    <p className="text-gray-700 font-medium"><strong>ISBN:</strong> {book?.isbn}</p>
                    <p className="mt-2">{book?.description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default SingleBook;