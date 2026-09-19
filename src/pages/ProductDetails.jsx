import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

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

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setAdded(true);
  };

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          to="/products"
          className="text-gray-600 hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div className="h-96 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">
              Product Image
            </span>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {product.name}
            </h1>

            <p className="text-3xl font-bold mt-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-600 mt-6 leading-7">
              This is a high-quality {product.name.toLowerCase()}.
              Perfect for everyday use and designed to provide
              great value and performance.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <span className="font-medium">
                Quantity:
              </span>

              <button
                onClick={() =>
                  setQuantity((current) =>
                    Math.max(1, current - 1)
                  )
                }
                className="w-9 h-9 border rounded-lg hover:bg-gray-100"
              >
                -
              </button>

              <span className="font-semibold">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity((current) => current + 1)
                }
                className="w-9 h-9 border rounded-lg hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700"
            >
              Add {quantity} to Cart
            </button>

            {added && (
              <div className="mt-4 bg-green-50 text-green-700 p-3 rounded-lg">
                Product added to cart successfully!
              </div>
            )}

            <Link
              to="/cart"
              className="block text-center mt-4 border border-gray-900 py-3 rounded-lg hover:bg-gray-100"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;