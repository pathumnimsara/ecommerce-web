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

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-5"
                >
                  <div className="flex justify-between items-center">

                    <div>
                      <h2 className="text-lg font-semibold">
                        {item.name}
                      </h2>

                      <p className="text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <p className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-5">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 border rounded-lg hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 border rounded-lg hover:bg-gray-100"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-600 hover:underline"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="border rounded-xl p-6 h-fit">
              <h2 className="text-xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700">
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;