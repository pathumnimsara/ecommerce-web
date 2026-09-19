import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-lg w-full mx-auto px-6 text-center">
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <p className="text-7xl font-bold">404</p>

          <h1 className="text-3xl font-bold mt-4">
            Page Not Found
          </h1>

          <p className="text-gray-600 mt-3">
            Sorry, the page you are looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;