
import { Link } from "react-router-dom";

function ProductDetails() {
  const product = {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    description:
      "High-quality wireless headphones with clear sound, comfortable design and long battery life.",
  };

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back Link */}
        <Link
          to="/products"
          className="text-gray-600 hover:text-gray-900"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

          {/* Product Image */}
          <div className="h-96 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">
              Product Image
            </span>
          </div>

          {/* Product Details */}
          <div>
            <p className="text-sm text-gray-500">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {product.name}
            </h1>

            <p className="text-3xl font-bold mt-6">
              ${product.price}
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="mt-8">
              <label className="block font-semibold mb-2">
                Quantity
              </label>

              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 border rounded-lg px-3 py-2"
              />
            </div>

            {/* Add to Cart */}
            <button
              className="w-full md:w-auto mt-8 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700"
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
