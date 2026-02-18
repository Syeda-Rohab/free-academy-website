export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-t-4 border-blue-500 mb-4"></div>
        <p className="text-gray-400 text-lg">Loading...</p>
      </div>
    </div>
  );
}
