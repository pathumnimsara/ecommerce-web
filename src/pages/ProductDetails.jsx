
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      category: "Electronics",
      description:
        "High-quality wireless headphones with clear sound, comfortable design and long battery life.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 79.99,
      category: "Electronics",
      description:
        "A stylish smart watch with fitness tracking, notifications and a modern design.",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 39.99,
      category: "Accessories",
      description:
        "A durable and comfortable backpack suitable for laptops, books and everyday use.",
    },
    {
      id: 4,
      name: "Casual T-Shirt",
      price: 24.99,
      category: "Fashion",
      description:
        "Comfortable casual T-shirt made with soft and breathable fabric.",
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 49.99,
      category: "Fashion",
      description:
        "Lightweight running shoes designed for comfort and everyday activities.",
    },
    {
      id: 6,
      name: "Coffee Maker",
      price: 89.99,
      category: "Home & Living",
      description:
        "Easy-to-use coffee maker for preparing fresh and delicious coffee at home.",
    },
    {
      id: 7,
      name: "Face Wash",
      price: 14.99,
      category: "Beauty",
      description:
        "Gentle face wash designed to keep your skin clean and refreshed.",
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      price: 44.99,
      category: "Electronics",
      description:
        "Portable Bluetooth speaker with clear audio and convenient wireless connectivity.",
    },
  ];

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main className="py-20 text-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>

        <Link
          to="/products"
          className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg"
        >
          Back to Products
        </Link>
      </main>
    );
  }

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
            <button className="w-full md:w-auto mt-8 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
