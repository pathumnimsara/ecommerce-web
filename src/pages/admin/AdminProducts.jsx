import { useState } from "react";

function AdminProducts() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 79.99,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 39.99,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Casual T-Shirt",
      price: 24.99,
      category: "Fashion",
    },
  ]);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmed) {
      setProducts(
        products.filter((product) => product.id !== id)
      );
    }
  };

  return (
    <main className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              Product Management
            </h1>

            <p className="text-gray-600 mt-2">
              Manage products in your store
            </p>
          </div>

          <button className="bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-700">
            + Add Product
          </button>
        </div>

        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left px-6 py-4">
                    ID
                  </th>

                  <th className="text-left px-6 py-4">
                    Product
                  </th>

                  <th className="text-left px-6 py-4">
                    Category
                  </th>

                  <th className="text-left px-6 py-4">
                    Price
                  </th>

                  <th className="text-left px-6 py-4">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b last:border-b-0"
                  >
                    <td className="px-6 py-4">
                      {product.id}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {product.name}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {product.category}
                    </td>

                    <td className="px-6 py-4">
                      ${product.price.toFixed(2)}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button className="text-blue-600 hover:underline">
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(product.id)
                          }
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No products available.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default AdminProducts;