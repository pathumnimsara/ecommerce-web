import { useState } from "react";

function AdminOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1001,
      customer: "John Silva",
      total: 139.98,
      status: "Pending",
    },
    {
      id: 1002,
      customer: "Sarah Fernando",
      total: 89.99,
      status: "Processing",
    },
    {
      id: 1003,
      customer: "Kamal Perera",
      total: 49.99,
      status: "Shipped",
    },
    {
      id: 1004,
      customer: "Nimal Kumar",
      total: 24.99,
      status: "Delivered",
    },
  ]);

  const updateStatus = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  return (
    <main className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Order Management
          </h1>

          <p className="text-gray-600 mt-2">
            View and manage customer orders
          </p>
        </div>

        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left px-6 py-4">
                    Order ID
                  </th>

                  <th className="text-left px-6 py-4">
                    Customer
                  </th>

                  <th className="text-left px-6 py-4">
                    Total
                  </th>

                  <th className="text-left px-6 py-4">
                    Status
                  </th>

                  <th className="text-left px-6 py-4">
                    Update Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b last:border-b-0"
                  >
                    <td className="px-6 py-4 font-medium">
                      #{order.id}
                    </td>

                    <td className="px-6 py-4">
                      {order.customer}
                    </td>

                    <td className="px-6 py-4">
                      ${order.total.toFixed(2)}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-100">
                        {order.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(
                            order.id,
                            e.target.value
                          )
                        }
                        className="border rounded-lg px-3 py-2 bg-white"
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {orders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No orders available.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default AdminOrders;