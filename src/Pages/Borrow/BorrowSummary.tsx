import Loading from "../../Components/Shared/Loading";
import { useGetBorrowSummaryQuery } from "../../redux/features/books/booksApi";
import '../../CSS/font.css'

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery();
   console.log(data);
  if (isLoading) return <Loading/>;

  return (
    <div className="p-4">
      <div className="text-center my-8">
          <h1 className="text-3xl font-bold mb-1.5 font text-[#DE3241]">Borrowed Books Overview</h1>
          <p className="text-gray-700 font-medium">A detailed summary of all borrowed books and their current status.</p>
      </div>
      <table className="w-full table-auto border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">ISBN</th>
            <th className="border px-4 py-2">Total Quantity Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">{item.title}</td>
              <td className="border px-4 py-2 text-center">{item.isbn}</td>
              <td className="border px-4 py-2 text-center">{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
