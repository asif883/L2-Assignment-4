import { useGetBooksQuery } from "../../redux/features/books/booksApi";

const Books = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery()

    console.log(books);
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Failed to load books.</p>

    return (
        <div>
            
        </div>
    );
};

export default Books;