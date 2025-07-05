import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAddBookMutation } from "../../redux/features/books/booksApi";
import '../../CSS/font.css'

type BookFormInputs = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
};

const AddBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormInputs>({
    defaultValues: { available: true },
  });

  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: BookFormInputs) => {
    try {
      const res = await addBook(data).unwrap();
      if (res.success) {
        Swal.fire("Success!", "Book added successfully.", "success");
        reset();
        navigate("/all-books");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        const message = error?.data?.message || error?.message || "Something went wrong!";
        console.error(error);
        Swal.fire("Error!", `${message}`, "error");
      }
   };

  return (
    <div className="max-w-5xl mx-auto p-10 bg-white rounded shadow my-12">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#DE3241] font">Add New Book</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
            {/* Title */}
            <div>
            <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Title"
                className="w-full border px-3 py-2 rounded"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            {/* Author */}
            <div>
            <input
                {...register("author", { required: "Author is required" })}
                type="text"
                placeholder="Author"
                className="w-full border px-3 py-2 rounded"
            />
            {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
            </div>

            {/* Genre */}
            <div>
            <input
                {...register("genre", { required: "Genre is required" })}
                type="text"
                placeholder="Genre"
                className="w-full border px-3 py-2 rounded"
            />
            {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
            </div>

            {/* ISBN */}
            <div>
            <input
                {...register("isbn", { required: "ISBN is required" })}
                type="text"
                placeholder="ISBN"
                className="w-full border px-3 py-2 rounded"
            />
            {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
            </div>

            {/* Copies */}
            <div>
            <input
                {...register("copies", {
                required: "Number of copies is required",
                valueAsNumber: true,
                })}
                type="number"
                placeholder="Copies"
                className="w-full border px-3 py-2 rounded"
            />
            {errors.copies && <p className="text-red-500 text-sm">{errors.copies.message}</p>}
            </div>

        </div>
        {/* Description */}
        <div className="mt-5">
        <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Description"
            className="w-full border px-3 py-2 rounded"
        ></textarea>
        {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
        </div>
        {/* Available */}
        <div className="flex items-center space-x-2 my-2">
            <input type="checkbox" {...register("available")} />
            <span>Available</span>
        </div>
        <button
          type="submit"
          className="bg-[#ff5558] text-white px-4 py-2 rounded hover:bg-[#DE3241] w-full cursor-pointer"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
