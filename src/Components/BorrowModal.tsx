import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import type { Book } from "../types/bookTypes";
import { useBorrowBookMutation } from "../redux/features/books/booksApi";

const BorrowModal = ({
    book,
    onClose,
    }: {
    book: Book;
    onClose: () => void;
    }) => {
  const [quantity, setQuantity] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [borrowBook] = useBorrowBookMutation();
  const navigate = useNavigate();

  const handleBorrow = async () => {
    if (quantity > book.copies) {
      Swal.fire("Error", "Quantity exceeds available copies", "error");
      return;
    }

    try {
      await borrowBook({
        bookId: book._id,
        quantity,
        dueDate,
      }).unwrap();

      Swal.fire("Success", "Book borrowed successfully", "success");
      onClose();
      navigate("/borrow-summary");
    } catch (err: any) {
      Swal.fire("Error", err?.data?.message || "Failed to borrow", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded p-8 w-[90%] max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          Borrow: {book.title}
        </h2>
        <label className="block text-sm">Quantity</label>
        <input
          type="number"
          min={1}
          max={book.copies}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full border p-2 rounded mb-3"
        />

        <label className="block text-sm">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 border rounded cursor-pointer">
            Cancel
          </button>
          <button
            onClick={handleBorrow}
            className="px-4 py-1 bg-[#ff5558] text-white rounded cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowModal;
