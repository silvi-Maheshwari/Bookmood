import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 2) {
      const fetchSuggestions = async () => {
        try {
          const res = await axios.get(`https://openlibrary.org/search.json?q=${searchQuery}&limit=5`);
          setSuggestions(res.data.docs);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
      const debounce = setTimeout(fetchSuggestions, 300);
      return () => clearTimeout(debounce);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (book) => {
    navigate('/details', { state: book });
    setSearchQuery('');
    setSuggestions([]);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-6 py-3 bg-gray-900 text-white dark:bg-gray-800 relative">
      <h2 className="text-lg md:text-xl font-bold">📚 BookMood</h2>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-2 md:px-3 py-1 text-sm rounded text-black dark:text-white dark:bg-gray-700 w-32 md:w-40 lg:w-48"
          />
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
              {suggestions.map((book) => (
                <div
                  key={book.key}
                  onClick={() => handleSuggestionClick(book)}
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <div className="font-semibold text-gray-800 dark:text-white text-sm">{book.title}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{book.author_name?.[0]}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <a href="/" className="text-sm md:text-base hover:text-gray-300 transition">Home</a>
        <a href="/wishlist" className="text-sm md:text-base hover:text-gray-300 transition">Wishlist</a>
        <button
          onClick={toggleDarkMode}
          className="px-2 md:px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 transition duration-200 text-sm md:text-base"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 p-4 space-y-3 z-20">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 rounded text-black dark:text-white dark:bg-gray-700"
            />
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                {suggestions.map((book) => (
                  <div
                    key={book.key}
                    onClick={() => handleSuggestionClick(book)}
                    className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <div className="font-semibold text-gray-800 dark:text-white text-sm">{book.title}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{book.author_name?.[0]}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <a href="/" className="block hover:text-gray-300 transition">Home</a>
          <a href="/wishlist" className="block hover:text-gray-300 transition">Wishlist</a>
          <button
            onClick={toggleDarkMode}
            className="w-full px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 transition duration-200"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      )}
    </nav>
  );
}