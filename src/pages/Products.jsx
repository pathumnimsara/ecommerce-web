import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import api from "../services/api";

function Products() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/products");

        setProducts(response.data);
      } catch (error) {
        console.error("Failed to load products:", error);

        setError(
          error.response?.data?.message ||
            "Failed to connect to the server."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort products
  if (sortOption === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "name") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Our Products
          </h1>

          <p className="text-gray-500 mt-2">
            Find the perfect products for you
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-5 rounded-xl shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Category */}
            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortOption}
              onChange={(e) =>
                setSortOption(e.target.value)
              }
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sort By</option>
              <option value="price-low">
                Price: Low to High
              </option>
              <option value="price-high">
                Price: High to Low
              </option>
              <option value="name">
                Name: A-Z
              </option>
            </select>

          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Loading products...
            </p>
          </div>

        ) : error ? (
          /* Backend Error */
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold text-red-600">
              {error}
            </h2>

            <p className="text-gray-500 mt-2">
              Please make sure the backend server is running.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-5 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
            >
              Try Again
            </button>
          </div>

        ) : filteredProducts.length === 0 ? (
          /* No Products */
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold text-gray-700">
              No products found
            </h2>

            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>
          </div>

        ) : (
          /* Product Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
              >

                {/* Product Image */}
                <Link to={`/products/${product._id}`}>
                  <div className="h-52 bg-gray-100 flex items-center justify-center">

                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400">
                        No Image
                      </span>
                    )}

                  </div>
                </Link>

                {/* Product Details */}
                <div className="p-5">

                  <p className="text-sm text-blue-600 mb-1">
                    {product.category}
                  </p>

                  <Link
                    to={`/products/${product._id}`}
                  >
                    <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                      {product.name}
                    </h2>
                  </Link>

                  <p className="text-xl font-bold text-gray-900 mt-3">
                    ${Number(product.price).toFixed(2)}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Products;