import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Product not found
        </h1>

        <Link
          to="/products"
          className="mt-4 bg-black text-white px-5 py-2 rounded-lg"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Back */}
        <Link
          to="/products"
          className="text-blue-600 hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow-sm mt-6 p-6 md:p-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Image */}
            <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400">
                  No Image Available
                </span>
              )}
            </div>

            {/* Details */}
            <div>

              <p className="text-sm text-blue-600 font-medium">
                {product.category}
              </p>

              <h1 className="text-3xl font-bold text-gray-800 mt-2">
                {product.name}
              </h1>

              <p className="text-3xl font-bold text-gray-900 mt-5">
                ${Number(product.price).toFixed(2)}
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                {product.description || "No description available."}
              </p>

              <p className="text-sm text-gray-500 mt-5">
                Stock: {product.stock}
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-6">

                <span className="font-medium">
                  Quantity:
                </span>

                <div className="flex items-center border rounded-lg">

                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>

                  <span className="px-4">
                    {quantity}
                  </span>

                  <button
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                    className="px-4 py-2 hover:bg-gray-100 disabled:opacity-40"
                  >
                    +
                  </button>

                </div>

              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:bg-gray-400"
              >
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;