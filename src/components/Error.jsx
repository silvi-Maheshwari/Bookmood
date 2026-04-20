export default function Error({ message }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <h3 className="text-lg sm:text-2xl text-red-600 dark:text-red-400 text-center">{message}</h3>
    </div>
  );
}