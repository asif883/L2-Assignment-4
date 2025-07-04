import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useGetBooksQuery, useUpdateBookMutation } from "../../redux/features/books/booksApi";
import Loading from "../../Components/Shared/Loading";
import Swal from "sweetalert2";

type FormValues = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean; 
  description: string;
};

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: books, isLoading } = useGetBooksQuery();
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  const book = books?.data?.find(b => b._id === id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: book?.title,
      author: book?.author,
      genre: book?.genre,
      isbn: book?.isbn,
      copies: book?.copies,
      description: book?.description,
      available: true,
    },
  });

  useEffect(() => {

  }, [book, reset]);

  const onSubmit = async (data: FormValues) => {

    try {
    const res = await updateBook({ id: id!, data }).unwrap();

    if (res?.success) {
        Swal.fire("Success!", "Book updated successfully.", "success")
        .then(() => {
            navigate("/all-books")
        })
        
    } else {
        Swal.fire("Failed!", res?.message || "Could not update the book.", "error");
    }
    } catch (error) {
    console.error(error);
    Swal.fire("Error!", "Something went wrong while updating.", "error");
    }
  };

  if (isLoading) return <Loading/>

  return (
    <div className="max-w-5xl mx-auto p-6 py-10 shadow-md rounded my-12">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#DE3241] font">Edit Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
                {...register("title", { required: "Title is required" })}
                className="w-full border rounded px-3 py-2"
            />
            {errors.title && <p className="text-red-600 mt-1">{errors.title.message}</p>}
            </div>

            <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
                {...register("author", { required: "Author is required" })}
                className="w-full border rounded px-3 py-2"
            />
            {errors.author && <p className="text-red-600 mt-1">{errors.author.message}</p>}
            </div>

            <div>
            <label className="block mb-1 font-medium">Genre</label>
            <input
                {...register("genre", { required: "Genre is required" })}
                className="w-full border rounded px-3 py-2"
            />
            {errors.genre && <p className="text-red-600 mt-1">{errors.genre.message}</p>}
            </div>

            <div>
            <label className="block mb-1 font-medium">ISBN</label>
            <input
                {...register("isbn", { required: "ISBN is required" })}
                className="w-full border rounded px-3 py-2"
            />
            {errors.isbn && <p className="text-red-600 mt-1">{errors.isbn.message}</p>}
            </div>

            <div>
            <label className="block mb-1 font-medium">Copies</label>
            <input
                type="number"
                {...register("copies", {
                required: "Copies is required",
                min: { value: 0, message: "Copies must be at least 0" },
                })}
                className="w-full border rounded px-3 py-2"
            />
            {errors.copies && <p className="text-red-600 mt-1">{errors.copies.message}</p>}
            </div>
         </div>
        <div className="">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
                {...register("description", { required: "Description is required" })}
                placeholder="Description"
                className="w-full border px-3 py-2 rounded"
            ></textarea>
            {errors.description && (
                <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("available")}
            id="available"
            className="w-4 h-4"
          />
          <label htmlFor="available" className="font-medium">
            Available
          </label>
        </div>

        <button
          type="submit"
          disabled={isUpdating}
          className="bg-[#ff5558] hover:bg-[#DE3241] text-white px-5 py-2 rounded w-full cursor-pointer font-semibold"
        >
          {isUpdating ? "Updating..." : "Update Book"}
        </button>
      </form>
    </div>
  );
};

export default Update;
