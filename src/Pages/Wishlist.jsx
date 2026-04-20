import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <h3 className="text-2xl text-gray-600 dark:text-gray-400">No saved books ❤️</h3>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto px-3 sm:px-4 py-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-800 dark:text-white">Your Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {wishlist.map((book) => (
          <div key={book.key} className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 sm:p-4 shadow-md bg-white dark:bg-gray-800">
            <p className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-white line-clamp-2">{book.title}</p>
            <button
              onClick={() => removeFromWishlist(book.key)}
              className="w-full px-3 sm:px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 transition duration-200"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}