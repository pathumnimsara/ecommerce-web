import { useEffect, useState } from "react";
import api from "../../services/api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(
        "/orders",
        authConfig()
      );

      setOrders(response.data);
    } catch (error) {
      console.error("Failed to load orders:", error);

      setError(
        error.response?.data?.message ||
          "Failed to load orders."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (orderId, status) => {
    try {
      await api.put(
        `/orders/${orderId}/status`,
        { status },
        authConfig()
      );

      await fetchOrders();
    } catch (error) {
      console.error("Failed to update order:", error);

      alert(
        error.response?.data?.message ||
          "Failed to update order status."
      );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Order Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage customer orders
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">
              Loading orders...
            </p>
          </div>

        ) : error ? (
          <div className="bg-red-50 text-red-600 p-5 rounded-xl">
            {error}
          </div>

        ) : orders.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No orders found
            </h2>

            <p className="text-gray-500 mt-2">
              Customer orders will appear here.
            </p>
          </div>

        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-xl shadow-sm p-6"
              >

                {/* Order Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b pb-5">

                  <div>
                    <h2 className="font-semibold text-lg">
                      Order #{order._id.slice(-6)}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(
                        order.createdAt
                      ).toLocaleString()}
                    </p>
                  </div>

                  {/* Status */}
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(
                        order._id,
                        e.target.value
                      )
                    }
                    className="border border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Processing">
                      Processing
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>

                </div>

                {/* Customer */}
                <div className="py-5 border-b">
                  <h3 className="font-semibold mb-2">
                    Customer
                  </h3>

                  <p>
                    {order.customer?.firstName}{" "}
                    {order.customer?.lastName}
                  </p>

                  <p className="text-gray-500">
                    {order.customer?.email}
                  </p>

                  <p className="text-gray-500">
                    {order.customer?.phone}
                  </p>

                  <p className="text-gray-500">
                    {order.customer?.address},{" "}
                    {order.customer?.city}
                  </p>
                </div>

                {/* Products */}
                <div className="py-5 border-b">
                  <h3 className="font-semibold mb-4">
                    Products
                  </h3>

                  <div className="space-y-3">

                    {order.items.map((item, index) => (
                      <div
                        key={`${order._id}-${index}`}
                        className="flex justify-between items-center gap-4"
                      >
                        <div>
                          <p className="font-medium">
                            {item.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>

                        <p className="font-medium">
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>

                {/* Footer */}
                <div className="pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                  <div>
                    <p className="text-gray-500">
                      Payment:{" "}
                      <span className="text-gray-800 font-medium">
                        {order.paymentMethod}
                      </span>
                    </p>
                  </div>

                  <div className="text-xl font-bold">
                    Total: ${Number(order.total).toFixed(2)}
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default AdminOrders;