
import { Link } from "react-router-dom";

function Products() {
  const products = [
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
    {
      id: 5,
      name: "Running Shoes",
      price: 49.99,
      category: "Fashion",
    },
    {
      id: 6,
      name: "Coffee Maker",
      price: 89.99,
      category: "Home & Living",
    },
    {
      id: 7,
      name: "Face Wash",
      price: 14.99,
      category: "Beauty",
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      price: 44.99,
      category: "Electronics",
    },
  ];

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            All Products
          </h1>

          <p className="text-gray-600 mt-3">
            Explore our collection of quality products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition"
            >

              {/* Product Image */}
              <div className="h-52 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">
                  Product Image
                </span>
              </div>

              {/* Product Information */}
              <div className="p-5">

                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <h2 className="text-lg font-semibold mt-1">
                  {product.name}
                </h2>

                {/* View Details */}
                <Link
                  to={`/products/${product.id}`}
                  className="inline-block mt-3 text-sm font-semibold hover:underline"
                >
                  View Details →
                </Link>

                <p className="text-xl font-bold mt-3">
                  ${product.price}
                </p>

                <button
                  className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700"
                >
                  Add to Cart
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}

export default Products;
