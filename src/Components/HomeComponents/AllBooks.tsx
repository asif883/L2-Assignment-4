import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";
import '../../CSS/font.css'

const AllBooks = () => {
    const { data: books } = useGetBooksQuery()

    return (
        <div className="mb-10 md:mb-20">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl font-bold font text-[#DE3241]">Explore Our Library</h1>
                <p className="max-w-xl mx-auto mt-1 text-gray-600">Discover a wide range of books across genres – from fiction to non-fiction, ready to be borrowed instantly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {
                  books?.data?.map((book) => <Link to={`/book/${book?._id}`} className="border border-gray-100 px-3 py-8 shadow hover:shadow-lg transition" key={book?._id}>
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-xl font-semibold font">{book?.title}</h1>
                                <p className="text-gray-600"><strong>Author:</strong> {book?.author}</p>
                            </div>
                            <p>
                                <span
                                className={`px-2 py-1 text-xs rounded font-medium ${
                                    book?.copies > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}
                                >
                                {book?.copies > 0 ? "Available" : "Unavailable"}
                                </span>
                             </p>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default AllBooks;