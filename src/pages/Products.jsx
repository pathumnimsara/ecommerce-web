import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Products() {
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

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

  const categories = [
    "All",
    "Electronics",
    "Accessories",
    "Fashion",
    "Home & Living",
    "Beauty",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            All Products
          </h1>

          <p className="text-gray-600 mt-3">
            Explore our collection of quality products
          </p>
        </div>

        {/* Search & Filter */}

        <div className="flex flex-col md:flex-row gap-4 mb-10">

          {/* Search */}

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          {/* Category */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-4 py-3 bg-white"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Product Count */}

        <p className="text-gray-600 mb-6">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>

        {/* Products */}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold">
              No products found
            </h2>

            <p className="text-gray-500 mt-2">
              Try a different search or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (
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

                {/* Product Details */}

                <div className="p-5">

                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>

                  <h2 className="text-lg font-semibold mt-1">
                    {product.name}
                  </h2>

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
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}

export default Products;