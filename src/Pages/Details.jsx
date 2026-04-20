import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();
  const book = state;

  if (!book) return <p className="text-center text-gray-600 dark:text-gray-400 mt-8">No data</p>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">{book.title}</h2>
        <div className="space-y-3">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><strong>Author:</strong> {book.authors?.[0]?.name}</p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><strong>First Published:</strong> {book.first_publish_year}</p>
        </div>
      </div>
    </div>
  );
}