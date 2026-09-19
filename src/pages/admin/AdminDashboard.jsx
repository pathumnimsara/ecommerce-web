import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <main className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your ShopEase store
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500 text-sm">
              Total Products
            </p>
            <h2 className="text-3xl font-bold mt-2">8</h2>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500 text-sm">
              Total Orders
            </p>
            <h2 className="text-3xl font-bold mt-2">24</h2>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500 text-sm">
              Total Users
            </p>
            <h2 className="text-3xl font-bold mt-2">156</h2>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-500 text-sm">
              Total Revenue
            </p>
            <h2 className="text-3xl font-bold mt-2">
              $2,450
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white border rounded-xl p-6">
            <h2 className="text-xl font-bold">
              Recent Orders
            </h2>

            <p className="text-gray-500 mt-3">
              View and manage your customer orders.
            </p>

            <Link
              to="/admin/orders"
              className="inline-block mt-5 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
            >
              View Orders
            </Link>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <h2 className="text-xl font-bold">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                to="/admin/products"
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Manage Products
              </Link>

              <Link
                to="/admin/orders"
                className="border border-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                View Orders
              </Link>

              <Link
                to="/admin/users"
                className="border border-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Manage Users
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;