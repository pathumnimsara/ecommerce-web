import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    alert("Login successful!");
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md px-6">

        <div className="bg-white border rounded-2xl p-8 shadow-sm">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="text-gray-600 mt-2">
              Login to your ShopEase account
            </p>
          </div>

          {error && (
            <div className="mb-5 bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Password */}

            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Login Button */}

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Login
            </button>

          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-gray-900 hover:underline"
            >
              Create an account
            </Link>
          </p>

        </div>

      </div>
    </main>
  );
}

export default Login;