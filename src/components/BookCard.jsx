import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

export default function BookCard({ book }) {
  const { addToWishlist } = useContext(WishlistContext);

  const cover = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
      
      {/* Image */}
      <div className="relative">
        <img
          src={cover}
          alt={book.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Wishlist Button (top-right overlay) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToWishlist(book);
          }}
          className="absolute top-2 right-2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-md px-2 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white transition"
        >
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="p-3 text-left">
        <h4 className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-2">
          {book.title}
        </h4>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {book.author_name?.[0] || "Unknown Author"}
        </p>
      </div>
    </div>
  );
}