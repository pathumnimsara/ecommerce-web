import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalSales: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await api.get(
          "/dashboard",
          authConfig()
        );

        setStats(response.data);
      } catch (error) {
        console.error(
          "Failed to load dashboard:",
          error
        );

        setError(
          error.response?.data?.message ||
            "Failed to load dashboard data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your ShopEase store
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Statistics */}
        {loading ? (
          <div className="bg-white rounded-xl p-10 text-center">
            <p className="text-gray-500">
              Loading dashboard...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Users */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500">
                Total Users
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {stats.totalUsers}
              </p>
            </div>

            {/* Products */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500">
                Total Products
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {stats.totalProducts}
              </p>
            </div>

            {/* Orders */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500">
                Total Orders
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {stats.totalOrders}
              </p>
            </div>

            {/* Sales */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500">
                Total Sales
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                ${Number(stats.totalSales).toFixed(2)}
              </p>
            </div>

          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-10">

          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <Link
              to="/admin/products"
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">
                Manage Products
              </h3>

              <p className="text-gray-500 mt-2">
                Add, edit or delete products.
              </p>
            </Link>

            <Link
              to="/admin/orders"
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">
                Manage Orders
              </h3>

              <p className="text-gray-500 mt-2">
                View and update customer orders.
              </p>
            </Link>

            <Link
              to="/admin/users"
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">
                Manage Users
              </h3>

              <p className="text-gray-500 mt-2">
                View and manage registered users.
              </p>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;