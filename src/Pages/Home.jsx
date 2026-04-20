import { useNavigate } from "react-router-dom";

const moods = [
  { key: "love", icon: "❤️", title: "Love", desc: "Feel-good romance" },
  { key: "fantasy", icon: "🧙", title: "Fantasy", desc: "Escape reality" },
  { key: "horror", icon: "👻", title: "Horror", desc: "Thrill & fear" },
  { key: "inspirational", icon: "🚀", title: "Motivation", desc: "Get inspired" }
];

export default function Home() {
  const navigate = useNavigate();

  const handleMoodClick = (mood) => {
    navigate(`/books/${mood}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4">

      {/* Hero */}
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
          Find your next favorite book 📚
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm sm:text-base">
          Discover books based on your mood — because every feeling deserves a story.
        </p>
      </div>

      {/* Mood Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-5xl">
        {moods.map((mood) => (
          <div
            key={mood.key}
            onClick={() => handleMoodClick(mood.key)}
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-5 text-center cursor-pointer shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-transparent hover:border-blue-400"
          >
            {/* Icon */}
            <div className="text-3xl mb-2 group-hover:scale-110 transition">
              {mood.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {mood.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {mood.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Optional Footer Hint */}
      <p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
        Tap a mood to explore books
      </p>

    </div>
  );
}