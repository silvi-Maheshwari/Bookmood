import { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchBooksByMood } from "../services/api";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Books() {
  const { mood } = useParams();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [offset, setOffset] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();
  const lastBookElementRef = useCallback(node => {
    if (loadingMore) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setOffset(prevOffset => prevOffset + 20);
      }
    });
    if (node) observer.current.observe(node);
  }, [loadingMore, hasMore]);

  useEffect(() => {
    setBooks([]);
    setOffset(0);
    setHasMore(true);
    setError("");
  }, [mood]);

  useEffect(() => {
    if (offset === 0) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }

    fetchBooksByMood(mood, offset)
      .then((data) => {
        if (data.length === 0) {
          setHasMore(false);
        } else {
          setBooks(prevBooks => [...prevBooks, ...data]);
        }
        setLoading(false);
        setLoadingMore(false);
      })
      .catch(() => {
        setError("Failed to fetch books 😢");
        setLoading(false);
        setLoadingMore(false);
      });
  }, [mood, offset]);

  if (loading && offset === 0) return <Loader />;
  if (error) return <Error message={error} />;
  if (books.length === 0 && !loading) return <p className="text-center text-gray-600 dark:text-gray-400">No books found</p>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto px-3 sm:px-4 py-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 capitalize text-gray-800 dark:text-white">{mood} Books</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {books.map((book, index) => {
          if (books.length === index + 1) {
            return <BookCard ref={lastBookElementRef} key={book.key} book={book} />;
          } else {
            return <BookCard key={book.key} book={book} />;
          }
        })}
      </div>
      {loadingMore && <Loader />}
    </div>
    </div>
  );
}