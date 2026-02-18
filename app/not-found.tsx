export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-black text-blue-500/20 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a href="/" className="btn-primary font-bold inline-block">
          Go Home
        </a>
      </div>
    </div>
  );
}
