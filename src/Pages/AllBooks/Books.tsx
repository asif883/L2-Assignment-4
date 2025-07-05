import Swal from "sweetalert2";
import Loading from "../../Components/Shared/Loading";
import { useGetBooksQuery , useDeleteBookMutation } from "../../redux/features/books/booksApi";
import { Link } from "react-router-dom";
import BorrowModal from "../../Components/BorrowModal";
import { useState } from "react";
import '../../CSS/font.css'

const Books = () => {
    const { data: books, isLoading } = useGetBooksQuery()
    const [deleteBook] = useDeleteBookMutation()
    const [selectedBook, setSelectedBook] = useState(null);

    if (isLoading) return <Loading/>
    
    const handleDelete = async (id: string): Promise<void> => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });

      if (result.isConfirmed) {
        try {
          const res = await deleteBook(id).unwrap();
          if (res?.success) {
            await Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        } catch (error) {
          console.log(error);
          await Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting.",
            icon: "error"
          });
        }
      }
    };

    const handleUnavailableBook = () => {
        Swal.fire({
          icon: "question",
          title: "Unavailable !!",
          text: "Sorry, This book is not available right now!!",
          confirmButtonColor: "#DE3241"
        });
    }

    return (
      <div className="max-w-7xl mx-auto px-3 my-10">
        {selectedBook && (
        <BorrowModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
        )}
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-1.5 font text-[#DE3241]">Library Book Catalog</h1>
            <p className="text-gray-700 font-medium">Browse and manage all books available in the library.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Title</th>
                <th className="border p-2">Author</th>
                <th className="border p-2">Genre</th>
                <th className="border p-2">ISBN</th>
                <th className="border p-2">Copies</th>
                <th className="border p-2">Availability</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books?.data?.map((book) => (
                <tr key={book?._id}>
                  <td className="border p-2 text-center">{book?.title}</td>
                  <td className="border p-2 text-center">{book?.author}</td>
                  <td className="border p-2 text-center capitalize">{book?.genre}</td>
                  <td className="border p-2 text-center">{book?.isbn}</td>
                  <td className="border p-2 text-center">{book?.copies}</td>
                  <td className="border p-2 text-center">
                    <span
                      className={`px-2 py-1 text-xs rounded font-medium ${
                        book?.copies > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {book?.copies > 0 ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="border p-2">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <Link to={`/book-update/${book?._id}`} className="px-2 py-1 border rounded-md text-blue-600 hover:bg-blue-50 cursor-pointer">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(book?._id)}
                       className="px-2 py-1 border rounded-md text-red-600 hover:bg-red-50 cursor-pointer">
                        Delete
                      </button>
                      {
                         book?.copies > 0 ? 
                        <button onClick={() => setSelectedBook(book)} 
                        className="px-2 py-1 border rounded-md text-green-600 hover:bg-green-50 cursor-pointer">
                          Borrow
                        </button> 
                         : 
                         <>
                          <button 
                            onClick={()=> handleUnavailableBook()}
                          className="px-2 py-1 border rounded-md text-green-600 hover:bg-green-50 cursor-pointer">Borrow</button>
                         </>
                      }

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Books;