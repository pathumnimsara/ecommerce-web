import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🛒</div>

          <h1 className="text-3xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="text-gray-600 mt-3">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              Shopping Cart
            </h1>

            <p className="text-gray-600 mt-2">
              {cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              )}{" "}
              item(s) in your cart
            </p>
          </div>

          <Link
            to="/products"
            className="text-gray-700 hover:underline"
          >
            ← Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-xl p-5"
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-full sm:w-28 h-28 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-gray-500 text-sm">
                      Image
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {item.category}
                        </p>

                        <h2 className="text-lg font-semibold mt-1">
                          {item.name}
                        </h2>

                        <p className="text-gray-600 mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <p className="font-bold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                        >
                          -
                        </button>

                        <span className="font-semibold w-6 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:underline text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border rounded-xl p-6 h-fit">
            <h2 className="text-xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal
                </span>

                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  Shipping
                </span>

                <span>
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>

                <span>
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block text-center w-full mt-6 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;